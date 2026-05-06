use anyhow::Result;
use bytes::Bytes;
use hopper::{Pipe, PipeMode};
use shepherd_common::{args::call_with_args, config::Config};
use shepherd_mqtt::MqttClient;
use tokio::{
    net::TcpListener,
    sync::{broadcast, watch},
};
use tracing::{error, warn};

use crate::{
    buffer::{CameraBuffer, LogBuffer},
    dispatch::{dispatch_images, dispatch_log_messages, dispatch_mqtt_message},
    ws::{WsState, handle_websocket_connection},
};

mod buffer;
mod dispatch;
mod receiver;
mod ws;

async fn _main(config: Config) -> Result<()> {
    // set up hopper pipes for logs and images
    let mut log_pipe = Pipe::new(
        PipeMode::OUT,
        &config.ws.service_id,
        &config.channel.robot_log,
        Some(config.path.hopper.clone()),
    )?;
    let mut camera_pipe = Pipe::new(
        PipeMode::OUT,
        &config.ws.service_id,
        &config.channel.camera,
        Some(config.path.hopper.clone()),
    )?;

    log_pipe.open()?;
    camera_pipe.open()?;

    let (mut log_buffer, log_handle) = LogBuffer::new(config.ws.log_buffer_size);
    let (mut camera_buffer, camera_handle) = CameraBuffer::new();

    let (mut mqtt_client, mut mqtt_event_loop) =
        MqttClient::new(&config.ws.service_id, &config.mqtt.broker, config.mqtt.port);

    // run mqtt event loop independently
    let mqtt_loop = tokio::spawn(async move {
        // run mqtt forever, it "should" reconnect
        loop {
            if let Err(e) = mqtt_event_loop.run().await {
                error!("mqtt loop exited: {e}");
            }
        }
    });

    // broadcasting for messages to websockets
    let (msg_sender, _) = broadcast::channel::<(String, Bytes)>(64);
    let (camera_sender, _) =
        watch::channel::<(String, Bytes)>((config.channel.camera.clone(), Bytes::new()));

    // set up subscription for all mqtt messages
    let mqtt_sender = msg_sender.clone();
    let mqtt_log_handle = log_handle.clone();
    mqtt_client
        .subscribe_raw("#", move |t, v| {
            let mqtt_sender = mqtt_sender.clone();
            let mqtt_log_handle = mqtt_log_handle.clone();
            async move {
                dispatch_mqtt_message(
                    mqtt_sender,
                    mqtt_log_handle,
                    t,
                    "shepherd-run/status".to_string(),
                    v,
                )
                .await
            }
        })
        .await?;

    // dispatch log messages forever
    let log_sender = msg_sender.clone();
    let log_topic = config.channel.robot_log.clone();
    let _log_handle = log_handle.clone();
    tokio::task::spawn_blocking(move || {
        let _ = dispatch_log_messages(
            log_sender,
            _log_handle,
            log_pipe,
            log_topic,
            config.ws.hopper_buffer_size,
        );
    });

    // dispatch images forever
    let image_sender = camera_sender.clone();
    let image_topic = config.channel.camera.clone();
    let image_handle = camera_handle.clone();
    tokio::task::spawn_blocking(move || {
        let _ = dispatch_images(
            camera_pipe,
            image_sender,
            image_handle,
            image_topic,
            config.ws.hopper_buffer_size,
        );
    });

    let listener = TcpListener::bind(format!("{}:{}", &config.ws.host, config.ws.port)).await?;

    tokio::select! {
        res = async {
            loop {
                match listener.accept().await {
                    Ok((stream, _)) => {
                        // spawn a task to handle this websocket, exists for websocket lifetime
                        tokio::spawn(handle_websocket_connection(stream, WsState {
                            camera: config.channel.camera.clone(),
                            robot_log: config.channel.robot_log.clone(),
                            log_handle: log_handle.clone(),
                            camera_handle: camera_handle.clone(),
                            cam_rx: camera_sender.subscribe(),
                            msg_rx: msg_sender.subscribe(),
                        }));
                    },
                    Err(e) => return Err(e),
                }
            }
        } => {
            warn!("websocket handler exited {:?}", res);
            res?
        }

        _ = log_buffer.dispatch_forever() => {
            error!("log buffer exited?");
        }

        _ = camera_buffer.dispatch_forever() => {
            error!("camera buffer exited?");
        }

        _ = mqtt_loop => {
            error!("mqtt client exited?");
        }
    };

    Ok(())
}

#[tokio::main]
async fn main() {
    call_with_args("shepherd-ws", _main).await;
}
