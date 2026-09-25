use std::{
    ffi::{CString, OsStr},
    path::Path,
    sync::atomic::AtomicU64,
    sync::atomic::Ordering,
    time::Duration,
};

use anyhow::Result;
use nix::unistd::{Gid, Uid, User};
use serde::{Deserialize, Serialize};
use shepherd_common::{Mode, Zone, config::Config};
use tokio::{
    process::{Child, Command},
    sync::mpsc::{UnboundedReceiver, UnboundedSender, unbounded_channel},
    time::sleep,
};
use tracing::{debug, warn};
use walkdir::WalkDir;

static USERCODE_ID: AtomicU64 = AtomicU64::new(0);

#[derive(Debug, Serialize, Deserialize)]
struct ControlMessage {
    mode: Mode,
    zone: u32,
}

enum UsercodeMessage {
    Start,
    StartPatch,
    SendStartInfo(Mode, Zone),
    SetTimeout(Duration),
    Kill(Option<u64>),
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

    /// start patch applictaion, usercode will be killed
    pub fn start_patch(&self) -> Result<()> {
        self.send.send(UsercodeMessage::StartPatch)?;
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

    /// kill usercode by id
    pub fn kill(&self, id: Option<u64>) -> Result<()> {
        self.send.send(UsercodeMessage::Kill(id))?;
        Ok(())
    }
}

struct SpawnChildArgs<P, I, S>
where
    P: AsRef<Path>,
    I: IntoIterator<Item = S>,
    S: AsRef<OsStr>,
{
    uid: u32,
    gid: u32,
    working_dir: P,
    args: I,
}

pub struct Usercode {
    config: Config,
    recv: UnboundedReceiver<UsercodeMessage>,
    usercode: Option<(Child, u64)>,
    start_pipe: hopper::Pipe,
    log_pipe: hopper::Pipe,
    _on_exit: Option<Box<dyn Fn(u64) + Send + Sync>>,
}

impl Usercode {
    pub fn new(config: Config) -> Result<(Self, UsercodeHandle)> {
        let (send, recv) = unbounded_channel();

        let mut start_pipe = hopper::Pipe::new(
            hopper::PipeMode::IN,
            &config.run.service_id,
            &config.channel.robot_control,
            Some(&config.path.hopper),
            config.hopper.gid,
        )?;

        let mut log_pipe = hopper::Pipe::new(
            hopper::PipeMode::IN,
            &config.run.service_id,
            &config.channel.robot_log,
            Some(&config.path.hopper),
            config.hopper.gid,
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
        F: Fn(u64) + Send + Sync + 'static,
    {
        if let Some(f) = f {
            self._on_exit = Some(Box::new(f));
        } else {
            self._on_exit = None;
        }
    }

    fn prep_user_cur_dir(&self) -> Result<()> {
        let uid = Some(Uid::from_raw(self.config.run.uid));
        let gid = Some(Gid::from_raw(self.config.run.gid));

        debug!("setting user dir ownership: ({:?}, {:?})", uid, gid);

        // set owner to usercode uid, gid
        for entry in WalkDir::new(&self.config.path.user_cur_dir) {
            let entry = entry?;
            nix::unistd::chown(entry.path(), uid, gid)?;
        }

        nix::unistd::chown(&self.config.path.user_cur_dir, uid, gid)?;

        Ok(())
    }

    /// spawn a generic child with logging to hopper
    fn spawn_child<P, I, S>(&self, args: SpawnChildArgs<P, I, S>) -> Result<Child>
    where
        P: AsRef<Path>,
        I: IntoIterator<Item = S>,
        S: AsRef<OsStr>,
    {
        let hopper = self.config.path.hopper.to_string_lossy().to_string();

        // stdio handles are owned, clone fds here
        let log_pipe = self.log_pipe.fd()?.try_clone()?;
        let err_pipe = self.log_pipe.fd()?.try_clone()?;

        let mut command = Command::new("/usr/bin/env");

        command
            .args(args.args)
            .env_clear() // remove our environment from the child
            .env("HOPPER_PATH", hopper)
            .current_dir(args.working_dir)
            .stdout(log_pipe)
            .stderr(err_pipe);

        if let Some(gid) = self.config.hopper.gid {
            command.env("HOPPER_GID", format!("{gid}"));
        }

        unsafe {
            command
                // runs after fork to init suppl groups and change gid/uid
                .pre_exec(move || {
                    fn init_suppl_groups(uid: Uid, gid: Gid) {
                        // user database lookup to init suppl groups
                        let user = match User::from_uid(uid) {
                            Ok(Some(u)) => u,
                            Ok(None) => {
                                println!("[warn] user {:?} not found in user database, skipping supplementary groups", uid);
                                return;
                            }
                            Err(e) => {
                                println!(
                                    "[warn] failed to query user ({:?})  database, skipping supplementary groups: {:?}",
                                    uid,
                                    e
                                );
                                return;
                            }
                        };

                        let Ok(un) = CString::new(user.name.clone()) else {
                            println!("[warn] user ({:?}) name contained a null byte, skipping supplementary groups", uid);
                            return;
                        };

                        if let Err(e) = nix::unistd::initgroups(&un, gid) {
                            println!("[warn] failed to initialise supplementary groups, ignoring: {:?}", e);
                        }
                    }

                    let uid = Uid::from_raw(args.uid);
                    let gid = Gid::from_raw(args.gid);

                    init_suppl_groups(uid, gid);

                    nix::unistd::setgid(gid)?;
                    nix::unistd::setuid(uid)?;

                    Ok(())
                });
        }

        let child = command.spawn()?;

        Ok(child)
    }

    pub async fn run(&mut self) -> Result<()> {
        let mut timeout = None;

        loop {
            tokio::select! {
                Some(msg) = self.recv.recv() => {
                    match msg {
                        UsercodeMessage::Start => {
                            if let Some((mut child, _id)) = self.usercode.take() {
                                let _ = child.kill().await;
                                let _ = child.wait().await;
                            }

                            let entrypoint = self
                                .config
                                .path
                                .user_cur_dir
                                .join("main.py")
                                .to_string_lossy()
                                .to_string();

                            self.prep_user_cur_dir()?;

                            let sc_args = SpawnChildArgs {
                                uid: self.config.run.uid,
                                gid: self.config.run.gid,
                                working_dir: &self.config.path.user_cur_dir,
                                args: ["python3", "-u", &self.config.run.usercode_script.to_string_lossy(), &entrypoint],
                            };

                            let child = self.spawn_child(sc_args)?;
                            let id = USERCODE_ID.fetch_add(1, Ordering::SeqCst);

                            debug!("Start( {:?} )", id);

                            self.usercode = Some((child, id));
                            timeout = None;
                        },
                        UsercodeMessage::StartPatch => {
                            if let Some((mut child, _id)) = self.usercode.take() {
                                let _ = child.kill().await;
                                let _ = child.wait().await;
                            }

                            let sc_args = SpawnChildArgs {
                                uid: self.config.patch.uid,
                                gid: self.config.patch.gid,
                                working_dir: &self.config.patch.working_dir,
                                args: [&self.config.run.patch_apply],
                            };

                            let child = self.spawn_child(sc_args)?;
                            let id = USERCODE_ID.fetch_add(1, Ordering::SeqCst);

                            debug!("StartPatch ( {:?} )", id);

                            self.usercode = Some((child, id));
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
                        UsercodeMessage::Kill(id) => {
                            debug!("Kill ( {:?} ) (request)", id);
                            if let Some((child, child_id)) = &mut self.usercode {
                                if let Some(id) = id && id != *child_id {
                                    warn!("not killing, id mismatch: {:?} != {:?}", id, *child_id);
                                } else {
                                    let _ = child.kill().await;
                                }
                            }
                        }
                    }
                }

                id = async {
                    if let Some((child, id)) = &mut self.usercode {
                        let _ = child.wait().await;
                        Some(*id)
                    } else {
                        None
                    }
                }, if self.usercode.is_some() => {
                    // rustfmt refused to format this thing
                    if let Some(id) = id
                        && let Some((_child, child_id)) = &mut self.usercode
                        && id == *child_id {
                        self.usercode = None;
                        timeout = None;

                        debug!("Exit ( {:?} )", id);

                        if let Some(on_exit) = &self._on_exit {
                            on_exit(id);
                        }
                    }
                }

                _ = async {
                    if let Some(t) = &mut timeout {
                        t.await
                    }
                }, if timeout.is_some() => {
                    debug!("Kill (timeout)");
                    timeout = None;
                    if let Some((child, _id)) = &mut self.usercode {
                        let _ = child.kill().await;
                    }
                }
            }
        }
    }
}

impl Drop for Usercode {
    fn drop(&mut self) {
        if let Some((mut child, _id)) = self.usercode.take() {
            tokio::spawn(async move { child.kill().await });
        }
    }
}
