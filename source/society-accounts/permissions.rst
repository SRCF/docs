File permissions
----------------

When a society account is created, a system group is also created, and both ``/societies/<socname>`` and ``/public/societies/<socname>`` are created group-writable for that group.  Each admin of the account is then added to that group, which will grant them permissions to manage files.

When creating new files or directories in society spaces, you should ensure the group permissions are correct -- the group of files should match the society name (and not your personal group), and permissions should include group-write.  Example output from ``ls -l``::

    drwxrwsr-x  2 <crsid> <socname> 4.0K Jan  1  2020 directory
    -rw-rw-r--  2 <crsid> <socname>    0 Jan  1  2020 file
