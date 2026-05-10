use anyhow::Result;
use bytes::Bytes;
use hopper::{Pipe, PipeMode};
use shepherd_common::{args::call_with_args, config::Config};
use shepherd_mqtt::{MqttAsyncClient, MqttClient, MqttEventLoop};
use tokio::{
    net::TcpListener,
    sync::{broadcast, watch},
    task::JoinHandle,
};

use crate::{
    buffer::{CameraBuffer, LogBuffer},
    dispatch::{
        ImageContext, LogContext, MqttContext, dispatch_images, dispatch_log_messages,
        dispatch_mqtt_message,
    },
    ws::{WebSocketContext, handle_websocket_connection},
};

mod buffer;
mod dispatch;
mod receiver;
mod ws;

fn spawn_mqtt(
    mut client: MqttAsyncClient,
    mut event_loop: MqttEventLoop,
    context: MqttContext,
) -> JoinHandle<Result<()>> {
    tokio::spawn(async move {
        let ctx = context.clone();
        client
            .subscribe_raw("#", move |t, v| {
                let ctx = ctx.clone();
                async move { dispatch_mqtt_message(ctx, t, v).await }
            })
            .await?;

        event_loop.run().await
    })
}

async fn _main(config: Config) -> Result<()> {
    // set up communication structs

    let (mut log_buffer, log_handle) = LogBuffer::new(config.ws.log_buffer_size);
    let (mut camera_buffer, camera_handle) = CameraBuffer::new();

    let (msg_sender, _) = broadcast::channel::<(String, Bytes)>(64);
    let (camera_sender, _) =
        watch::channel::<(String, Bytes)>((config.channel.camera.clone(), Bytes::new()));

    // spawn an mqtt client for relay

    let (mqtt_client, mqtt_event_loop) =
        MqttClient::new(&config.ws.service_id, &config.mqtt.broker, config.mqtt.port);

    let mqtt_context = MqttContext {
        sender: msg_sender.clone(),
        log_handle: log_handle.clone(),
        status_channel: config.channel.user_state.clone(),
    };
    let mqtt_loop = spawn_mqtt(mqtt_client.clone(), mqtt_event_loop, mqtt_context);

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

    // spawn dispatch loops for incoming hopper data

    let log_context = LogContext {
        sender: msg_sender.clone(),
        log_handle: log_handle.clone(),
        log_pipe,
        topic: config.channel.robot_log.clone(),
        buffer_size: config.ws.hopper_buffer_size,
    };
    let log_dispatch = tokio::task::spawn_blocking(move || dispatch_log_messages(log_context));

    let image_context = ImageContext {
        sender: camera_sender.clone(),
        camera_handle: camera_handle.clone(),
        camera_pipe,
        topic: config.channel.camera.clone(),
        buffer_size: config.ws.hopper_buffer_size,
    };
    let image_dispatch = tokio::task::spawn_blocking(move || dispatch_images(image_context));

    // dispatch incoming events over a websocket server

    let listener = TcpListener::bind(format!("{}:{}", &config.ws.host, config.ws.port)).await?;

    let ws_loop = async || -> anyhow::Result<()> {
        loop {
            match listener.accept().await {
                Ok((stream, _)) => {
                    // spawn a task to handle this websocket, exists for websocket lifetime
                    tokio::spawn(handle_websocket_connection(
                        stream,
                        WebSocketContext {
                            camera: config.channel.camera.clone(),
                            robot_log: config.channel.robot_log.clone(),
                            log_handle: log_handle.clone(),
                            camera_handle: camera_handle.clone(),
                            cam_rx: camera_sender.subscribe(),
                            msg_rx: msg_sender.subscribe(),
                        },
                    ));
                }
                Err(e) => return Err(anyhow::anyhow!("{:?}", e)),
            }
        }
    };

    // run all until one fails

    tokio::select! {
        res = ws_loop() => {
            Err(anyhow::anyhow!("websocket handler exited {:?}", res))
        }

        // buffer management

        _ = log_buffer.dispatch_forever() => {
            Err(anyhow::anyhow!("log buffer loop exited?"))
        }

        _ = camera_buffer.dispatch_forever() => {
            Err(anyhow::anyhow!("camera buffer loop exited?"))
        }

        // hopper dispatch

        res = log_dispatch => {
            Err(anyhow::anyhow!("log dispatch exited: {:?}", res))
        }

        res = image_dispatch => {
            Err(anyhow::anyhow!("image dispatch exited: {:?}", res))
        }

        // mqtt

        res = mqtt_loop => {
            Err(anyhow::anyhow!("mqtt error: {:?}", res))
        }
    }
}

#[tokio::main]
async fn main() {
    call_with_args("shepherd-ws", _main).await;
}
