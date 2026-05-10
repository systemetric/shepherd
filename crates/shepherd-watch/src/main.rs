use std::{collections::HashMap, sync::Arc};

use anyhow::Result;
use futures_util::{SinkExt, StreamExt};
use shepherd_common::{args::call_with_args, config::Config};
use shepherd_mqtt::{
    MqttAsyncClient, MqttClient, MqttEventLoop,
    messages::{ServiceStatus, StatusMessage, StatusSummary},
};
use tokio::{
    net::{TcpListener, TcpStream},
    sync::{
        Mutex,
        broadcast::{self, Receiver, Sender},
    },
    task::JoinHandle,
};
use tokio_tungstenite::{accept_async, tungstenite::Message};
use tracing::{debug, info, warn};

#[derive(Clone)]
struct MqttContext {
    statuses: Arc<Mutex<HashMap<String, ServiceStatus>>>,
    status_sender: Sender<String>,
    mqtt_client: MqttAsyncClient,
    status_channel: String,
}

async fn create_summary(statuses: Arc<Mutex<HashMap<String, ServiceStatus>>>) -> Result<String> {
    let statuses = statuses.lock().await;
    let status_arr: Vec<StatusMessage> = statuses
        .iter()
        .map(|(service, status)| StatusMessage {
            service: service.clone(),
            status: status.clone(),
        })
        .collect();
    Ok(serde_json::to_string(&StatusSummary {
        statuses: status_arr,
    })?)
}

async fn handle_websocket(
    stream: TcpStream,
    summary: String,
    mut status_receiver: Receiver<String>,
) -> Result<()> {
    let addr = stream.peer_addr()?;
    debug!("new websocket connection from {:?}", addr);
    let (mut ws_tx, mut ws_rx) = accept_async(stream).await?.split();

    // send an initial summary
    ws_tx.send(Message::text(summary)).await?;

    loop {
        tokio::select! {
            // forward summary messages
            msg = status_receiver.recv() => {
                match msg {
                    Ok(s) => ws_tx.send(Message::text(s)).await?,
                    Err(e) => return Err(e)?,
                }
            }

            msg = ws_rx.next() => {
                // detect if connection has been closed
                match msg {
                    Some(Ok(msg)) => if msg.is_close() {
                        info!("closed connection from {:?}", addr);
                        return Ok(())
                    }
                    None => {
                        info!("closed connection from {:?}", addr);
                        return Ok(())
                    }
                    _ => {}
                }
            }
        }
    }
}

async fn handle_status_message(context: MqttContext, message: StatusMessage) -> Result<()> {
    info!("status for {}: {:?}", message.service, message.status);

    // update status table, generate summary array
    let status_arr: Vec<StatusMessage> = {
        let mut statuses = context.statuses.lock().await;
        statuses.insert(message.service, message.status);

        statuses
            .iter()
            .map(|(service, status)| StatusMessage {
                service: service.clone(),
                status: status.clone(),
            })
            .collect()

        // drop the lock here before sending
    };

    let summary = StatusSummary {
        statuses: status_arr,
    };

    match serde_json::to_string(&summary) {
        Ok(summary) => {
            let _ = context.status_sender.send(summary.clone());
        }
        Err(e) => {
            warn!("failed to serialise status summary: {e}");
        }
    }

    let _ = context
        .mqtt_client
        .publish(context.status_channel, summary, true)
        .await;

    Ok(())
}

fn spawn_mqtt(mut event_loop: MqttEventLoop, mut context: MqttContext) -> JoinHandle<Result<()>> {
    tokio::spawn(async move {
        let ctx = context.clone();
        context
            .mqtt_client
            .subscribe("+/status", move |_, v| {
                let ctx = ctx.clone();
                async move { handle_status_message(ctx, v).await }
            })
            .await?;

        event_loop.run().await
    })
}

async fn _main(config: Config) -> Result<()> {
    let (status_sender, _) = broadcast::channel::<String>(64);
    let statuses: Arc<Mutex<HashMap<String, ServiceStatus>>> = Arc::new(Mutex::new(HashMap::new()));

    // spawn an mqtt client to check status messages

    let (mqtt_client, mqtt_event_loop) = MqttClient::new(
        &config.watch.service_id,
        &config.mqtt.broker,
        config.mqtt.port,
    );

    let mqtt_context = MqttContext {
        statuses: statuses.clone(),
        status_sender: status_sender.clone(),
        mqtt_client,
        status_channel: config.channel.status.clone(),
    };
    let mqtt_loop = spawn_mqtt(mqtt_event_loop, mqtt_context);

    // now mqtt is spawned, run websocket server forever

    let listener =
        TcpListener::bind(format!("{}:{}", &config.watch.host, config.watch.port)).await?;

    let ws_loop = async || -> anyhow::Result<()> {
        loop {
            match listener.accept().await {
                Ok((stream, _)) => {
                    // default to a blank string if serialisation failed
                    let summary = create_summary(statuses.clone())
                        .await
                        .unwrap_or("".to_string());
                    tokio::spawn(handle_websocket(stream, summary, status_sender.subscribe()));
                }
                Err(e) => return Err(anyhow::anyhow!("{:?}", e)),
            }
        }
    };

    tokio::select! {
        res = ws_loop() => res,
        res = mqtt_loop => Err(anyhow::anyhow!("mqtt error: {:?}", res))
    }
}

#[tokio::main]
async fn main() {
    call_with_args("shepherd-watch", _main).await;
}
