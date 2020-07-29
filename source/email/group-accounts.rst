Group account email
-------------------

Group accounts, like personal accounts, can receive email to either their base name or a suffixed name.  This can be useful for setting up 'role' addresses for the group account, for example to pass mail sent to ``<groupname>-president@srcf.net``.

Default role addresses
~~~~~~~~~~~~~~~~~~~~~~

All group accounts come with the role address **<groupname>-admins@srcf.net**, which can't be overwritten.  Mail sent here will be distributed to the individual SRCF mail accounts of all the users who are admins of the group account.

By default, we also define **<groupname>-webmaster@srcf.net** as an alias to *<groupname>-admins@srcf.net*.  This will be used as the default sender address for email sent by the group account, and may be displayed in some error messages to visitors, but you can change where mail ends up as described below.

Customising mail handling
~~~~~~~~~~~~~~~~~~~~~~~~~

You can set up a ``.forward`` file in your group account's directory at ``/societies/<groupname>/.forward``.  This will be used to process all email sent to addresses of the form ``<groupname>@srcf.net`` or ``<groupname>-<anything>@srcf.net``, with the exception of ``<groupname>-admins@srcf.net`` which is always forwarded to admins.

.. note::

    Unlike personal accounts, mail sent to **<groupname>@srcf.net** will be bounced by default -- no default mail handling is configured for group accounts.

.. seealso::

    - :ref:`pip-forwarding`
