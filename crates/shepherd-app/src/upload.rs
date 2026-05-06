use std::{io::Cursor, path::PathBuf};

use axum::{
    Router,
    extract::{DefaultBodyLimit, Multipart, State, multipart::Field},
    http::StatusCode,
    routing::post,
};
use fs_extra::dir::CopyOptions;
use shepherd_common::{Mode, Zone, config::Config};
use shepherd_mqtt::{
    MqttAsyncClient,
    messages::{ControlMessage, ControlMessageType},
};
use tokio::fs;
use tokio::io::AsyncWriteExt;
use tracing::info;
use zip::ZipArchive;

use crate::error::{ShepherdError, ShepherdResult};

#[derive(Clone)]
struct UploadState {
    user_cur_dir: PathBuf,
    team_image: PathBuf,
    mqttc: MqttAsyncClient,
    robot_control: String,
}

async fn process_python(state: UploadState, mut field: Field<'_>) -> ShepherdResult<()> {
    let file_name = field.file_name().ok_or(ShepherdError(
        StatusCode::BAD_REQUEST,
        "File name not specified".to_string(),
    ))?;

    let target = state.user_cur_dir.join(file_name);
    let mut f = fs::File::create(&target).await?;
    let mut file_size = 0;

    info!("uploading python '{}'", file_name);

    while let Some(chunk) = field
        .chunk()
        .await
        .map_err(|e| ShepherdError(StatusCode::BAD_REQUEST, e.to_string()))?
    {
        f.write_all(&chunk).await?;
        file_size += chunk.len();
    }

    info!("uploaded {} bytes", file_size);

    Ok(())
}

async fn process_zip(state: UploadState, mut field: Field<'_>) -> ShepherdResult<()> {
    let file_name = field.file_name().ok_or(ShepherdError(
        StatusCode::BAD_REQUEST,
        "File name not specified".to_string(),
    ))?;

    let mut buffer = Vec::new();
    let mut file_size = 0;

    info!("uploading zip '{}'", file_name);

    while let Some(chunk) = field
        .chunk()
        .await
        .map_err(|e| ShepherdError(StatusCode::BAD_REQUEST, e.to_string()))?
    {
        file_size += chunk.len();
        buffer.extend_from_slice(&chunk);
    }

    info!("uploaded {} bytes", file_size);

    let reader = Cursor::new(buffer);
    let mut archive = ZipArchive::new(reader)
        .map_err(|e| ShepherdError(StatusCode::BAD_REQUEST, e.to_string()))?;
    let tmpdir = tempfile::tempdir()?;
    archive
        .extract(tmpdir.path())
        .map_err(|e| ShepherdError(StatusCode::BAD_REQUEST, e.to_string()))?;

    if !tmpdir.path().join("main.py").is_file() {
        return Err(ShepherdError(
            StatusCode::BAD_REQUEST,
            "Uploaded ZIP file has no entrypoint".to_string(),
        ));
    }

    let _ = fs::remove_dir_all(&state.user_cur_dir).await;

    tokio::task::spawn_blocking(move || {
        let mut options = CopyOptions::new();
        options.copy_inside = true;
        fs_extra::dir::copy(tmpdir.path(), &state.user_cur_dir, &options)
    })
    .await
    .map_err(|e| ShepherdError(StatusCode::INTERNAL_SERVER_ERROR, e.to_string()))?
    .map_err(|e| ShepherdError(StatusCode::INTERNAL_SERVER_ERROR, e.to_string()))?;

    info!("uploaded new usercode from zip");

    Ok(())
}

async fn upload_file(
    State(state): State<UploadState>,
    mut multipart: Multipart,
) -> ShepherdResult<()> {
    while let Some(field) = multipart
        .next_field()
        .await
        .map_err(|e| ShepherdError(StatusCode::BAD_REQUEST, e.to_string()))?
    {
        match (field.content_type(), field.file_name()) {
            (Some(content_type), Some(file_name)) => {
                if content_type.starts_with("text") || file_name.ends_with(".py") {
                    process_python(state.clone(), field).await?
                } else if content_type.contains("zip") {
                    process_zip(state.clone(), field).await?
                } else {
                    return Err(ShepherdError(
                        StatusCode::BAD_REQUEST,
                        format!("{} has an invalid content type", file_name),
                    ));
                }
            }
            _ => continue,
        }
    }

    // publish mqtt message to reset usercode
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

async fn process_team_image(state: &UploadState, mut field: Field<'_>) -> ShepherdResult<()> {
    let mut f = fs::File::create(&state.team_image).await?;
    let mut file_size = 0;

    info!("uploading team image");

    while let Some(chunk) = field
        .chunk()
        .await
        .map_err(|e| ShepherdError(StatusCode::BAD_REQUEST, e.to_string()))?
    {
        f.write_all(&chunk).await?;
        file_size += chunk.len();
    }

    info!("uploaded {} bytes", file_size);

    Ok(())
}

async fn upload_team_image(
    State(state): State<UploadState>,
    mut multipart: Multipart,
) -> ShepherdResult<()> {
    while let Some(field) = multipart
        .next_field()
        .await
        .map_err(|e| ShepherdError(StatusCode::BAD_REQUEST, e.to_string()))?
    {
        match field.content_type() {
            Some(content_type) => {
                if content_type.contains("jpeg") {
                    process_team_image(&state, field).await?
                } else {
                    return Err(ShepherdError(
                        StatusCode::BAD_REQUEST,
                        "file has an invalid content type".to_string(),
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
        .route("/file", post(upload_file))
        .route("/team-image", post(upload_team_image))
        .layer(DefaultBodyLimit::disable())
        .with_state(UploadState {
            user_cur_dir: config.path.user_cur_dir.clone(),
            team_image: config.path.team_image.clone(),
            mqttc,
            robot_control: config.channel.robot_control.clone(),
        })
}
