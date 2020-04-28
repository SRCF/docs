Email accounts
--------------

Every member of the SRCF has an email address on the *srcf.net* domain.  If your SRCF username is ``spqr2``, your SRCF email address is **spqr2@srcf.net**.

In fact, you have as many email addresses as you want, by appending a suffix of your choosing: **spqr2-<something>@srcf.net**.  You can use this for filtering different types of email in different ways.  You also have equivalent addresses in our old domain, *srcf.ucam.org*.

Incoming mail
~~~~~~~~~~~~~

You can choose (via the `control panel <https://control.srcf.net/member>`__) one of three possible ways for delivering email sent to your SRCF email addresses.

.. _forwarding:

Simple forwarding
^^^^^^^^^^^^^^^^^

All of your email is forwarded to another address.  For this we use the contact address you provided when you signed up, which you can also change on the `control panel <https://control.srcf.net/member>`__.

:ref:`SRCF Hades email service <hades-email>`
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

A modern email service.  If you want to read your email on the SRCF, rather than forwarding it to another email service, this is what we recommend.

:ref:`.forward file and/or legacy mailbox <pip-email>`
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

This is a primitive and somewhat unfriendly system for hosting a mailbox or forwarding mail, but does offer some programmability via the SRCF shell server; by writing an Exim filter file you can, for example, pass email messages to a custom program.  This is recommended only for advanced users and people who already have a mailbox on pip which predates Hades.

.. _smtp:

Outgoing mail
~~~~~~~~~~~~~

You can send email from your personal SRCF email account over :ref:`SMTP <hades-smtp>`.  This service is part of Hades, but is available whether your email is hosted on Hades or not.

.. seealso::

   - :ref:`mailing-lists`
