---
title: "WordPress from scratch"
date: 2021-04-21T16:44:31+01:00
group: websites
layout: docs
toc: true
---

## Overview

In this tutorial, you'll learn how to create a fully functional
blog/personal website using WordPress. This is a great first project if
you're a user starting out with the SRCF, websites in general or want
to use a tried-and-tested Content Management System.

This tutorial assumes you have an SRCF personal account (with or without
group account admin permissions) and can SSH and transfer files. See our
other tutorials for that.

{{< alert type="warning" >}}
WordPress has huge user and
development bases meaning that there is a lot of help available, as well
as a plugin to handle just about any desired function. WordPress powers
35% of the web!

That said, it also means that it is a frequently targeted platform for hacks and malicious attacks. Take the appropriate steps we mention here to secure your installation and if you are simply serving static content, consider using a static site generator.
{{<  /alert >}}

## Setting up your database

WordPress needs a MySQL database to run. This works a bit like Excel,
storing all of the data for your website in tables and loading this into
templates when each page is loaded. You can create your MySQL database
[here]({{< relref "/reference/other-services/sql-databases" >}}).

## Sanity check

Now that you've got everything setup, let's check if you can log in
with an FTP client. You'll want to connect to files.srcf.net via SFTP
(the S stands for secure). You should see a folder called public\_html
which we'll be uploading all of our files to.

Next up, check that you can access your database: log in to phpMyAdmin.
This is a web-based control panel where you can view and edit your
database manually. You should see your personal database on the left
along with any group account databases. They should all look pretty
empty at this point.

If everything is working so far and you have all of your login details
and passwords, we're good to go! Congratulations, that was the hardest
bit of the whole process...

## Installing WordPress

Head over to [wordpress.org](https://wordpress.org/download/) and hit
the big blue download button. Make sure you don't get confused with
wordpress\*.com\* - that's where you can set up a blog directly with
the WordPress organisation using their hosting. We want to host our own
copy of WordPress on the SRCF.

Once your `.zip` file has finished downloading, we need to get the files
from your computer onto the SRCF hosting. Unzip the file on your
computer and upload the files into your `public_html` directory, making
sure that they're not in a subfolder called `wordpress`.

{{< alert type="info" >}}
You can do this alternatively in the terminal by typing
`wget https://wordpress.org/latest` and extracting the files, e.g.
`tar zxvf wordpress-5.5.1.tar.gz`.{{<  /alert >}}

## Configure WordPress

Great! Now if you head to your website in a browser
`https://**crsid**.user.srcf.net` for an indvidual account or
`https://**groupname**.soc.srcf.net` for a group account) you should see
a friendly welcome screen. Fill in all of the details that it asks for -
leave `localhost` as it is, try not to use `wp_` as the database prefix
or `admin` as the administrator username *(this makes it harder for
hackers to infiltrate your site).*

## Set up automatic updates

WordPress will likely refuse to do automatic updates, instead requesting
FTP credentials -- this is because it assumes it can't write its own
files on the server. To make this work you can add the following few
lines to your `wp-config`.php, near the bottom but above the line that
says 'stop editing':

```ApacheConf
    # Force WordPress to use direct filesystem access so that upgrades work properly.
    # https://core.trac.wordpress.org/ticket/10205
    # https://codex.wordpress.org/Editing_wp-config.php

    define('FS_METHOD', 'direct');
    define('FS_CHMOD_DIR', (02775 & ~ umask()));
    define('FS_CHMOD_FILE', (0664 & ~ umask()));
```

If configured correctly, the updates page should include text similar to
*Future security updates will be applied automatically*.

If you have a low-traffic or private site, WordPress' cron service
(which handles updates and other background tasks) may not run regularly
enough. You can invoke `wp-cron.php` manually using cron or systemd
timers -- see `crontab` or `wordpress-cron.timer` in
`/public/societies/sample`.

{{< alert type="warning" >}}
If you are installing WordPress for a group or society then you will
need to ensure that the permissions on files in your group account
directory are group-writable (and therefore writable by the user that
WordPress will run as). WordPress will not check in advance -- if some
of your files are writable and some are not, you will end up with a
half-upgraded WordPress. You can ensure the permissions are correct by
running `srcf-soc-permfix socname`.{{<  /alert >}}

## Secure your install

There are crucial steps you must take to secure your WordPress installation. As this applies to existing WordPress installations, [we've written a separate guide for it]({{< relref "/guides/websites/securing-wordpress" >}}).

## Customising WordPress

You'll probably want to make your site look a little different and
certainly contain some content, so the first thing to do is log in to
the WordPress administration panel. There's usually a link saying
something obvious, but if you can't find it the URL should look like
`https://csrid.user.srcf.net/wp-admin`. Log in with the username and
password set up in the previous step.

### Content

How you create content will depend on how you intend to use the site.
**Posts** are designed for small regular news updates, **Pages** are for
larger static content. You don't have to use either, you can use both.
If you don't want to use Posts at all, you can display a page on your
homepage in (`Settings` \> `Reading`).

### Visual changes

WordPress websites use **themes** to customise the way that they look.
Thankfully lots of people are nice enough to write these for you and
give them away for free (there are plenty of paid-for themes a google
search away too). You can browse these directly through the WordPress
admin back end (`Appearance` \> `Themes`) or find one online.

### Features

If you want to extend the functionality of WordPress, you need to
install a Plugin. Millions of plugins have been written and are dead
easy to install. The chances are that if you want your site to do
something then someone has probably written a plugin to do it.

### Accounts

- Log in to WP as `admin` using the password given at the end of the
    installation process.
- Click on `My Profile` and change the `admin` password using the form
    provided.
- Click on `Users` and create an account for yourself.

## Optional steps

### Custom domains

You might be thinking that the `*.user.srcf.net` or `*.soc.srcf.net` web
address of your spangly new site isn't particularly inspiring. Don't
panic! You can register any domain you like (or even multiple domains)
and point them to your new site by following
[our custom domains documentation]({{< relref "/reference/web-hosting/custom-domains" >}}).

### Raven

You can put any site (or parts of your site) behind Raven by following
[our Raven docs]({{< relref "/reference/web-hosting/raven-authentication" >}}).

## Closing remarks

Did you like this or find this cool? We invite you to check out
[more tutorials]({{< relref "/tutorials" >}})
or [get in touch]({{< relref "/#help-and-support" >}}) to tell us what you thought!

If you have any suggestions for how we could improve this documentation
please send us an email at `support@srcf.net` or submit a Pull Request
on [GitHub](https://github.com/SRCF/docs)!

A big thanks to [Phil Ewels](https://phil.ewels.co.uk/) for writing this
on his own blog and to hmw26 for some of their tips. This tutorial
contains some adaptations to their work.
