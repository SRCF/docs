---
title: "Upgrading WordPress"
date: 2021-04-21T16:44:31+01:00
group: upgrade-guidance
layout: docs
---

{{< alert type="warning" >}}
Version 3.7 of WordPress introduced an automatic updater, which should
keep your instance up-to-date (as long as someone visits every so often
to kick off the update process).

Versions below 4.4 are likely not compatible with PHP 7, meaning the
admin pages and automatic updates won\'t work. In this case, such an
instance would need to be upgraded manually.
{{< /alert >}}

The notes below assume your WordPress site is at wordpress.soc.srcf.net
\-- substitute this for your own site\'s URL.

WordPress provide [their own extensive guide for
upgrades](https://codex.wordpress.org/Updating_WordPress), which covers
the below information in more detail.

## Allow WordPress to write its own files

WordPress includes an update utility, but this can be quite tedious
about not correctly detecting that it can update itself; it may fail
without even trying, especially on society accounts.

To make this work, you can add the following to your site\'s
configuration (wp-config.php), near the bottom but above the line that
says \"stop editing\":

```php
    /**
    * Force wordpress to use direct filesystem access so that upgrades work
    * properly. See: https://core.trac.wordpress.org/ticket/10205
    * https://codex.wordpress.org/Editing_wp-config.php
    */
    define('FS_METHOD', 'direct');
    define('FS_CHMOD_DIR', (02775 & ~ umask()));
    define('FS_CHMOD_FILE', (0664 & ~ umask()));
```

**You must ensure all WordPress files have the correct group
permissions.** For society accounts, this means all files should have
the society\'s group and be group-writable. WordPress will not check
this in advance \-- if it fails to write some files during an upgrade,
you may end up with a broken instance.

This should be the case by default, but some SFTP clients may override
it. In addition, files moved/copied from your home directory may still
have your personal group set, rather than that of the target society.

## Upgrade through the admin panel

Head over to `https://wordpress.soc.srcf.net/wp-admin/`, log in with your
WordPress username and password if you haven\'t already (remember, these
are distinct from any SRCF-provided accounts).

Select \'\'Updates\'\', under \'\'Dashboard\'\' in the side menu.

If an update is available, you should have a button to perform the
upgrade in one step. If you\'ve installed a non-US-English version, make
sure to pick the one with the correct language.

If you\'re prompted for SFTP credentials, see the section above for how
to grant direct file access.

## Upgrade files manually

**Take backups of your files and database before attempting an
upgrade.**

Download the latest release from <https://wordpress.org/download/>. The
ZIP file contains a folder called `wordpress`, which contains the core
files.

If you\'re working over SSH, you can just
`wget https://wordpress.org/latest.zip` to download the ZIP file, then
`unzip latest.zip` to unpack it in the current directory.

For SCP, you\'ll want to extract the files on your local machine, then
upload them to the server.

In either case, the contents of the `wordpress` folder are to be moved
into your existing site (for `wordpress.soc.srcf.net`, this would be
`/societies/wordpress/public_html`). You should delete the `wp-admin`
and `wp-includes` folders (\'\'\'not\'\'\' `wp-content`) first, as the
new files provide complete copies of these folders. The contents of
`wp-content` should be merged with the existing directory, in order to
retain plugins and themes.

Once the new files are in place, head over to
`https://wordpress.soc.srcf.net/wp-admin/` and log in with your WordPress
username and password to check if things are working. You may be
prompted to complete a database upgrade \-- this is normally a one-click
step, just follow the instructions it provides.
