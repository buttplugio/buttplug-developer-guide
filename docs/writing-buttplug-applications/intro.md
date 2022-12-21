# Writing Buttplug Applications

Enough talk, let's get to Buttplugging!

We'll now cover the minimal amount of information needed to get you up and running with the Buttplug Library. Links to extra info will be included throughout, but the most important thing for the moment is to get a first example going. After that, we'll spend the Winning Ways section getting in depth with the full capabilities of the library.

## This Ain't Everything

This section will cover the absolute minimum functionality you need to get up and running with Buttplug. However, the library is far more extensive than this section covers. It is recommended you go through this section first, get a simple program up and running with your hardware, then check out the [Winning Ways section](/cookbook/intro.html) for advice on how to structure your application and use some of the other features in the library.

## Example Code Access

All of the example code in this section, as well as in the rest of the Developer Guide, is available in the [github repo for the Dev Guide](https://github.com/buttplugio/buttplug-developer-guide/tree/master/examples). This includes both the code itself and sometimes project files (VS Studio projects, Cargo.toml for rust, etc) for building the applications.

We will do our best to keep these as up to date as possible, but if you run into any issues with compatibility or compilation, please [file an issue on the dev guide repo](https://github.com/buttplugio/buttplug-developer-guide/issues).

## Rust All The Way Down

Before we get into the actual code, a quick note about how Buttplug is implemented. All examples here will either be using the [Buttplug Rust Library](https://github.com/buttplugio/buttplug-rs), or [a language implementation built on top of the rust library](https://github.com/buttplugio/buttplug-rs-ffi). Our C#, Javascript/Typescript, and other libraries are all built on top of Rust, though we try to make that fact as opaque as possible in order to let developers just work with what they know and care about.

**YOU DO NOT NEED TO KNOW RUST TO USE BUTTPLUG FOR APPLICATIONS.**

Why is Buttplug implemented this way? In order to keep the project maintainable by a small team (at the time of this writing, Buttplug is maintained by a single developer), the core logic, including device communications and protocols, Buttplug protocol handling, etc..., is implemented in Rust. Various methods are used to let other languages talk to the Rust library. These methods are covered in depth in the Writing Your Own Client section of the Inflating Buttplug chapter, and language specific information is usually included in the README of the Buttplug implementation in that language.

The hope is that this system will be seamless to most developers. That said, this implementation strategy means that when debugging non-Rust code, you may hit the end of tracable library code. For instance, if you get a C# exception, you'll only be able to debug to the C#/Rust boundary in Visual Studio. We do our best to return usable errors and stacks from Rust, but if you hit problems, [please contact us via one of the community systems](/intro/getting-help), as we're always looking for feedback and input.