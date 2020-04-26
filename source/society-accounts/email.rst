Society email
-------------

Society accounts, like personal accounts, can receive email to either their base name or a suffixed name.  This can be useful for setting up 'role' addresses for the society account, for example to pass mail sent to ``<socname>-president@srcf.net``.

Default role addresses
~~~~~~~~~~~~~~~~~~~~~~

All society accounts come with the role address **<socname>-admins@srcf.net**, which can't be overwritten.  Mail sent here will be distributed to the individual SRCF mail accounts of all the users who are admins of the society.

By default, we also define **<socname>-webmaster@srcf.net** as an alias to *<socname>-admins@srcf.net*.  This will be used as the default sender address for email sent by the account, and may be displayed in some error messages to visitors, but you can change where mail ends up as described below.

Customising mail handling
~~~~~~~~~~~~~~~~~~~~~~~~~

You can set up a ``.forward`` file in your society's directory at ``/societies/<socname>/.forward``.  This will be used to process all email sent to addresses of the form ``<socname>@srcf.net`` or ``<socname>-<anything>@srcf.net``, with the exception of ``<socname>-admins@srcf.net`` which is always forwarded to admins.

.. note::

    Unlike personal accounts, mail sent to **<socname>@srcf.net** will be bounced by default -- no default mail handling is configured for societies.

.. seealso::

    - :ref:`pip-forwarding`
