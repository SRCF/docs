Internet Relay Chat (IRC)
-------------------------

Internet relay chat is a protocol for real-time text messaging between internet-connected computers. While it is dated in comparison to some other messaging protocols, it continues to be used regularly by SRCF members and as the emergency messaging platform of choice, with several servers located around the world.

We have written a tutorial on getting started with IRC, :ref:`available here <setup-irc>`.

Important information
~~~~~~~~~~~~~~~~~~~~~

.. hint::

    Much like you will find in other open source and similar communities, we have a few guidelines that we want to make clear:
    
    1. There are no technical prerequisites
    2. Anyone can contribute
    3. By students for students

    We have a code of conduct to foster the above aims: inclusivity, collaboration and teamwork (https://www.srcf.net/code-of-conduct)

.. _channel-overview:

Overview of channels
~~~~~~~~~~~~~~~~~~~~

* #welcome — a place for newcomers to say hello
* #general — chat about anything here, we’re humans after all :)
* #society — questions and topics about the SRCF as a society
* #support — tech questions, SRCF-specific or not
* #hackday — home of volunteers, future home of interested volunteers
* #ops — infra-specific discussion, invite only (interested sysadmins encouraged to email sysadmins@srcf.net to join!)
* #srcf — alumni

Server details
~~~~~~~~~~~~~~

You need to connect your client to
`irc.srcf.net <irc://irc.srcf.net/srcf>`__. If you have a
suitably-configured IRC client then clicking on that link might work, or
if you want to try out IRC without downloading and installing a client
then the SRCF provides an `IRC web interface <https://webchat.srcf.net>`__.

Setting up a persistent connection
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Some people like to leave an IRC client connected to the network even
when they are away from their computer, or have turned it off, so that
people can continue to leave them messages for when they return. There
are two main ways: a bouncer or a tmux/screen instance.

For tmux/screen, a common choice is `irssi <http://www.irssi.org/>`__, although there are
many others. We've written :ref:`a tutorial for this <setup-irc>`.

If you want to use a bouncer, we recommend ZNC.

Troubleshooting
~~~~~~~~~~~~~~~

Why am I told "my-irc-client-is-misconfigured"
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

If you are seeing "nick [~username@my-irc-client-is-misconfigured]" then
this is because you are not connecting to irc.srcf.net (as indicated
above) but instead to some other hostname – perhaps kern, pip, shell or
www. This is not recommended, since if the IRC server moves at a later
date those addresses will no longer work, whereas irc.srcf.net will
always be updated to point at the new location.
