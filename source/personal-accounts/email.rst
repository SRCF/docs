Email
-----

.. toctree::
   :maxdepth: 2
   :hidden:

   email-hades
   email-pip

Options for SRCF mail processing
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Every member of the SRCF has a SRCF email address. If your SRCF username
is ``spqr2``, your SRCF email address is **spqr2@srcf.net**.

(In fact you have as many email addresses as you want, by appending a
suffix of your choosing: **spqr2-anything@srcf.net**. You can use this
for `filtering <#mailfilter>`__ different types of email in different
ways. You also have equivalent addresses in our old domain,
**srcf.ucam.org**.)

You can choose (via the `Control
Panel <https://control.srcf.net/member>`__) one of three possible ways
for delivering email sent to your SRCF email addresses:

-  **Forward email** — all of your email is forwarded to another
   address. For this we use the contact address you provided when you
   signed up, which you can also change on the `Control
   Panel <https://control.srcf.net/member>`__.
-  **The `SRCF Hades email service <personal-accounts/email-hades>`** — a modern email
   service. If you want to read your email on the SRCF, rather than
   forwarding it to another email service, this is what we recommend.
-  **A .forward file, and/or a legacy mailbox on pip** — this is a
   primitive and somewhat unfriendly system for hosting a mailbox or
   forwarding mail, but does offer some programmability via the SRCF
   shell server; by writing an Exim filter file you can, for example,
   pass email messages to a custom program. This is recommended only for
   advanced users and people who already have a mailbox on pip which
   predates Hades.

Note that **`society email <socmail>`__** is a bit different, and is
always handled on pip. We also offer `mailing
lists <other-services#lists>`__.

Can I use the SRCF machine as an outgoing (SMTP) mail server?
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Yes — you can use ``smtp.srcf.net``, port 587, using STARTTLS.
Authenticate using your SRCF username and password. This service is part
of `Hades <email-hades#smtp>`__ but is available to all SRCF members
whether or not your email is hosted on Hades.

How do I set up mail forwarding?
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

The easiest way is to set your email mode to forwarding on the `Control
Panel <https://control.srcf.net/member>`__.

More-flexible forwarding is available, but the exact facilities depend
on `whether you are using Hades or pip <#reading>`__.

-  `Forwarding on Hades <email-hades#forwarding>`__
-  `Forwarding on pip <email-pip#forwarding>`__

How do I set up mail filtering?
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Flexible mail filtering is available on both Hades (using Sieve) and pip
(using an Exim filter).

-  `Mail filtering on Hades <email-hades#mailfilter>`__
-  `Mail filtering on pip <email-pip#mailfilter>`__

My mailing list, soc-something@lists.cam.ac.uk...
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Whoa! Stop right there! That's the *University Information Services*
mailing list system, not the *SRCF* one, and there's nothing we can do
to help you. Try going to
`lists.cam.ac.uk <https://lists.cam.ac.uk/mailman/>`__ instead. If it's
an SRCF mailing list, it will end in @srcf.net or @srcf.ucam.org, and
then we can help you with it...
