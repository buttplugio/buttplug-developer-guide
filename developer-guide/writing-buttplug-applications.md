# Sticking Buttplug In Your Application

Enough talk, let's get to Buttplugging!

In this section, we'll go over everything needed to integrate the Buttplug library into applications. 

## Buttplug Session Overview

While there is some [coverage of the lifetime of a buttplug session](https://buttplug-spec.docs.buttplug.io/architecture.html#Example_lifecycle) in the Buttplug Spec, this mostly refers to the expected order of low level messages in the protocol. As a user of one of the Client APIs, interaction with raw messages should be kept to a minimum, so we'll cover session lifetime here at the API level.

Buttplug sessions, as established through reference library APIs, generally consist of the following steps. These steps are stated from the perspective of the Client API.

- Setting up a connection via a Connector class/object
- Connecting to the Server
- Server Handshake and Device List Update
- Device Scanning
- Device Control
- Disconnecting from the Server

This covers most of the functionality that Buttplug provides. Within these steps, there is always the chance for errors or unexpected behavior, so error handling and log messages are also covered here.

## Dealing With Errors

As with all technology, things in Buttplug can and often will go wrong. As stated in the ethics section, due to the context of Buttplug, the user may be having sex with/via an application when things go wrong. This means things can go very, very wrong. 

With that in mind, errors are covered before anything else.

Errors in live Buttplug sessions come in the following flavors.

* *Handshake*
    * Client and Server connected successfully, but something went wrong when they were negotiating the session. This could include naming problems, schema compatibility issues (see next section), or other problems.
* *Message*
    * Something went wrong in relation to message formation or communication. For instance, a message that was only supposed to be sent by a server to a client was sent in the opposite direction.
* *Device*
    * Something went wrong with a device. For instance, the device may no longer be connected, or a message was sent to a device that has no capabilities to handle it.
* *Ping*
    * If the ping system is in use, this means a ping was missed and the connection is no longer valid.
* *Unknown*
    * Reserved for instances where a newer server version is talking to an older client version, and may have error types that would not be recognized by the older client. See next section for more info on this.

The above types only apply to clients that have connected to a server. Custom exceptions or errors may also be thrown by library implementations of Buttplug. For instance, a Connector may throw a custom error or exception based on the type of transport it is using. For more information, see the documentation of the specific Buttplug implementation you are using. 

{% codegroup %}
```csharp::C#::./examples/csharp/ExceptionExample/Program.cs
{% include "" %}
```
```js
    var s = console.warn;
```ts
```
```twine
```
{% endcodegroup %}

**NOTE:** You may notice that there's no way to tell exactly what an error is from this message. You get a class, but the information itself is encoded in the message, which is not standardized. Therefore it's impossible to tell whether a device disconnected, or you just send a connected device an incorrect message. This is bad, and [will hopefully be fixed at some point in the future](https://github.com/buttplugio/buttplug/issues/70).

## Choosing a Connector

The first thing to do when writing a Buttplug application is figuring out where the server is going to live.

- **Inside the Application**
  - You'll bundle a buttplug server with your application. Easier to distribute and create UI for, but also means if the Buttplug libraries change or upgrade, you may need to do the same. This can also tie your application to a single platform (which may or may not be an issue), if you redistribute libraries that only run on a single platform.
- **Outside the Application**
  - You'll allow the user to connect to a Buttplug server they're running on their system, outside of your application. This usually means you'll connect via some IPC method, like pipes or websockets. Buttplug Client Connector libraries usually implement the system specific transports for you, so it's just a matter of presenting the user with a UI that lets them connect as they need.
- **Both!**
  - Bundling a server with your application *and* allowing users to connect to an outside server is also an option, albeit a complicated one. Buttplug reference implementation libraries are usually distributed with Client and Server capabilities, so you can embed a server if that's simple for you, and allow the user to connect out if you don't feel like upgrading later. This may require more in-depth UI work to let the user know what's going on, though.

### Embedded Servers

### External Servers

## Connecting

### The Handshake Client and Server Compatibility

## Device Enumeration

## Device Control

## Logging

## Putting It All Together
