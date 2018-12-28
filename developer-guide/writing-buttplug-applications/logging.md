# Logging

Now that we've gotten through connecting, it's time to take a quick
side trip into logging.

Buttplug Clients and Servers all have logging built in, to let you
know what's going on and debug issues if needed. The 7 logging levels
are:

- **Off**
    - Nothing. No messages.
- **Fatal**
    - The program is probably going to disconnect or crash due to whatever happened.
- **Error**
    - Something pretty bad happened.
- **Warn**
    - Something potentially bad happened.
- **Info**
    - Something happened.
- **Debug**
    - Something you may not care about happened.
- **Trace**
    - Everything happens so much.

To request log messages after connecting a client to a server, use the RequestLog() method in the Client API that you are using, passing to it the lowest log level you want to receive (i.e. if you specify Error, you'll also get Fatal messages). Once this returns successfully, the client should raise an event or callback every time either the client or server has a message at or above the level you've specified.

To turn off messages again, call RequestLog() again and pass the Off level.

All code examples from here on out will have logging capabilities. If you want to check out logging, just uncomment that logging lines in the examples.
