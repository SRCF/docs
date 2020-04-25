Email on pip
------------

How do I read my SRCF email?
~~~~~~~~~~~~~~~~~~~~~~~~~~~~

**This information applies only to users of the "legacy" or "advanced"
SRCF mail server. It might apply to you if you had a SRCF account before
October 2018** (or you deliberately chose to handle your mail this way).
To see which email system you are currently using, see the `Control
Panel <https://control.srcf.net/member>`__.

There are four options:

#. Forward it to some other address. When your account is first set up
   it will be configured to forward mail to the address you gave us when
   you applied — see the FAQ entry: `How do I set up mail
   forwarding? <email#forwarding>`__ for instructions on how to
   configure this.
#. Read your mail using an email client running on the server, for
   example *mutt* or *alpine*.
#. Read your mail via IMAP from a remote machine. You should always
   connect using a secure connection (enable “SSL” or the equivalent in
   your email client's configuration), otherwise your connection may be
   blocked. The incoming mail server name should be set to
   ``pip.srcf.net`` and the port should be set to 993. Note that we do
   not run a POP3 server, as it is an older protocol and provides no
   additional functionality over IMAP.

   *NB: If you wish to use IMAP, we especially recommend
   `Hades <email-hades>`__ due to `known quirks <#mbox-sucks>`__ of the
   IMAP server on pip. You can switch to Hades on the `Control
   Panel <https://control.srcf.net/member>`__.*

#. Use our pip webmail service:
   `webmail.pip.srcf.net <https://webmail.pip.srcf.net/>`__.

   *`Hades <email-hades>`__ offers a significantly superior webmail
   experience for most users. You can switch to Hades on the `Control
   Panel <https://control.srcf.net/member>`__.*

Can I use the SRCF machine as an outgoing (SMTP) mail server?
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Yes — you can use ``smtp.srcf.net``, port 587, using STARTTLS.
Authenticate using your SRCF username and password. This service is part
of `Hades <email-hades#smtp>`__ but is available to all SRCF members
whether or not your email is hosted on Hades.

You cannot use *pip* as a SMTP server, though — except from applications
running on pip itself.

How do I set up mail forwarding?
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

| **This information applies only to users of the "legacy" or "advanced"
  SRCF mail server. It might apply to you if you had a SRCF account
  before October 2018** (or you deliberately chose to handle your mail
  this way). To see which email system you are currently using, see the
  `Control Panel <https://control.srcf.net/member>`__.
| If you simply want to forward your SRCF email to an address elsewhere,
  we suggest configuring that using the `Control
  Panel <https://control.srcf.net/member>`__. If you want a more complex
  mail forwarding setup, you could use a **.forward** file, or `a Sieve
  filter on Hades <email-hades#mailfilter>`__.

Create a file called .forward (note the leading full-stop) in your home
directory containing the email address to which you would like your mail
to be forwarded.

The SRCF offers a simple interactive tool to create this file for you.
Login to ``shell.srcf.net`` using `Secure Shell </utilities/ssh/>`__ and
type: ``srcf-MailForward`` at the prompt, followed by return. You will
then be prompted to enter an e-mail address where you would like all
your SRCF mail forwarded to. Once this program has run, type exit to
logout.

How do I set up mail filtering?
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

**This information applies only to users of the "legacy" or "advanced"
SRCF mail server. It might apply to you if you had a SRCF account before
October 2018** (or you deliberately chose to handle your mail this way).
To see which email system you are currently using, see the `Control
Panel <https://control.srcf.net/member>`__.

We have the `Exim <http://www.exim.org/>`__ mail transfer agent
installed. See `the Exim filtering
documentation <http://www.exim.org/exim-html-current/doc/html/spec_html/filter_ch01.html>`__.

If you would prefer a simpler interface to mail filtering, try
`Hades <email-hades#mailfilter>`__ which offers very powerful filtering
using Sieve, with a friendly web-based front-end. (However, there are a
few things which cannot be done on Hades, such as piping your email into
a custom program; for that purpose you should use an Exim filter on
pip.)

You mentioned known quirks of mail on pip...?
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

pip's mail service dates from a time long ago when most UNIX systems
stored email in `Mbox <https://en.wikipedia.org/wiki/Mbox>`__ format.
Mbox is a primitive file format which concatenates all emails in a
mailbox into one long file. It is slow and inefficient to use, and does
not support concurrent access (you can't read your inbox whilst a
message is arriving, for example!). Our IMAP server tries its best by
using caches and indices but it is fundamentally not an efficient data
storage system.

Furthermore, if you create folders (besides INBOX) in which to file your
emails, those are placed in your home directory along with your other
files. This leads to confusion, and also can lead to your entire home
directory being served over IMAP, which has been known to upset email
software (unsurprisingly).

And for added confusion, Mbox is incapable of storing any email containg
a line of text starting with the word "From". Yes, really. (Mail
software has to rewrite it as ">From" as a workaround.)

We cannot easily convert pip to a more modern email storage format,
though, as we have some people with extensively curated mbox hierarchies
and we don't want to break email for those people.

So (in September 2018) we created a brand new email service called
`Hades <email-hades>`__ which runs alongside the "legacy" email service
on pip. Hades was implemented with the benefit of another 20+ years of
advancements in email technology.

We encourage you to take a look at Hades. If you're used to the setup on
pip, you may find it quite different (better, we hope!), but if you have
a complex Exim filter it may be time consuming to redefine your email
filtering requirements in Sieve on Hades.

We have no immediate plans to discontinue pip's mail service, although
eventually we hope to be able to shut down the IMAP server on pip as our
IMAP users migrate to Hades. We know that there are some things that
advanced users might want to do which are only possible on a traditional
UNIX mail system, and we intend to keep running the mail service on pip
for these advanced use cases.
