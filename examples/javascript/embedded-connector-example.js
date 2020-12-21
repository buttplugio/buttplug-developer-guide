// This example assumes Buttplug is brought in as a root namespace, via
// inclusion by a script tag, i.e.
//
// <script lang="javascript" 
//  src="https://cdn.jsdelivr.net/npm/buttplug-wasm@1.0.0/dist/web/buttplug.js">
// </script>
//
// If you're trying to load this, change the version to the latest available.

async function runEmbeddedConnectionExample () {
  // Instantiate our wasm module. This only needs to be done once. If you did it
  // elsewhere, ignore this.
  await Buttplug.buttplugInit();

  // After you've created a connector, the connection looks the same no
  // matter what, though the errors thrown may be different.
  let connector = new Buttplug.ButtplugEmbeddedConnectorOptions();
  let client = new Buttplug.ButtplugClient("Developer Guide Example");

  // Now we connect. If anything goes wrong here, we'll throw, but outside of an
  // issue with arguments, embedded connections should never fail.
  try {
    await client.connect(connector);
  }
  catch (ex)
  {
    // If we ever get there, it probably has something to do with our arguments
    // being wrong.
    console.log(ex);
  }

  // We're connected, yay!
  console.log("Connected!");

  // And now we disconnect as usual
  await client.disconnect();
};
