using System;
using System.Threading.Tasks;
using Buttplug;

namespace AsyncExample
{
    class Program
    {
        static void OnDeviceAdded(object o, DeviceAddedEventArgs args)
        {
            Console.WriteLine($"Device ${args.Device.Name} connected");
        }

        static async Task AwaitExample()
        {
            // In CSharp, anything that will block is awaited. For instance, if
            // we're going to connect to a remote server, that might take some
            // time due to the network connection quality, or other issues. To
            // deal with that, we use async/await.
            //
            // For now, you can ignore the API calls here, since we're just
            // talking about how our API works in general. Setting up a
            // connection is discussed more in the Connecting section of this
            // document.
            var connector = 
                new ButtplugWebsocketConnectorOptions(
                    new Uri("ws://localhost:12345/buttplug"));
            var client = 
                new ButtplugClient("Example Client");

            // As an example of events, we'll assume the server might send the
            // client notifications about new devices that it has found. The
            // client will let us know about this via events.
            client.DeviceAdded += OnDeviceAdded;

            // As an example response/reply messages, we'll use our Connect API.
            // Connecting to a server requires the client and server to send
            // information back and forth, so we'll await that while those
            // transfers happen. It is possible for these to be slow, depending
            // on if network is being used and other factors)
            //
            // If something goes wrong, we throw, which breaks out of the await.
            try
            {
                await client.ConnectAsync(connector);
            }
            catch (ButtplugConnectorException ex)
            {
                Console.WriteLine(
                    "Can't connect to Buttplug Server, exiting!" +
                    $"Message: {ex.InnerException.Message}");
            }
            catch (ButtplugHandshakeException ex)
            {
                Console.WriteLine(
                    "Handshake with Buttplug Server, exiting!" +
                    $"Message: {ex.InnerException.Message}");
            }

            // There's also no requirement that the tasks returned from these
            // methods be run immediately. Each method returns a task which will
            // not run until awaited, so we can store it off and run it later,
            // run it on the scheduler, etc...
            //
            // As a rule, if you don't want to worry about all of the async task
            // scheduling and what not, you can just use "await" on methods when
            // you call them and they'll block until return. This is the easiest
            // way to work sometimes.
            var startScanningTask = client.StartScanningAsync();
            try
            {
                await startScanningTask;
            }
            catch (ButtplugException ex)
            {
                Console.WriteLine(
                    $"Scanning failed: {ex.InnerException.Message}");
            }
        }

        static void Main(string[] args)
        {
            AwaitExample().Wait();
        }
    }
}
