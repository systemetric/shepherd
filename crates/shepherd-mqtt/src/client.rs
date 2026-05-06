use std::{collections::HashMap, pin::Pin, sync::Arc, time::Duration};

use bytes::Bytes;
use futures::future::join_all;
use rumqttc::{AsyncClient, Event, EventLoop, MqttOptions, Packet, QoS};
use tokio::sync::Mutex;
use tracing::{debug, warn};

use crate::{Wildcard, messages::MqttMessage};

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

    pub async fn publish<T, S>(&self, topic: S, msg: T) -> anyhow::Result<()>
    where
        T: MqttMessage,
        S: AsRef<str>,
    {
        let b = serde_json::to_vec(&msg)
            .map_err(|e| anyhow::anyhow!("failed to serialize message: {e}"))?;

        self.publish_raw(topic, b).await?;

        Ok(())
    }

    pub async fn publish_raw<S, V>(&self, topic: S, msg: V) -> anyhow::Result<()>
    where
        S: AsRef<str>,
        V: Into<Vec<u8>>,
    {
        self.client
            .publish(topic.as_ref(), QoS::AtLeastOnce, false, msg)
            .await?;

        debug!("client published to topic '{}'", topic.as_ref());

        Ok(())
    }
}

pub struct MqttEventLoop {
    event_loop: EventLoop,
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
                Event::Incoming(Packet::Connect(c)) => {
                    debug!("mqtt client connected with id '{}'", c.client_id);
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
        let mut mqttoptions = MqttOptions::new(service_id.as_ref(), hostname.as_ref(), port);
        mqttoptions.set_keep_alive(Duration::from_secs(5));

        let (client, event_loop) = AsyncClient::new(mqttoptions, 10);

        let registry = Arc::new(Mutex::new(HashMap::new()));

        debug!("initialised new mqtt client");

        let wc = MqttAsyncClient {
            client,
            registry: registry.clone(),
        };

        let we = MqttEventLoop {
            event_loop,
            registry: registry.clone(),
        };

        (wc, we)
    }
}
