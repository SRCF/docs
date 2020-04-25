Frequently Asked Questions: Troubleshooting
-------------------------------------------

Why can't I log in with passwordless ssh?
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

There are a number of reasons why your passwordless ssh setup might not
be working but by far the most common (and the hardest to detect on the
client side!) is incorrect permissions on your ``.ssh`` directory.
Because the ``authorized_keys`` file contains sensitive information it
must not be readable by any other user. Therefore you should ensure that
the file ``$HOME/.ssh/authorized_keys`` have permissions ``-rw-------``
(i.e. 600). 660 (``-rw-rw----``) will not work even if you are the only
member of the group that owns the ``authorized_keys`` file. The same
caution about permissions applies to the ``.ssh`` directory itself.
