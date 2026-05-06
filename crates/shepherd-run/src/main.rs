use shepherd_common::args::call_with_args;

mod runner;
mod usercode;

#[tokio::main]
async fn main() {
    call_with_args("shepherd-run", async |config| {
        let mut r = runner::Runner::new(config).await?;
        r.run().await?;
        Ok(())
    })
    .await;
}
