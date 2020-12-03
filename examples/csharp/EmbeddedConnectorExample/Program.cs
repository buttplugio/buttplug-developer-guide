using System.Threading.Tasks;
using Buttplug;

namespace EmbeddedConnectorExample
{
    internal class Program
    {
        private static async Task ConnectEmbedded()
        {
            // First off, we'll set up our Embedded Connector.
            var connector = new ButtplugEmbeddedConnectorOptions();

            // If we want to change anything after making the options object,
            // we can just access the members. We'll explain more about this
            // in a later chapter.
            connector.ServerName = "New Server Name";

            var client = new ButtplugClient("Example Client");

            // Connecting using an embedded connection should never fail.
            await client.ConnectAsync(connector);
        }

        private static void Main()
        {
            ConnectEmbedded().Wait();
        }
    }
}