use anyhow::Result;
use bytes::Bytes;
use tokio::sync::{broadcast, watch};

pub enum MessageReceiver {
    Raw(String, broadcast::Receiver<(String, Bytes)>),
    Image(String, watch::Receiver<(String, Bytes)>),
}

impl MessageReceiver {
    /// wait until a valid message is received on this channel
    pub async fn recv(&mut self) -> Result<Bytes> {
        loop {
            if let Some(res) = match self {
                Self::Raw(topic, rx) => match rx.recv().await {
                    Ok((rx_topic, payload)) => {
                        if rx_topic == *topic {
                            Some(Ok(payload))
                        } else {
                            None
                        }
                    }
                    Err(e) => {
                        if e == broadcast::error::RecvError::Closed {
                            Some(Err(anyhow::anyhow!("receive failed: {e}")))
                        } else {
                            None
                        }
                    }
                },

                Self::Image(topic, rx) => match rx.changed().await {
                    Ok(()) => {
                        let payload = rx.borrow_and_update().clone();
                        if payload.0 == *topic {
                            Some(Ok(payload.1))
                        } else {
                            None
                        }
                    }
                    Err(e) => Some(Err(anyhow::anyhow!("{e}"))),
                },
            } {
                return res;
            }
        }
    }
}
