using System;
using System.Threading.Tasks;
using Buttplug;

namespace DeviceEnumerationExample
{
    class Program
    {
        private static async Task WaitForKey()
        {
            Console.WriteLine("Press any key to continue.");
            while (!Console.KeyAvailable)
            {
                await Task.Delay(1);
            }
            Console.ReadKey(true);
        }

        private static async Task RunExample()
        {
            // Usual embedded connector setup.
            var client = new ButtplugClient("Example Client");
           
            // Set up our DeviceAdded/DeviceRemoved event handlers before connecting.
            client.DeviceAdded += (aObj, aDeviceEventArgs) =>
                Console.WriteLine($"Device {aDeviceEventArgs.Device.Name} Connected!");

            client.DeviceRemoved += (aObj, aDeviceEventArgs) =>
                Console.WriteLine($"Device {aDeviceEventArgs.Device.Name} Removed!");

            // Now that everything is set up, we can connect.
            try
            {
                await client.Connect(new ButtplugEmbeddedConnectorOptions());
            }
            catch (Exception ex)
            {
                Console.WriteLine(
                    $"Can't connect, exiting! Message: {ex.InnerException.Message}");
                await WaitForKey();
                return;
            }

            // If you'd like more information on what's going on, uncomment these 2 lines.

            // client.Log += (aObj, aMsg) => Console.WriteLine(aMsg.Message.LogMessage);
            // await client.RequestLogAsync(ButtplugLogLevel.Debug);

            // We're connected, yay!
            Console.WriteLine("Connected!");

            // Set up our scanning finished function to print whenever scanning is done.

            client.ScanningFinished += (aObj, aScanningFinishedArgs) =>
                Console.WriteLine("Device scanning is finished!");

            // Now we can start scanning for devices, and any time a device is
            // found, we should see the device name printed out.
            await client.StartScanningAsync();
            await WaitForKey();

            // Some Subtype Managers will scan until we still them to stop, so
            // let's stop them now.
            await client.StopScanningAsync();
            await WaitForKey();

            // Since we've scanned, the client holds information about devices it
            // knows about for us. These devices can be accessed with the Devices
            // getter on the client.

            Console.WriteLine("Client currently knows about these devices:");
            foreach (var device in client.Devices)
            {
                Console.WriteLine($"- {device.Name}");
            }

            await WaitForKey();

            // And now we disconnect as usual.
            await client.Disconnect();
        }

        private static void Main()
        {
            RunExample().Wait();
        }
    }
}
