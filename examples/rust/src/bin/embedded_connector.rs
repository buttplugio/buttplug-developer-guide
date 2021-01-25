use buttplug::{
  client::ButtplugClient,
  connector::ButtplugInProcessClientConnector,
  server::{comm_managers::btleplug::BtlePlugCommunicationManager, ButtplugServerOptions},
};

#[allow(dead_code)]
async fn main_the_hard_way() -> anyhow::Result<()> {
  // First off, we'll set up our Embedded Connector.
  let connector = ButtplugInProcessClientConnector::default();
  // This is how we add Bluetooth manually. (We could also do this with any other communication manager.)
  connector
    .server_ref()
    .add_comm_manager::<BtlePlugCommunicationManager>()?;

  let client = ButtplugClient::new("Example Client");
  client.connect(connector).await?;

  Ok(())
}

#[async_std::main]
async fn main() -> anyhow::Result<()> {
  // This is the easy way, it sets up an embedded server with everything set up automatically
  let client = ButtplugClient::new("Example Client");
  client.connect_in_process(&ButtplugServerOptions::default()).await?;

  Ok(())
}
