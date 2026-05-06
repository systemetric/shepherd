use std::path::PathBuf;

use clap::Parser;

use crate::config::Config;

#[derive(Parser, Debug)]
pub struct Args {
    /// Log verbosity
    #[arg(short, long, default_value = "info")]
    pub log_level: tracing::Level,

    /// Configuration file path
    #[arg(short, long, default_value = "/etc/shepherd.toml")]
    pub config_file: PathBuf,
}

pub async fn call_with_args<S, F, Fut>(name: S, f: F)
where
    S: AsRef<str>,
    F: FnOnce(Config) -> Fut + Send + Sync + 'static,
    Fut: Future<Output = anyhow::Result<()>> + Send + 'static,
{
    let args = Args::parse();

    tracing_subscriber::fmt()
        .with_timer(tracing_subscriber::fmt::time::uptime())
        .with_max_level(args.log_level)
        .init();

    let now = chrono::Local::now();
    tracing::info!("{} started at {}", name.as_ref(), now.to_rfc3339());

    let config = Config::from_file(None).unwrap_or_default();
    if let Err(e) = config.setup_dirs() {
        tracing::warn!("config directory setup failed: {e}");
    }

    if let Err(e) = f(config).await {
        tracing::error!("{} failed with error: {e}", name.as_ref());
    }

    let now = chrono::Local::now();
    tracing::info!("{} exited at {}", name.as_ref(), now.to_rfc3339());
}
