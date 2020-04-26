SSH and servers
---------------

You can connect to our servers over SSH in order to run programs, manage files, and change your password.

Clients
~~~~~~~

You will need an SSH client -- Mac and Linux come with ``ssh`` in the terminal; for Windows, you can enable OpenSSH in Optional Features, use a Linux distro in WSL, or install a Windows client like PuTTY.

Alternatively, you can access a `web-based terminal <https://www.srcf.net/terminal/>`__ in your browser.

Available hosts
~~~~~~~~~~~~~~~

Shell
^^^^^

``shell.srcf.net``

Our main server is **pip**.  This is a general-purpose machine for running software.

Web
^^^

``webserver.srcf.net``

Web applications should be run from **sinkhole**, our webserver.  This includes Apache, our server software of choice, along with custom backend servers which Apache can proxy to.

Games
^^^^^

``userservers.srcf.net``

If you'd like to run a game server or more CPU-intensive application, please use **cavein** (soon to be upgraded to **doom**).
