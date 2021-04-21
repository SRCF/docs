---
title: "Apache (web server)"
date: 2021-04-20T09:27:49+01:00
group: web-hosting
layout: docs
toc: true
---

## Overview

We run a central Apache 2.4 for all personal and group websites.

As our server handles hundreds of websites, we don't allow users to
change server-level configuration, including Apache configuration in
`/etc/apache2`, as various online tutorials may lead you to.

Unlike most hosting providers, websites are run using your own (or a
group's) user account on the server. This means your site has the
permissions needed to write its own files, for example with content
editors or automatic updates.

## Directory root

Websites are served out of `public_html` directories, present in your
public file space (`/public/home/<crsid>/public_html` or
`/public/societies/<groupname>/public_html`).

To use Apache directives, you should use a `.htaccess` file, which
provides a subset of functionality at a per-site level.

## Logs

Web server logs (including PHP errors) can be found in
`/var/log/apache2/user/<crsid>` for personal users, and
`/var/log/apache2/soc/<groupname>` for group accounts. You can access
them over SSH or with a file transfer program.
