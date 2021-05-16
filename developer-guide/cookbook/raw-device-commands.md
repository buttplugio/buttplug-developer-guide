# Raw Device Commands

When generic device commands just won't do, there's "sending a raw byte buffer to the device".

Note that this is probably the most dangerous thing Buttplug can do, as it bypasses most of the safety and protocol checks in the system. Raw messages allow access to things like firmware upload endpoints and other sensitive systems. 

**Be very careful with this power.**

## Why Raw Messages?

Raw messages should only be used for the following situations:

- When developing new protocols or other types of device access for Buttplug. Raw messages can be
  helpful to developers by allowing them to form protocols outside of the library. For instance, if a developer is working with a new toy, but does not know Rust, they can get a set of raw messages working with the device in an FFI language like C# or JS, then send that code to the Buttplug developers for integration into the core Rust library.
- When accessing hardware features not covered by Buttplug. In some hopefully rare instances,
  Buttplug may not handle all of the capabilities of a toy (for instance, the air bladder on the
  Lovense Max). In this case, raw messages can be used to implement control while waiting for
  Buttplug integration of the feature. **This should be used sparingly**, as the device must be
  identified by name alone, and sending incorrect commands to devices may cause them to stall or error out.

## Turning on Raw Commands

Outside of very specific circumstances (see below), raw commands must be activated via the Buttplug
Server. If raw commands are not activated in the server, they will not be exposed to the client, and
for security reasons there is no way for a client to request that a server activate Raw Messages.

Activation can happen via:

- If an embedded server is being used, setting the `allow_raw_messages` option (or equivalent in an
  FFI options struct) to true.
- Passing the `--allowraw` option to [Intiface CLI](https://github.com/intiface/intiface-cli-rs/)
- Turning on the "Allow Raw Messages" option in [Intiface Desktop](http://intiface.com/desktop)
- Assigning the `raw` protocol to a device in the [Device Configuration
  File](../inflating-buttplug/device-configuration-file). This is the only way to access raw commands without setting the raw options in the server.

## Identifying Devices

Once raw message capabilities have been turned on, the next question is knowing what messages to
send which device(s). As raw message are considered to be a developer level feature, we expect that
you will be able to figure out what device you are looking for via name alone, as that is the only
device identification the client provides ([for privacy reasons](privacy-models)).

Unless the user has specified otherwise, most devices at least list their brand as part of their name, which can be used to identify protocols. For instance, when trying to identify Lovense toys to send missing commands like Light or Inflation, it can be assumed most Lovense toys will have "Lovense" in the name, and that can be used for lookup. This is usually the best way to identify which devices are suitable for certain raw messages. In remote connection situations, such as users with Intiface Desktop, the name may have been changed by the user and therefore may not be useful for lookup.

## Endpoints

When writing raw messages, an Endpoint must be passed to let the device know where the message
should be routed to. Endpoints are an enumeration (or set of constants in languages that do not
support enumerations) with [their canonical definition in the Rust
library](https://github.com/buttplugio/buttplug-rs/blob/master/buttplug/src/device/mod.rs#L38). Each
FFI library will have some version of this enumeration in order to form Raw messages.

To find out what endpoints are assigned to devices, you can check out the [device configuration file](../inflating-buttplug/device-configuration-file).

## Raw Read/Write

Raw Read/Write commands use byte arrays to communicate with a device. For writing, an endpoint is specified, and a byte array is sent. For reading, an endpoint is specified, along with an expected read length and timeout value, returning a byte array. As Buttplug will have no context about the messages being passed, these methods will only error if the communication method (USB, bluetooth, etc) throws an error. Any device protocol based error will need to be parsed and handled by the developer.

## Raw Subscribe/Unsubscribe

Raw Subscribe/Unsubscribe allow developers to receive events from endpoints that can receive incoming data, such as serial TX lines, Bluetooth LE Notify/Indicate characteristics, etc...

Developers can specify an endpoint to subscribe to, after which all updates will be sent as events to the device. Calling unsubscribe will stop further events from being relayed.

## Raw Message Example

