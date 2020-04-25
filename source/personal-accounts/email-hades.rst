Hades Email
-----------

What is Hades?
~~~~~~~~~~~~~~

SRCF Hades is a modern, standards-compliant email service, introduced in
October 2018 for two reasons:

-  The old SRCF email service was `in need of
   modernisation <email-pip#mbox-sucks>`__, and
-  Many people joining the University this year are only offered a
   `proprietary messaging
   service <https://help.uis.cam.ac.uk/service/email/exchange-online>`__
   which cannot be used from many modern email apps.

How do I move to using Hades for my ``@srcf.net`` or ``@srcf.ucam.org`` address?
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Use the `Control Panel <https://control.srcf.net/member>`__. When you
choose to switch your email to Hades, the Control Panel will explain the
consequences which depend upon your current configuration. You will have
a chance to cancel the migration after seeing this information.

How do I move to using Hades for my ``@cam.ac.uk`` address? I miss Hermes.
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

You can set your @cam.ac.uk email address to deliver mail into your SRCF
Hades inbox, thus making Hades the service you use to read your
University email.

**First,** make sure that you have switched your SRCF email to Hades on
the `Control Panel <https://control.srcf.net/member>`__. **It is very
important** that you make sure that your SRCF email does not forward to
your @cam.ac.uk address **before** you proceed!

Then, go to `your page on the University lookup
service <https://www.lookup.cam.ac.uk/self>`__, Edit it, and change your
"@cam delivery address" to your SRCF email address (for example
``spqr2@srcf.net``).

How do I read my SRCF Hades email?
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

**This applies only if you have already switched your SRCF mail to use
Hades.** You can check which email service you are using, or switch to
Hades, on the `Control Panel <https://control.srcf.net/member>`__.

Webmail
^^^^^^^

The easy way to read your email:
**`webmail.hades.srcf.net <https://webmail.hades.srcf.net/>`__**.

In an app: using IMAP
^^^^^^^^^^^^^^^^^^^^^

To configure any standards-compliant mail app to read your email, you
will need the following details:

-  Incoming server:

   -  Server type: **IMAP**
   -  IMAP server: **hades.srcf.net**
   -  Security: **STARTTLS** (or SSL/TLS)
   -  Username: **your SRCF username, e.g. spqr2** (*not* your email
      address)
   -  Password: **your SRCF password** (*not* your Raven password)

-  Outgoing server:

   -  SMTP server: **smtp.srcf.net**
   -  Security: **STARTTLS**
   -  Port: **587**
   -  Username: **your SRCF username, e.g. spqr2** (*not* your email
      address)
   -  Password: **your SRCF password** (*not* your Raven password)

Some email apps such as Thunderbird will automatically configure this
for you after you fill in your SRCF email address — provided that you
have already enabled Hades email via the `Control
Panel <https://control.srcf.net/member>`__.

If you're looking for an app to get your Hades email on an Android
phone, we suggest `K-9 Mail <https://k9mail.github.io/download.html>`__.

How do I set up mail forwarding?
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

You have two options:

-  **Bypassing Hades:** On the `Control
   Panel <https://control.srcf.net/member>`__ you can configure your
   @srcf.net email address to forward mail to another address. This is
   the simplest option.
-  **Using Hades filters:** You can add a `filtering rule (see
   below) <#mailfilter>`__ which forwards all your email elsewhere (with
   or without keeping a copy in your Hades mailbox).

How do I set up mail filtering?
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

**This applies only if you have already switched your SRCF mail to use
Hades.** You can check which email service you are using, or switch to
Hades, on the `Control Panel <https://control.srcf.net/member>`__.

#. Log into `Hades Webmail <https://webmail.hades.srcf.net/>`__
#. Click "Settings"
#. Click "Filters"
#. Add a filter by clicking the "+" button at the bottom of the
   "Filters" panel
#. Choose a name for the filter, a set of conditions to match (e.g. "all
   messages") and an action (e.g. "Move message to folder")
#. Click "Save"

You can add as many filters as you want, and drag them around to change
the order in which they are run. You can optionally have multiple filter
sets, although only one of those can be active at once (for example you
could have an alternate filter set, normally disabled, to handle your
email when you are on holiday).

Alternatively, you can write your own `Sieve
script <http://sieve.info/>`__ and upload it as a *filter set*: click
the "+" button at the bottom of the "Filter sets" panel. (Note that
Sieve filters use a different syntax to the ``.forward`` Exim filters
available on pip, although the capabilities are similar.)

*Aficionados of the old Hermes webmail system, Prayer, can also
configure Sieve on our Prayer webmail system,
`old-webmail.hades.srcf.net <https://old-webmail.hades.srcf.net/>`__!*

Do I need to back up my email?
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

**Yes.** The SRCF does not guarantee to have backups of user data. **You
must take your own backups.**

You might find an IMAP synchronisation tool such as `isync (a.k.a.
mbsync) <http://isync.sourceforge.net/>`__ useful. The Arch Wiki has a
`handy guide to setting up
isync <https://wiki.archlinux.org/index.php/Isync>`__.

At times we might have disaster-recovery backups which include a
snapshot of your mailbox. If you've lost data and your own backups have
failed, try asking the sysadmins if we can help — but we might not be
able to.
