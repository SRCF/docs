---
title: "Mattermost"
date: 2021-04-20T09:27:49+01:00
group: mattermost
layout: docs
---

## Overview

Mattermost is an open source messaging platform, similar to Slack. See
the [official user
guide](https://docs.mattermost.com/help/getting-started/welcome-to-mattermost.html)
for more about its service.

The SRCF's mattermost instance can be found at
[<https://mattermost.srcf.net>](https://mattermost.srcf.net), and is the
Team Edition. This is open to use for any members of the SRCF as well as
their guests.

## Policies and features

- A user must sign up with an `@srcf.net`, `@cam.ac.uk` or
     `@*.cam.ac.uk` email, unless they have an invitation from an
     existing user. A user can change their email address to their
     personal email after signing up.
- Only team administrators are allowed to create and delete channels
     and modify their descriptions. (The button to make these changes
     will still be present in the user interface, but they will not
     work)
- Open teams (teams that do not require invitations to join) are not
    available on our server, since open teams are advertised to all
     users on the server. If you want to invite a large number of
     people (e.g. all members of your Facebook group), you can share an
     invitation link.
- If you want to delete all messages in a channel older than `n`
     days, you can use the following two-step procedure:

    1. Get the channel id by typing `/channel_id`
    2. Run the command `/delete_posts <channel_id> <n>` where
        `<channel_id>` is the channel id you obtained from the
        previous step, and `<n>` is the number of days.

    This an only be run be a team administrator.

## Privacy information

The [SRCF privacy policy](https://www.srcf.net/privacy) applies. This
section describes details pertinent to the Mattermost service.

### Email

Your email is used to send notifications to you. The types of
notifications you receive can be configured in the web interface.

### Data retention

By default, any person who joins your channels can see all past
messages. Messages that are deleted in the user interface are not
accessible by end users anymore, but remain in the database. Contact the
[sysadmins](mailto:soc-srcf-admin@lists.cam.ac.uk) if you wish to have
your data purged. It is also possible to permanently delete all posts by
a user.

### User lookup

Your username and name are visible and searchable by other users in the
invitation menu. Your email remains private.

### Clients

The SRCF is only responsible for the web client. When using other
clients (e.g. a mobile client), be sure to read their privacy policy.
