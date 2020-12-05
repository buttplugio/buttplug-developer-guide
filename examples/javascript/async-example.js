import init, { ButtplugClient, ButtplugEmbeddedConnectorOptions } from 
"https://cdn.jsdelivr.net/npm/buttplug-wasm@1.0.0-beta3/buttplug-wasm.web/buttplug_wasm.js";

// In javascript, we'll use es6 style async/await. Remember that await calls
// return promises, so how you deal with try/catch versus .then()/.catch() is up
// to you.
//
// See the "Dealing with Errors" section of the Developer Guide for more
// info on this.

export async function runAsyncExample() {
  // Instantiate our wasm module
  let bp = await init();
  const connector = new ButtplugEmbeddedConnectorOptions();
  const client = await ButtplugClient.connect("Buttplug Example Client", connector);
};

document
  .getElementById("async-example-button")
  .addEventListener("click", async() => await runAsyncExample());