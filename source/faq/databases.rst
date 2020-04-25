Frequently Asked Questions: Databases
-------------------------------------

How do I connect to my database?
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

For security reasons our database server can only be accessed from the
machine on which it runs (pip). One result of this is that the hostname
to which a connection should be made must always be ``localhost`` —
``pip.srcf.net`` and ``www.srcf.net`` will not work. The username and
password should be those supplied when you applied for your database. If
you cannot remember the password, let us know and we'll reset it for
you.

Can I connect to my database from another computer?
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Yes, although for security reasons, this must be done using an encrypted
ssh tunnel. The command line to use is:

::

    mymachine$ ssh -L 9876:localhost:3306 shell.srcf.net
    or:
    pip$ ssh -R 9876:localhost:3306 mymachine

For a PostgreSQL database replace 3306 with 5432.

If you are using `PuTTY </utilities/ssh/>`__ under MS windows, then the
setting you need is "Connection->SSH->Tunnels". Add a new forwarded
port, and specify source port 9876, destination localhost and "Local"
and then ssh to the SRCF server as normal.

Once the SSH tunnel is setup. connect to the mysql database using
``127.0.0.1``, port 9876. **NOTE** You must use ``127.0.0.1`` and not
``localhost`` as otherwise mysql will attempt to connect via the local
UNIX socket and not TCP!

Is there a web-based method of managing my database?
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Yes, we have `phpMyAdmin <https://www.srcf.net/phpmyadmin/>`__
installed: https://www.srcf.net/phpmyadmin/
