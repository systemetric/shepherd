use anyhow::Result;
use bytes::{Bytes, BytesMut};
use hopper::Pipe;
use shepherd_common::RunState;
use shepherd_mqtt::messages::RunStatusMessage;
use tokio::sync::{broadcast, watch};
use tracing::{debug, error};

use crate::buffer::{CameraBufferHandle, LogBufferHandle};

/// forward raw mqtt messages to websockets
pub async fn dispatch_mqtt_message(
    sender: broadcast::Sender<(String, Bytes)>,
    log_handle: LogBufferHandle,
    topic: String,
    shepherd_run_status: String,
    msg: Bytes,
) -> Result<()> {
    if topic == shepherd_run_status
        && let Ok(msg) = serde_json::from_slice::<RunStatusMessage>(&msg)
        && msg.state == RunState::Ready
    {
        // clear logs when reset message received
        let _ = log_handle.clear();
        let _ = sender.send(("robot/log".to_string(), Bytes::from("\x1b[2J")));
    }

    // broadcast everywhere, result doesn't matter much
    let _ = sender.send((topic, msg));
    Ok(())
}

/// read logs from hopper and push them to websockets
pub fn dispatch_log_messages(
    sender: broadcast::Sender<(String, Bytes)>,
    log_handle: LogBufferHandle,
    log_pipe: Pipe,
    topic: String,
    buf_size: usize,
) -> Result<()> {
    let mut buf = BytesMut::with_capacity(buf_size);

    loop {
        buf.resize(buf_size, 0);

        match log_pipe.read(&mut buf) {
            Ok(n) => {
                buf.truncate(n);
                let _ = sender.send((topic.clone(), buf.clone().into()));
                let _ = log_handle.append(buf.clone().into());
            }
            Err(e) => {
                error!("log error: {e}");
            }
        }
    }
}

/// read images from hopper and push them to websockets
pub fn dispatch_images(
    camera_pipe: Pipe,
    sender: watch::Sender<(String, Bytes)>,
    camera_handle: CameraBufferHandle,
    topic: String,
    buf_size: usize,
) -> Result<()> {
    let mut buf = BytesMut::new();

    loop {
        let mut cbuf = BytesMut::with_capacity(buf_size);
        cbuf.resize(buf_size, 0);

        match camera_pipe.read(&mut cbuf) {
            Ok(n) => {
                cbuf.truncate(n);

                let mut pos = None;
                for i in 0..n {
                    // images are newline separated
                    if cbuf[i] == b'\n' {
                        pos = Some(i);
                        break;
                    }
                }

                if let Some(pos) = pos {
                    // offset in merged buffer
                    let off = pos + buf.len() + 1;
                    buf.extend(cbuf);

                    // split into image and rest
                    let img = buf.split_to(off);
                    debug!("got image of {} bytes", img.len());
                    let _ = sender.send((topic.clone(), img.clone().freeze()));
                    let _ = camera_handle.set(img.freeze());
                } else {
                    buf.extend(cbuf);
                }
            }
            Err(e) => {
                error!("camera error: {e}");
            }
        }
    }
}
