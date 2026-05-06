use std::time::Duration;

use anyhow::Result;
use serde::{Deserialize, Serialize};
use shepherd_common::{Mode, Zone, config::Config};
use tokio::{
    process::{Child, Command},
    sync::mpsc::{UnboundedReceiver, UnboundedSender, unbounded_channel},
    time::sleep,
};
use tracing::debug;

#[derive(Debug, Serialize, Deserialize)]
struct ControlMessage {
    mode: Mode,
    zone: u32,
}

enum UsercodeMessage {
    Start,
    SendStartInfo(Mode, Zone),
    SetTimeout(Duration),
    Kill,
}

pub struct UsercodeHandle {
    send: UnboundedSender<UsercodeMessage>,
}

impl UsercodeHandle {
    /// start usercode, if it is already running it will be killed first
    pub fn start(&self) -> Result<()> {
        self.send.send(UsercodeMessage::Start)?;
        Ok(())
    }

    /// send start info to usercode
    pub fn send_start_info(&self, mode: Mode, zone: Zone) -> Result<()> {
        self.send.send(UsercodeMessage::SendStartInfo(mode, zone))?;
        Ok(())
    }

    /// set a timeout for the usercode, after which it will be killed automatically
    /// this supersedes any timeout which has already been set
    pub fn set_timeout(&self, timeout: Duration) -> Result<()> {
        self.send.send(UsercodeMessage::SetTimeout(timeout))?;
        Ok(())
    }

    /// kill usercode
    pub fn kill(&self) -> Result<()> {
        self.send.send(UsercodeMessage::Kill)?;
        Ok(())
    }
}

pub struct Usercode {
    config: Config,
    recv: UnboundedReceiver<UsercodeMessage>,
    usercode: Option<Child>,
    start_pipe: hopper::Pipe,
    log_pipe: hopper::Pipe,
    _on_exit: Option<Box<dyn Fn() + Send + Sync>>,
}

impl Usercode {
    pub fn new(config: Config) -> Result<(Self, UsercodeHandle)> {
        let (send, recv) = unbounded_channel();

        let mut start_pipe = hopper::Pipe::new(
            hopper::PipeMode::IN,
            &config.run.service_id,
            &config.channel.robot_control,
            Some(&config.path.hopper),
        )?;

        let mut log_pipe = hopper::Pipe::new(
            hopper::PipeMode::IN,
            &config.run.service_id,
            &config.channel.robot_log,
            Some(&config.path.hopper),
        )?;

        start_pipe.open()?;
        log_pipe.open()?;

        Ok((
            Self {
                config,
                recv,
                usercode: None,
                start_pipe,
                log_pipe,
                _on_exit: None,
            },
            UsercodeHandle { send },
        ))
    }

    pub fn on_exit<F>(&mut self, f: Option<F>)
    where
        F: Fn() + Send + Sync + 'static,
    {
        if let Some(f) = f {
            self._on_exit = Some(Box::new(f));
        } else {
            self._on_exit = None;
        }
    }

    pub async fn run(&mut self) -> Result<()> {
        let mut timeout = None;

        loop {
            tokio::select! {
                Some(msg) = self.recv.recv() => {
                    match msg {
                        UsercodeMessage::Start => {
                            if let Some(mut child) = self.usercode.take() {
                                let _ = child.kill().await;
                                let _ = child.wait().await;
                            }

                            let hopper = self.config.path.hopper.to_string_lossy().to_string();
                            let entrypoint = self
                                .config
                                .path
                                .user_cur_dir
                                .join("main.py")
                                .to_string_lossy()
                                .to_string();

                            // stdio handles are owned, clone fds here
                            let log_pipe = self.log_pipe.fd()?.try_clone()?;
                            let err_pipe = self.log_pipe.fd()?.try_clone()?;

                            let child = Command::new("/usr/bin/env")
                                .args(["python3", "-u", &entrypoint])
                                .env("HOPPER_PATH", hopper)
                                .current_dir(&self.config.path.user_cur_dir)
                                .stdout(log_pipe)
                                .stderr(err_pipe).spawn()?;

                            debug!("Start( {:?} )", child.id());

                            self.usercode = Some(child);
                            timeout = None;
                        },
                        UsercodeMessage::SendStartInfo(mode, zone) => {
                            let msg = ControlMessage { mode, zone: zone.to_id() };
                            let msg = serde_json::to_vec(&msg)?;
                            self.start_pipe.write(msg.as_slice())?;
                            debug!("SendStartInfo( {:?}, {:?} )", mode, zone);
                        },
                        UsercodeMessage::SetTimeout(duration) => {
                            timeout = Some(Box::pin(sleep(duration)));
                            debug!("SetTimeout( {:?} )", duration);
                        },
                        UsercodeMessage::Kill => {
                            debug!("Kill (request)");
                            if let Some(child) = &mut self.usercode {
                                let _ = child.kill().await;
                            }
                        }
                    }
                }

                _ = async {
                    if let Some(child) = &mut self.usercode {
                        let _ = child.wait().await;
                    }
                }, if self.usercode.is_some() => {
                    self.usercode = None;
                    timeout = None;

                    debug!("Exit");

                    if let Some(on_exit) = &self._on_exit {
                        on_exit();
                    }
                }

                _ = async {
                    if let Some(t) = &mut timeout {
                        t.await
                    }
                }, if timeout.is_some() => {
                    debug!("Kill (timeout)");
                    timeout = None;
                    if let Some(child) = &mut self.usercode {
                        let _ = child.kill().await;
                    }
                }
            }
        }
    }
}

impl Drop for Usercode {
    fn drop(&mut self) {
        if let Some(mut child) = self.usercode.take() {
            tokio::spawn(async move { child.kill().await });
        }
    }
}
