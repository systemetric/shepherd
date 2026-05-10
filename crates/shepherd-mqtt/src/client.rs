use std::{collections::HashMap, pin::Pin, sync::Arc, time::Duration};

use bytes::Bytes;
use futures::future::join_all;
use rumqttc::{AsyncClient, Event, EventLoop, LastWill, MqttOptions, Packet, QoS};
use tokio::sync::Mutex;
use tracing::{debug, warn};

use crate::{
    Wildcard,
    messages::{MqttMessage, ServiceStatus, StatusMessage},
    status_for,
};

pub type MqttHandler = Box<
    dyn Fn(String, Bytes) -> Pin<Box<dyn Future<Output = anyhow::Result<()>> + Send>> + Send + Sync,
>;

type Registry = HashMap<String, Vec<MqttHandler>>;

#[derive(Clone)]
pub struct MqttAsyncClient {
    client: AsyncClient,
    registry: Arc<Mutex<Registry>>,
}

impl MqttAsyncClient {
    pub async fn subscribe<T, S, F, Fut>(&mut self, topic: S, f: F) -> anyhow::Result<()>
    where
        T: MqttMessage,
        S: AsRef<str>,
        F: Fn(String, T) -> Fut + Send + Sync + 'static,
        Fut: Future<Output = anyhow::Result<()>> + Send + 'static,
    {
        let handler: MqttHandler = Box::new(move |t, b| {
            let res: anyhow::Result<T> = serde_json::from_slice(&b)
                .map_err(|e| anyhow::anyhow!("failed to deserialize message : {e}"));

            match res {
                Err(e) => Box::pin(async { Err(e) }),
                Ok(msg) => Box::pin(f(t, msg)),
            }
        });

        self.registry
            .lock()
            .await
            .entry(topic.as_ref().to_string())
            .or_default()
            .push(handler);
        self.client
            .subscribe(topic.as_ref(), QoS::AtMostOnce)
            .await?;

        debug!("client subscribed to topic '{}'", topic.as_ref());

        Ok(())
    }

    pub async fn subscribe_raw<S, F, Fut>(&mut self, topic: S, f: F) -> anyhow::Result<()>
    where
        S: AsRef<str>,
        F: Fn(String, Bytes) -> Fut + Send + Sync + 'static,
        Fut: Future<Output = anyhow::Result<()>> + Send + 'static,
    {
        let handler: MqttHandler = Box::new(move |t, b| Box::pin(f(t, b)));

        self.registry
            .lock()
            .await
            .entry(topic.as_ref().to_string())
            .or_default()
            .push(handler);
        self.client
            .subscribe(topic.as_ref(), QoS::AtMostOnce)
            .await?;

        debug!("client subscribed to topic '{}'", topic.as_ref());

        Ok(())
    }

    pub async fn publish<T, S>(&self, topic: S, msg: T, retain: bool) -> anyhow::Result<()>
    where
        T: MqttMessage,
        S: AsRef<str>,
    {
        let b = serde_json::to_vec(&msg)
            .map_err(|e| anyhow::anyhow!("failed to serialize message: {e}"))?;

        self.publish_raw(topic, b, retain).await?;

        Ok(())
    }

    pub async fn publish_raw<S, V>(&self, topic: S, msg: V, retain: bool) -> anyhow::Result<()>
    where
        S: AsRef<str>,
        V: Into<Vec<u8>>,
    {
        self.client
            .publish(topic.as_ref(), QoS::AtLeastOnce, retain, msg)
            .await?;

        debug!("client published to topic '{}'", topic.as_ref());

        Ok(())
    }

    pub async fn unsubscribe<S>(&self, topic: S) -> anyhow::Result<()>
    where
        S: AsRef<str>,
    {
        self.registry.lock().await.remove_entry(topic.as_ref());
        self.client.unsubscribe(topic.as_ref()).await?;

        debug!("client unsubscribed from topic '{}'", topic.as_ref());

        Ok(())
    }
}

pub struct MqttEventLoop {
    event_loop: EventLoop,
    client: AsyncClient,
    service_id: String,
    registry: Arc<Mutex<Registry>>,
}

impl MqttEventLoop {
    async fn dispatch(registry: Arc<Mutex<Registry>>, topic: String, payload: Bytes) {
        let registry = registry.lock().await;

        // match topics and iter over handlers
        for tgt_topic in registry.keys().filter(|t| Wildcard::new(t).matches(&topic)) {
            if let Some(handlers) = registry.get(tgt_topic) {
                let futures = handlers.iter().map(|h| h(topic.clone(), payload.clone()));
                let results = join_all(futures).await;

                for r in results {
                    if let Err(e) = r {
                        warn!("handler for '{}' returned error: {e}", tgt_topic);
                    }
                }
            }
        }
    }

    pub async fn run(&mut self) -> anyhow::Result<()> {
        loop {
            match self
                .event_loop
                .poll()
                .await
                .map_err(|e| anyhow::anyhow!("event loop poll failed: {e}"))?
            {
                Event::Incoming(Packet::Publish(p)) => {
                    debug!("mqtt client got publish on '{}'", p.topic);

                    let registry = self.registry.clone();
                    let topic = p.topic.clone();
                    let payload = p.payload.clone();

                    tokio::spawn(async move {
                        Self::dispatch(registry, topic, payload).await;
                    });
                }
                Event::Incoming(Packet::ConnAck(_)) => {
                    debug!("mqtt client connected");

                    // generate a birth message
                    let birth_topic = status_for(&self.service_id);
                    let birth_message = serde_json::to_vec(&StatusMessage {
                        service: self.service_id.clone(),
                        status: ServiceStatus::Online,
                    })
                    .expect("birth message generation failed");

                    if let Err(e) = self
                        .client
                        .publish(birth_topic, QoS::AtLeastOnce, true, birth_message)
                        .await
                    {
                        warn!("failed to send birth message: {e}");
                    }
                }
                Event::Incoming(Packet::Disconnect) => {
                    debug!("mqtt client disconnected");
                    // TODO: is this a problem?
                    return Ok(());
                }
                _ => {}
            }
        }
    }
}

pub struct MqttClient;

impl MqttClient {
    #[allow(clippy::new_ret_no_self)]
    pub fn new<S>(service_id: S, hostname: S, port: u16) -> (MqttAsyncClient, MqttEventLoop)
    where
        S: AsRef<str>,
    {
        // generate a last will for this client
        let last_will_topic = status_for(service_id.as_ref());
        let last_will_message = serde_json::to_vec(&StatusMessage {
            service: service_id.as_ref().to_string(),
            status: ServiceStatus::Offline,
        })
        .expect("last will generation failed"); // this should never be able to fail
        let last_will = LastWill::new(last_will_topic, last_will_message, QoS::AtLeastOnce, true);

        let mut mqttoptions = MqttOptions::new(service_id.as_ref(), hostname.as_ref(), port);
        mqttoptions.set_keep_alive(Duration::from_secs(5));
        mqttoptions.set_last_will(last_will);

        let (client, event_loop) = AsyncClient::new(mqttoptions, 10);

        let registry = Arc::new(Mutex::new(HashMap::new()));

        debug!("initialised new mqtt client");

        let wc = MqttAsyncClient {
            client: client.clone(),
            registry: registry.clone(),
        };

        let we = MqttEventLoop {
            event_loop,
            client,
            service_id: service_id.as_ref().to_string(),
            registry: registry.clone(),
        };

        (wc, we)
    }
}
