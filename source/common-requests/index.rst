Common requests
---------------

Before contacting the sysadmins, check we haven't already answered your question here.

.. _join-society:

I want to gain access to an existing society account
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

If you are a prospective admin seeking access to an existing account, you should first contact the existing admins to request access.  If you're unable to make contact with them, you may `ask the system administrators <https://www.srcf.net/contact>`__ for assistance.

.. _grant-society:

I want to grant society admin access to someone
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

If you are an existing admin wanting to pass on adminship, you can use the `control panel <https://control.srcf.net>`__ to promote other users.  Each new admin will need to create a personal SRCF account first if they don't currently have one.

I'm getting permission errors writing files in a society space
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

.. seealso::

    - :ref:`society-perms`

You can try to fix permissions yourself using the ``srcf-soc-permfix`` tool over SSH, which can fix your own files and those of the society's system account::

    $ srcf-soc-permfix <socname>
    $ sudo -u <socname> srcf-soc-permfix <socname>

However, this won't be able to fix files owned by other admins.  If you continue to get permission errors, `ask the system administrators <https://www.srcf.net/contact>`__ to run this for you instead.

.. _lists-dot-cam:

I need help with an *@lists.cam.ac.uk* mailing list
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Whoa, stop right there!  That's the *University Information Services* mailing list system, not the *SRCF* one, and there's nothing we can do to help you.  Try going to `lists.cam.ac.uk <https://lists.cam.ac.uk/mailman/>`__ instead.

I want to update forwarding addresses on my domain
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

The SRCF does not (and cannot) provide email forwarding outside of *@srcf.net* addresses, so we don't have control over these.  You'll most likely need to consult your domain registrar to do this.
