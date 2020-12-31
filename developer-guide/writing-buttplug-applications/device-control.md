# Device Control

We've connected, we've enumerated, now it's time for the important stuff. Device Control!

## Device Capabilities

The devices Buttplug supports can do many different things. They may vibrate, stroke, rotate, stimulate via electricity, some combination of all of these, or possibly something completely different.

In order to trigger these different mechanisms, Command Messages are used. These messages all end in "Cmd". For now we'll just look at vibrating and stopping, but there's descriptions of other messages in the Winning Ways section.

When a device is added, it comes with a list of messages it can accept, as well as certain parameters for those messages. For instance, if you have a vibrating buttplug (an actual buttplug toy), it may accept the following messages

- VibrateCmd
  - This command can takes speeds from 0.0-1.0, or a list of speeds if a device contains multiple vibrators. For now, we'll assume we just have 1 vibrator.
  - When a device supports this message, it will send info about how many vibrators it has, as well as the number of actual speed steps it can use, so you aren't stuck guessing power values to send and can present the user with options or round to the nearest step in the 0.0-1.0 range.
- StopDeviceCmd
  - This command takes no arguments, and simply stops the device from whatever its doing. The Buttplug Server has enough information to know what actions a device can perform, so it handles making sure all of those actions are stopped.

You'll usually interact with devices with Device instances, which will be different than the Buttplug Client. While the Client handles things like scanning and device lists, a Device instance will let you command a specific device.

## Sending Device Messages

As a user of a Buttplug Client API, you should never be expected to send raw Buttplug Messages. Most Client APIs will provide message sending functions for you, usually attached to device objects or structures. If the device accepts the message type represented by the function you call, it should be sent to the device. Otherwise, you'll receive an error about message compatibility.

<CodeSwitcher :languages="{rust:'Rust', csharp:'C#', js: 'Javascript'}">
<template v-slot:rust>

<<< @/examples/rust/src/bin/device_control.rs

</template>
<template v-slot:csharp>

<<< @/examples/csharp/DeviceControlExample/Program.cs

</template>
<template v-slot:js>

<<< @/examples/javascript/device-control-example.js
</template>
</CodeSwitcher>
