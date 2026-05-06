use std::{collections::VecDeque, sync::Arc};

use anyhow::Result;
use bytes::Bytes;
use tokio::sync::{Mutex, mpsc};
use tracing::debug;

enum LogBufferMessage {
    Append(Bytes),
    Clear,
}

#[derive(Debug, Clone)]
pub struct LogBufferHandle {
    buffer: Arc<Mutex<VecDeque<Bytes>>>,
    tx: mpsc::UnboundedSender<LogBufferMessage>,
}

impl LogBufferHandle {
    /// Append bytes to the log buffer
    pub fn append(&self, b: Bytes) -> Result<()> {
        self.tx.send(LogBufferMessage::Append(b))?;
        Ok(())
    }

    /// Clear the log buffer
    pub fn clear(&self) -> Result<()> {
        self.tx.send(LogBufferMessage::Clear)?;
        Ok(())
    }

    /// Acquire a copy of the current buffer contents
    pub async fn current_log(&self) -> Vec<Bytes> {
        let buffer = self.buffer.lock().await;
        buffer.iter().cloned().collect()
    }
}

#[derive(Debug)]
pub struct LogBuffer {
    buffer: Arc<Mutex<VecDeque<Bytes>>>,
    total_size: usize,
    max_size: usize,
    rx: mpsc::UnboundedReceiver<LogBufferMessage>,
}

impl LogBuffer {
    /// Create a new buffer for log storage
    pub fn new(capacity: usize) -> (Self, LogBufferHandle) {
        let (tx, rx) = mpsc::unbounded_channel();
        let buffer = Arc::new(Mutex::new(VecDeque::new()));

        (
            Self {
                buffer: buffer.clone(),
                total_size: 0,
                max_size: capacity,
                rx,
            },
            LogBufferHandle { buffer, tx },
        )
    }

    /// Dispatch buffer events forever
    pub async fn dispatch_forever(&mut self) -> Result<()> {
        loop {
            match self.rx.recv().await {
                Some(LogBufferMessage::Clear) => {
                    let mut buffer = self.buffer.lock().await;
                    buffer.truncate(0);
                    self.total_size = 0;
                    debug!("cleared current log buffer");
                }
                Some(LogBufferMessage::Append(b)) => {
                    let mut buffer = self.buffer.lock().await;

                    self.total_size += b.len();
                    buffer.push_back(b);

                    // delete old messages from the buffer
                    while self.total_size > self.max_size {
                        if let Some(old) = buffer.pop_front() {
                            self.total_size -= old.len();
                        } else {
                            break;
                        }
                    }
                }
                None => continue,
            }
        }
    }
}

enum CameraBufferMessage {
    Set(Bytes),
}

#[derive(Debug, Clone)]
pub struct CameraBufferHandle {
    buffer: Arc<Mutex<Bytes>>,
    tx: mpsc::UnboundedSender<CameraBufferMessage>,
}

impl CameraBufferHandle {
    pub fn set(&self, b: Bytes) -> Result<()> {
        self.tx.send(CameraBufferMessage::Set(b))?;
        Ok(())
    }

    pub async fn get(&self) -> Bytes {
        self.buffer.lock().await.clone()
    }
}

#[derive(Debug)]
pub struct CameraBuffer {
    buffer: Arc<Mutex<Bytes>>,
    rx: mpsc::UnboundedReceiver<CameraBufferMessage>,
}

impl CameraBuffer {
    /// Create a new buffer for image storage
    pub fn new() -> (Self, CameraBufferHandle) {
        let (tx, rx) = mpsc::unbounded_channel();
        let buffer = Arc::new(Mutex::new(Bytes::new()));

        (
            Self {
                buffer: buffer.clone(),
                rx,
            },
            CameraBufferHandle { buffer, tx },
        )
    }

    /// Dispatch events forever
    pub async fn dispatch_forever(&mut self) -> Result<()> {
        loop {
            match self.rx.recv().await {
                Some(CameraBufferMessage::Set(b)) => {
                    let mut buffer = self.buffer.lock().await;
                    *buffer = b;
                    debug!("set new camera image");
                }
                None => continue,
            }
        }
    }
}
