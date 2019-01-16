import { ButtplugException, ButtplugDeviceException } from "buttplug";

async function ThrowError(): Promise<void> {
  // All async functions in Buttplug are written to return exceptions as a
  // promise rejection, meaning they work as both promise chains and
  // async/await.
  throw new ButtplugDeviceException("This is an exception", 0);
}


async function ButtplugErrors(): Promise<void> {
  // In typescript, there are 2 ways we can call functions and catch exceptions.

  // First off, there's try/catch, which is handy for async.
  try {
    // Imagine some failing call here.
    await ThrowError();
  } catch (e) {
    // However, we don't have the type of the exception we get back, so it could
    // be a system exception or something else not buttplug related. If you're
    // interested in Buttplug related exceptions, it's best to check for them
    // here.
    if (e instanceof ButtplugException)
    {
      // This will make sure we're doing something specific to Buttplug.
      if (e instanceof ButtplugDeviceException)
      {
        // And possibly even more specific.
      }
    }
  }

  // However, as all async typescript functions also return promises, so we can
  // treat the call as a promise rejection.
  ThrowError().catch((e) => console.log("Got an exception back from our promise!"));
}

ButtplugErrors();
