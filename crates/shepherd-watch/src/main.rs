use std::{collections::HashMap, sync::Arc};

use anyhow::Result;
use futures_util::{SinkExt, StreamExt};
use shepherd_common::{args::call_with_args, config::Config};
use shepherd_mqtt::{
    MqttAsyncClient, MqttClient,
    messages::{ServiceStatus, StatusMessage, StatusSummary},
};
use tokio::{
    net::{TcpListener, TcpStream},
    sync::{
        Mutex,
        broadcast::{self, Receiver, Sender},
    },
};
use tokio_tungstenite::{accept_async, tungstenite::Message};
use tracing::{debug, error, info, warn};

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

async fn handle_status_message(
    statuses: Arc<Mutex<HashMap<String, ServiceStatus>>>,
    status_sender: Sender<String>,
    mqtt_client: MqttAsyncClient,
    status_topic: String,
    message: StatusMessage,
) -> Result<()> {
    info!("status for {}: {:?}", message.service, message.status);

    // update status table, generate summary array
    let status_arr: Vec<StatusMessage> = {
        let mut statuses = statuses.lock().await;
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
            let _ = status_sender.send(summary.clone());
        }
        Err(e) => {
            warn!("failed to serialise status summary: {e}");
        }
    }

    let _ = mqtt_client.publish(status_topic, summary, true).await;

    Ok(())
}

async fn _main(config: Config) -> Result<()> {
    let (status_sender, _) = broadcast::channel::<String>(64);
    let statuses: Arc<Mutex<HashMap<String, ServiceStatus>>> = Arc::new(Mutex::new(HashMap::new()));

    let (mut mqtt_client, mut mqtt_event_loop) = MqttClient::new(
        &config.watch.service_id,
        &config.mqtt.broker,
        config.mqtt.port,
    );

    // TODO: wrap these in a context object
    let mqtt_statuses = statuses.clone();
    let mqtt_status_sender = status_sender.clone();
    let mqtt_status = config.channel.status.clone();
    let mqtt_mqtt_client = mqtt_client.clone();
    mqtt_client
        .subscribe("+/status", move |_, v| {
            let mqtt_statuses = mqtt_statuses.clone();
            let mqtt_status_sender = mqtt_status_sender.clone();
            let mqtt_status = mqtt_status.clone();
            let mqtt_mqtt_client = mqtt_mqtt_client.clone();

            async move {
                handle_status_message(
                    mqtt_statuses,
                    mqtt_status_sender,
                    mqtt_mqtt_client,
                    mqtt_status,
                    v,
                )
                .await
            }
        })
        .await?;

    // run mqtt event loop independently
    let mqtt_loop = tokio::spawn(async move {
        loop {
            if let Err(e) = mqtt_event_loop.run().await {
                error!("mqtt loop exited: {e}");
            }
        }
    });

    let listener =
        TcpListener::bind(format!("{}:{}", &config.watch.host, config.watch.port)).await?;

    tokio::select! {
        res = async {
            loop {
                match listener.accept().await {
                    Ok((stream, _)) => {
                        // default to a blank string if serialisation failed
                        let summary = create_summary(statuses.clone()).await.unwrap_or("".to_string());
                        tokio::spawn(handle_websocket(stream, summary, status_sender.subscribe()) );
                    }
                    Err(e) => return Err(e),
                }
            }
        } => {
            warn!("websocket handler exited {:?}", res);
            res?
        }

        _ = mqtt_loop => {
            error!("mqtt client exited?");
        }
    }

    Ok(())
}

#[tokio::main]
async fn main() {
    call_with_args("shepherd-watch", _main).await;
}
