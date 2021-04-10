.. _app-hosting:

Web application hosting
=======================

Introduction
------------

All accounts include our :ref:`regular web hosting <web-hosting>`,
which is suitable for static content, PHP (WordPress, Joomla, etc.), and
CGI/FastCGI. For those wishing to host more advanced web apps
with the SRCF (Django, Flask, Rails, Node.js, etc.) and leverage their full flexibility, we provide these overview docs and :ref:`more custom tutorials <tutorials>` too:

* :ref:`Node apps <deploy-node>`
* :ref:`Ruby apps <deploy-rails>`
* :ref:`Python apps <deploy-python>`

We also provide a number of sample websites for you. You can explore them live at https://sample.soc.srcf.net/ and view the backend at ``/public/societies/sample``.

Requirements and eligibility
----------------------------

There are no requirements, other than your compliance with our friendly terms of service. You can host your app on your ``user.srcf.net`` or ``soc.srcf.net`` subdomain, or on your own separately purchased domain name. We do encourage you to add the SRCF badge to your website so that others can find us. It's a great way to help us out as it costs little to you but helps us out immensely, in turn allowing us to provide better services to you. You can find the badges `here <https://srcf.net/publicity>`__.

Technical documentation
-----------------------

You can host basically any kind of web application that can bind to a
socket. We provide suggested deployment instructions for some popular
web applications below, but if you know what you're doing, you needn't
follow them.

Connecting to our web server
~~~~~~~~~~~~~~~~~~~~~~~~~~~~

We provide a webserver (currently named ``sinkhole``), for hosting
applications. **You should connect to this server**, not to the public
login server, ``pip``.

You connect to this server via SSH using your normal SRCF account name
and password.

-  **Host:** webserver.srcf.net
-  **Port:** 22

.. _forward-requests:

Routing traffic to your app
~~~~~~~~~~~~~~~~~~~~~~~~~~~

The SRCF uses Apache to serve websites so if you need to run a backend web app, for example a Django, Rails or Express server, then you will need to forward web requests.

Using UNIX sockets
^^^^^^^^^^^^^^^^^^

You will need to configure your application to use a UNIX socket. The socket should only be accessible to you, which can be done by picking a path in your home directory (e.g. ``/home/ab123/myapp/web.sock``) or by using appropriate file modes.

Then add the following to your ``.htaccess`` file, replacing ``<path-to-socket>`` with the path to your socket (e.g. ``/home/ab123/myapp/web.sock``) and ``<url>`` with your domain name (e.g. ``ab123.user.srcf.net``)  ::

    RequestHeader set Host expr=%{HTTP_HOST}
    RequestHeader set X-Forwarded-For expr=%{REMOTE_ADDR}
    RequestHeader set X-Forwarded-Proto expr=%{REQUEST_SCHEME}
    RequestHeader set X-Real-IP expr=%{REMOTE_ADDR}
    RewriteRule ^(.*)$ unix:<path-to-socket>|http://<url>/$1 [P,NE,L,QSA]

Using TCP ports
^^^^^^^^^^^^^^^

You will need to pick a port (we've used 999 here but you should pick a different one above 1024) and configure your application to bind to that port. Be aware that port-based forwarding offers less security than UNIX socket-based forwarding and that any other user will be able to forward requests to the same port you are using. For that reason, we don't set the headers we do above as they can easily be forged by another user. Those things being considered, you can put the following in your ``.htaccess`` file to enable forwarding requests to a port::

    RewriteRule "^(.*)$" http://localhost:999/$1 [P,NE,L,QSA]

.. _supervise-systemd:

Supervising and starting your app
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

.. note::
  We provide sample tutorials for common frameworks in our :ref:`tutorial section <tutorials>` 

.. attention::
  **Make sure you do these steps on the web server.** If you start your app on ``pip``, the public shell server, it won't work.

The SRCF may restart any of its servers as part of regular or emergency maintenance. When this happens, you'll likely want your app to start up again. Similarly you may want your app to automatically restart if it crashes. We highly recommend using ``systemd`` to supervise your app. Our suggested setup is:

1. Create a directory for your app ``~/myapp``.

2. Place a startup script at ``~/myapp/run``. Your script should end by
   ``exec``\ ing the server process. If you followed one of our tutorials
   for Django, Node or Rails, you've already created this file, so can
   move on to the next step. Otherwise, an example would be:

   ::

      #!/bin/sh -e
      exec ~/myapp/run-server

   Your server should run in the *foreground* (it should not daemonise),
   and the ``run`` script should end with an ``exec`` line so that
   signals are sent to the server (and not to the shell that started
   it).

   Once you've written the script, make it executable
   (``chmod +x ~/myapp/run``). Test it by executing it in your terminal
   before moving on; it will be easier to debug problems.

3. Write a systemd service file so your app will be supervised on startup.

   For applications in your personal account, create the unit directory if it doesn't exist::

       mkdir -p ~/.config/systemd/user

   For a society account, substitute ``~`` for ``/societies/foosoc``, where ``foosoc`` is the short name of the account.

   Then, save the following to the file ``~/.config/systemd/user/myapp.service`` (or ``/societies/foosoc/.config/systemd/user/myapp.service`` for groups)::

       [Unit]
       Description={YOUR USER, SOCIETY OR GROUP NAME} Webapp
       ConditionHost=sinkhole

       [Install]
       WantedBy=default.target

       [Service]
       ExecStart=/home/{CRSid}/myapp/run
       Restart=always

4. Tell systemd to start your app on startup, by running ``systemctl --user enable myapp``.

5. You'll need to start your app manually once (on future reboots, it will be started for you). To do that, run ``systemctl --user start myapp``.

   To control your app, you can use the ``systemctl`` tool. See ``man systemctl`` for full details. In summary,

   -  **Restart an app.** ``systemctl --user restart myapp``
   -  **Bring an app offline.** ``systemctl --user stop myapp``
   -  **Bring an app back online.** ``systemctl --user start myapp``
   -  **Check the status of an app.** ``systemctl --user status myapp``

   By default, your app's standard output and error streams are sent to systemd's journal however only the root user can access these. You will want to make your app write to a logfile rather than stdout or stderr.

``systemctl`` with group accounts
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Due to an implementation detail, you must call ``systemctl`` as follows when interacting with a group account's services (here using ``foosoc`` for the account name)::

    sudo -Hu foosoc XDG_RUNTIME_DIR=/run/user/$(id -u foosoc) systemctl --user ...

.. tip::
    You might like to add a function to your ``~/.bashrc`` to make this easier to remember::

        socsudo () {
            soc=$1
            shift
            sudo -Hu $soc XDG_RUNTIME_DIR=/run/user/$(id -u $soc) "$@"
        }

    ...and then run ``socsudo foosoc systemctl --user ...``.

If you receive an error like this setting up your group account's first service::

    Failed to connect to bus: No such file or directory

...then you may need to wait up to 20 minutes for lingering to be switched on -- this will happen automatically once a service file is detected with a valid ``ConditionHost`` line.

Frequently asked questions
--------------------------

Can you install a package on the web server?
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Probably. Feel free to email us at ``support@srcf.net`` and be sure to provide the
name of the `Debian
package <https://www.debian.org/distrib/packages#search_packages>`__ you
want us to install. Keep in mind we'll probably be installing the stable
version of the package, so it might be old.

You might prefer to install the package locally. See below.

This package is 7 years old. Can you update it?
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Probably not. Our servers run Ubuntu stable, so it's expected that
system packages aren't current (indeed, they're often a few years old).
We almost never make exceptions or install backported packages.

For developing and deploying your app, you should almost certainly be
using your platform's version manager (rvm, venv, nvm, gvm, etc.).
This will allow you to run the exact versions you want, and install any
necessary dependencies, all without coordinating with us (or forcing the
rest of our users to switch versions).

The pages above provide instructions on doing this with popular
programming languages.

How do I get a database for my application?
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

MySQL and PostgreSQL accounts are included with your SRCF
account.

.. note::
  The source for these docs are generously provided by the Open Computing Facility. They have been amended to include SRCF-specific information. Read more about them `here <https://www.ocf.berkeley.edu>`__.
