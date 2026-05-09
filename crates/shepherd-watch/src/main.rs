use anyhow::Result;
use shepherd_common::{args::call_with_args, config::Config};

async fn _main(config: Config) -> Result<()> {
    println!("hello world");
    Ok(())
}

#[tokio::main]
async fn main() {
    call_with_args("shepherd-watch", _main).await;
}
