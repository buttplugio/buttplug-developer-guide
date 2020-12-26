# Privacy Models

The architecture of Buttplug strives to provide privacy for whomever may be running the server side of the software in remote connection situations. In this section, we'll cover some of the architectural features that allow for this.

## Privacy in Local (Embedded) Versus Remote Contexts

If someone has implemented an application in Buttplug using an embedded connector, it becomes quite difficult to maintain privacy because the application then has access to the full library, including the hardware access mechanisms. At this point, we can't really guarantee that the developer can/can't access anything, as they may as well have written the hardware access code themselves.

However, in remote application systems (for instance, a web app accessing a local Intiface Desktop install), we can provide some obfuscation and information hiding that allows the user to regulate the amount of information they provide to the remote application. Whether the user opts to do this is up to them.

## Connectors May Leak Metadata

While the Buttplug API does its best to hide info, it is just a hardware access API. Connectors (websockets, IPC, etc) between clients and servers may leak info through their various mediums, depending on how they are designed.

If someone needs to be completely privacy conscious, it is possible to design connectors that route through anonymizing services. See the [Inflating Buttplug]() section for more information on connector design.

## Hiding Device Identifiers

From the perspective of the Buttplug Client, identifiers that would uniquely identify the device (such as Bluetooth addresses, USB serial numbers, etc...) are not available to the Client through our core API. The client only receives as device _index_, which is a 32-bit number that is either generated per-Buttplug-session, or may be set staticly if the user decides to do so.

This is not to say that information is not accessible by applications at all. It is only scoped to what the core API, minus raw device commands, allows. If a user allows an application to send [raw commands](/cookbook/raw-device-commands.md), the protocol the toy uses may relay sensitive information. For instance, the [Lovense Toy Protocol](https://stpihkal.docs.buttplug.io/hardware/lovense.html) will dump the Bluetooth Address as part of the reply to the `DeviceType;` message.