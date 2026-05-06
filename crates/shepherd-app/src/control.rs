use axum::{Json, Router, extract::State, http::StatusCode, routing::post};
use serde::{Deserialize, Serialize};
use shepherd_common::{Mode, Zone, config::Config};
use shepherd_mqtt::{
    MqttAsyncClient,
    messages::{ControlMessage, ControlMessageType},
};

use crate::error::{ShepherdError, ShepherdResult};

#[derive(Clone)]
struct ControlState {
    mqttc: MqttAsyncClient,
    robot_control: String,
}

#[derive(Debug, Serialize, Deserialize)]
struct ControlRequest {
    zone: Zone,
    mode: Mode,
}

async fn start(
    State(state): State<ControlState>,
    Json(payload): Json<ControlRequest>,
) -> ShepherdResult<()> {
    let msg = ControlMessage {
        _type: ControlMessageType::Start,
        zone: payload.zone,
        mode: payload.mode,
    };

    state
        .mqttc
        .publish(state.robot_control, msg)
        .await
        .map_err(|e| {
            ShepherdError(
                StatusCode::INTERNAL_SERVER_ERROR,
                format!("mqtt error: {e}"),
            )
        })?;

    Ok(())
}

async fn stop(State(state): State<ControlState>) -> ShepherdResult<()> {
    let msg = ControlMessage {
        _type: ControlMessageType::Stop,
        zone: Zone::default(),
        mode: Mode::default(),
    };

    state
        .mqttc
        .publish(state.robot_control, msg)
        .await
        .map_err(|e| {
            ShepherdError(
                StatusCode::INTERNAL_SERVER_ERROR,
                format!("mqtt error: {e}"),
            )
        })?;

    Ok(())
}

async fn reset(State(state): State<ControlState>) -> ShepherdResult<()> {
    let msg = ControlMessage {
        _type: ControlMessageType::Reset,
        zone: Zone::default(),
        mode: Mode::default(),
    };

    state
        .mqttc
        .publish(state.robot_control, msg)
        .await
        .map_err(|e| {
            ShepherdError(
                StatusCode::INTERNAL_SERVER_ERROR,
                format!("mqtt error: {e}"),
            )
        })?;

    Ok(())
}

pub fn router(config: &Config, mqttc: MqttAsyncClient) -> Router {
    Router::new()
        .route("/start", post(start))
        .route("/stop", post(stop))
        .route("/reset", post(reset))
        .with_state(ControlState {
            mqttc,
            robot_control: config.channel.robot_control.clone(),
        })
}
