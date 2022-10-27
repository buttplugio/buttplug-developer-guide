use buttplug::{
  client::ButtplugClient,
  core::{
    connector::{ButtplugRemoteConnector, ButtplugWebsocketClientTransport},
    message::serializer::ButtplugClientJSONSerializer,
  },
};

#[tokio::main]
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
