# Writing Buttplug Applications

Enough talk, let's get to Buttplugging!

In this section, we'll go over everything needed to integrate the Buttplug library into your applications. 

## Rust All The Way Down

Before we get into the actual code, a quick note about the libraries we'll be using in our examples. All examples here will either be using the [Rust Library](https://github.com/buttplugio/buttplug-rs), or [a language implementation built on top of the rust library](https://github.com/buttplugio/buttplug-rs-ffi). Our C#, Javascript/Typescript, and other libraries are all built on top of Rust, though we try to make that fact as opaque as possible in order to let developers just work with what they know and care about.

Why is this? In order to keep Buttplug maintainable by a small team (at the time of this writing, Buttplug is maintained by a single developer), the core logic, including device communications and protocols, Buttplug protocol handling, etc..., is implemented in Rust. Various methods are used to let other languages talk to the Rust library. These methods are covered in depth in the Writing Your Own Client section of the Inflating Buttplug chapter, and language specific information is usually included in the README of the Buttplug implementation in that language.

The hope is that this system will remain seamless to most developers. That said, this implementation strategy means that when debugging non-Rust code, you may hit the end of tracable library code. For instance, if you get a C# exception, you'll only be able to debug to the C#/Rust boundary in Visual Studio. We do our best to return usable errors and stacks from Rust, but if you hit problems, [please contact us via one of the community systems](/intro/getting-help), as we're always looking for feedback and input.