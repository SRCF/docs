---
title: "Securing WordPress"
date: 2021-04-19T23:52:27+01:00
layout: docs
group: websites
highlight: true
---

WordPress is a regular hackers' target and instances of WordPress on
the SRCF are regularly compromised in various ways, leading to private
data leaks, tampered files, and website irregularities. Most of these
risks can be minimized by following the hardening steps below.

1. Ensure your `wp-config.php` is not world-readable, as that will
    contain your database credentials. You can set permissions in your
    FTP client or in the console by typing `chmod 0660 wp-config.php`.
    If you are installing Wordpress under web space that belongs to a
    group or society then your `wp-config.php` file will be owned by
    that group or society's user account rather than your own personal
    account, in which case you will need to run the previous console
    command as that user: `sudo -u socname chmod 0660 wp-config.php`.
    Unfortunately FTP clients won't let you do this so you will need to
    use the console.
2. It is advised to lock down WordPress' admin panel at /wp-admin/ by
    putting that directory behind Raven authentication -- see an example
    at
    `/public/societies/sample/public_html/wordpress/wp-admin/.htaccess`.
3. We also recommend you disable *Allow link notifications from other
    blogs (pingbacks and trackbacks)* on new posts, under `Settings` \>
    `Discussion` in the admin panel.
4. Activate a spam filtering plugin like Akismet and a capatcha system
    like reCAPTCHA. Akismet is installed by default and just needs
    activiating. Go to `.../wp-admin/plugins.php` to install and
    activate plugins.
5. You may optionaly want to modify your theme so that it no longer
    puts the Wordpress version into the html - this may help stop
    hackers finding that you installation is outdated but it does not
    protect against problems caused by the version you are using being
    compromised.
6. Regularly check up on the status of your installation and keep an
    eye on any vulnerabilities in the plugins you use.
