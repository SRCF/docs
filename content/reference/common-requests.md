---
title: "Common requests"
date: 2021-04-20T09:27:49+01:00
group: common-requests
highlight: true
layout: docs
---

Before contacting the sysadmins, check we haven't already answered your
question here.

## Gain access to an existing group account

As a prospective admin seeking access to manage a group account, you
should first contact its existing admins and request access from them.
You'll need to know the short name of the account (e.g. `cuxs`, which
may appear in the society's website URL *cuxs.soc.srcf.net* or email
addresses *<cuxs-role@srcf.net>* if hosted with us), with which you can
email `cuxs-admins@srcf.net` to reach all current admins of the account.
If you don't know the short name, you can check [this list of group
accounts](https://www.srcf.net/groups).

If you're unable to make contact with them, you may [ask the system
administrators](https://www.srcf.net/contact) for assistance, who will
then attempt their own contact, and may remove inactive admins or
transfer ownership as needed.

Group accounts are considered *unmaintained* if they have no active
admins remaining. Accounts in this state will display an *Unmaintained
group website* page if you visit their SRCF-hosted website. You'll need
to contact the sysadmins in the first instance to recover such an
account.

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
    $ srcf-soc-permfix <groupname>
    $ sudo -u <groupname> srcf-soc-permfix <groupname>
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
