// In javascript, we'll use es6 style async/await. Remember that await calls
// return promises, so how you deal with try/catch versus .then()/.catch() is up
// to you.
async function main() {
  let client = new Buttplug.ButtplugClient("Client");
  await client.Connect(new Buttplug.ButtplugEmbeddedServerConnector());
}

main();
