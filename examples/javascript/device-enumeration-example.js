// This example assumes Buttplug is brought in as a root namespace, via
// inclusion by a script tag, i.e.
//
// <script lang="javascript" 
//   src="https://cdn.jsdelivr.net/npm/buttplug-wasm@1.0.0/dist/web/buttplug.js">
// </script>
//
// If you're trying to load this, change the version to the latest available.

async function runDeviceEnumerationExample() {
  // Instantiate our wasm module. This only needs to be done once. If you did it
  // elsewhere, ignore this.
  await Buttplug.buttplugInit();

  let client = new Buttplug.ButtplugClient("Device Enumeration Example");

  // Set up our DeviceAdded/DeviceRemoved event handlers before connecting. If
  // devices are already held to the server when we connect to it, we'll get
  // "deviceadded" events on successful connect.
  client.addListener("deviceadded", (device) => {
    console.log(`Device Connected: ${device.Name}`);
    console.log("Client currently knows about these devices:");
    client.Devices.forEach((device) => console.log(`- ${device.Name}`));
  });
  client
    .addListener("deviceremoved", (device) => console.log(`Device Removed: ${device.Name}`));

  // Usual embedded connector setup.
  const connector = new Buttplug.ButtplugEmbeddedConnectorOptions();
  await client.connect(connector);
  
  // Now that everything is set up, we can scan.
  await client.startScanning();
};
