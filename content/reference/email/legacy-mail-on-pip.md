---
title: "Legacy mail on pip"
date: 2021-04-20T09:27:49+01:00
group: email
layout: docs
toc: true
---

{{< alert type="info" >}}

This information applies only to users of the 'legacy' or 'advanced'
SRCF mail server. It might apply to you if you had a SRCF account before
October 2018, or you deliberately chose to handle your mail this way.

To see which email system you are currently using, see the [control
panel](https://control.srcf.net/member).

{{< /alert >}}

## Reading mail

### Legacy forwarding

You can forward incoming mail to some other address. For old accounts,
when your account was first set up it was configured to forward mail to
the address you gave us when you applied. See
[mail forwarding]({{< relref "#mail-forwarding" >}}) below.

### Local client

Read your mail using an email client running on the server, for example
*mutt* or *alpine*.

### For apps: IMAP

To configure any standards-compliant mail app to read your email, you
will need the following details:

- Server type: **IMAP**
- IMAP server: **pip.srcf.net**
- Port: **993**
- Security: **SSL**
- Username: *your SRCF username*, e.g. **spqr2** (*not* your email
    address)
- Password: *your SRCF password* (*not* your Raven password)

Note that we do not run a POP3 server, as it is an older protocol and
provides no additional functionality over IMAP.

### Webmail

Use our `pip` webmail service:
[webmail.pip.srcf.net](https://webmail.pip.srcf.net)

{{< alert type="info" >}}

[Hades email]({{< relref "hades-email-service" >}}) offers a significantly superior
webmail and IMAP experience for most users. You can switch to Hades on
the [control panel](https://control.srcf.net/member).

{{< /alert >}}

## Sending mail

You cannot use `pip` itself as a SMTP server, except from applications
running on `pip` itself.

You can send email from your personal SRCF email account over
[SMTP]({{< relref "#sending-email" >}}). This service is part of Hades, but is
available whether your email is hosted on Hades or not.

## Mail forwarding

Create a file called `.forward` (note the leading full-stop) in your
home directory containing the email address to which you would like your
mail to be forwarded.

The SRCF offers a simple interactive tool to create this file for you.
Run `srcf-MailForward` over SSH, which will prompt you to enter an
e-mail address where you would like all your SRCF mail forwarded to.

### Auto-forward

We also provide `srcf-autoforward`, a tool to generate role-like
addresses with a simpler syntax. You need to create a file called
`autoforward` in a group account's directory (or your home directory,
for your own roles), where each line consists of a role name, a colon,
and a comma-separated list of target addresses:

```
    <role>:<email>,<email>...
```

For example:

```
    treasurer:spqr2@cam.ac.uk,treasurer@example.com
```

Once you've defined your roles, you need to build the actual `.forward`
file:

```
    srcf-autoforward <groupname>
```

## Mail filtering

We have the [Exim](https://www.exim.org) mail transfer agent installed
-- see [the Exim filtering
documentation](https://www.exim.org/exim-html-current/doc/html/spec_html/filter_ch01.html)
for how to write filters in your `.forward` file.

Filters in Exim are more complicated than [Hades' Sieve filters]({{< relref "#mail-filtering" >}}), though there are
a few things supported which cannot be done on Hades, such as piping
your email into a custom program.

Here are a few examples of basic forwarding for a group account. Note
that the `# Exim filter` line is required.

```exim
    # Exim filter

    # Forward emails for <groupname>-webmaster@srcf.net to spqr2@cam.ac.uk:
    if ($local_part_suffix is "-webmaster") then
       deliver spqr2@cam.ac.uk
    endif

    # Forward <groupname>-treasurer@srcf.net to spqr and an external address:
    if ($local_part_suffix is "-treasurer") then
       deliver spqr2@cam.ac.uk
       deliver treasurer@example.com
    endif

    # Forward anything not yet processed to a lists.cam mailing list:
    if not delivered then
       deliver group-example-committee@lists.cam.ac.uk
    endif
```

## Known quirks

pip's mail service dates from a time long ago when most UNIX systems
stored email in [Mbox](https://en.wikipedia.org/wiki/Mbox) format. Mbox
is a primitive file format which concatenates all emails in a mailbox
into one long file. It is slow and inefficient to use, and does not
support concurrent access (you can't read your inbox whilst a message
is arriving, for example). Our IMAP server tries its best by using
caches and indices but it is fundamentally not an efficient data storage
system.

Furthermore, if you create folders (besides INBOX) in which to file your
emails, those are placed in your home directory along with your other
files. This leads to confusion, and also can lead to your entire home
directory being served over IMAP, which has been known to upset email
software (unsurprisingly).

And for added confusion, Mbox is incapable of storing any email containg
a line of text starting with the word 'From'. Yes, really. (Mail
software has to rewrite it as `>From` as a workaround.)

We cannot easily convert pip to a more modern email storage format,
though, as we have some people with extensively curated mbox hierarchies
and we don't want to break email for those people.

So (in September 2018) we created a brand new email service called
[Hades]({{< relref "hades-email-service" >}}) which runs alongside the "legacy"
email service on pip. Hades was implemented with the benefit of another
20+ years of advancements in email technology.

We encourage you to take a look at Hades. If you're used to the setup
on pip, you may find it quite different (better, we hope!), but if you
have a complex Exim filter it may be time consuming to redefine your
email filtering requirements in Sieve on Hades.

We have no immediate plans to discontinue pip's mail service, although
eventually we hope to be able to shut down the IMAP server on pip as our
IMAP users migrate to Hades. We know that there are some things that
advanced users might want to do which are only possible on a traditional
UNIX mail system, and we intend to keep running the mail service on pip
for these advanced use cases.
