// This example assumes Buttplug is brought in as a root namespace, via
// inclusion by a script tag, i.e.
//
// <script lang="javascript" 
//  src="https://cdn.jsdelivr.net/npm/buttplug@1.0.16/dist/web/buttplug.min.js">
// </script>
//
// If you're trying to load this, change the version to the latest available.

async function runEmbeddedConnectionExample () {
  // Instantiate our wasm module. This only needs to be done once. If you did it
  // elsewhere, ignore this.
  await Buttplug.buttplugInit();

  // Unfortunately we don't expose many options for logging in JS at the moment.
  // This will change in the future, but due to API differences in WASM versus
  // native, we've gotta add some extra stuff. 
  //
  // Right now we're taking the lazy route and using tracing-wasm, which will
  // print tracing messages to the developer console. To turn it on, run the
  // following method, with the log level as an argument:
  Buttplug.activateConsoleLogger("debug");

  // With the console logger active, the following code should cause log
  // messages to show up in the dev console.

  let connector = new Buttplug.ButtplugEmbeddedConnectorOptions();
  let client = new Buttplug.ButtplugClient("Developer Guide Example");
  try {
    await client.connect(connector);
  }
  catch (ex)
  {
    console.log(ex);
  }

  // We're connected, yay!
  console.log("Connected!");

  // And now we disconnect as usual
  await client.disconnect();
};
