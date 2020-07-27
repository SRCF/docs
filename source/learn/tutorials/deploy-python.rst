.. _deploy-python:

Deploying a Python web app
--------------------------

Introduction
^^^^^^^^^^^^

Python is a popular programming language with a number of equally popular web frameworks such as python and Flask. This tutorial will help you get your Python-based web app setup on the SRCF.

You can find out more about the Python language here: https://www.python.org.


.. There is a sample app available in ``/public/societies/sample`` for you to explore. Once there, see ``run.sh`` for command-line options, and ``crontab`` or ``python-web@.service`` for deployment.

Setting up a virtualenv
^^^^^^^^^^^^^^^^^^^^^^^

You will want to deploy your application in a Python virtualenv so that you can easily install and manage dependencies and versions.

1. Create a directory for your app to live in:

   ::

      mkdir -p ~/myapp
      cd ~/myapp

2. Set up a virtualenv:

   ::

      virtualenv venv

3. Activate the virtualenv:

   ::

      . venv/bin/activate

   You should do this step every time before running your app or managing installed packages.

4. Done! Your Python virtualenv is now installed and hooked into your shell.

Add or create your web app
^^^^^^^^^^^^^^^^^^^^^^^^^^

If you already have a Python-based web app, then you can copy in your files to the directory you chose above. For example, you can use ``scp/sftp`` to upload it or clone it using ``git`` or some other source control tool.

If you're a beginner then take a look at some of the starter projects below.

Django
~~~~~~

To create a skeleton Django project::

    $ django-admin startproject example
    $ mv example python
    $ cd python

Now take a look at ``django/example/settings.py`` for how to configure your site. There is also a demo available at https://sample.soc.srcf.net/django/.

Flask
~~~~~
There is a demo flask app setup at https://sample.soc.srcf.net/flask/. See ``flask/app.py`` for a minimum base application.

Installing gunicorn
^^^^^^^^^^^^^^^^^^^

We recommend using gunicorn to serve your application. After activating your virtualenv, install it with ``pip install gunicorn``.

Note that you may see a warning about a syntax error. As long as the output ends in “Successfully installed gunicorn”, `it’s safe to ignore this <https://stackoverflow.com/a/25611194>`__.

.. warning::

    **Don't run development servers on the SRCF** – these typically provide remote code execution via debug consoles, which grants any visitor full access to your SRCF account.  Ensure your site runs in a production mode if configurable.

Preparing your app
^^^^^^^^^^^^^^^^^^

The SRCF uses systemd to supervise processes and Apache to serve web content so you will need to make sure you prepare your app for this before it can run. First create a script that will run your web app at ``~/myapp/run`` with the following content:

::

   #!/bin/bash -e
   . ~/myapp/venv/bin/activate
   PYTHONPATH=~/myapp/src:$PYTHONPATH \
       exec gunicorn -w 2 -b unix:/home/crsid/myapp/web.sock \
       --log-file - main:app

Replace ``main:app`` with the module containing the app, and name of your app, then make ``run`` executable:

::

   chmod +x ~/myapp/run

You then need to configure Apache to forward web requests to the ``web.sock`` socket specified in the ``run`` script. We explain how to do this in the :ref:`app hosting docs <forward-requests>`.

You should now be able to execute the script and access your website (or see any errors in your terminal).

Now follow our instructions :ref:`here <supervise-systemd>` to setup the systemd user service that will manage your app and start it automatically at boot.

Reloading your app
~~~~~~~~~~~~~~~~~~

Gunicorn will reload your app if you send it SIGHUP. You can teach systemd that fact by adding the following line under ``[Service]`` in your systemd unit file:

::

   ExecReload=/bin/kill -HUP $MAINPID

and then running ``systemctl --user daemon-reload``. After that, you can use ``systemctl`` to reload your app:

::

   systemctl --user reload myapp

Suggestions/improvements?
^^^^^^^^^^^^^^^^^^^^^^^^^

Did you like this or find this cool? We invite you to check out :ref:`more tutorials <tutorials>` and :ref:`read our recommended resources<recommended-resources>`.

If you have a better way to host Python-based apps on the SRCF web server (or any other suggestions for how we could improve this documentation), send us an email at ``support@srcf.net`` or submit a Pull Request on `GitHub <https://github.com/SRCF/docs>`__!

.. note:: This tutorial was originally based on content by the Open Computing Facility and amended to include SRCF-specific information. Read more about them `here <https://www.ocf.berkeley.edu>`__.
