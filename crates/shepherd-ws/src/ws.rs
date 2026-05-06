use anyhow::Result;
use bytes::Bytes;
use futures_util::{SinkExt, StreamExt};
use tokio::{
    net::TcpStream,
    sync::{broadcast, watch},
};
use tokio_tungstenite::{
    accept_hdr_async,
    tungstenite::{
        Message,
        handshake::server::{Request, Response},
    },
};
use tracing::{debug, info};

use crate::{
    buffer::{CameraBufferHandle, LogBufferHandle},
    receiver::MessageReceiver,
};

#[derive(Debug)]
pub struct WsState {
    pub camera: String,
    pub robot_log: String,
    pub log_handle: LogBufferHandle,
    pub camera_handle: CameraBufferHandle,
    pub cam_rx: watch::Receiver<(String, Bytes)>,
    pub msg_rx: broadcast::Receiver<(String, Bytes)>,
}

/// handle a single incoming websocket connection until it exits
pub async fn handle_websocket_connection(stream: TcpStream, state: WsState) -> Result<()> {
    let mut sub_topic: Option<String> = None;

    #[allow(clippy::result_large_err)]
    let callback = |req: &Request, resp: Response| {
        sub_topic = Some(req.uri().to_string().split_at(1).1.to_string());
        Ok(resp)
    };

    let addr = stream.peer_addr()?;
    let (mut ws_tx, mut ws_rx) = accept_hdr_async(stream, callback).await?.split();

    let sub_topic = if let Some(sub_topic) = sub_topic {
        sub_topic
    } else {
        return Err(anyhow::anyhow!("websocket subscription topic not set"));
    };

    info!("subscription from {:?}, topic {:?}", addr, sub_topic);

    let mut rx = if sub_topic == state.camera {
        // send the existing image
        let current = state.camera_handle.get().await;
        ws_tx.send(Message::Binary(current)).await?;

        debug!("sent current image to new client");

        MessageReceiver::Image(state.camera, state.cam_rx)
    } else if sub_topic == state.robot_log {
        // send stored logs to new connections
        for msg in state.log_handle.current_log().await {
            ws_tx.send(Message::Binary(msg)).await?;
        }

        debug!("sent current logs to new client");

        MessageReceiver::Raw(sub_topic.clone(), state.msg_rx)
    } else {
        MessageReceiver::Raw(sub_topic.clone(), state.msg_rx)
    };

    loop {
        tokio::select! {
            msg = rx.recv() => {
                match msg {
                    Ok(payload) => ws_tx.send(Message::Binary(payload)).await?,
                    Err(e) => return Err(e)?,
                }
            }

            msg = ws_rx.next() => {
                // detect if connection has been closed
                match msg {
                    Some(Ok(msg)) => if msg.is_close() {
                        info!("closed connection from {:?}, topic {:?}", addr, sub_topic);
                        return Ok(())
                    }
                    None => {
                        info!("closed connection from {:?}, topic {:?}", addr, sub_topic);
                        return Ok(())
                    }
                    _ => {}
                }
            }
        };
    }
}
