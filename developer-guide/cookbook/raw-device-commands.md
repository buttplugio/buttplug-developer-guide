# Raw Device Commands

When generic device commands just won't do, there's "sending a raw byte buffer to the device".

Note that this is probably the most dangerous thing Buttplug can do, as it bypasses most of the safety and protocol checks in the system. Raw messages allow access to things like firmware upload endpoints and other sensitive systems. 

**Be very careful with this power.**