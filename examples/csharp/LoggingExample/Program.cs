using System.Threading.Tasks;
using System;
using Buttplug;

namespace EmbeddedConnectorExample
{
    internal class Program
    {
        private static async Task LogExample()
        {
            // Set up our log handler to print logs to stdout
            ButtplugFFILog.LogMessage += (obj, msg) =>
            {
                Console.WriteLine(msg);
            };
            // Report everything at level Debug and higher, and since we're reporting to the 
            // console, don't use JSON output. (JSON output is handy for log parsing later if 
            // you need it.)
            ButtplugFFILog.StartLogHandler(ButtplugLogLevel.Debug, false);

            // If you want to change log levels without recompiling, you can use the Env Logger.
            // Just make sure you don't try to use StartLogHandler and ActivateEnvLogger in the
            // same session, they will conflict with each other and throw errors.
            //
            // To set the env logger filter level, you'll need to set the RUST_LOG environment
            // variable. i.e. in powershell: $env:RUST_LOG="debug"
            //
            // Comment the code above this and uncomment this if you want to try the env logger.
            //
            // ButtplugFFILog.ActivateEnvLogger();
            
            // Completing our embedded connection should cause log messages to print.
            var connector = new ButtplugEmbeddedConnectorOptions();
            var client = new ButtplugClient("Example Client");
            await client.ConnectAsync(connector);
        }

        private static void Main()
        {
            LogExample().Wait();
        }
    }
}