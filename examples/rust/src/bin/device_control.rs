use buttplug::{
  client::{device::VibrateCommand, ButtplugClient, ButtplugClientError},
  core::connector::ButtplugInProcessClientConnectorBuilder,
  server::{
    device::hardware::communication::btleplug::BtlePlugCommunicationManagerBuilder,
    ButtplugServerBuilder,
  },
};
use tokio::io::{self, AsyncBufReadExt, BufReader};

async fn wait_for_input() {
  BufReader::new(io::stdin())
    .lines()
    .next_line()
    .await
    .unwrap();
}

#[tokio::main]
async fn main() -> anyhow::Result<()> {
  let mut server_builder = ButtplugServerBuilder::default();
  // This is how we add Bluetooth manually. (We could also do this with any other communication manager.)
  server_builder.comm_manager(BtlePlugCommunicationManagerBuilder::default());
  let server = server_builder.finish().unwrap();

  let connector = ButtplugInProcessClientConnectorBuilder::default()
    .server(server)
    .finish();

  let client = ButtplugClient::new("Example Client");
  client.connect(connector).await?;

  // For this example, we'll use the Test device. This is included in Buttplug
  // Rust >= v0.1.0. It emulates how a regular device manager would work,
  // exposing access to a Test Device which can take VibrateCmd messages. This
  // exists as a way to test connection and setup UI without having to use
  // actual hardware.
  // TODO migrate to buttplug v6.
  // let (_, _) = new_bluetoothle_test_device("Test Device").await?;

  println!("Connected!");

  // You usually shouldn't run Start/Stop scanning back-to-back like
  // this, but with TestDevice we know our device will be found when we
  // call StartScanning, so we can get away with it.
  client.start_scanning().await?;
  client.stop_scanning().await?;
  println!("Client currently knows about these devices:");
  for device in client.devices() {
    println!("- {}", device.name());
  }
  wait_for_input().await;

  // TODO migrate to buttplug v6.
  // for device in client.devices() {
  //   println!("{} supports these messages:", device.name());
  //   for (r#type, attributes) in &device.allowed_messages {
  //     println!("- {}", r#type);
  //     if let Some(count) = attributes.feature_count {
  //       println!(" - Features: {}", count);
  //     }
  //   }
  // }

  println!("Sending commands");

  // Now that we know the message types for our connected device, we
  // can send a message over! Seeing as we want to stick with the
  // modern generic messages, we'll go with VibrateCmd.
  //
  // There's a couple of ways to send this message.
  let test_client_device = &client.devices()[0];

  // We can use the convenience functions on ButtplugClientDevice to
  // send the message. This version sets all of the motors on a
  // vibrating device to the same speed.
  test_client_device
    .vibrate(&VibrateCommand::Speed(1.0))
    .await?;

  // If we wanted to just set one motor on and the other off, we could
  // try this version that uses an array. It'll throw an exception if
  // the array isn't the same size as the number of motors available as
  // denoted by FeatureCount, though.
  //
  // You can get the vibrator count using the following code, though we
  // know it's 2 so we don't really have to use it.
  let vibrator_count = test_client_device
    .message_attributes()
    .scalar_cmd()
    .as_ref()
    .unwrap()
    .len();

  println!(
    "{} has {} vibrators.",
    test_client_device.name(),
    vibrator_count,
  );

  test_client_device
    .vibrate(&VibrateCommand::SpeedVec(vec![1.0, 0.0]))
    .await?;

  wait_for_input().await;

  // And now we disconnect as usual.
  client.disconnect().await?;

  // If we try to send a command to a device after the client has
  // disconnected, we'll get an exception thrown.
  let vibrate_result = test_client_device
    .vibrate(&VibrateCommand::Speed(1.0))
    .await;
  if let Err(ButtplugClientError::ButtplugConnectorError(error)) = vibrate_result {
    println!("Tried to send after disconnection! Error: ");
    println!("{}", error);
  }
  wait_for_input().await;

  Ok(())
}
