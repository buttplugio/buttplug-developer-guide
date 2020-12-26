# Example Application

Now that we've covered most of the basics of Buttplug, here's an example of a simple application. This application provides a simple interfaces for the following workflow:

* Scan for Devices
* List connected devices
* Allow the user to choose a device
* Allow the user to send a generic event to the chosen device

While most interaction will Buttplug will usually be more complicated or context specific than this, this example ties together all of the components of the client into a simple program.

<CodeSwitcher :languages="{rust:'Rust', csharp:'C#', js:'Javascript'}">
<template v-slot:rust>

```rust
// Need to write this example
```

</template>
<template v-slot:csharp>

<<< @/examples/csharp/ApplicationExample/Program.cs

</template>
</CodeSwitcher>
