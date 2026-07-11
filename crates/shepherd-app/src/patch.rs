use std::{io::Cursor, path::PathBuf};

use axum::{
    Router,
    extract::{DefaultBodyLimit, Multipart, State, multipart::Field},
    http::StatusCode,
    routing::post,
};
use shepherd_common::{Mode, Zone, config::Config};
use shepherd_mqtt::{
    MqttAsyncClient,
    messages::{ControlMessage, ControlMessageType},
};
use tracing::info;
use zip::ZipArchive;

use crate::error::{ShepherdError, ShepherdResult};

#[derive(Clone)]
struct PatchState {
    patch_dir: PathBuf,
    mqttc: MqttAsyncClient,
    robot_control: String,
}

async fn process_zip(state: PatchState, mut field: Field<'_>) -> ShepherdResult<()> {
    let mut buffer = Vec::new();
    let mut file_size = 0;

    while let Some(chunk) = field
        .chunk()
        .await
        .map_err(|e| ShepherdError(StatusCode::BAD_REQUEST, e.to_string()))?
    {
        file_size += chunk.len();
        buffer.extend_from_slice(&chunk);
    }

    info!("received {} bytes for patch", file_size);

    let reader = Cursor::new(buffer);
    let mut archive = ZipArchive::new(reader)
        .map_err(|e| ShepherdError(StatusCode::BAD_REQUEST, e.to_string()))?;

    if state.patch_dir.exists() {
        let _ = tokio::fs::remove_dir_all(&state.patch_dir).await;
    }
    Config::create_dir(&state.patch_dir)
        .map_err(|e| ShepherdError(StatusCode::INTERNAL_SERVER_ERROR, e.to_string()))?;

    archive
        .extract(&state.patch_dir)
        .map_err(|e| ShepherdError(StatusCode::BAD_REQUEST, e.to_string()))?;

    state
        .mqttc
        .publish(
            &state.robot_control,
            ControlMessage {
                _type: ControlMessageType::Patch,
                mode: Mode::Dev,
                zone: Zone::Red,
            },
            true,
        )
        .await
        .map_err(|e| ShepherdError(StatusCode::INTERNAL_SERVER_ERROR, e.to_string()))?;

    Ok(())
}

async fn upload(State(state): State<PatchState>, mut multipart: Multipart) -> ShepherdResult<()> {
    while let Some(field) = multipart
        .next_field()
        .await
        .map_err(|e| ShepherdError(StatusCode::BAD_REQUEST, e.to_string()))?
    {
        match (field.content_type(), field.file_name()) {
            (Some(content_type), _) => {
                if content_type.contains("zip") {
                    process_zip(state.clone(), field).await?
                } else {
                    return Err(ShepherdError(
                        StatusCode::BAD_REQUEST,
                        "field has an invalid content type".to_string(),
                    ));
                }
            }
            _ => continue,
        }
    }

    Ok(())
}

pub fn router(config: &Config, mqttc: MqttAsyncClient) -> Router {
    Router::new()
        .route("/upload", post(upload))
        .layer(DefaultBodyLimit::disable())
        .with_state(PatchState {
            patch_dir: config.app.patch_dir.clone(),
            mqttc,
            robot_control: config.channel.robot_control.clone(),
        })
}
