using Buttplug.Client;
using Buttplug.Core;

namespace ExceptionExample
{
    class Program
    {
        static void Main(string[] args)
        {
            // In CSharp, we've got the 5 main exception classes, plus
            // ButtplugClientConnectorException. All of these are children of ButtplugException, so
            // catching ButtplugException will catch all Buttplug errors but let all other system
            // Exceptions bubble up.
            try
            {

            }
            catch (ButtplugHandshakeException e)
            {

            }
            catch (ButtplugDeviceException e)
            {

            }
            catch (ButtplugMessageException e)
            {

            }
            catch (ButtplugPingException e)
            {

            }
            catch (ButtplugClientConnectorException e)
            {

            }
            catch (ButtplugException e)
            {

            }
        }
    }
}
