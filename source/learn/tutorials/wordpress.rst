.. _website-wordpress:

Create your own website with WordPress
--------------------------------------

In this tutorial, you'll learn how to create a fully functional blog/personal website using WordPress. This is a great first project if you're a user starting out with the SRCF, websites in general or want to use a tried-and-tested Content Management System.

This tutorial assumes you have an SRCF personal account (with or without society admin permissions) and can SSH and transfer files. See our :ref:`other tutorials <tutorials>` for that.

.. note::
  WordPress started off as a blogging platform but then evolved into a fully featured `Content Management System <https://en.wikipedia.org/wiki/Content_management_system>`__. This means that with a few clicks and virtually no knowledge of website design or coding, you can have a very professional site up and running which is easy to update and maintain. WordPress has huge user and development bases meaning that there is a lot of help available, as well as a plugin to handle just about any desired function. WordPress powers 35% of the web!

1. Sign up for the SRCF
~~~~~~~~~~~~~~~~~~~~~~~

If you don't have an SRCF account already, make sure to :ref:`create one <getting-started-personal>`. If you wish to create a website for your society, you need to `create a society account too <https://control.srcf.net/signup/society>`__.

2. Setting up your database
~~~~~~~~~~~~~~~~~~~~~~~~~~~~

WordPress needs a MySQL database to run. This works a bit like Excel, storing all of the data for your website in tables and loading this into templates when each page is loaded. You can create your MySQL database `here <https://docs.srcf.net/services/databases.html>`__.

3. Make sure everything is OK
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Now that you've got everything setup, let's check if you can log in with an FTP client. You’ll want to connect to files.srcf.net via SFTP (the S stands for secure). You should see a folder called public_html which we’ll be uploading all of our files to.

Next up, check that you can access your database: log in to phpMyAdmin. This is a web-based control panel where you can view and edit your database manually. You should see your personal database on the left along with any society account databases. They should all look pretty empty at this point.

If everything is working so far and you have all of your login details and passwords, we’re good to go! Congratulations, that was the hardest bit of the whole process…

4. Installing WordPress
~~~~~~~~~~~~~~~~~~~~~~~

Head over to `wordpress.org <http://wordpress.org/download/>`__ and hit the big blue download button. Make sure you don't get confused with wordpress*.com* - that's where you can set up a blog directly with the WordPress organisation using their hosting. We want to host our own copy of WordPress on the SRCF.

Once your ``.zip`` file has finished downloading, we need to get the files from your computer onto the SRCF hosting. Unzip the file on your computer and upload the files into ``public_html``, making sure that they're not in a subfolder called ``wordpress``. 

.. note::
  You can do this more efficiently by doing ``wget http://wordpress.org/latest`` and extracting the files, e.g. ``tar zxvf wordpress-1.0.2-blakey.tar.gz``.

5. Configuration and final steps
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Great! Now if you head to your website in a browser ``http://**crsid**.user.srcf.net`` for an indvidual account or ``http://**societyname**.soc.srcf.net`` for a society) you should see a friendly welcome screen. Fill in all of the details that it asks for - leave ``localhost`` as it is, try not to use ``wp_`` as the database prefix or ``admin`` as the administrator username *(this makes it harder for hackers to infiltrate your site).*

That's it - you have a website! We told you it was easy.

6. Customising WordPress
~~~~~~~~~~~~~~~~~~~~~~~~

You'll probably want to make your site look a little different and certainly contain some content, so the first thing to do is log in to the WordPress administration panel. There's usually a link saying something obvious, but if you can't find it the URL should look like ``http://csrid.user.srcf.net/wp-admin``. Log in with the username and password set up in the previous step.

Content
^^^^^^^

How you create content will depend on how you intend to use the site. **Posts** are designed for small regular news updates, **Pages** are for larger static content. You don't have to use either, you can use both. If you don't want to use Posts at all, you can display a page on your homepage in (``Settings`` > ``Reading``).

Visual changes
^^^^^^^^^^^^^^

WordPress websites use **themes** to customise the way that they look. Thankfully lots of people are nice enough to write these for you and give them away for free (there are plenty of paid-for themes a google search away too). You can browse these directly through the WordPress admin back end (``Appearance`` > ``Themes``) or find one online.

Features
^^^^^^^^

If you want to extend the functionality of WordPress, you need to install a Plugin. Millions of plugins have been written and are dead easy to install. The chances are that if you want your site to do something then someone has probably written a plugin to do it.

Accounts
^^^^^^^^

* Log in to WP as ``admin`` using the password given at the end of the installation process.
* Click on ``My Profile`` and change the ``admin`` password using the form provided.
* Click on ``Users`` and create an account for yourself. 

8. Last (important!) touches
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

1. Ensure your ``wp-config.php`` is not world-readable, as that will contain your database credentials. You can set permissions in your FTP client or in the console, eg. ``chmod 0660`` to get ``-rw-rw----``
2. It is advised to lock down WordPress’ admin panel at /wp-admin/ by putting that directory behind Raven authentication – see ``public_html/wordpress/wp-admin/.htaccess``. 
3. We also recommend you disable *Allow link notifications from other blogs (pingbacks and trackbacks)* on new posts, under ``Settings`` > ``Discussion`` in the admin panel.
4. To ensure your site is as secure as possible, you should make sure the latest security patches are added by enabling automatic updates. See section below.
5. Activate a spam filtering plugin like Akismet and a capatcha system like reCAPTCHA. Akismet is installed by default and just needs activiating. Go to ``.../wp-admin/plugins.php`` to install and activate plugins.
6. You may optionaly want to modify your theme so that it no longer puts the Wordpress version into the html - this may help stop hackers finding that you installation is outdated but it does not protect against problems caused by the version you are using being compromised.

7. Optional steps
~~~~~~~~~~~~~~~~~~

Custom domain
^^^^^^^^^^^^^

You may have thought that the web address of your spangly new site isn't particularly inspiring. Don't panic! You can register any domain you like (or even multiple domains) and point them to your SRCF address without anyone knowing. For instructions, check out :ref:`our documentation <custom-domains>`. Past users have usually bought domain names from `123-reg.co.uk <http://www.123-reg.co.uk>`__.

Raven
^^^^^

You can put any site (or parts of your site) behind Raven by following :ref:`our Raven guide <raven>`.

Automatic updates
^^^^^^^^^^^^^^^^^

WordPress will likely refuse to do automatic updates, instead requesting FTP credentials – this is because it assumes it can’t write its own files on the server. To make this work you can add the following few lines to your ``wp-config``.php, near the bottom but above the line that says “stop editing”:

.. code-block:: apacheconf

  /**
  * Force WordPress to use direct filesystem access so that upgrades work properly.
  * https://core.trac.wordpress.org/ticket/10205
  * https://codex.wordpress.org/Editing_wp-config.php
  */
  define('FS_METHOD', 'direct');
  define('FS_CHMOD_DIR', (02775 & ~ umask()));
  define('FS_CHMOD_FILE', (0664 & ~ umask()));

If configured correctly, the updates page should include text similar to *Future security updates will be applied automatically*.

If you have a low-traffic or private site, WordPress’ cron service (which handles updates and other background tasks) may not run regularly enough. You can invoke ``wp-cron.php`` manually using cron or systemd timers – see ``crontab`` or ``wordpress-cron.timer`` respectively.

.. warning::
  Ensure that the **permissions on files in your society directory are writable by the society group** (and therefore the user that WordPress will run as). WordPress will not check in advance – if some of your files are writable and some are not, you will end up with a half-upgraded WordPress.

8. Closing remarks
~~~~~~~~~~~~~~~~~~

Did you like this or find this cool? We invite you to check out :ref:`more tutorials <tutorials>`, :ref:`read our  recommended resources<recommended-resources>` or :ref:`talk to us <get-help>` to tell us what you thought!

If you have any suggestions for how we could improve this documentation please send us an email at ``support@srcf.net`` or submit a Pull Request on `GitHub <https://github.com/SRCF/docs>`__!

A big thanks to `Phil Ewels <http://phil.ewels.co.uk/>`__ for writing this on his own blog and to hmw26 for some of their tips. This tutorial contains some adaptations to their work.
