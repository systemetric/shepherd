use serde::{Deserialize, Serialize};

pub mod args;
pub mod config;

/// Generate a status channel name from a service ID
pub fn status_for<S>(service_id: S) -> String
where
    S: AsRef<str>,
{
    format!("{}/status", service_id.as_ref())
}

#[derive(Debug, Default, PartialEq, Serialize, Deserialize, Copy, Clone)]
#[serde(rename_all = "lowercase")]
pub enum RunState {
    #[default]
    Init,
    Ready,
    Running,
    PostRun,
}

#[derive(Debug, Default, PartialEq, Serialize, Deserialize, Copy, Clone)]
#[serde(rename_all = "lowercase")]
pub enum Zone {
    #[default]
    Red,
    Yellow,
    Blue,
    Green,
}

impl Zone {
    pub fn from_id(id: u32) -> Self {
        match id {
            1 => Self::Yellow,
            2 => Self::Blue,
            3 => Self::Green,
            _ => Self::Red,
        }
    }

    pub fn to_id(&self) -> u32 {
        match self {
            Self::Red => 0,
            Self::Yellow => 1,
            Self::Blue => 2,
            Self::Green => 3,
        }
    }
}

#[derive(Debug, Default, PartialEq, Serialize, Deserialize, Copy, Clone)]
#[serde(rename_all = "lowercase")]
pub enum Mode {
    #[default]
    Dev,
    Comp,
}
