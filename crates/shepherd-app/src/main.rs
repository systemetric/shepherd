use anyhow::Result;
use axum::Router;
use shepherd_common::{args::call_with_args, config::Config};
use shepherd_mqtt::MqttClient;
use tokio::net::TcpListener;
use tower::ServiceBuilder;
use tower_http::{services::fs::ServeDir, trace::TraceLayer};
use tracing::warn;

mod control;
mod error;
mod files;
mod upload;

async fn _main(config: Config) -> Result<()> {
    let (client, mut event_loop) = MqttClient::new(
        &config.app.service_id,
        &config.mqtt.broker,
        config.mqtt.port,
    );

    let app = Router::new()
        .nest("/control", control::router(&config, client.clone()))
        .nest("/files", files::router(&config))
        .nest("/upload", upload::router(&config, client))
        .fallback_service(ServiceBuilder::new().service(ServeDir::new(config.app.static_dir)))
        .layer(TraceLayer::new_for_http());
    let listener = TcpListener::bind(format!("{}:{}", config.app.host, config.app.port)).await?;

    tokio::select!(
        res = axum::serve(listener, app) => {
            warn!("server exited: {:#?}", res);
            res?
        }
        res = event_loop.run() => {
            warn!("mqtt client exited: {:#?}", res);
            res?
        }
    );

    Ok(())
}

#[tokio::main]
async fn main() {
    call_with_args("shepherd-app", _main).await;
}
