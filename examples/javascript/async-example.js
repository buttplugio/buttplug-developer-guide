// In javascript, we'll use es6 style async/await. Remember that await calls
// return promises, so how you deal with try/catch versus .then()/.catch() is up
// to you.
//
// See the "Dealing with Errors" section of the Developer Guide for more
// info on this.
async function main() {
  let client = new Buttplug.ButtplugClient("Client");
  await client.Connect(new Buttplug.ButtplugEmbeddedServerConnector());
}

main();
