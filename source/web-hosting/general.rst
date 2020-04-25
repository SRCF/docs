Sample SRCF Sites
-----------------

This society account runs basic sites using a variety of site generators
and frameworks.

You can take a look at their configuration inside
``/public/societies/sample``.

This is a work-in-progress – for any suggestions or corrections to this
site, please email sample-admins@srcf.net.

About the webserver
~~~~~~~~~~~~~~~~~~~

The SRCF provides a single shared Apache webserver on
``webserver.srcf.net`` (you can SSH in with your usual SRCF
credentials). By default, this will serve static files and CGI scripts
from ``/public/home/$user/public_html`` and
``/public/societies/$name/public_html``. In addition, you can run your
own standalone web applications on the webserver, and proxy to them from
your public site.

Unlike most hosting providers, websites are run using your own (or your
society's) user account on the server. This means your site has the
permissions needed to write its own files, for example with content
editors or automatic updates.

.. raw:: html

   <div class="alert alert-warning">

**Don't set world-writeable permissions on files or directories** – this
would allow anyone on the server to write to your files, and should
never be required (to share responsibility over files, create and host
from a society account).

.. raw:: html

   </div>

Different web software will have its own specific requirements, but
there are certain aspects of the SRCF environment that apply in all
cases.

Apache configuration
^^^^^^^^^^^^^^^^^^^^

As our server handles hundreds of websites, we don't allow users to
change server-level configuration, including Apache configuration in
``/etc/apache2``, as various online tutorials may lead you to.

To use Apache directives, you should use a ``.htaccess`` file, which
provides a subset of functionality at a per-site level.

Software installation
^^^^^^^^^^^^^^^^^^^^^

Similarly, we don't allow users to install packages using ``apt-get`` or
similar, as this would affect all users on the system.

If we're missing a piece of software you'd like to use, it's available
in `Ubuntu's repositories <https://packages.ubuntu.com>`__ (note that we
are running Xenial), and it can be used safely in a multi-user
environment, you may `contact the
sysadmins <https://www.srcf.net/contact>`__ to request its installation.
However, running a long-term support operating system means that we can
generally only install quite outdated versions (often several years out
of date, just security fixes included).

In some cases, you may be able to set up or install your own copy of
software within your (or a society's) home directory. It is then your
responsibility to keep it updated – accounts with security
vulnerabilities may be suspended without notice.

Databases
^^^^^^^^^

If your application needs a MySQL or PostgreSQL database, you can create
either from the `Control Panel <https://control.srcf.net>`__. For
society accounts, ensure you use the society database credentials and
not your personal ones. The database server hostnames are
``mysql.internal`` and ``postgres.internal``.

Raven authentication
^^^^^^^^^^^^^^^^^^^^

Generally you have two options here:

#. Restrict access using the ```Require``
   directive <https://httpd.apache.org/docs/2.4/mod/mod_authz_core.html#require>`__
   in .htaccess.
#. Use a Raven-compatible authentication library within your app.

The .htaccess approach is easy, works regardless of the type of site
you're hosting (static, PHP, proxied etc.), and can also restrict to
admins of a SRCF society account with the ``unix-group`` option. The
``REMOTE_USER`` environment variable will be populated with the
authenticating user's CRSid, in case your application needs to be aware
of the current user.

Port binding
^^^^^^^^^^^^

When running standalone web applications, ensure you only bind them to
``localhost`` on a randomly-chosen high-numbered port. See
``public_html/.htaccess`` for how to proxy access to them via your site.

PHP applications
~~~~~~~~~~~~~~~~

Scripts in ``public_html`` using ``.php`` extensions will be executed by
PHP by default.

`WordPress </wordpress/>`__
^^^^^^^^^^^^^^^^^^^^^^^^^^^

Follow WordPress' `installation
guide <https://wordpress.org/support/article/how-to-install-wordpress/>`__.
To serve the site from the root of your SRCF domain, extract the
contents of the ``wordpress`` folder in the download to your
``public_html``. Databases should be created and configured as noted
above. Ensure your ``wp-config.php`` is not world-readable, as that will
contain your database credentials.

It is advised to lock down WordPress' admin panel at ``/wp-admin/`` by
putting that directory behind Raven authentication – see
``public_html/wordpress/wp-admin/.htaccess``. We also recommend you
disable *Allow link notifications from other blogs (pingbacks and
trackbacks) on new posts*, under *Settings* > *Discussion* in the admin
panel.

WordPress will likely refuse to do automatic updates, instead requesting
FTP credentials – this is because it assumes it can't write its own
files on the server. See `this FAQ
entry <https://www.srcf.net/faq/managing-socaccount#wordpressupdate>`__
for a workaround. If configured correctly, the updates page should
include text similar to *Future security updates will be applied
automatically*.

If you have a low-traffic or private site, WordPress' cron service
(which handles updates and other background tasks) may not run regularly
enough. You can invoke ``wp-cron.php`` manually using cron or systemd
timers – see ``crontab`` or ``wordpress-cron.timer`` respectively.

Python applications
~~~~~~~~~~~~~~~~~~~

Whilst you can run Python scripts via CGI, the startup overhead is high
which will make requests seem slow. The suggested route is to run your
own WSGI backend server (we recommend
`gunicorn <https://gunicorn.org>`__), and have Apache forward requests
as described above.

Generally you should keep your code outside of ``public_html`` –
visitors should see the pages generated by your application, not the
application itself. If your application involves static files, you can
exclude a directory from your proxying, and have the application write
that directory directly (or symlink to it).

See ``run.sh`` for command-line options, and ``crontab`` or
``python-web@.service`` for deployment.

.. raw:: html

   <div class="alert alert-warning">

**Don't run development servers on the SRCF** – these typically provide
remote code execution via debug consoles, which grants any visitor full
access to your SRCF account. Ensure your site runs in a production mode
if configurable.

.. raw:: html

   </div>

`Django </django/>`__ (`root mount on custom domain <http://django.sample.soc.srcf.net>`__)
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

To create the skeleton project:

::

    $ django-admin startproject example
    $ mv example django
    $ cd django

Now take a look at ``django/example/settings.py`` for how to configure
your site.

`Flask </flask/>`__ (`with Raven login </flask/raven>`__)
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

See ``flask/app.py`` for a minimum base application.

Node.js applications
~~~~~~~~~~~~~~~~~~~~

Ubuntu only provides a significantly outdated version of Node.js (v4.2.6
at the time of writing) in its repositories. If you need a newer
version, you can `download the latest Linux
binaries <https://nodejs.org/en/download/>`__ and extract them to your
(or your society's) home directory. Note that it is your responsibility
to keep it updated.

`Express </nodejs/>`__
^^^^^^^^^^^^^^^^^^^^^^

To install dependencies:

::

    $ npm install --save express

Then see ``nodejs/app.js`` for a minimum base application.

Static site generators
~~~~~~~~~~~~~~~~~~~~~~

You can use a generator of your choice to manage your site. Just have it
output into your account's ``public_html`` directory.

`Jekyll </jekyll/>`__
^^^^^^^^^^^^^^^^^^^^^

To create the skeleton project:

::

    $ jekyll new jekyll
    New jekyll site installed in /public/societies/sample/jekyll.
    $ cd jekyll

For a root site (i.e. top of public\_html):

::

    $ ln -s /public/societies/sample/public_html _site

...or for a site in a subdirectory, edit ``_config.yaml`` to set
``baseurl`` to e.g. ``/jekyll``, then:

::

    $ mkdir /public/societies/sample/public_html/jekyll
    $ ln -s /public/societies/sample/public_html/jekyll _site

To (re)build the site:

::

    $ jekyll build
