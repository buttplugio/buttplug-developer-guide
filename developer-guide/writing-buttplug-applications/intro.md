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
