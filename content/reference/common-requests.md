---
title: "Common requests"
date: 2021-04-20T09:27:49+01:00
group: common-requests
highlight: true
layout: docs
toc: true
---

This is a list of all queries and issues we receive often. Please check we haven't already answered your question here before contacting the sysadmins.

## Contact owners of a personal or group website or account

The SRCF hosts user websites and mailing lists on its systems, and we
provide domains of the form *{{< var >}}CRSid{{< /var >}}.user.srcf.net*
or *{{< var >}}acronym{{< /var >}}.soc.srcf.net*, along with matching
email addresses like *{{< var >}}CRSid{{< /var >}}@srcf.net* and
*{{< var >}}acronym{{< /var >}}-{{< var >}}role{{< /var >}}@srcf.net*.

**The SRCF itself is not immediately responsible for content under these
domains.** In the first instance, you should direct queries to the
owners of the relevant account.

* For websites like *{{< var >}}spqr2{{< /var >}}.**user**.srcf.net*
  or email addresses like *{{< var >}}spqr2{{< /var >}}@srcf.net*,
  the responsible individual can be reached directly via
  `{{< var >}}spqr2{{< /var >}}@srcf.net`.

* For websites like *{{< var >}}sample{{< /var >}}.**soc**.srcf.net*
  or email addresses like
  *{{< var >}}sample{{< /var >}}-{{< var >}}role{{< /var >}}@srcf.net*,
  the responsible group of people who manage the account (its "admins")
  can be reached collectively via
  `{{< var >}}sample{{< /var >}}-webmaster@srcf.net` for queries about
  its website specifically, or
  `{{< var >}}sample{{< /var >}}-admins@srcf.net` for anything else.

{{< alert type="info" >}}
Make sure to substitute the example owning account (**spqr2** or
**sample** above) with the matching account name that you're looking to
contact.
{{< /alert >}}

If your communication relates to infringing copyrighted material or
other abuse, please also CC [the SRCF system
administrators](https://www.srcf.net/contact).

We also host websites on *custom domains*, which do not end in
*.user.srcf.net* or *.soc.srcf.net*.  Please [contact the system
administrators](https://www.srcf.net/contact) if you're getting in
touch about a website hosted by us under a custom domain and are
unsure how to reach the site's owners.

## Gain access to an existing group account

[Read more about group admins and unmaintained
accounts]({{< relref "group-accounts/administrators" >}})

As a prospective admin seeking access to manage a group account, you
should first contact its existing admins and request access from them.
See the answer above for how to identify the short name of the account.
If you don't know the short name, you can check [this list of group
accounts](https://www.srcf.net/groups).

If you're unable to make contact with them, you may [ask the system
administrators](https://www.srcf.net/contact) for assistance, who will
then attempt their own contact, and may remove inactive admins or
transfer ownership as needed.

Group accounts are considered *unmaintained* if they have no active
admins remaining. Accounts in this state will display an *Unmaintained
group website* page if you visit their SRCF-hosted website.

## Grant group admin access to someone else

As an existing admin of a group account, you can use the [control
panel](https://control.srcf.net) to promote other users. Each new admin
will need to create a personal SRCF account first if they don't
currently have one.

If you are stepping down from managing a group account, you can remove
yourself as long as there's at least one additional admin present.

## Permission errors writing files in a group account space

[Read more about group permissions]({{< relref "group-accounts/files-and-permissions" >}})

You can try to fix permissions yourself using the `srcf-soc-permfix`
tool over SSH, which can fix your own files and those of the group
account:

```bash
srcf-soc-permfix <groupname>
sudo -u <groupname> srcf-soc-permfix <groupname>
```

However, this won't be able to fix files owned by other admins. If you
continue to get permission errors, [ask the system
administrators](https://www.srcf.net/contact) to run this for you
instead.

## Problem with an *\@lists.cam.ac.uk* mailing list

Whoa, stop right there! That's the *University Information Services*
mailing list system, not the *SRCF* one, and there's nothing we can do
to help you. Try going to
[lists.cam.ac.uk](https://lists.cam.ac.uk/mailman/) instead.

## Update forwarding addresses on a domain

The SRCF does not (and cannot) provide email forwarding outside of
*\@srcf.net* addresses, so we don't have control over these. You'll
most likely need to consult your domain registrar to do this.

## Can you design/upload/run/fix my website?

Unfortunately, our support team does not have the capacity to maintain
both our servers and the thousands of websites hosted on it. If you have
a specific technical question (e.g. an error message you don't
understand), [be sure to seek help]({{< relref "/#help-and-support" >}}).

You may upload a website designed elsewhere to be hosted on the SRCF.
However, it must be you who performs the upload -- you must not share
access to your SRCF account with anyone else, even if they are acting on
your behalf.

We recommend societies and groups have appointed webmasters that are in charge of maintaining the website.

## Can you help me debug a program?

Only if we have time - our support team are all volunteers, however we
generally like hacking code, so if you're having problems [drop us a line]({{< relref "/#help-and-support" >}}) and we might be able to help you out.
