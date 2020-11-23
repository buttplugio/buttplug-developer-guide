using System;
using System.Threading.Tasks;
using Buttplug;

namespace DeviceControlExample
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
            var connector = new ButtplugEmbeddedConnectorOptions();
            var client = new ButtplugClient("Example Client");
            
            try
            {
                await client.ConnectAsync(connector);
            }
            catch (Exception ex)
            {
                Console.WriteLine("Can't connect, exiting!");
                Console.WriteLine($"Message: {ex.InnerException.Message}");
                await WaitForKey();
                return;
            }
            Console.WriteLine("Connected!");
            // You usually shouldn't run Start/Stop scanning back-to-back like
            // this, but with TestDevice we know our device will be found when we
            // call StartScanning, so we can get away with it.
            await client.StartScanningAsync();
            await client.StopScanningAsync();
            Console.WriteLine("Client currently knows about these devices:");
            foreach (var device in client.Devices)
            {
                Console.WriteLine($"- {device.Name}");
            }

            await WaitForKey();

            foreach (var device in client.Devices)
            {
                Console.WriteLine($"{device.Name} supports these messages:");
                foreach (var msgInfo in device.AllowedMessages)
                {
                    Console.WriteLine($"- {msgInfo.Key.ToString()}");
                    if (msgInfo.Value.FeatureCount != 0)
                    {
                        Console.WriteLine($" - Features: {msgInfo.Value.FeatureCount}");
                    }
                }
            }

            Console.WriteLine("Sending commands");

            // Now that we know the message types for our connected device, we
            // can send a message over! Seeing as we want to stick with the
            // modern generic messages, we'll go with VibrateCmd.
            //
            // There's a couple of ways to send this message.
            var testClientDevice = client.Devices[0];


            // We can use the convenience functions on ButtplugClientDevice to
            // send the message. This version sets all of the motors on a
            // vibrating device to the same speed.
            await testClientDevice.SendVibrateCmd(1.0);

            // If we wanted to just set one motor on and the other off, we could
            // try this version that uses an array. It'll throw an exception if
            // the array isn't the same size as the number of motors available as
            // denoted by FeatureCount, though.
            //
            // You can get the vibrator count using the following code, though we
            // know it's 2 so we don't really have to use it.
            var vibratorCount = 
                testClientDevice.AllowedMessages[ServerMessage.Types.MessageAttributeType.VibrateCmd].FeatureCount;
            await testClientDevice.SendVibrateCmd(new[] { 1.0, 0.0 });

            await WaitForKey();

            // And now we disconnect as usual.
            await client.DisconnectAsync();

            // If we try to send a command to a device after the client has
            // disconnected, we'll get an exception thrown.
            try
            {
                await testClientDevice.SendVibrateCmd(1.0);
            }
            catch (ButtplugConnectorException e)
            {
                Console.WriteLine("Tried to send after disconnection! Exception: ");
                Console.WriteLine(e);
            }
            await WaitForKey();
        }

        private static void Main()
        {
            // Setup a client, and wait until everything is done before exiting.
            RunExample().Wait();
        }
    }
}
