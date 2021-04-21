---
title: "Hades email service"
date: 2021-04-20T09:27:49+01:00
group: email
layout: docs
---

## Overview

SRCF Hades is a modern, standards-compliant email service, introduced in
October 2018 for two reasons:

- The old SRCF email service was [in need of modernization]({{< relref "legacy-mail-on-pip#known-quirks" >}}).
- Many people joining the University this year are only offered a
    [proprietary messaging
    service](https://help.uis.cam.ac.uk/service/email/exchange-online)
    which cannot be used from many modern email apps.

## For `@srcf.net` addresses

Use the [control panel](https://control.srcf.net/member) to switch to
Hades. When you choose to switch your email to Hades, the control panel
will explain the consequences which depend upon your current
configuration. You will have a chance to cancel the migration after
seeing this information.

This applies equally to our old domain `@srcf.ucam.org`.

## For `@cam.ac.uk` addresses

If you miss Hermes, you can set your \@cam.ac.uk email address to
deliver mail into your SRCF Hades inbox, thus making Hades the service
you use to read your University email.

{{< alert type="danger" >}}
You need to first enable Hades for your `@srcf.net` address as described
above. **It is very important** that you make sure that your SRCF email
does not forward to your `@cam.ac.uk` address before you proceed!
{{< /alert >}}

Go to [your page on the University Lookup
service](https://www.lookup.cam.ac.uk/self). Edit it, and change your
'\@cam delivery address' to your SRCF email address (for example
`spqr2@srcf.net`). If you have a University Exchange Online account then
by default email sent by other Exchange Online users to your \@cam.ac.uk
address will bypass the setting in University Lookup and be delivered to
you Exchange Online inbox regardless. To setup forwarding in ExOL, click
on the settings cog icon and search for 'Forwarding'.

## Reading email

### Webmail

The easy way to read your email:
[webmail.hades.srcf.net](https://webmail.hades.srcf.net/)

### For apps: IMAP

To configure any standards-compliant mail app to read your email, you
will need the following details:

- Server type: **IMAP**
- IMAP server: **hades.srcf.net**
- Security: **STARTTLS** (or SSL/TLS)
- Username: *your SRCF username*, e.g. **spqr2** (*not* your email
    address)
- Password: *your SRCF password* (*not* your Raven password)

Some email apps such as Thunderbird will automatically configure this
for you after you fill in your SRCF email address --- provided that you
have already enabled Hades email via the [control
panel](https://control.srcf.net/member).

If you're looking for an app to get your Hades email on an Android
phone, we suggest [K-9 Mail](https://k9mail.github.io/download.html).

## Sending email

Outside of webmail, you can use SMTP to send emails from your
`@srcf.net` address. Add these details to your client of choice:

- SMTP server: **smtp.srcf.net**
- Security: **STARTTLS**
- Port: **587**
- Username: *your SRCF username*, e.g. **spqr2** (*not* your email
    address)
- Password: *your SRCF password* (*not* your Raven password)

## Mail forwarding

You have two options:

- **Bypassing Hades:** On the [control
    panel](https://control.srcf.net/member) you can configure your
    *\@srcf.net* email address to forward mail to another address. This
    is the simplest option.
- **Using Hades filters:** You can add a filtering rule (see below)
    which forwards all your email elsewhere, with or without keeping a
    copy in your Hades mailbox.

## Mail filtering

1. Log into [Hades Webmail](https://webmail.hades.srcf.net/)
2. Click 'Settings'
3. Click 'Filters'
4. Add a filter by clicking the '+' button at the bottom of the
    'Filters' panel
5. Choose a name for the filter, a set of conditions to match (e.g.
    'all messages') and an action (e.g. 'Move message to folder')
6. Click 'Save'

You can add as many filters as you want, and drag them around to change
the order in which they are run. You can optionally have multiple filter
sets, although only one of those can be active at once (for example you
could have an alternate filter set, normally disabled, to handle your
email when you are on holiday).

Alternatively, you can write your own [Sieve script](http://sieve.info)
and upload it as a *filter set*: click the '+' button at the bottom of
the 'Filter sets' panel. (Note that Sieve filters use a different
syntax to the `.forward` Exim filters available on pip, although the
capabilities are similar.)

{{< alert type="secondary" >}}
[old-webmail.hades.srcf.net](https://old-webmail.hades.srcf.net),
    for aficionados of the old Hermes webmail system *Prayer*
{{< /alert >}}

## Backing up email

The SRCF does not guarantee to have backups of user data. **You must
take your own backups.**

You might find an IMAP synchronisation tool such as [isync (a.k.a.
mbsync)](http://isync.sourceforge.net) useful. The Arch Wiki has a
[handy guide to setting up
isync](https://wiki.archlinux.org/index.php/Isync).

At times we might have disaster-recovery backups which include a
snapshot of your mailbox. If you've lost data and your own backups have
failed, try asking the sysadmins if we can help --- but we might not be
able to.
