---
title: "Web server migration"
date: 2021-04-21T16:44:31+01:00
group: upgrade-guidance
layout: docs
toc: true
---

{{< alert type="warning" >}}
These notes relate to a previous migration from Ubuntu 12.04 to 16.04,
completed in summer 2017.
{{<  /alert >}}

## Apache

Upgraded from 2.2 to 2.4. See [Apache\'s own upgrade
documentation](https://httpd.apache.org/docs/2.4/upgrading.html) for a
full list of changes.

The semantics of `Allow`/`Deny` directives have changed \-- we have
\'\'mod\_access\_compat\'\' enabled which should restore the legacy
syntax, though we recommend you migrate to the new `Require` syntax.

### Logs

You\'ll now need to SSH to `webserver.srcf.net` to access logs \-- you
will find `access.log` and `error.log` in
`/var/log/apache2/user/<crsid>` for your personal website, or
`/var/log/apache2/soc/<name>` for a society website. Note that CGI error
output should now consistently go to the corresponding `error.log` file
(previously some types of output ended up in the main log at
`/var/log/apache2/error.log`).

### Proxy webservers

If you run your own webserver (e.g. gunicorn, nginx) and have Apache
proxy to it via htaccess, these server processes need to be run from the
webserver rather than the shell server. As above, SSH to
`webserver.srcf.net` and run them from there.

## PHP

Upgraded from 5.3 to 7.0. This jumps multiple minor versions \-- the
bulk of the changes can be found in [PHP\'s own migration guide for 5.6
to 7.0](https://secure.php.net/manual/en/migration70.php), though see
also the guides for
[5.4](https://secure.php.net/manual/en/migration54.php),
[5.5](https://secure.php.net/manual/en/migration55.php),
[5.6](https://secure.php.net/manual/en/migration56.php).

### MySQL

The original MySQL library, which provides methods with names starting
`mysql_`, has been deprecated since 5.5, and removed completely in 7.x.

[MySQLi](https://secure.php.net/manual/en/book.mysqli.php) provides a
close replacement, with most original methods present but prefixed with
`mysqli_`. You\'ll also need to pass a connection handle (the return
value of `mysqli_connect()`) as the first argument to most of the
remaining methods.

Sample MySQL library code:

```php
mysql_connect("localhost", "<user>", "<password>");
$result = mysql_query("...");
while ($row = mysql_fetch_assoc($result)) { ... }
```

Equivalent MySQLi code:

```php
$conn = mysqli_connect("localhost", "<user>", "<password>");
$result = mysqli_query($conn, "...");
while ($row = mysqli_fetch_assoc($result)) { ... }
```

### ucam-webauth-php

Versions prior to 0.53 include a function call with an argument ignored
in PHP 5.x but removed in 7.x. Error logs will contain something like:

```php
    PHP Warning:  gmmktime() expects at most 6 parameters, 7 given in .../ucam_webauth.php on line 388
```

The latest version can be obtained from
[GitHub](https://github.com/cambridgeuniversity/ucam-webauth-php).

### php_override.ini

PHP is now run as an Apache module rather than CGI, so override files
are no longer supported. You can however override settings using
htaccess.

Example php\_override.ini setting:

```ini
    key = value
```

Equivalent htaccess setting:

```ini
    php_value key value
```

## PostgreSQL

The Postgres server has also moved to the new webserver. For websites
connecting to a database, it\'s still accessible locally (socket
connection) so access should be unaffected.

If you have scripts on the main shell server that access a Postgres
database, these need updating to connect over TCP to hostname
`postgres`. Ident auth is available so you still shouldn\'t need to
provide a password.

{{< alert type="danger" >}}
**The webserver is not a shell server**

Whilst we provide SSH access to read logs and start servers (see below),
it lacks the resources of the main shell server, and should therefore
not be used as one.
{{<  /alert >}}
