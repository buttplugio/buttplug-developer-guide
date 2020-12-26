# Logging

Buttplug exposes a few methods to receive log messages from the internal Rust library. These messages relay the internal state of the system, and can be handy for debugging purposes.

## Message Exposure

What log messages you'll get depend on the type of system you're building. If you are using an embedded connector (i.e. server and client in the same process), you'll get both client and server information. If you're using a remote connector (i.e. your application uses the client, and the server is in another process/on another machine), you'll only receive log messages for the client. This preserves privacy for users who may not want to reveal information about their local setup to a untrusted client (For more information, see the [Privacy Models section of the this guide](cookbook/privacy-models.markdown)).

This model may may things challenging to debug, which is why we recommend doing initial development in an embedded context if possible, the moving to remote once core development is set.

## Accessing Logs

Logs are generated in Rust using the [tracing crate](https://github.com/tokio-rs/tracing). This functionality is exposed to Rust via normal tracing subsystems (for instance, output to stdout via tracing_subscriber::fmt), or via various language specifics for FFIs (C# and JS have the ability to emit log messages as events).

::: tip Temporary FFI Logging Limitations

At the time of this writing, logging capabilties in FFI instances are somewhat limited. Logging must be started manually, can only be set to one level for a session (i.e. if logging is started a "Debug or higher" levels, it will stay there for the remainder of the process), and only comes as string. As library development progresses, this system will be tuned to allow finer grained access to control and log information.

:::

Available log levels are as follows:

- **Error**
  - Something went wrong and you should probably pay attention.
- **Warn**
  - Something bad possibly happened, but may not warrant full attention.
- **Info**
  - Something possibly useful to the user happened
- **Debug**
  - Something insignificant but possibly useful to development happened
- **Trace**
  - A butterfly flapped its wings. Trace is _EXTREMELY_ spammy.

## Example Code

<CodeSwitcher :languages="{rust:'Rust', csharp:'C#', js:'Javascript'}">
<template v-slot:rust>

Handling and/or outputting log messages in Rust is left up to the user, via normal methods of output for the [tracing crate.](https://github.com/tokio-rs/tracing) To output messages to stdout (i.e. the console) we recommend using the [tracing_subscriber](https://docs.rs/tracing-subscriber/) create with its fmt instance, like so:

```rust
// Need to write this example
```

tracing_subscriber::fmt uses environment variables to set log level filters. The filters are strings set to the levels mentioned in the previous section.

To set up log output using tracing_subscriber on a shell, you can use

```shell
RUST_LOG="debug" ./[your_program_here]
```

To set this up in Powershell on windows, you can use 

```powershell
$env:RUST_LOG="debug"
```

</template>
<template v-slot:csharp>

```csharp
// Need to write this example
```

</template>
<template v-slot:js>

```javascript
// Need to write this example
```

</template>
</CodeSwitcher>