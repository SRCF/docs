Internet Relay Chat (IRC)
-------------------------

Connecting
~~~~~~~~~~

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
many others.

When you set up your screen session with irssi for the first time, you
will want to run ``screen -U irssi``. You will also need to do this
every time the SRCF reboots, unless you set up an ``@reboot`` `cron
job <http://team.macnn.com/drafts/crontab_defs.html>`__ containing
``screen -Udm irssi`` using ``crontab -e``.

Having done this you should be presented with an empty irssi window. To
connect it to our IRC server, type
``/SERVER ADD -auto -network SRCF irc.srcf.net``, press return, then
type ``/CONNECT irc.srcf.net`` and press return again. You should see
the server's message of the day fill your screen. You may want to change
your nick (the name people will see attached to everything you type)
using ``/nick yourname``, although you won't be allowed to use a nick
that already exists. ``/join #srcf`` will connect you to the main IRC
channel, or you can replace ``#srcf`` with a different channel to go
somewhere else. ``/SAVE`` will save all this to the configuration file.

To disconnect from screen without quitting IRC press Ctrl-A, and then
press D. This will place you back onto the command line, where you can
just type Ctrl-D to quit.

When you want to reconnect later use ``screen -rd`` after you have
logged in, and your should find your irssi exactly as you left it.

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
