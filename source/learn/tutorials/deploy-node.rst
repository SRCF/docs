.. _deploy-node:

Deploy a Node web app
---------------------

Introduction
^^^^^^^^^^^^

Node is a popular web framework that allows you to write a custom application with an active backend in JS. Find out more about the project here: https://nodejs.org/en/.

Setting up nvm
^^^^^^^^^^^^^^

You will want to deploy your application using ``nvm`` so that you can
easily install and manage dependencies and versions.

.. hint::
  ``nvm`` stands for Node Version Manager. Ubuntu only provides a significantly outdated version of Node.js (v4.2.6 at the time of writing) in its repositories. ``nvm`` allows you to choose any version of Node to use in your environment. Note that it is your responsibility to keep it updated.

1. Create a directory for your app to live in:

   ::

      mkdir -p ~/myapp
      cd ~/myapp

2. Install ``nvm`` in your home directory. Note that ``nvm`` is terrible and
   will modify your shell config files without asking. But maybe that’s
   what you want?

   Go find the latest version from `the NVM
   GitHub <https://github.com/creationix/nvm>`__, and copy the nasty
   one-liner straight into your shell to install it. At the time of
   writing, it looks like this:

   ::

      curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.0/install.sh | bash

   Go ahead and run it, and close/re-open your terminal as it suggests.

3. Install whatever version of Node.js you want.

   ::

      nvm install 6
      nvm alias default 6

4. Copy your code to ``~/myapp/src`` or similar, and install any
   dependencies using ``npm``.

Create or add your web app
^^^^^^^^^^^^^^^^^^^^^^^^^^

If you have an existing app written in Node with Express, for example, you can simply copy your code to a directory of your choosing, ``src`` for example. 

If you're new to Node, follow the `getting started guide <https://nodejs.org/en/docs/guides/getting-started-guide/>`__ on the node website to deploy your first web app.

Below are some tips on Express, an HTTP server:

`Express <https://sample.soc.srcf.net/nodejs/>`__
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

To install dependencies::

    $ npm install --save express

Then see ``nodejs/app.js`` for a minimum base application.

Preparing your app to be supervised
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Create a file at ``~/myapp/run`` with content like:

::

   #!/bin/bash -e
   USER="$(whoami)"
   [ -e "/home/crsid/myapp/web.sock" ] && rm "/home/crsid/myapp/web.sock"
   umask 0

   . ~/.nvm/nvm.sh
   NODE_ENV=production PORT="/home/crsid/myapp/web.sock" \
       exec ~/myapp/src/bin/www

Replace ``~/myapp/src/bin/www`` with the path to your app, then make
``run`` executable:

::

   chmod +x ~/myapp/run

Test executing the run script. You should be able to access your website
while running it (or see any errors in your terminal).

Supervise your app with systemd
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Cool, your app works. Set up ``systemd``
to :ref:`supervise your app <supervise-systemd>` (so that it starts and restarts automatically).

Suggestions/improvements?
^^^^^^^^^^^^^^^^^^^^^^^^^

Did you like this or find this cool? We invite you to check out :ref:`more tutorials <tutorials>` and :ref:`read our recommended resources<recommended-resources>`.

If you have a better way to host Node.js-based apps on the web server
(or a suggestion for how we could improve this documentation), send us an email at ``support@srcf.net``!

.. note::
  These docs are generously provided by the Open Computing Foundation. Read more about them `here <https://www.ocf.berkeley.edu>`__.
