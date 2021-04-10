.. _deploy-node:

Deploy a Node web app
---------------------

Introduction
^^^^^^^^^^^^

Node.js is a popular runtime that allows you to write custom server-side applications in JS. This tutorial will help you get your Node-based web app setup on the SRCF.

You can find out more about Node.js here: https://nodejs.org/en/.

Server
^^^^^^

You must host the app from the correct server. Please see the `app hosting docs <forward-requests>`.

Setting up nvm
^^^^^^^^^^^^^^

You will want to deploy your application using ``nvm`` so that you can easily install and manage dependencies and versions.

.. hint::
  ``nvm`` stands for Node Version Manager. Ubuntu only provides a significantly outdated version of Node.js (v4.2.6 at the time of writing) in its repositories. Using ``nvm`` allows you to choose any version of Node to use in your environment. Note that it is your responsibility to keep your node installations and ``nvm`` itself updated.

1. Create a directory for your app to live in:

   ::

      mkdir -p ~/myapp
      cd ~/myapp

2. Install ``nvm`` in your home directory. You'll need to find the latest version from `the NVM GitHub <https://github.com/nvm-sh/nvm>`__, and copy the one-liner straight into your shell to install it. At the time of writing, it looks like this:

   ::

      curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh | bash

   Go ahead and run it, and close/re-open your terminal as it suggests.

3. Install whatever version of Node.js you want.

   ::

      nvm install 12
      nvm alias default 12

4. Done! The version of Node.js you specified is now installed and hooked into your shell.

Add or create your web app
^^^^^^^^^^^^^^^^^^^^^^^^^^

If you have an existing Node.js app you can simply copy the code to a directory of your choosing, ``~/myapp/src`` for example. If you're new to Node, follow the `getting started guide <https://nodejs.org/en/docs/guides/getting-started-guide/>`__ on the their website to deploy your first web app.

Below are some tips on setting up Express, a popular HTTP server that's written for Node.js:

`Express <https://sample.soc.srcf.net/nodejs/>`__
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

To install dependencies::

    npm install --save express

Then see ``nodejs/app.js`` for a minimum base application.

Preparing your app
^^^^^^^^^^^^^^^^^^

The SRCF uses systemd to supervise processes and Apache to serve web content so you will need to make sure you prepare your app for this before it can run. First create a script that will run your web app at ``~/myapp/run`` with the following content:

::

   #!/bin/bash -e
   USER="$(whoami)"
   [ -e "/home/crsid/myapp/web.sock" ] && rm "/home/crsid/myapp/web.sock"
   umask 0

   . ~/.nvm/nvm.sh
   NODE_ENV=production PORT="/home/crsid/myapp/web.sock" \
       exec ~/myapp/src/bin/www

Replace ``~/myapp/src/bin/www`` with the path to your app, then make the ``run`` script executable:

::

   chmod +x ~/myapp/run

You then need to configure Apache to forward web requests to the ``web.sock`` socket specified in the ``run`` script. We explain how to do this in the :ref:`app hosting docs <forward-requests>`.

You should now be able to execute the script and access your website (or see any errors in your terminal).

Now follow our instructions :ref:`here <supervise-systemd>` to setup the systemd user service that will manage your app and start it automatically at boot.

Suggestions/improvements?
^^^^^^^^^^^^^^^^^^^^^^^^^

Did you like this or find this cool? We invite you to check out :ref:`more tutorials <tutorials>` and :ref:`read our recommended resources<recommended-resources>`.

If you have a better way to host Node.js-based apps on the SRCF web server (or any other suggestions for how we could improve this documentation), send us an email at ``support@srcf.net`` or submit a Pull Request on `GitHub <https://github.com/SRCF/docs>`__!

.. note:: This tutorial was originally based on content by the Open Computing Facility and amended to include SRCF-specific information. Read more about them `here <https://www.ocf.berkeley.edu>`__.
