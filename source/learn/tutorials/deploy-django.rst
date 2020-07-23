.. _deploy-django:

Deploying a Python web app (Django, Flask)
------------------------------------------

Introduction
^^^^^^^^^^^^

Many popular Python-based web frameworks exist such as Django and Flask. This tutorial will help you get your Python-based web app going on the SRCF.

.. note::
  We host a sample Python-based app available in ``/public/societies/sample`` for you to explore. Once there, see ``run.sh`` for command-line options, and ``crontab`` or ``python-web@.service`` for deployment.

Setting up a virtualenv
^^^^^^^^^^^^^^^^^^^^^^^

You will want to deploy your application using a virtualenv so that you
can easily install and manage dependencies and versions.

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

   You should do this step every time before running your app or
   managing installed packages.

4. Copy your code to ``~/myapp/src`` or similar, and install any
   dependencies using ``pip``.

  You'll want to install at least ``django`` to start with. If you're using other packages, install those too. You can also install from a requirements.txt file, if you have one.

.. warning::

    **Don't run development servers on the SRCF** – these typically provide remote code execution via debug consoles, which grants any visitor full access to your SRCF account.  Ensure your site runs in a production mode if configurable.

Installing gunicorn
^^^^^^^^^^^^^^^^^^^

We recommend using gunicorn to serve your application. After activating
your virtualenv, install it with ``pip install gunicorn``.

Note that you may see a warning about a syntax error. As long as the
output ends in “Successfully installed gunicorn”, `it’s safe to ignore
this <https://stackoverflow.com/a/25611194>`__.

Creating or moving your app
^^^^^^^^^^^^^^^^^^^^^^^^^^^

If you already have a Python-based web app, then you can copy in your files to the directory you chose above. For example, you can use ``scp/sftp`` to upload it, or if you're using source control, clone it using ``git`` (or another tool) into your home directory.

If you are a beginner, take a look at the `Django documentation <https://docs.djangoproject.com/en/1.11/intro/tutorial01/>`__ for help with that.

Below are some starter projects:

`Django <https://sample.soc.srcf.net/django/>`__ (`Root mount on custom domain <http://django.sample.soc.srcf.net>`__)
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

To create the skeleton project::

    $ django-admin startproject example
    $ mv example django
    $ cd django

Now take a look at ``django/example/settings.py`` for how to configure your site.

`Flask <https://sample.soc.srcf.net/flask/>`__ (`with Raven login <https://sample.soc.srcf.net/flask/raven>`__)
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

See ``flask/app.py`` for a minimum base application.

Forward your web requests
^^^^^^^^^^^^^^^^^^^^^^^^^

The SRCF uses Apache to serve websites so if you need to run a backend web app, for example a Django, Rails or Express server, then you will need to forward web requests. We explain how to do this in the :ref:`app hosting docs <forward-requests>`.

Preparing your app to be supervised
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Create a file at ``~/myapp/run`` with content like:

::

   #!/bin/bash -e
   . ~/myapp/venv/bin/activate
   PYTHONPATH=~/myapp/src:$PYTHONPATH \
       exec gunicorn -w 2 -b unix:/home/crsid/myapp/web.sock \
       --log-file - main:app

Replace ``main:app`` with the module containing the app, and name of
your app, then make ``run`` executable:

::

   chmod +x ~/myapp/run

Test executing the run script. You should be able to access your website
while running it (or see any errors in your terminal).

Supervise your app with systemd
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Cool, your app works. [[Set up systemd|doc services/webapps#supervise]]
to supervise your app (so that it starts and restarts automatically).

Bonus Gunicorn tip: reloading your app
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Gunicorn will reload your app if you send it SIGHUP. You can teach
systemd that fact by adding the following line under ``[Service]`` in
your systemd unit file:

::

   ExecReload=/bin/kill -HUP $MAINPID

and then running ``systemctl --user daemon-reload``. After that, you can
use ``systemctl`` to reload your app:

::

   systemctl --user reload myapp

Suggestions/improvements?
^^^^^^^^^^^^^^^^^^^^^^^^^

Did you like this or find this cool? We invite you to check out :ref:`more tutorials <tutorials>` and :ref:`read our recommended resources<recommended-resources>`.

If you have a better way to host Python-based apps on the web server
(or a suggestion for how we could improve this documentation), send us an email at ``support@srcf.net``!

.. note::
  The source for these docs are generously provided by the Open Computing Facility. They have been amended to include SRCF-specific information. Read more about them `here <https://www.ocf.berkeley.edu>`__.