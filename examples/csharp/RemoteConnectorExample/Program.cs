using System;
using System.Threading.Tasks;
using Buttplug;

namespace RemoteConnectorExample
{
    class Program
    {
        static async Task ConnectWebsocket()
        {
            // Creating a Websocket Connector is as easy as using the right
            // options object.
            var connector = new ButtplugWebsocketConnectorOptions(
                new Uri("ws://localhost:12345/buttplug"));
            var client = new ButtplugClient("Example Client");
            await client.ConnectAsync(connector);
        }

        static void Main(string[] args)
        {
            ConnectWebsocket().Wait();
        }
    }
}
