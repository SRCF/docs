---
title: "Files and permissions"
date: 2021-04-20T09:27:49+01:00
group: group-accounts
layout: docs
toc: true
---

## Overview

Each group account has a corresponding system (UNIX) group that manages
access permissions for files and directories in the group account space.
Both `/societies/<groupname>` and `/public/societies/<groupname>` are
writable by the system group. Each admin of the account is then added to
that system group, which grants the admin permissions to manage files.

When creating new files or directories, you should ensure the system
group permissions are correct -- for each file the system group should
match the group account name (and not your personal system group), and
permissions should include group-write. Directories should also be
group-sticky, so that subdirectories will inherit the correct
permissions. Example output from `ls -l`:

```bash
    drwxrwsr-x  2 <crsid> <groupname> 4.0K Jan  1  2020 directory
    -rw-rw-r--  2 <crsid> <groupname>    0 Jan  1  2020 file
```

The important fields to note here are `rw` appearing in both of the
first two sets of permissions (user and group), and `s` in the directory
group column for sticky.

## Ownership

Files in a group account space will generally be owned by the admin that
created them, but with the file's group set to match the corresponding
group account, any admin can modify or delete these files as needed.

Some files may be owned by a user named after the group. This is an
internal system user: websites and group account services are run as
this user, meaning any files they create will have this ownership.
Again, ensuring group permissions are set correctly will mean that any
admin can manage such files.

## Fixing bad permissions

You can run `srcf-soc-permfix <groupname>` over SSH, which will add any
missing group permissions to files owned by the user that run it. This
means you can fix files that you own, as well as files created by the
internal group account's user with
`sudo -u <groupname> srcf-soc-permfix <groupname>`. If you encounter
files owned by another admin with incorrect permissions, they will need
to run this command themselves in order to fix them. In the case of
ex-admins, you can [contact the SRCF
sysadmins](https://www.srcf.net/contact) to fix permissions for you.
