# API Basics

Client implementations in Buttplug are built to look as similar as possible no matter what language you're using. However, there may be instances where language options (i.e. existence of things like first-class events) change the API slightly. This section goes over how the client APIs we've provided work in a generic manner.

## Buttplug Session Overview

Let's review what a Buttplug Sessions are made up of. Some of this was covered in depth in the architecture section, so this will just be an overview, while also including some example code.

Buttplug sessions (the connection lifetime between the client and server) consist of the following steps.

- Application sets up a connection via a Connector class/object and creates a Client
- Client connects to the Server
- Client negotiates Server Handshake and Device List Update
- Application uses Client to request Device Scanning
- Server communicates Device Connection events to Client/Application.
- Application uses Device Instances to control hardware in Server
- At some point, Application/Client disconnects from the Server

## Client/Server Interaction

There are two types of communication between the client and the server:

- Request/Response (Client -> Server -> Client)
    - Client sends a message, server replies. For instance, when a device command is sent from the client, the server will return information afterward saying whether or not that command succeeded.
- Events (Server -> Client)
    - Server sends a message to the client with no expectation of response. For instance, when a new device connects to the server, the server will tell the client the device has been added, but the server doesn't expect the client to acknowledge this. These messages are considered fire and forget.

Request/Response interaction between the client and the server may be a very long process. Sometimes 100s of milliseconds, or even multiple seconds if device connection quality is poor. In languages where it is available, Client APIs try to deal with this via usage of Async/Await.

For event messages, first-class events are used, where possible. Otherwise, callbacks, promises, streams, or other methods are used depending on language and library capabilities.

<CodeSwitcher :languages="{rust:'Rust', csharp:'C#', ts:'TypeScript', js:'JS', twine: 'Twine (Sugarcube)'}">
<template v-slot:rust>

<<< @/examples/rust/src/bin/async.rs

</template>
<template v-slot:csharp>

[See it on Github](https://github.com/buttplugio/buttplug-developer-guide/tree/master/examples/csharp/AsyncExample)

<<< @/examples/csharp/AsyncExample/Program.cs


</template>
<template v-slot:js>

<<< @/examples/javascript/async-example.js

</template>
<template v-slot:ts>

<<< @/examples/typescript/src/async-example.ts

</template>
<template v-slot:twine>

<<< @/examples/twine/async-example.twee

</template>
</CodeSwitcher>

## Dealing With Errors

As with all technology, things in Buttplug can and often will go wrong. Due to the context of Buttplug, the user may be having sex with/via an application when things go wrong.

This means things can go very, very wrong. 

With that in mind, errors are covered before providing information on how to use things, in the overly optimistic hopes that developers will keep error handling in mind when creating their applications.

Errors in Buttplug sessions come in the follow classes:

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

Custom exceptions or errors may also be thrown by implementations of Buttplug. For instance, a Connector may throw a custom error or exception based on the type of transport it is using. For more information, see the documentation of the specific Buttplug implementation you are using.

<CodeSwitcher :languages="{rust:'Rust', csharp:'C#', ts:'TypeScript', js:'JS'}">
<template v-slot:rust>

<<< @/examples/rust/src/bin/errors.rs

</template>
<template v-slot:csharp>

<<< @/examples/csharp/ExceptionExample/Program.cs

</template>
</CodeSwitcher>

**NOTE:** You may notice that there's no way to tell exactly what an error is from this message. You get a class, but the information itself is encoded in the message, which is not standardized. Therefore it's impossible to tell whether a device disconnected, or you just send a connected device an incorrect message. This is bad, and [will hopefully be fixed at some point in the future](https://github.com/buttplugio/buttplug/issues/70).
