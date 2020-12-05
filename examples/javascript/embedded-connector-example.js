import init, { ButtplugClient,  } from
  "https://cdn.jsdelivr.net/npm/buttplug-wasm@1.0.0-beta3/buttplug-wasm.web/buttplug_wasm.js";
const runEmbeddedConnectionExample = async () => {
  // Instantiate our wasm module
  let bp = await init();

  // After you've created a connector, the connection looks the same no
  // matter what, though the errors thrown may be different.
  let connector = new ButtplugEmbeddedConnectorOptions();
  let client;

  // Now we connect. If anything goes wrong here, we'll throw, but outside of an
  // issue with arguments, embedded connections should never fail.
  try {
    client = await ButtplugClient.connect("Developer Guide Example", connector);
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
document
  .getElementById("embedded-connector-example-button")
  .addEventListener("click", async () => await runEmbeddedConnectionExample());