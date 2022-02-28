---
title: "Files and transfer"
date: 2021-04-20T09:27:49+01:00
group: shell-and-files
layout: docs
toc: true
---

## Basics

Your home directory on SRCF servers is `/home/<crsid>` and is private to
you. Group account files can be found at `/societies/<groupname>` and
can only be accessed by group account admins.

All accounts also come with a 'public' directory (these are located at
`/public/home/<crsid>` and `/public/societies/<groupname>`
respectively). This includes your website root `public_html`, but
you're free to use them as you wish.

You can use SFTP or SCP to transfer files between your SRCF account and
your personal computer. Mac and Linux come with `scp` for per-file
transfer; you may prefer a graphical client -- options include WinSCP
on Windows, or Cyberduck for Mac/Windows.

## Quotas

We provide users with 2GB of space for their personal files, and each
group account also comes with 2GB of its own space. If you run out, you
may request additional quota from the sysadmins. For larger increases,
you may be asked to justify the need, and the SRCF committee may need to
approve it.

Consider searching for cache files in your home directory that may be
taking up unnecessary space, or compressing large files (e.g.
high-resolution photos on websites).

You can use the `srcf-quota` command over SSH to check your current
quota and usage. You'll also receive email notifications when you
approach your quota. Once the hard limit is reached, you'll no longer
be able to create or append to files.

## Ownership and permissions

Each file or directory stored on the SRCF have two ownership fields
associated with it: an *owner* (a system user) and a *group* (a system
group; this is distinct from SRCF group accounts). Every user has an
associated personal group (e.g. the user `spqr2` also has a
corresponding group `spqr2`), whilst admins of a group account will be
members of an additional system group.

By default, your home directory `/home/<crsid>` is private to you, and
group account home directories like `/societies/<groupname>` are private
to their current admins. In contrast, the public directories
`/public/home/<crsid>` and `/public/societies/<groupname>` are
world-readable, meaning their contents are visible to any SRCF user.
Because websites are served from here, you should ensure any files
containing sensitive information (such as credentials for databases) are
individually set to not be world-readable.

See also [group permissions]({{< relref "/reference/group-accounts/files-and-permissions" >}}).

### World-writable files

World writable files are files that anybody on the system can write to
(edit). Whilst in general you can trust other SRCF users not to modify
your files, there are several reasons why world-writable files are a
problem:

- People make mistakes. For instance, if you have a world-writable
    directory, and somebody runs `rm -r /` by mistake (this has happened
    at least once) then all the files in that directory will be deleted.
- Users' accounts may have been compromised. We have had one incident
    where a worm entered the computer via an insecure society website
    and proceeded to overwrite every world-writable file on the
    computer.
- World writable files make things easier for attackers. If for
    instance a directory underneath your public\_html directory is
    world-writable then an attacker able to write files on the system
    could place a script there containing commands that he could execute
    as you.

To avoid problems like this you should avoid creating world-writable
files and directories, and if you have created them then you change them
to be non-world-writable. You can do this using the `chmod` command --
`chmod o-w filename` will remove world-writable permissions from a file
and `chmod -R o-w ~` will do the same for all world-writable files in
your home directory.

Some CGI scripts will tell you that they need to have world-writable
files / directories to work. This is almost certainly not the case on
the SRCF system where CGI / PHP scripts run as the user that owns them
rather than the webserver. For society accounts it is often necessary to
make the files group-writable rather than world-writable (presuming that
the intended effect is to allow multiple members of the society to write
to them). If you can't get a script to work without world-writable
files / directories then [get in touch](https://www.srcf.net/contact)
with the support team and we'll see what we can do to help.

## Snapshots

Although *the SRCF does not guarantee to take backups* of users' data,
snapshots of `/home`, `/public` and `/societies` are generally taken
regularly for disaster recovery purposes. Snapshots may be accessed
using the hidden (it will not show up in ls -a or in shell autocomplete)
directory `.snapshot`, available at any level of the file hierarchy. For
example:

```bash
spqr2@pip:~$ ls -lut .snapshot
total 336
drwxr-x--- 2 spqr2 spqr2 8192 Jul  6 18:00 sv_hourly.0
drwxr-x--- 2 spqr2 spqr2 8192 Jul  6 17:00 sv_hourly.1
drwxr-x--- 2 spqr2 spqr2 8192 Jul  6 16:00 sv_hourly.2
drwxr-x--- 2 spqr2 spqr2 8192 Jul  6 15:00 sv_hourly.3
drwxr-x--- 2 spqr2 spqr2 8192 Jul  6 14:00 sv_hourly.4
drwxr-x--- 2 spqr2 spqr2 8192 Jul  6 13:00 sv_hourly.5
drwxr-x--- 2 spqr2 spqr2 8192 Jul  6 12:00 sv_hourly.6
drwxr-x--- 2 spqr2 spqr2 8192 Jul  6 11:00 sv_hourly.7
drwxr-x--- 2 spqr2 spqr2 8192 Jul  6 10:00 sv_hourly.8
drwxr-x--- 2 spqr2 spqr2 8192 Jul  6 09:00 sv_hourly.9
drwxr-x--- 2 spqr2 spqr2 8192 Jul  6 08:00 sv_hourly.10
drwxr-x--- 2 spqr2 spqr2 8192 Jul  6 07:00 sv_hourly.11
drwxr-x--- 2 spqr2 spqr2 8192 Jul  6 06:00 sv_hourly.12
drwxr-x--- 2 spqr2 spqr2 8192 Jul  6 05:00 sv_hourly.13
drwxr-x--- 2 spqr2 spqr2 8192 Jul  6 04:00 sv_hourly.14
drwxr-x--- 2 spqr2 spqr2 8192 Jul  6 03:00 sv_hourly.15
drwxr-x--- 2 spqr2 spqr2 8192 Jul  6 02:00 sv_hourly.16
drwxr-x--- 2 spqr2 spqr2 8192 Jul  6 01:00 sv_hourly.17
drwxr-x--- 2 spqr2 spqr2 8192 Jul  6 01:00 sv_daily.0
drwxr-x--- 2 spqr2 spqr2 8192 Jul  6 00:00 sv_hourly.18
drwxr-x--- 2 spqr2 spqr2 8192 Jul  5 23:00 sv_hourly.19
drwxr-x--- 2 spqr2 spqr2 8192 Jul  5 22:00 sv_hourly.20
drwxr-x--- 2 spqr2 spqr2 8192 Jul  5 21:00 sv_hourly.21
drwxr-x--- 2 spqr2 spqr2 8192 Jul  5 20:00 sv_hourly.22
drwxr-x--- 2 spqr2 spqr2 8192 Jul  5 19:00 sv_hourly.23
drwxr-x--- 2 spqr2 spqr2 8192 Jul  5 01:00 sv_daily.1
drwxr-x--- 2 spqr2 spqr2 8192 Jul  4 01:00 sv_weekly.0
drwxr-x--- 2 spqr2 spqr2 8192 Jul  4 01:00 sv_daily.2
drwxr-x--- 2 spqr2 spqr2 8192 Jul  3 01:00 sv_daily.3
drwxr-x--- 2 spqr2 spqr2 8192 Jul  2 01:00 sv_daily.4
drwxr-x--- 2 spqr2 spqr2 8192 Jul  1 01:00 sv_daily.5
drwxr-x--- 2 spqr2 spqr2 8192 Jun  2 01:00 sv_daily.6
drwxr-x--- 2 spqr2 spqr2 8192 Jun 29 01:00 sv_daily.7
drwxr-x--- 2 spqr2 spqr2 8192 Jun 28 01:00 sv_daily.8
drwxr-x--- 2 spqr2 spqr2 8192 Jun 27 01:00 sv_weekly.1
drwxr-x--- 2 spqr2 spqr2 8192 Jun 27 01:00 sv_daily.9
drwxr-x--- 2 spqr2 spqr2 8192 Jun 26 01:00 sv_daily.10
drwxr-x--- 2 spqr2 spqr2 8192 Jun 25 01:00 sv_daily.11
drwxr-x--- 2 spqr2 spqr2 8192 Jun 24 01:00 sv_daily.12
drwxr-x--- 2 spqr2 spqr2 8192 Jun 23 01:00 sv_daily.13
drwxr-x--- 2 spqr2 spqr2 8192 Jun 20 01:00 sv_weekly.2
drwxr-x--- 2 spqr2 spqr2 8192 Jun 13 01:00 sv_weekly.3
```

Note that snapshots are named `sv_[type].[index]`, with index 0
indicating the most recent snapshot of that type. The listing above
shows 24 hourly, 14 daily and 4 weekly snapshots; you may see fewer or
more than this.

Snapshots preserve file permissions and are read-only, so if you wish to
retrieve something from a snapshot, you must have had permission to
access it at the time the snapshot was taken, and must copy (rather than
move) it out of the snapshot.

Snapshots going further back in time *may* be available on an off-site
disaster-recovery replica; if you need access to these, contact the
sysadmins (but please don't count on them being available; you should
take your own backups regardless).
