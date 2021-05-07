---
title: "Society Handovers"
date: 2021-04-19T23:52:13+01:00
layout: docs
group: society-handovers
highlight: true
toc: true
---

## Overview

Ensuring that a proper handover occurs will reduce headaches for the new committee in the long term. This guide explains a few simple pointers to keep in mind during the transition period.

{{< alert type="info" >}}
This guide is written with societies in mind as they tend to have regular annual handovers but is applicable to any users of our group accounts.
{{<  /alert >}}

## New webmasters

It is becoming increasingly common that the role of "webmaster" is merged into the job of the secretary or the publicity officer. This often means that modifying the website becomes a daunting task due to unfamiliarity with the relevant technical aspects and/or the SRCF. We've tried to lower the barriers to entry by writing helpful tutorials with beginners in mind. If you are new to this, please do not be discouraged as we are here to help! We offer several ways of [getting help]({{< relref "/#help-and-support" >}}), including live chat.

As a quick introduction, the Student-Run Computing Facility is best known for providing free web hosting and email forwarding for students in Cambridge.

## Granting access

The most important part of the handover is for the incumbent webmaster to add you as an admin to the society account. This can easily be done by:

1. Navigating to [our control panel](https://control.srcf.net)
2. Under "Your group accounts", click "Manage" on your society's card
3. Under the "Administrators" card, click "Add new administrator"
4. Type in the CRSid of the new admin

This process implies two things: first, the new webmaster must have an SRCF account beforehand (easily done by going to our home page and clicking "Create an account") and second, any society admins must have Raven access, or in other words be member of Cambridge University.

If possible, you may consider keeping the old webmaster as an admin on the account. We recommend two or more admins to ensure the longevity of the society account in case one or more admins become unreachable.

If you are using a content mangement system like WordPress, this is also the time to add the new webmaster via the web interface as an administrator of the website.

## Check details

This is also a good time to check if all society information is correct, such as the role address. This email is used in case the society has no remaining admins and will be our last attempt before permanently deactivating the account. Admins are automatically removed if their email bounces, ie. we can no longer reach them by email.

## Files

Once the new webmaster is added, the incumbent webmaster should explain how the website works and how it can be updated. A few written notes on this can go a long way towards facilitating the handover.

In the majority of cases where a content management system is used (like WordPress), "updating" can be done via the handy web interface. If something goes wrong though, it is necessary to log in and poke around at the files. We've written tutorials for this.

At this point, the new webmaster should also read our reference material on group accounts, especially on file permissions and how our web services work. The gist of it is that all content gets served from `/public/societies/<socname>/public_html` and private society files are located at `/societies/<socname>/`. Shortcutes (symbolic links) to these are automatically added to your home directory.

## Email forwarding

A new committee means new emails! If you are making use of email forwarding in the form of `socname-chair@srcf.net` then you need to update where these emails forward to. This is done in the `.forward` file present in the society's home directory and we have more information on that [here]({{< relref "reference/group-accounts/email.md" >}}).

## Mailing lists

If you are making use of mailing lists of the form `listname@lists.srcf.net` then you need to:

1. Share the admin password with the new webmaster
2. Add the new webmaster as a mailing list admin

This will allow them to, for example, send email to the list members without verification, manage requests from other committee members to the mailing list, and most importantly grant them access to the mailing list admin interface available at https://lists.srcf.net.

## Other steps

There are other steps involved in a society handover, like social media handovers, chat groups (check out our [Mattermost!]({{< relref "reference/other-services/mattermost.md" >}})), file sharing and more. These are beyond the scope of the SRCF but we mention it here to stress the importance of having a proper handover document (even if brief!) as these details easily get lost over time.

As we have experience with many societies, we are happy to advise on any further steps -- just reach out to us!

