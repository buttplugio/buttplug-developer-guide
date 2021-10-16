// This example assumes Buttplug is brought in as a root namespace, via
// inclusion by a script tag, i.e.
//
// <script lang="javascript" 
//  src="https://cdn.jsdelivr.net/npm/buttplug@1.0.16/dist/web/buttplug.min.js">
// </script>
//
// If you're trying to load this, change the version to the latest available.

// In javascript, we'll use es6 style async/await. Remember that await calls
// return promises, so how you deal with try/catch versus .then()/.catch() is up
// to you.
//
// See the "Dealing with Errors" section of the Developer Guide for more
// info on this.

async function runAsyncExample() {
  console.log("Running async load example");
  // Instantiate our wasm module. This only needs to be done once. If you did it
  // elsewhere, ignore this.
  await Buttplug.buttplugInit();

  const connector = new Buttplug.ButtplugEmbeddedConnectorOptions();
  const client = new Buttplug.ButtplugClient("Buttplug Example Client");
  await client.connect(connector);
  console.log("Client connected");
};
