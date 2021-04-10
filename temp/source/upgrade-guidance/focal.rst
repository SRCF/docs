Spring 2021 server upgrade
==========================

.. warning::
    These notes relate to the migration from Ubuntu 16.04 to 20.04, scheduled for 3rd/4th April 2021.

Server changes
~~~~~~~~~~~~~~

The following shell-accessible  servers, currently on Ubuntu 16.04 'Xenial Xerus', will be upgraded to 20.04 'Focal Fossa':

* ``pip`` (aka. *shell.srcf.net*), the main shell server
* ``sinkhole`` (aka. *webserver.srcf.net*), the web server

As we already have ``doom``, a 20.04 server for games and long-running processes, we'll be decommissioning the old games server ``cavein`` shortly after the upgrade.  Please migrate your servers and scheduled tasks ahead of the upgrade.

We'll also be upgrading other servers hosting various SRCF services, which will experience some downtime:

* ``blizzard``, the DNS server (though access to other services on the *srcf.net* domain will be unaffected by this)
* ``flame``, the news server
* ``squirrel``, the MySQL server

Software updates
~~~~~~~~~~~~~~~~

If you'd like to check what version of a particular package will be installed after the upgrade, you can search for it on the `Ubuntu package directory <https://packages.ubuntu.com>`_.  If a package is listed for ``xenial``, but not for ``focal``, then it is liable to be removed following the upgrade -- `contact the sysadmins <https://www.srcf.net/contact>`_ if there's a package you need that's slated for removal, and we can see what can be done.

.. csv-table:: Notable version changes
    :header: Name, Current version, New version, Links
    :widths: 20 20 20 40

    Apache, 2.4.18, 2.4.41, `CHANGES file <https://github.com/apache/httpd/blob/2.4.41/CHANGES>`_
    MySQL, 5.5, 8.0, `Release Notes <https://dev.mysql.com/doc/relnotes/mysql/8.0/en/>`_
    Node.js, 4.2.6, 10.19.0, `Changelogs <https://github.com/nodejs/node/tree/v10.19.0/doc/changelogs>`_
    PHP, 7.0, 7.4, `Appendices (Migrating from ...) <https://www.php.net/manual/en/appendices.php>`_
    PostgreSQL, 9.5, 12, `Release Notes <https://www.postgresql.org/docs/release/>`_
    Python, 3.5, 3.8, `What's New in Python <https://docs.python.org/3.8/whatsnew/index.html>`_
    Ruby, 2.3, 2.7, `Ruby Releases <https://www.ruby-lang.org/en/downloads/releases/>`_

If you've built or compiled your own software linked to libraries on the system, you'll likely need to recompile them following the upgrade.

Python 2
--------

The majority of Python 2 packages have been dropped by Ubuntu, leaving only a handful of libraries acting as dependencies for packaged software that doesn't run on Python 3.  If you're running your own software with py2, you should seek to make it compatible with py3 -- official support for py2 ended in January 2020, with setuptools, pip and other core components becoming py3-only.

Failing that, the core interpreter is still available, along with the ability to create py2 virtual environments if you're currently relying on any system-installed py2 packages that will no longer be available.  Beware of upgrading the build tools in such environments -- the last version of pip to support py2 is 20.3, and for setuptools the last compatible release was 44.0.0.

Python 3
--------

Python 3 itself will receive a minor version bump from 3.5 to 3.8 -- the `What's New <https://docs.python.org/3/whatsnew/>`_ section of the Python documentation lists all the changes between versions.

The change in version also changes the library path, which means any packages user-installed to ``~/.local/lib/python3.5`` (with ``pip install --user`` or otherwise) will no longer be accessible and will need reinstalling following the upgrade.  In addition, any virtual Python environments using the system copy of py3 will stop working, and will need recreating.  Custom installations of Python (e.g. those installed with tools like `pyenv <https://github.com/pyenv/pyenv>`_) may also need reinstalling following system library updates.

PHP
---

PHP will be updated from 7.0 to 7.4.  A list of new features and backwards-incompatible changes can be found in `their documentation <https://www.php.net/manual/en/appendices.php>`_.

Notably, this introduces a number of new syntax features, such as arrow function shorthand and the null-safe ``?.`` operator.  The majority of backwards-incompatible changes seem to cover previously unspecified or erroneous behaviour, though consult the *Backward Incompatible Changes* sections for all the details.

Node.js
-------

Node is being brought into the (relatively) modern times, to be updated from major version 4 to 10.  The canonical binary name will change from ``nodejs`` to ``node``, though the former will remain as a symlink.

Unsurprisingly there will have been a number of additions and changes -- Node's `changelogs <https://github.com/nodejs/node/tree/v10.19.0/doc/changelogs>`_ cover all the details but are quite verbose; there's also `this list of breaking changes <https://github.com/WaleedAshraf/nodejs-major-changes>`_ if you just want to check your code for compatibility.
