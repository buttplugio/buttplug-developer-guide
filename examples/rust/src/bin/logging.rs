use buttplug::{
  client::ButtplugClient,
  connector::ButtplugInProcessClientConnector,
  server::{comm_managers::btleplug::BtlePlugCommunicationManager, ButtplugServerOptions},
};
use tracing_subscriber;

#[async_std::main]
async fn main() -> anyhow::Result<()> {
  // Run this to turn on the environment logger. Running this more than once will panic.
  tracing_subscriber::fmt::init();

  // Now when you connect here, if you've set the RUST_LOG environment variable
  // (set it to "Info" or "Debug"), you should see messages about connection
  // setup.
  let _client =
    ButtplugClient::connect_in_process("Example Client", &ButtplugServerOptions::default()).await?;

  Ok(())
}
