using Buttplug;

namespace ExceptionExample
{
    class Program
    {
        static void Main(string[] args)
        {
            // In C#, we've got the 5 main exception classes, plus
            // ButtplugConnectorException. All of these are children of
            // ButtplugException, so catching ButtplugException will catch all
            // Buttplug errors but let all other system Exceptions bubble up.
            try
            {
            }
            catch (ButtplugHandshakeException)
            {
                // Something went wrong during the connection handshake. Usually
                // means there was a client/server version mismatch.
            }
            catch (ButtplugDeviceException)
            {
                // Something went wrong with a device. Tried to send commands to
                // a disconnected device, command was malformed or not accepted
                // by the devices, etc...
            }
            catch (ButtplugMessageException)
            {
                // Something went wrong with message formation. Tried to send a
                // message out of order, or that the server didn't support,
                // etc...
            }
            catch (ButtplugPingException)
            {
                // Client/Server disconnected due to ping timeout.
            }
            catch (ButtplugConnectorException)
            {
                // Something went wrong in the connection between the client and
                // the server. This will only happen with remote connectors.
            }
            catch (ButtplugException)
            {
                // If you just want to catch everything that can go wrong in the
                // Buttplug library, catch this.
            }
        }
    }
}
