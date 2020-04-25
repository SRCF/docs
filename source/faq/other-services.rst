Frequently Asked Questions: Other Services
------------------------------------------

How do I get a Mailman mailing list set up?
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

We need people to look after mailing lists, so they should be of the
form listowner-listname@srcf.net, where listowner is either a username
(like spqr2) or a society name.

Signing up for a society account solely for the purpose of running a
mailing list is absolutely fine—go fill in the `society application
form <https://www.srcf.net/signup/newsoc/>`__, which lets you request
mailing lists with your new account. New mailing lists can be created on
the `Control Panel <https://control.srcf.net>`__.

Once the mailing list has been created, it can be managed through a `web
interface <https://www.srcf.net/mailman/listinfo>`__. Members can also
configure their subscription automatically by sending appropriate
emails.

How do I find documentation?
~~~~~~~~~~~~~~~~~~~~~~~~~~~~

The program 'man' (short for manual) is your friend here. For example,
'man emacs' will tell you about the emacs text editor. You may also find
the \`info' command to be useful here—many programs with man pages also
have info entries. The info system is navigated by pressing return when
the cursor is over an active region and using \`u' and \`d' to move up
and down through the hierarchy. \`q' is used to quit in both programs.

Another good source of documentation, often more detailed and/or user
friendly than the man page is ``/usr/doc/[package_name]/``. The files
tend to be in a variety of formats and/or compressed, so the command
``see`` is your friend here as it will (most of the time!) automatically
choose the correct program to display the document.

Can you host the mail exchange or name server for my domain?
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Unfortunately we are prevented from doing this by the University
Computing Service.

This means that you must not point MX DNS records at the SRCF machine.
If you do this then mail will be blocked as it enters the CUDN, and
therefore will not reach you.

Can you install the piece of software “foo”?
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Maybe - we normally only install software which is available from the
latest stable release of Ubuntu GNU/Linux and which won't place
excessive load on our machine. If there is something you would like to
use then email sysadmins@srcf.net and we'll consider it. Details of
Ubuntu packages can be found `here <http://packages.ubuntu.com/>`__.

Of course, if it is possible you are welcome to install things locally
in your home directory. Please don't run anything which will kill the
machine though, otherwise we'll come after you with sticks.

Can you upgrade “piece of software foo” to version 2046?
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Unfortunately this isn't possible. We use the Ubuntu distribution of
GNU/Linux and installing non-Ubuntu packages is a considerable
administrative burden. When the next version of Ubuntu appears we'll be
able to upgrade.

Do you run Firefox/Konqueror/Midori?
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

| Yes, use our `Desktop service <../desktop.html>`__ for this, it
  currently has Firefox, Konqueror and Midori installed. On our shell
  server we have lynx, links and w3m (all of which are text-only
  browsers).
| We can also `install <#software>`__ any other browser available in the
  Ubuntu repositories.

Can I run a server for my favourite online game?
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Yes, use our game server at ``userservers.srcf.net``. Please limit your
server to 1GB of memory and set it to nice level 19 to avoid creating
problems for other users. If your server is run with Java, this can be
accomplished by running (for example)
``nice -n 19 java -Xms1024m -Xmx1024m -jar minecraft_server.jar``.
