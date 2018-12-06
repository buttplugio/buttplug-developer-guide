# Introduction

## What Even Is Buttplug?

For the purposes of this guide, "Buttplug" refers to two things:

- An abstract protocol for enumerating, connecting to, and controlling intimate interaction hardware (sex toys, estim, fucking machines, etc...).
- Reference implementations of the aforementioned protocol in a specific programming languages/environment, providing an API for developers to build applications on.

"Buttplug" used alone usually refers to the protocol, while "Buttplug [language]" (like "Buttplug C#") refers to the reference implementation in a specific language (C#, in this case).

## So Does It Just Control Buttplugs?

This is one of the most asked questions around the Buttplug project. The Buttplug project was built to control all sorts of hardware, not just buttplugs. As of this writing, implementations can control:

- Gamepads
- Vibrators (of all sorts, be it rabbit, buttplug, prostate, wand, etc...)
- Strokers
- Electostimulation

This list will continue to grow over time. 

Some of the reasons the project is named Buttplug are:

- A buttplug (the toy) is a non-gender-specific sex toy. Everyone has a butt. Butts can be inclusive.
- Technology and the surrounding culture is far to sterile. Buttplugs, used correctly, are usually not.
- It seemed funny at the time, even though no thought was put into how it would sound when needing to be mentioned in press articles, grant applications, etc...
    - Upon further consideration, that made it even funnier.

This list will also continue to grow over time, as the project leadership continue to try and convince itself this was a good branding choice.

## About This Guide

The Buttplug Developer Guide covers a few different topics.

- Architecture choices made in both the protocol and the reference libraries.
- Using the reference libraries in applications.
- Different uses for raw Buttplug Messages.

Any portion of the guide that uses the reference libraries should be considered **a way** to do things, but not **the (only) way**. The only invariant portion of Buttplug is the actual protocol, as laid out by [the Buttplug Spec](https://buttplug-spec.docs.buttplug.io). The reference libraries are one try at implementing an API for this protocol. Others are free to implement their own APIs on top of the raw protocol.

Chapters involving code will have interfaces similar to the one shown here.

{% codegroup %}
```csharp
// This is some C#
```

```typescript
// This is some Typescript
```

```javascript
// This is some Javascript
```

```html::twine
<!-- This is Sugarcube Twine -->
```
{% endcodegroup %}

The guide tries to cover examples for all reference implementations, where possible. Due to variations in program language features, there is a good chance that while all of the examples will achieve the same goal, they may do so in very different ways. Notes about language specific requirements and implementations will be included as comments in the examples for that language.

## Terms To Be Familiar With

Here's a quick set of terms and definitions to be familiar with before continuing. These will be used and probably re-explained throughout the document, but having them all here means no one has to go looking for them.

* **Device**
    * A device is the general term for anything that buttplug connects to and controls. Sex toys, gamepads, estim units, fucking machines, whatever.
* **Server** 
    * The part of Buttplug implementations that manages device connections and communication. This may be a standalone server, or may exist inside an application that uses Buttplug. Those wanting to add implementations for new devices will do so in Buttplug Server code.
* **Client**
    * The part of Buttplug implementations that applications use in order to access servers. Client APIs are what most Buttplug applications developers will see.
* **Message**
    * Buttplug messages are defined in the [Buttplug Spec](https://buttplug-spec.docs.buttplug.io), and are how Buttplug Clients and Servers communicate with each other.

## What to Read

Obviously, reading the whole guide is best. A lot of work was put into writing this, and the best way to appreciate that work is the read and savor every single word.

However, based on feedback, apparently readers have "other things to
do". With that severe disrespect in mind, here's a list of what you'll
learn from each of the sections in this guide.

* **Buttplug Ethics**
    * Summary of just a few of the myriad ethics issues encountered when writing sex software. A good way to find out what you may be responsible for if you decide to work with the library. Everyone should read this one.
* **Sticking Buttplug In Your Application**
    * All about the Client side of Buttplug. Useful for those wanting to build applications using prebuilt servers. If you just want to build a game, movie player, control app, or whatever, this is the chapter for you.
* **Sticking New Messages and Devices In Buttplug**
    * If you've built a new device, or have a device the reference libraries don't yet support, this is where you'll find out how to add it to Buttplug libraries. This chapter will also detail what to do if you need a new message added to the protocol to support your device.
* **Strategies Against Buttplug Architecture**
    * Outlines the design of the reference libraries. Why things like Connectors and Device Managers and Message Sorters exist. Check this out if you want to get into Core Buttplug development, or are curious about what some of our bugs/issues are about.
* **The Message Menagerie**
    * Design reasoning behind messages in the low-level Buttplug protocol. Good for Server/Core Buttplug development knowledge.
* **Buttplug Cookbook**
    * Common design patterns and strategies for using Buttplug. If you want to know how the Core Buttplug Engineers do things with the library, or learn from the experience of other projects using the system, this is the place to look. Everything from command conversions to pattern building to whatever else looks an oft-repeated good idea that should be documented.
