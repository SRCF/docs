.. _group-perms:

File permissions
----------------

Each group account has a corresponding system (UNIX) group that manages access permissions for files
and directories in the group account space. Both ``/societies/<groupname>`` and ``/public/societies/<groupname>`` are writable by the system group. Each admin of the account is then added to that system group, which grants the admin permissions to manage files.

When creating new files or directories, you should ensure the system group permissions are correct -- for each file the system group should match the group account name (and not your personal system group), and permissions should include group-write.  Example output from ``ls -l``::

    drwxrwsr-x  2 <crsid> <groupname> 4.0K Jan  1  2020 directory
    -rw-rw-r--  2 <crsid> <groupname>    0 Jan  1  2020 file
