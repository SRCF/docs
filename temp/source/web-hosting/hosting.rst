Available hosting types
-----------------------

This page lists examples of applications and frameworks you can use to build a website.  They can also be seen at https://sample.soc.srcf.net, and you can take a look at their configuration inside ``/public/societies/sample``.

All accounts include our :ref:`regular web hosting <web-hosting>`,
which is suitable for static content, PHP (WordPress, Joomla, etc.), and
CGI/FastCGI. For those wishing to host more advanced web apps
with the SRCF (Django, Flask, Rails, Node.js, etc.) and leverage their full flexibility, see :ref:`this docs page <app-hosting>`

PHP applications
~~~~~~~~~~~~~~~~

Scripts in ``public_html`` using ``.php`` extensions will be executed by PHP by default.

`WordPress <https://sample.soc.srcf.net/wordpress/>`__
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Follow :ref:`our full WordPress installation tutorial <website-wordpress>`.

Static site generators
~~~~~~~~~~~~~~~~~~~~~~

You can use a generator of your choice to manage your site.  Just have it output into your account's ``public_html`` directory.

`Jekyll <https://sample.soc.srcf.net/jekyll/>`__
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

To create the skeleton project::

    jekyll new jekyll
    cd jekyll

For a root site (i.e. top of public\_html)::

    ln -s /public/societies/sample/public_html _site

...or for a site in a subdirectory, edit ``_config.yaml`` to set ``baseurl`` to e.g. ``/jekyll``, then::

    mkdir /public/societies/sample/public_html/jekyll
    ln -s /public/societies/sample/public_html/jekyll _site

To (re)build the site::

    jekyll build
