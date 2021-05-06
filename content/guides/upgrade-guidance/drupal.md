---
title: "Upgrading a Drupal installation"
date: 2021-04-21T16:44:31+01:00
group: upgrade-guidance
layout: docs
---

## Overview

{{< alert type="info" >}}
Version 6 releases are no longer supported by Drupal, and are liable to
have compatibility issues with PHP 7.
{{<  /alert >}}

The notes below assume your Drupal site is at `drupal.soc.srcf.net` \--
substitute this for your own site's URL.

Drupal provide [their own extensive guide for
upgrades](https://www.drupal.org/updating-and-upgrading-drupal-core),
which covers the below information in more detail.

## Upgrading files in-place

This method is suitable for minor version upgrades (e.g. from an old 7.x
to the latest 7.x release). See also: [Update procedure (minor version
change)](https://www.drupal.org/docs/8/upgrade/upgrading-from-drupal-6-or-7-to-drupal-8)

**Take backups of your files and database before attempting an
upgrade.** Then put the site into maintenance mode.

Download the latest release from <https://www.drupal.org/download>. The
ZIP file contains a folder called `drupal-<version>`, which contains the
core files.

If you\'re working over SSH, copy the URL of the ZIP download, use
`wget` to download it, then `unzip` to unpack it in the current
directory.

For SCP, you\'ll want to extract the files on your local machine, then
upload them to the server.

In either case, the contents of the `drupal` folder are to be moved into
your existing site (for `drupal.soc.srcf.net`, this would be
`/societies/drupal/public_html`). You should delete all files under the
site directory, \'\'\'except\'\'\' the `sites` folder which holds all
customisations. If you\'ve made any changes to `.htaccess` or
`robots.txt`, you\'ll also need to merge these into the updated files.

Once the new files are in place, head over to
`http://drupal.soc.srcf.net/update.php` to prepare the database for the
new version. When complete, take the site out of maintenance mode.

Migrating a site between instances
----------------------------------

This is needed for major release upgrades (e.g. from 7.x to 8.x).

Similar to the above, download the latest version, but extract/upload it
to a different location than the current site. Configure this as a new
installation. It still needs to be under your account\'s `public_html`
root, so you may need to use a subdirectory. This page assumes you have
`http://drupal.soc.srcf.net/new/`.

Go to the \'\'Modules\'\' section on the new site, and enable the
\'\'Migrate\'\', \'\'Migrate Drupal\'\', and \'\'Migrate Drupal UI\'\'
modules.

Now head over to `http://drupal.soc.srcf.net/new/upgrade`, which will
prompt for database credentials \-- here, you can specify those of the
old site, which will import all its content into the new installation.

Once you\'re happy the new site is working, you can move the old one out
of the way and make the new site take its place. You\'ll need to update
the `$base_url` in `settings.php` with the new path.
