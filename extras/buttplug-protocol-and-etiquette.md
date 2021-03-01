# Buttplug Protocol and Etiquette

As a user of a Buttplug Client (which most developers using Buttplug will be), you will usually be sheltered from the sausage factory that is the Buttplug Message Protocol. If you'd like to see how the sausage is made in all of its raw glory, read on.

You may remember this line from the foreword:

> The only real function of Buttplug is make it easy for developers to get computers to talk to sex toys.

To understand how Buttplug simplifies this situation, let's take a look at how computer controlled sex toy communication normally happens.


## Computer To Toy Communication

The computer needs to talk to the computer controlled sex toy, otherwise it wouldn't be computer controlled. To do this, is usually talks some sort of simple, "low-level" language that the toy manufacturer came up with.

For instance, if the computer wants to talk to a vibrator (we'll call this one Sex Toy A), the manufacturer may have made it so the computer has to say something like (> denotes messages computer sends to toy, < denotes messages toy sends to computer):

> `> Vibrate:50; < OK; > Vibrate:10; < OK;`

Which means that the vibrator should run at 50% of its top speed, then later, at 10%. On each of those commands, the toy ends back a message to say "Yes that was a correctly formatted message and I am now doing the thing you said."

However, another manufacturer making another vibrator (calling this one Sex Toy B) may have commands that look like:

> `> 5, > 1,`

These commands mean basically the same thing as what we sent to the first toy. Vibrate at 50%, vibrate at 10%. We don't get back anything from these commands, we just fire them off and hope they run.

If the computer were to send the commands for Sex Toy B to the Sex Toy A, it would at get back errors saying the language was incorrect:

> `> Vibrate:50; < OK; > 5, < ERR;`

What happens if we send Sex Toy A commands to Sex Toy B?

> `> 5, > Vibrate:10;`

Sure, the toy doesn't vibrate, but now the computer doesn't know that. Only the user knows since they aren't getting vibrated, and they are probably very unhappy about that.

This is life at the Computer-To-Toy communication level. It's not pretty, and it's not easy.


## Application to Computer Communication

Moving up to the next level, there's 2 ways that Applications tell the computer to send information to hardware.

-   Via raw commands. This means just using the language talked about in the last section to make the computer talk to the toy. This happens a lot in applications that manufacturers make for their own hardware.
-   Via an API (Application Programming Interface) of some kind. These are basically "simplified languages," usually put out by a manufacturer, to make it easy for developers to control the hardware without having to know the low level language the computer uses to talk to it. These APIs will usually only work for the toys the manufacturer makes, and there may be different APIs for different toys.


## Where the Buttplug Protocol Comes into Play

Consider Buttplug to be sort of a Rosetta Stone for sex toys. As mentioned in the last section, it's an API. Instead of just talking to one kind of toy, it talks to as many toys as we've figured out the low level language for.

Revisiting our example above, when an application wants to talk to a sex toy using Buttplug, it will send messages similar to this (encoded here in JSON for readability, but this information can be send in other formats too):

> { "SingleMotorVibrateCmd": { "Id": 1, "DeviceIndex": 1, "Speed": 0.5, } }
> 
> &#x2026;
> 
> { "SingleMotorVibrateCmd": { "Id": 2, "DeviceIndex": 1, "Speed": 0.1, } }

These two messages just say "Make the device at index 1 vibrate at 50%, then 10%." In the Buttplug Server code, we know what kind of toy hardware we're talking to, so we can convert it to Sex Toy A or Sex Toy B without the application developer having to know anything about how A or B actually work. Not only that, when yet another computer controlled vibrator named Sex Toy C comes out 6 months after the developer writes the code to send the message above, their code may very well "just work" with the new toy without them having to make any changes.


## What the Buttplug Protocol Looks Like

The Buttplug Protocol is made up of a number of different messages that fit into a few different classes.

-   Messages sent between a Buttplug Client and Server to establish communication and synchronize state (what toys are available, etc&#x2026;)
-   Messages sent by a Buttplug Client to control a specific brand/model of toy.
-   Messages send by a Buttplug Client to control a class of toys (all vibrating toys, all thrusting toys, etc&#x2026;)

Each message is strictly defined in the Buttplug Protocol Specification, and later we'll go over applications for all of them in the "Buttplug Message Guide" section of this document. For now, it's worth knowing that each message has 2 required fields:

-   Name, which lets the receiver know what it's supposed to do when it gets that message.
-   Id, which allows the sender and receiver to let each other know where in the conversation they are. If a sender sends a message with an Id of 5 and needs information back in relation to that message, it will wait for the receiver to send back a message that also has an Id of 5.

All fields outside of these are specific to message and will be covered in the specification or the Message Guide.
