## Dealing With Errors

As with all technology, things in Buttplug can and often will go wrong. As stated in the ethics section, due to the context of Buttplug, the user may be having sex with/via an application when things go wrong. This means things can go very, very wrong. 

With that in mind, errors are covered before anything else.

Errors in live Buttplug sessions come in the following flavors.

* *Handshake*
    * Client and Server connected successfully, but something went wrong when they were negotiating the session. This could include naming problems, schema compatibility issues (see next section), or other problems.
* *Message*
    * Something went wrong in relation to message formation or communication. For instance, a message that was only supposed to be sent by a server to a client was sent in the opposite direction.
* *Device*
    * Something went wrong with a device. For instance, the device may no longer be connected, or a message was sent to a device that has no capabilities to handle it.
* *Ping*
    * If the ping system is in use, this means a ping was missed and the connection is no longer valid.
* *Unknown*
    * Reserved for instances where a newer server version is talking to an older client version, and may have error types that would not be recognized by the older client. See next section for more info on this.

The above types only apply to clients that have connected to a server. Custom exceptions or errors may also be thrown by library implementations of Buttplug. For instance, a Connector may throw a custom error or exception based on the type of transport it is using. For more information, see the documentation of the specific Buttplug implementation you are using. 

{% codegroup %}
```csharp::C#::./examples/csharp/ExceptionExample/Program.cs
```
```js
    var s = console.warn;
```
```twine
test
```
{% endcodegroup %}

**NOTE:** You may notice that there's no way to tell exactly what an error is from this message. You get a class, but the information itself is encoded in the message, which is not standardized. Therefore it's impossible to tell whether a device disconnected, or you just send a connected device an incorrect message. This is bad, and [will hopefully be fixed at some point in the future](https://github.com/buttplugio/buttplug/issues/70).
