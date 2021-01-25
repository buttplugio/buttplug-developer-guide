use buttplug::{
  client::ButtplugClient,
  connector::{ButtplugRemoteConnector, ButtplugWebsocketClientTransport},
  core::messages::serializer::ButtplugClientJSONSerializer,
};

#[async_std::main]
async fn main() -> anyhow::Result<()> {
  // To create a Websocket Connector, you need the websocket address and some generics fuckery.
  let connector: ButtplugRemoteConnector<_, ButtplugClientJSONSerializer, _, _> =
    ButtplugRemoteConnector::new(ButtplugWebsocketClientTransport::new_insecure_connector(
      "ws://localhost:12345/buttplug",
    ));

  let client = ButtplugClient::new("Example Client");
  client.connect(connector).await?;

  Ok(())
}
