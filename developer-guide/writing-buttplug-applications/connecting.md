# Connecting

Once you've created a connector, it's time to connect to a server!

As all connector setup was done via the Connector setup, this is now just down to dealing with whether the connection process actually worked or not.

- For embedded connectors in the reference implementation, connection will always succeed, as long as the client and server are from the same library version (See below for issues involving compatibility). Hopefully, that is a situation that will rarely if ever happen.
- For external connectors, connections can fail due to usual connection issues (wrong address, server not up, network not on, etc...). There is also a chance that the client and server could have a version mismatch. We'll cover this in the next section.

<CodeSwitcher :languages="{rust:'Rust', csharp:'C#'}">
<template v-slot:rust>

<<< @/examples/rust/src/bin/connection.rs

</template>
<template v-slot:csharp>

<<< @/examples/csharp/ConnectionExample/Program.cs

</template>
</CodeSwitcher>

## Client/Server Compatibility

To keep up with new hardware capabilities and the needs of users, the Buttplug protocol spec is versioned. Any time any message changes, the version number of the spec is incremented by 1. When the Connect function is called from a reference client, a "handshake" process occurs where the Client and Server trade their spec version with each other.

Maintaining backward compatibility with applications that may be abandoned (something that is rare in sex software) is a core tenant of Buttplug. Buttplug reference servers try to support *all* versions of the spec. Older clients should always be able to connect to newer servers. 

If a client is running a newer version of the spec than the server, a connection error will be thrown, because otherwise the client can send messages that the server doesn't know what to do with. In this case, it is assumed that there will be a new version of the server library or software available that the client can upgrade to.

## What to Expect on Successful Connect

Once you're connected, you really don't need to think about whether you're using an embedded or remote connector anymore. In most cases, connectors are only used for the initial connection setup, then you can pretty much forget about them after that. Everything will look exactly the same across all connector types from here on out.

So now that you know how to get a Buttplug session running, you're ready to enumerate and control devices!
