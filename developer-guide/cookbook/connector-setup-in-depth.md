# Connector Setup



## Buttplug Ping

The other session property negotiated on handshake is "Ping". Ping is a protocol negotiated keep-alive, with the server dictating the expected ping time to the client. A ping time of 0 denotes "no ping expected", while any number above that is the expected maximum amount of time in milliseconds between pings.

Ping exists to try ensuring some basic level of safety for usage if a client application locks up, remote connection is interrupted, or other horrible scenarios occur that stop ping messages from being transmitted. If a client does not send a ping message within the alloted time, the server is expected to disconnect and stop all devices that are currently active. 

Keeping in line with the knowledge that reference, and most likely, all implementations of Buttplug are neither real-time constrained nor safety-guaranteed, the Ping system is more of a vaguely hopeful mitigation than a secure requirement. Your milage may vary. Don't die.

In reference library implementations of the Client, ping negotiation is handled opaquely by the client API. It is assumed that if the client's event loop fails to send a ping, the program has most likely locked up or crashed, and therefore everything should be shut down. Therefore, no code samples are provided for this. It should *just work*.

On ping failure in the client APIs, you should either receive some sort of event or callback denoting the error. The event or callback arguments will contain an error with an error class type of ERROR_PING. Any subsequent calls to server commands (device search/commands, etc) will fail from this point on.

<CodeSwitcher :languages="{rust:'Rust', csharp:'C#', ts:'TypeScript', js:'JS', twine: 'Twine (Sugarcube)'}">
<template v-slot:rust>

```rust
// Need to write this example
```

</template>
<template v-slot:csharp>

<<< @/examples/csharp/PingTimeoutExample/Program.cs

</template>
<template v-slot:js>

```js
// Need to write this example
```

</template>
<template v-slot:ts>

```ts
// Need to write this example
```

</template>
<template v-slot:twine>

```html
<!-- Need to write this example. -->
```

</template>
</CodeSwitcher>