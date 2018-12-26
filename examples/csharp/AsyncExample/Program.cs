using System;
using System.Threading.Tasks;
using Buttplug.Client;
using Buttplug.Client.Connectors.WebsocketConnector;
using Buttplug.Core;

namespace AsyncExample
{
    class Program
    {
        static async Task AwaitExample()
        {
            // In CSharp, anything that will block is awaited. For instance, if we're going to
            // connect to a remote server, that might take some time due to the network connection
            // quality, or other issues. To deal with that, we use async/await.
            //
            // For now, you can ignore the API calls here, since we're just talking about how our API
            // works in general. Setting up a connection is discussed more in the Connecting section
            // of this document.
            var connector = new ButtplugWebsocketConnector(new Uri("ws://localhost:12345/buttplug"));
            var client = new ButtplugClient("Example Client", connector);
            try
            {
                await client.ConnectAsync();
            }
            catch (ButtplugClientConnectorException ex)
            {
                Console.WriteLine($"Can't connect to Buttplug Server, exiting! Message: {ex.InnerException.Message}");
            }
            catch (ButtplugHandshakeException ex)
            {
                Console.WriteLine($"Handshake with Buttplug Server, exiting! Message: {ex.InnerException.Message}");
            }
        }

        static void Main(string[] args)
        {
            AwaitExample().Wait();
        }
    }
}
