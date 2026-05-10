use anyhow::Result;
use bytes::{Bytes, BytesMut};
use hopper::Pipe;
use shepherd_common::RunState;
use shepherd_mqtt::messages::RunStatusMessage;
use tokio::sync::{broadcast, watch};
use tracing::debug;

use crate::buffer::{CameraBufferHandle, LogBufferHandle};

#[derive(Clone)]
pub struct MqttContext {
    pub sender: broadcast::Sender<(String, Bytes)>,
    pub log_handle: LogBufferHandle,
    pub status_channel: String,
}

/// forward raw mqtt messages to websockets
pub async fn dispatch_mqtt_message(
    context: MqttContext,
    topic: String,
    message: Bytes,
) -> Result<()> {
    if topic == context.status_channel
        && let Ok(msg) = serde_json::from_slice::<RunStatusMessage>(&message)
        && msg.state == RunState::Ready
    {
        // clear logs when reset message received
        let _ = context.log_handle.clear();
        let _ = context
            .sender
            .send(("robot/log".to_string(), Bytes::from("\x1b[2J")));
    }

    // broadcast everywhere, result doesn't matter much
    let _ = context.sender.send((topic, message));
    Ok(())
}

pub struct LogContext {
    pub sender: broadcast::Sender<(String, Bytes)>,
    pub log_handle: LogBufferHandle,
    pub log_pipe: Pipe,
    pub topic: String,
    pub buffer_size: usize,
}

/// read logs from hopper and push them to websockets
pub fn dispatch_log_messages(context: LogContext) -> Result<()> {
    let mut buf = BytesMut::with_capacity(context.buffer_size);

    loop {
        buf.resize(context.buffer_size, 0);

        match context.log_pipe.read(&mut buf) {
            Ok(n) => {
                buf.truncate(n);
                let _ = context
                    .sender
                    .send((context.topic.clone(), buf.clone().into()));
                let _ = context.log_handle.append(buf.clone().into());
            }
            Err(e) => {
                return Err(anyhow::anyhow!("log error: {e}"));
            }
        }
    }
}

pub struct ImageContext {
    pub sender: watch::Sender<(String, Bytes)>,
    pub camera_handle: CameraBufferHandle,
    pub camera_pipe: Pipe,
    pub topic: String,
    pub buffer_size: usize,
}

/// read images from hopper and push them to websockets
pub fn dispatch_images(context: ImageContext) -> Result<()> {
    let mut buf = BytesMut::new();

    loop {
        let mut cbuf = BytesMut::with_capacity(context.buffer_size);
        cbuf.resize(context.buffer_size, 0);

        match context.camera_pipe.read(&mut cbuf) {
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
                    let _ = context
                        .sender
                        .send((context.topic.clone(), img.clone().freeze()));
                    let _ = context.camera_handle.set(img.freeze());
                } else {
                    buf.extend(cbuf);
                }
            }
            Err(e) => {
                return Err(anyhow::anyhow!("camera error: {e}"));
            }
        }
    }
}
