Frequently Asked Questions: Managing Shared Accounts
----------------------------------------------------

Some files in our society space are owned by an ex-admin and can't be modified... help!
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

We often get asked it we can resolve this by changing the files' owner
to be one of the current admins. For various reasons we prefer not to do
this, but are happy to enable modification by changing the "group
writable" flag on the files. Just ask the sysadmins and we'll get it
done.

If you want to make your files group-writable yourself, the appropriate
command is ``chmod g+rw <filenames>``. A variant like
``chmod -R g+rw *``, executed from the base of the society home
directory, will recursively make all your files group-readable and
writable. If the files' group is not the same as the society,
``chgrp <groupname> <filenames>`` will do the trick.

How do I hand access to my shared account to my successor?
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Make sure that the new person has a personal account on the machine.
Once this has been set up, you can add the new person to the society
account via the `Control Panel <https://control.srcf.net>`__.

During the handover period you should make sure that all file
permissions are updated appropriately. Specifically:

-  All files and directories should be owned by the society group
-  All files and directories should be group-readable and group-writable
   (``chmod g+rw``)
-  All directories should be set-group-ID (``chmod g+s``)

The script ``srcf-soc-badperms $society`` can be used to list files with
suspected bad permissions. The script ``srcf-soc-permfix $society`` will
fix the permissions for any files or directories owned by you.

How do I set up a society crontab?
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Just run:

::

    sudo -u socuser crontab -e

where *socuser* is the name of the society account that you are an admin
of. This should open the society crontab in your default editor
(typically ``nano``, ^o to save, ^x to exit).

How do I launch Django or other long running processes?
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

You can now run long running server processes (e.g. Django, other web
frameworks). Preface the command with:

::

    sudo -u socuser 

where *socuser* is the name of the society account that you are an admin
of. Note that web servers must be run on ``webserver.srcf.net``, not
``shell.srcf.net``, and proxied to from Apache.

How do I make WordPress update itself?
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

WordPress includes an update utility, but this can be quite tedious
about not correctly detecting that it can update itself; it may fail
without even trying, especially on society accounts.

To make this work you can add the following few lines to your
configuration (wp-config.php) near the bottom, but above the line that
says "stop editing":

| **It is very important that you ensure that the permissions on files
  in your society directory are writable by the society group** (and
  therefore the user that Wordpress will run as).
| Wordpress will not check in advance: if some of your files are
  writable and some are not, you will end up with a half-upgraded
  Wordpress - also known as "completely broken". This *should* be the
  case by default, but some SFTP clients may override it. The procedure
  to set this up manually is the same as for `granting access to a
  successor <#successor>`__.

::

    /**
     * Force wordpress to use direct filesystem access so that upgrades work
     * properly. See: http://core.trac.wordpress.org/ticket/10205
     * http://codex.wordpress.org/Editing_wp-config.php
     */
    define('FS_METHOD', 'direct');
    define('FS_CHMOD_DIR', (02775 & ~ umask()));
    define('FS_CHMOD_FILE', (0664 & ~ umask()));

This workaround is experimental; please `let us
know <mailto:soc-srcf-admin@lists.cam.ac.uk>`__ if it does not work for
you.
