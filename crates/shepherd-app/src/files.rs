use std::path::PathBuf;

use axum::{
    Json, Router,
    body::Bytes,
    extract::{DefaultBodyLimit, Path, State},
    http::StatusCode,
    routing::{delete, get, post},
};
use serde::Serialize;
use serde_json::json;
use shepherd_common::config::Config;
use tokio::fs;
use tracing::info;

use crate::error::{ShepherdError, ShepherdResult};

#[derive(Debug, Clone)]
struct FilesState {
    user_src_dir: PathBuf,
}

type Blocks = serde_json::Value;

#[derive(Serialize)]
struct ProjectMeta {
    pub blocks: Blocks,
    pub files: Vec<String>,
}

impl ProjectMeta {
    async fn load(state: FilesState) -> ShepherdResult<Self> {
        let blocks_path = state.user_src_dir.join("blocks.json");
        let blocks = if blocks_path.is_file() {
            let blocks_str = fs::read_to_string(&blocks_path).await?;
            serde_json::from_str(&blocks_str).map_err(|_| {
                ShepherdError(
                    StatusCode::INTERNAL_SERVER_ERROR,
                    "'blocks.json' does not contain valid json".to_string(),
                )
            })?
        } else {
            json!({
                "requires": [],
                "header": "",
                "footer": "",
                "blocks": [],
            })
        };

        let files: Vec<String> = std::fs::read_dir(&state.user_src_dir)?
            .filter_map(|p| {
                let path = p.ok()?.path();

                if let Some(name) = path.file_name()
                    && let Some(ext) = path.extension()
                    && (ext == "py" || ext == "xml" || name == "blocks.json")
                    && name != "main.py"
                {
                    Some(name.to_string_lossy().to_string())
                } else {
                    None
                }
            })
            .collect();

        Ok(Self { blocks, files })
    }
}

async fn list_projects(State(state): State<FilesState>) -> ShepherdResult<Json<ProjectMeta>> {
    ProjectMeta::load(state).await.map(Json)
}

#[derive(Serialize)]
struct Project {
    pub filename: String,
    pub content: String,
}

impl Project {
    fn new(name: String, content: String) -> Self {
        Self {
            filename: name,
            content,
        }
    }

    async fn load(state: FilesState, name: String) -> ShepherdResult<Self> {
        let target = state.user_src_dir.join(&name);
        let content = fs::read_to_string(target).await?;

        info!("loaded '{}' size {} bytes", &name, content.len());

        Ok(Self {
            filename: name,
            content,
        })
    }

    async fn save(&self, state: FilesState) -> ShepherdResult<()> {
        let target = state.user_src_dir.join(&self.filename);
        fs::write(target, &self.content).await?;
        info!(
            "saved '{}' size {} bytes",
            self.filename,
            self.content.len()
        );
        Ok(())
    }
}

async fn load_file(
    State(state): State<FilesState>,
    Path(name): Path<String>,
) -> ShepherdResult<Json<Project>> {
    Project::load(state, name).await.map(Json)
}

async fn save_file(
    State(state): State<FilesState>,
    Path(name): Path<String>,
    body: Bytes,
) -> ShepherdResult<()> {
    let content = String::from_utf8(body.to_vec())
        .map_err(|_| ShepherdError(StatusCode::BAD_REQUEST, "Invalid UTF-8".to_string()))?;
    Project::new(name, content).save(state).await
}

async fn delete_file(
    State(state): State<FilesState>,
    Path(name): Path<String>,
) -> ShepherdResult<()> {
    if name == "blocks.json" {
        return Err(ShepherdError(
            StatusCode::BAD_REQUEST,
            "Cannot write to 'blocks.json'".to_string(),
        ));
    }

    let target = state.user_src_dir.join(&name);

    fs::remove_file(&target).await?;

    info!("deleted '{}'", name);

    Ok(())
}

pub fn router(config: &Config) -> Router {
    Router::new()
        .route("/list", get(list_projects))
        .route("/load/{filename}", get(load_file))
        .route(
            "/save/{filename}",
            post(save_file).layer(DefaultBodyLimit::disable()),
        )
        .route("/delete/{filename}", delete(delete_file))
        .with_state(FilesState {
            user_src_dir: config.app.user_src_dir.clone(),
        })
}
