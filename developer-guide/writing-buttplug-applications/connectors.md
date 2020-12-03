# Choosing a Connector

The first thing to do when writing a Buttplug application is figuring out where the server is going to live.

- **Inside the Application (aka Embedded)**
  - You'll bundle a buttplug server with your application. Easier to distribute and create UI for, but also means if the Buttplug libraries change or upgrade, you may need to do the same. This can also tie your application to a single platform (which may or may not be an issue), if you redistribute libraries that only run on a single platform. See the README for the Buttplug implementation you're using for more info on this.
- **Outside the Application**
  - You'll allow the user to connect to a Buttplug server they're running on their system, outside of your application (this usually means the user will be running [Intiface Desktop](https://intiface.com/desktop)). This usually means you'll connect via some IPC method, like pipes or websockets. Buttplug Client Connector libraries usually implement the system specific transports for you, so it's just a matter of presenting the user with a UI that lets them connect as they need.
- **Both!**
  - Bundling a server with your application *and* allowing users to connect to an outside server is the most complete option, though also the most complicated. Buttplug libraries are usually distributed with Client and Server capabilities, so you can embed a server if that's simple for you, and allow the user to connect out if you don't feel like upgrading later. This may require more in-depth UI work to let the user know what's going on.

## Embedded Servers and Connectors

An Embedded server means both the client and server are part of the application are you building. While doing this ends up being more convenient for the user in some ways, as they have less setup to do and choices to make, there are a few drawbacks, including:

- If the libraries upgrade (which is how we usually deal with new hardware/protocol support), you'll need to upgrade your app too.
- This may tie you to a certain platform, i.e. if you're using Windows libraries, your application might only run on windows. This all depends on the library you're using, though.
- You'll may to set up the server yourself in your application.

There's not really much to cover about the first two problems, they're just part of the choice you make in using this method. For now, we'll assume you'll want to set up a default Server with no Device Communication Managers, connection watchdogs, etc... We'll cover those options in the Winning Ways section.

This process is outlined in the code example below.

<CodeSwitcher :languages="{rust:'Rust', csharp:'C#', ts:'TypeScript', js:'JS'}">
<template v-slot:rust>

<<< @/examples/rust/src/bin/embedded_connector.rs

</template>
<template v-slot:csharp>

<<< @/examples/csharp/EmbeddedConnectorExample/Program.cs

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
</CodeSwitcher>

## External Servers and Connectors

For using external servers, such as Websocket or IPC Servers, the process is slightly different. You'll need to provide the user a way to pass in the server address, then you just create the connector object using that address.

<CodeSwitcher :languages="{rust:'Rust', csharp:'C#'}">
<template v-slot:rust>

<<< @/examples/rust/src/bin/external_connector.rs

</template>
<template v-slot:csharp>

<<< @/examples/csharp/RemoteConnectorExample/Program.cs

</template>
</CodeSwitcher>