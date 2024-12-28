---
title: "University Account authentication"
date: 2021-04-20T09:27:49+01:00
group: web-hosting
layout: docs
toc: true
---

## Overview

You can configure your site, or a subset of pages, to require user
authentication with a University Account (formerly known as Raven).

## Using Ucam-WebAuth

*Ucam-WebAuth* is a simple
[authentication protocol](https://nevar.srcf.net/static/waa2wls-protocol.txt),
originally designed within the University for the Legacy Raven service.
It works similarly to OAuth2, and consists of two parties:

- *Web Login Service* (servers like Raven, which ask you to authenticate
  with your credentials and provide proof of authentication to a WAA)

- *Web Application Agent* (clients like
  [mod\_ucam\_webauth](https://github.com/cambridgeuniversity/mod_ucam_webauth)
  for Apache or
  [python-ucam-webauth](https://github.com/danielrichman/python-ucam-webauth),
  which redirect you through a WLS in order to identify a site visitor)

The SRCF hosts two of its own WLS servers:

- [Nevar](https://nevar.srcf.net), an alternative to Raven which allows
  site visitors to authenticate with their University Account over a
  university-supported protocol (OAuth2)

- [Goose](https://auth.srcf.net), a standalone service which allows site
  visitors to authenticate with their SRCF account credentials

As of December 2024, the University retired the Legacy Raven service,
but they continue to run their own proxy service similar to Nevar.

### Configuring Ucam-WebAuth in .htaccess

The SRCF uses Apache as its webserver, with the mod\_ucam\_webauth
module installed, which makes it easy to do basic authentication using
the Ucam-WebAuth protocol.
[Full documentation](https://github.com/cambridgeuniversity/mod_ucam_webauth/blob/master/README.Config)
is available for the module, though here are a few common cases.

To protect a directory (whether `public_html` for your entire site, or a
subdirectory of it), create or edit a `.htaccess` file in that
directory, and add the following:

```apache
AuthType Ucam-WebAuth
Require valid-user
```

{{< alert type="info" >}}
A file beginning with a `.` is a hidden file on Linux and UNIX systems.
You may need to manually disable the hiding of these files (e.g. Ctrl-h
in Nautilus, the file manager program of the GNOME desktop environment).
If using the web terminal or connecting over SSH, `ls -a` will include
hidden files.
{{< /alert >}}

This will permit access to anyone with a 'current' University Account,
i.e. active students and staff. To permit access to *any* University
Account (including graduated students), add a *Ptags* directive:

```apache
AARequiredPtags none
```

Alternatively, you may want to limit access to Raven-authenticated users
or visitors within the cam.ac.uk domain:

```apache
Order allow,deny
Allow from .cam.ac.uk
AuthType Ucam-WebAuth
Require valid-user
Satisfy any
```

To limit page access to group account admins only, add a `unix-group`
*Require* directive:

```apache
Require unix-group cuxs
```

You can also list one or more specific users:

```apache
Require user spqr2 spqr3
```

(Of course, replace `cuxs` or `spqr2 spqr3` with the appropriate group
names or CRSids.)

To create a 'logout' link, add the following to your .htaccess file
(which will create `/logout` relative to the directory containing the
`.htaccess` file):

```apache
<FilesMatch "logout">
    SetHandler AALogout
</FilesMatch>
```

`AAAuthService` and `AALogoutService` can be used to change the URLs to
the WLS server.  Websites hosted on the SRCF (i.e. on webserver.srcf.net
aka. sinkhole) use SRCF Nevar by default, which is equivalent to:

```apache
AAAuthService https://nevar.srcf.net/wls/authenticate
AALogoutService https://nevar.srcf.net/oidc/logout
```

To use SRCF Goose instead:

```apache
AAAuthService https://auth.srcf.net/wls/authenticate
AALogoutService https://auth.srcf.net/logout
```

{{< alert type="warning" >}}
Goose does not provide the `current` ptag, so you must also set
`AARequiredPtags none` in order to authenticate users.
{{< /alert >}}

Or to use the University's own Raven proxy:

```apache
AAAuthService https://raven.cam.ac.uk/auth/authenticate.html
AALogoutService https://raven.cam.ac.uk/auth/logout.html
```

## Reading the user's CRSid

You can access an authenticated user's CRSid using the `REMOTE_USER` (or
`AAPRINCIPAL`) environment variables in PHP and CGI scripts.

For example, adding the following to a PHP page like `index.php` will
display a customised welcome message on login:

```php
<?php
echo "Hello {$_SERVER['REMOTE_USER']}!"
?>
```

## Within an application

If you're writing or maintaining a webapp that needs to authenticate
users for certain pages, you'll likely need a Raven, Ucam-WebAuth or
OAuth2 library.

The [Raven developer documentation](https://docs.raven.cam.ac.uk) may be
useful for finding a suitable integration.
