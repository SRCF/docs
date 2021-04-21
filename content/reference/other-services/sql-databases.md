---
title: "MySQL and PostgreSQL databases"
date: 2021-04-20T09:27:49+01:00
group: other-services
layout: docs
toc: true
---

## Overview

Both user and group accounts can make use of databases, either in MySQL
or PostgreSQL. We don't create accounts for these by default -- you
will need to request them separately via the control panel, which will
give you a distinct password for authentication (don't use your
personal SRCF password).

You will receive a default database named after your account. In MySQL,
you can create additional databases of the form
`<username>/<something>`. For PostgreSQL, you can make use of schemas to
organise your tables if needed.

## Connecting to your database

The canonical hostnames for database servers are `mysql` and `postgres`,
which are valid across all user-accessible servers.

To connect to MySQL from an SRCF shell:

```bash
    mysql -h mysql -p <database>
```

Here, `-h` specifies the hostname, `-p` prompts for your password, and
you're connected to the database specified at the end -- either your
CRSid for your personal database, or a group database name.

Similarly for PostgreSQL:

```bash
    psql -h postgres [database]
```

Providing a database is optional; by default, you'll be connected to
the one matching your username. Ident authentication is enabled for
PostgreSQL, which will authenticate you based on the underlying system
account, so you usually don't need to provide a password.

You can also use [phpMyAdmin](https://www.srcf.net/phpmyadmin/) for
MySQL, and [phpPgAdmin](https://www.srcf.net/phppgadmin/) PostgreSQL, to
manage your databases in a browser.

## Group account access

If logged in using your personal database account, you can also access
databases owned by group accounts you administrate.

When configuring software or websites in a group account, you must use
the group database account to access its databases -- **do not use your
personal credentials** as that would give other group account admins
access to your personal account and all the databases (both personal and
group) to which you have access!
