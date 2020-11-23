using Buttplug;
using System;
using System.Threading.Tasks;

namespace PingTimeoutExample
{
    internal class Program
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
            // Let's go back to our embedded connector now, to discuss what the
            // lifetime of a connection looks like.
            //
            // We'll create an embedded connector, but this time we're going to
            // include a maximum ping timeout of 100ms. This is a fairly short
            // timer, but since everything is running in our current process, it
            // should be fine.
            var connector = new ButtplugEmbeddedConnectorOptions();
            connector.MaxPingTime = 100;
            var client = new ButtplugClient("Example Client");

            // Just because the Client takes care of sending the ping message for
            // you doesn't mean that a connection is always perfect. It could be
            // that some code you write blocks the thread that the timer is
            // sending on, or sometimes the client's connection to the server can
            // be severed. In these cases, the client has events we can listen to
            // so we know when either we pinged out, or the server was disconnected.
            client.PingTimeout += (aObj, aEventArgs) => 
                Console.WriteLine("Buttplug ping timeout!");
            client.ServerDisconnect += (aObj, aEventArgs) => 
                Console.WriteLine("Buttplug disconnected!");

            // Let's go ahead and connect.
            await client.ConnectAsync(connector);
            Console.WriteLine("Client connected");
            
            // If you'd like more information on what's going on, uncomment these 2 lines.

            // client.Log += (aObj, aMsg) => Console.WriteLine(aMsg.Message.LogMessage);
            // await client.RequestLogAsync(ButtplugLogLevel.Debug);

            // If we just sit here and wait, the client and server will happily
            // ping each other internally, so we shouldn't see anything printed
            // outside of the "hit key to continue" message. Our wait function is
            // async, so the event loop still spins and the timer stays happy.
            await WaitForKey();

            // Now we'll kill the timer. You should see both a ping timeout and a
            // disconnected message from the event handlers we set up above.
            Console.WriteLine("Stopping ping timer");
            await WaitForKey();

            // At this point we should already be disconnected, so we'll just
            // show ourselves out.
        }

        private static void Main()
        {
            RunExample().Wait();
        }
    }
}