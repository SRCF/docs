Software and installation
-------------------------

Our main shell server includes a plethora of Linux software, some of which can be used graphically over a VNC session.

If something is missing that you'd like to use, we may be able to install it for you.  The usual constraints are that it should be available in `Ubuntu's repositories <https://packages.ubuntu.com>`__, and suitable for a multi-user environment.  You may `contact the sysadmins <https://www.srcf.net/contact>`__ to request an installation.

As we run long-term support releases of Ubuntu [1]_, you may find that the versions we have installed are rather outdated (typically several years behind).  As packages are managed by Ubuntu maintainers, security fixes are backported and applied to these versions, but new features are not.  This means some custom software may incorrectly detect our versions as insecure, as Ubuntu-patched releases add a version suffix (for example, PHP is ``7.0.33-0ubuntu0.16.04.15``).

Whilst some software can be updated through the use of third-party distributions, or by building the latest version from source, this would add significantly more complexity to system maintenance and upgrade considerations, and would require trusting the additional authors or distribution maintainers.

In some cases, you may be able to set up or install your own copy of software within your (or a group account's) home directory.  However, it is then your responsibility to keep it updated – accounts with security vulnerabilities may be suspended without notice.

System-wide upgrades
~~~~~~~~~~~~~~~~~~~~

Every few years, we need to move to a newer version of Ubuntu in order to continue receiving security updates.  As a side-effect, this will introduce significantly-newer versions of most installed software, which is liable to break any unusual software configurations of our users.  In the past we've seen significant changes with Apache and PHP, which many users use for their personal or group websites.

We are aware that newer versions of Ubuntu are available and waiting for us -- upgrades are not taken lightly, and will be carefully planned to minimise disruption to our users.

Program-specific notes
~~~~~~~~~~~~~~~~~~~~~~

Node.js
^^^^^^^

Ubuntu comes with node version 4.2.6, npm version 3.5.2.  Note that the Node binary is called ``nodejs``.  If you need a newer version, consider using `Node Version Manager <https://github.com/nvm-sh/nvm>`_.

PHP
^^^

Ubuntu provides version 7.0 of PHP, along with a handful of modules.  We're aware that various web applications will flag this version as outdated or insecure -- see above for how this is catered for.

Python
^^^^^^

We have Python versions 2.7 and 3.5.  Note that the ``python`` and ``pip`` binaries are Python 2, use ``python3`` and ``pip3`` for Python 3.  Assorted Python modules (as packaged by Ubuntu) are installed for both, and others can be installed on request (subject to the notes above).  If you need a newer version of Python, consider using `pyenv <https://github.com/pyenv/pyenv>`_.

Port binding
~~~~~~~~~~~~

When running programs that bind to ports, please ensure you only bind to ``localhost`` so they're not publicly accessible, and choose a random high-numbered port to try and avoid conflicts with other users.

If you're able to bind to a UNIX socket instead of a port, this has a few benefits: the socket is subject to filesystem permissions so only you or a society account can access it, and you are free to choose a unique path for it.

.. seealso::
   :ref:`forward-requests`

.. [1] At the time of writing, the SRCF shell and web servers both run Ubuntu 16.04.
