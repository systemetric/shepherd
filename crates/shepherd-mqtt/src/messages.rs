use serde::{Deserialize, Serialize, de::DeserializeOwned};

pub trait MqttMessage: Serialize + DeserializeOwned + Send + Sync + 'static {}
impl<T> MqttMessage for T where T: Serialize + DeserializeOwned + Send + Sync + 'static {}

#[derive(Debug, Serialize, Deserialize, PartialEq)]
#[serde(rename_all = "lowercase")]
pub enum ControlMessageType {
    Start,
    Stop,
    Reset,
}

#[derive(Debug, Serialize, Deserialize)]
pub struct ControlMessage {
    #[serde(rename = "type")]
    pub _type: ControlMessageType,
    pub mode: shepherd_common::Mode,
    pub zone: shepherd_common::Zone,
}

#[derive(Debug, Serialize, Deserialize)]
pub struct RunStatusMessage {
    pub state: shepherd_common::RunState,
}
