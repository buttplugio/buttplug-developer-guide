# Buttplug Ethics

> "&#x2026; Society has put a lot of evils in our brains that we need to transcend before we make out." 
>
> [Cex - Not Trying](https://youtu.be/ONi7QwYNQz4)

## First Draft!

Note that this is a first draft of this section and I'm looking for feedback! You can leave feedback via [Twitter](https://twitter.com/qDot/status/1085724881214263296) or [on the feedback thread on our message boards](https://metafetish.club/t/feedback-on-ethics-portion-of-buttplug-developer-guide/546). Thanks for checking this out!

## Wait This Doesn't Sound Technical

One would normally expect something called a "Developer Guide" to mainly cover technical matters related to a certain technology a developer wants to use. While this document spends most of its words on that, we'd also like to start with a discussion of the ethics of writing and distributing free, open source software (FOSS) that deals with sex. Software ethics in general is an especially complex and difficult topic, and as Buttplug deals with sexual contexts, it cannot really stand apart from the human-focused portion of its use, unless computers somehow start fucking too.

If you want to build software for someone to have sex with, you're taking on some responsibilities whether you like it or not. Even if our libraries are defect free (which they won't be) and your applications or patches are perfect (which they won't be), there are still many issues of social context to cover from the usage of the library. We can't force you to read this section, but it's good information to be aware of so you're not caught off-guard by what your creation may enact upon the world. 

However, if you're curious about how we deal with developing this project, are worried about feeling safe while using it, or want to know what responsibilities come with building software with Buttplug, this section is for you.

## The Buttplug Mission Statement

The Buttplug Mission Statement is at the core of how we deal with ethics in the Buttplug project.

> Buttplug is committed to the safety, autonomy, and human rights of people using it as a sex technology standard, and stands in solidarity with the many intersectional rights of all individuals to be sex positive. As such, Buttplug encourages individual empowerment through self-directed education, and responsible behaviors which are also respectful of the needs and the choices available to everyone.

Now, you may be thinking "Wait. WTF. I just want to use this project to masturbate/have sex. Why the hell does this software need that kind of language when no other sex project does, and things like my database software also doesn't?"

That's a fair point (though maybe your database software could use it too). We'll be spending some time here breaking down that statement into plain language. We'll provide a few examples of how this project relates to current trends, and can affect many different groups in many different ways. 

## There is No Such Thing As Ethical Buttplugging Under Open Source

Sex technology has, up until now, been mostly a "fire and forget" ordeal. Tech is either released by a commercial company alongside a product (to be forgotten if/when the product goes off the market), or thrown onto a message board as an attachment in a thread somewhere using pseudonyms or anonymous accounts. 

For Buttplug, we have real people using their real identities to release software, using professional, documented development practices. While we hope this gives the project a level of quality not normally seen in sex tech, it also means we can be seen as holding more responsibility for the outcomes of the software, as fingers can be pointed and questions asked to a known entity when something controversial happens.

Buttplug is, at its core, a generic library for accessing sex toys. From generic development tools comes user generated content, and from user generated content comes a vast universe of creativity, along with /a world of hurt/. One need only look at the range of articles written about virtual worlds like LambdaMOO and Second Life to see how unpredictable user generated content can be.

With most user generated content platforms, users can create a wealth of content, both non-sexual and sexual. Buttplug, on the other hand, is a project named Buttplug, and deals specifically with sex toys. This means that, from the outset of even uttering the name of the project, we may have problems.

So how do we deal with the fact that people can use Buttplug to connect sex toys to damn near anything? We can't exactly integrate algorithms in the library to detect what it's being compiled to use, and since it's FOSS, we can't monitor and restrict usage on distribution. 

That's where our mission statement comes in. It's the best line of defense we have. We'd rather state our beliefs, release the project, and hope good things come out of it while preparing for some not so good things. The other options include:

- Get in an unwinnable arms race by somehow trying to restrict content or growing the user license into an unenforcable behemoth.
- Not release it at all, which means nothing happens, or worse, someone else creates something similar without a supporting structure, and people get hurt.

This isn't a perfect solution, but it's something.

When writing your own projects with Buttplug, you can and should express your own feelings about how you mean for your project to be used, as well as anything you may not want it used for. Statement of intent can make usage clearer for users, as well as provide context for what your plans are in building whatever it is you may build. This statement need not be static, it can grow n and change with your project as you gain users and community. It can be as abstract as "for consensual, non-harmful sexual enjoyment by all", or as specific as whatever your interests may be.

## You Must Be This Tall To Ride This Code

Developing sex software isn't a practice with much best practices or documented history or even a community of developers willing to admit they'd do such a thing. While we hope to change all of those with this library, that's going to take time. In order to gain acceptance in larger software communities, we hope to share our code in public forums, such as GitHub. 

These hopes have to be tempered by the issues of the general sterility of software, though. GitHub, StackOverflow, Glitch, and other community sites were not really made with NSFW content in mind. While there are certainly "adult" projects on GitHub in the form of porn site scrapers, adult games, and other applications, it's still not the norm by any means. How you present your sex software project as the community grows could end up setting standards for how services deal with NSFW code projects in the future.

Most of the code in Buttplug library isn't extremely explicit, but applications implementing Buttplug may be. Be careful with anything involving media assets that may be deemed inappropriate for certain age groups, especially on sites that don't allow search removal or age checking. Self hosting is always an option for projects involving sensitive materials.

If you would like to use a project site for Buttplug work, and they don't have an obvious policy stating how they might feel about their site being used with sensitive materials, it may be in your best interest to contact them. If you don't feeling comfortable handling this yourself, feel free to [file an issue on the main Buttplug repo](https://github.com/buttplugio/buttplug/issues) and we'll be happy to reach out and discuss. The Core Buttplug Developer Team has communicated with services in the past to figure out best practices for hosting sensitive code content, and the outcomes are usually positive.

Additionally, we highly recommend that any open source or community project using Buttplug should also have a Code of Conduct. While there have been many lively discussions on projects like databases and kernels adopting CoCs, there are some very concrete contextual reasons to have them for sex software projects. This rings especially true if it is a project that may involve some sort of generic, multiple-community/interest use.

For instance, let's say someone is writing an audio player/movie player that controls sex toys with Buttplug. A massive variety of media could be fed into this application, and there is a good chance that media used by some users may be found offensive by others. These user groups will still need support, and may possibly be sharing the same issue/bug tracker for their needs. Having a CoC in place guides moderation of situations where interests may conflict.

As for which CoC to use (if looking for a prewritten one), you can [check out ours](https://github.com/metafetish/metafetish-project-docs/blob/master/CODE_OF_CONDUCT.md) as an example. It's really just a slightly modified version of the [Contributor's Covenant](https://www.contributor-covenant.org/). Using stock CoC's on sex software projects can prove difficult due to rules about "appropriate wording", due to the sexually explicit context of the project itself. Addendums or rewording may be required, though we do recommend being cautious in how these are presented. We welcome discussion of these issues on [our message boards](https://metafetish.club).

## Empathy for the User Having Sex With Your Software

When working on Buttplug applications, something that should be at the forefront of your design thinking is:

> Someone is going to fuck this.

The context of this usage should influence all levels of design, from UI/UX to low level code decisions. Assuming the user will approach a piece of software that involves Buttplug in the same way they would, say, a word processor, will end up in a fuckable word processor. If that's what you were aiming for, great, but otherwise this will just end up in a frustrated user.

As you build projects using Buttplug, ask yourself questions that the user will encounter:

- Could I use this while turned on?
- If I'm REALLY turned on, how long does it take for me to go from "I wanna use this" to "I am using this"?
- What happens if my hardware disconnects?
- Do I have a quick way to stop whatever the hardware may be doing?
- Can I control this while possibly covered in [lube or other things]?

Since Buttplug programs are meant to be sexual, there's a good chance the user *won't* be considering these questions before embarking on whatever technical adventure you've implemented for them. Therefore it's your job to think about these issues first.

## Mo' Buttplugs Mo' Problems

This document does not cover nearly all of the ethical issues that can and will arise in sex software development. The best we can hope to accomplish here is a primer of ways of thinking developers need to consider when building any software, not just sex software or applications involving Buttplug. We'll be updating this section as we find new and interesting cases to present.
