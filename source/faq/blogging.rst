Frequently Asked Questions: Blogging
------------------------------------

Do you have any software for managing a weblog?
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Not really: there is an installation of *Movable Type* on the system but
it's rather old (version 2.661) and the MT licensing terms don't permit
upgrading to the newer versions without purchasing a commercial license.
Our intention is to eventually phase out the MT system.

Our recommendation is that a good, properly free implementation of a
weblog manager is `*WordPress* <http://www.wordpress.org/>`__ which is
powerful, standards-compliant and otherwise quite sensible, as well as
having a good license from our point of view. However, it's not really
compatible with running a centralised copy on the system, so you'll have
to install a local copy in your web area: this is very easy and more
flexible for all concerned. Happy blogging!

| It is **Very Important** that you keep Wordpress
  **`updated <http://codex.wordpress.org/Upgrading_WordPress>`__**.
| Outdated Wordpress installations are frequently compromised and
  Wordpress has a history of security flaws.
| As of the 2.7 release of Wordpress, updating has become very easy, you
  should be running the latest version of Wordpress.

WordPress Tips: UTF-8 character encodings and RSS feeds
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Some `tips for using wordpress on the
SRCF <http://www.toobusyto.org.uk/tooBusy/archives/2004/11/02/wordpress-12-and-the-srcf/>`__.

How do I move my weblog from *Movable Type* to *WordPress*?
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Thankfully, this is possible: just follow the instructions below
(courtesy of `Hanna </~hmw26/>`__ — thanks!)

Preparation:

-  Make sure your host meets the `WordPress <http://wordpress.org>`__
   `requirements <http://wordpress.org/about/requirements/>`__. (SRCF
   users need not worry; pip has everything required.)
-  Ask your host admins for a MySQL database, and make sure you know the
   username and password. (Note: SRCF policy is one database per
   user/society. If you already have a database and you wish to separate
   your WP tables from existing tables, use a table prefix such as
   ``wp_``. If you have forgotten your MySQL password, ask the sysadmins
   to reset it.)

WP Installation:

-  Log into your host. (For SRCF users, this is ``shell.srcf.net``.)
-  Download the latest version of WP
   (``wget http://wordpress.org/latest``) and extract the files (e.g.
   ``tar zxvf wordpress-1.0.2-blakey.tar.gz``).
-  Move the contents of the extracted directory into ``~/public_html``
   (e.g. ``mv wordpress-1.0.2/* ~/public_html``). If you are migrating
   from MT to WP and would like your new WP blog to reside in the
   directory currently used by MT (e.g. ``~/public_html/mt``) then move
   the files to that directory instead. If you would like to install WP
   in a new directory in your webspace (e.g. ``~/public_html/wp``),
   create the new directory (e.g. ``mkdir ~/public_html/wp``) and move
   the files into it.
-  ``cd`` to the directory now containing your WP files.
-  Use your favourite editor to edit ``wp-config-sample.php``, filling
   in your database details (database name, username, password, database
   host). (Note: on pip, both your database name and username are your
   CRSID and the database host is ``localhost``.) Change the
   ``$table_prefix`` variable to the prefix you wish to use for your WP
   tables (e.g. ``$table_prefix = 'wp_';``
-  Move ``wp-config-sample.php`` to ``wp-config.php``.
-  Make sure ``wp-config-sample.php`` isn't world-readable: it contains
   password data! To do this, run ``chmod o-r wp-config.php``.
-  Run the installation file by pointing your browser at ``install.php``
   in the ``wp-admin`` directory inside the directory containing your WP
   files (e.g. ``http://CRSID.user.srcf.net/wp/wp-admin/install.php``).
-  | Restrict access to ``.../wp-admin/``. To improve security you can
     restrict access to the /wp-admin/ directory which will hopefully
     help stop other people being able to log in to it even in the event
     of a security vunerability in Wordpress. You can also stick this
     directory behind SSL so that your password cannot easily be stolen
     during login.
   | This can be achieved using a ``.htaccess`` file. In the
     ``.../wp-admin/`` directory make a file called ``.htaccess`` and
     put the following in it.

   ::

       RewriteEngine On
       RewriteCond %{HTTPS} off
       RewriteRule (.*) https://%{HTTP_HOST}%{REQUEST_URI} [R=permanent]

       AuthType Ucam-WebAuth
       Require user CRSID

   | Replace CRSID with your CRSID.
   | The ``Rewrite`` section makes all connections to ``.../wp-admin/``
     use SSL which will protect your password, the ``AuthType`` section
     uses Raven to restrict access to the directory, you probably want
     to use your CRSID on the ``Require`` line, if you want to allow
     multiple people access then you could use multiple CRSIDs e.g.
     ``Require user CRSID1 CRSID2`` etc. `see this
     FAQ <web-hosting#raven>`__ for more details.
   | **Note:** A file beginning with a ``.`` is a hidden file on unix.
     If you are using the gnome `graphical desktop <../webdesktop/>`__
     then pressing Ctrl-h in nautilus (the default file browser) will
     show hidden files. (If you are using something else you should be
     able to work out what to do.)

-  Activate a spam filtering plugin like Akismet and a capatcha system
   like reCAPTCHA. Akismet is installed by default and just needs
   activiating. Go to ``.../wp-admin/plugins.php`` to install and
   activate plugins.
-  You may optionaly want to modify your theme so that it no longer puts
   the Wordpress version into the html - this may help stop hackers
   finding that you installation is outdated but it does not protect
   against problems caused by the version you are using being
   compromised.

Accounts:

-  Log in to WP as ``admin`` using the password given at the end of the
   installation process.
-  Click on ``My Profile`` and change the ``admin`` password using the
   form provided.
-  Click on ``Users`` and create an account for yourself. (If you
   planning to import entries from your MT blog, be sure to use the same
   username as your MT user account. If your MT blog has multiple
   authors, you must create a user account for each of them.)

Migration from MT (based on the tutorial
`here <http://carthik.net/wpdocs/importmt.html>`__):

-  Log into MT.
-  Click on the ``Manage Weblog`` link for the blog you wish to migrate.
-  Select ``Import/Export`` from the left menu.
-  Click on the ``Export Entries from …`` link at the bottom of page.
   This should display a large text file (containing all your MT blog
   entries) in your browser. If text may be displayed as a single long
   line (as may be the case if you are using IE), the import into WP
   will not work correctly. Try using a Gecko-based browser (e.g.
   Netscape, Mozilla or FireFox) instead.
-  Save the file displayed in your browser as a text file with the name
   ``import.txt`` on your local computer.
-  Using SCP or SFTP, upload ``import.txt`` to the ``wp-admin``
   directory inside the directory containing your WP files on your host.
   (Note: if necessary, SRCF users may email the sysadmins for help on
   this step.)
-  On your host, ``cd`` to the ``wp-admin`` directory.
-  Use your favourite editor to change line 2 of ``import-mt.php`` from
   ``define('MTEXPORT', '');`` to ``define('MTEXPORT', 'import.txt');``.
-  Making sure you're logged into WP as ``admin``, point your browser at
   ``import-mt.php`` (e.g.
   ``http://CRSID.user.srcf.net/wp/wp-admin/import-mt.php``).
-  Click on ``Let's go``.
-  Log out of the ``admin`` account and log back into WP using your
   previously created user account. You may now edit your imported
   entries. If you imported entries by multiple authors, you will only
   be able to edit those written by yourself.

Redirection of old MT entries using ``.htaccess``:

-  Note that this method only works if you have been using MT permalinks
   containing entry IDs (e.g.
   ``http://CRSID.user.srcf.net/mt/archives/000123.html``).
-  Log into WP.
-  Click on ``Options`` and select ``Permalinks``.
-  Enter ``/%year%/%monthnum%/%day%/%postname%/`` into the text field.
-  write text editor, create a file ``.htaccess`` in the directory
   containing your WP files. Copy and paste the rewrite rules displayed
   in the text area into ``.htaccess``.
-  Paste the following text into your ``.htaccess`` file, immediately
   below the rewrite rules:

   -  ``Redirect Permanent /mt/index.html http://CRSID.user.srcf.net/wp/index.php``
      ``Redirect Permanent /mt/index.rdf http://CRSID.user.srcf.net/wp/wp-rdf.php``
      ``Redirect Permanent /mt/index.xml http://CRSID.user.srcf.net/wp/wp-rss.php``

-  Log into MT.
-  Click on the ``Manage Weblog`` link for the blog whose posts you wish
   to redirect.
-  Select ``Templates`` from the left menu.
-  Click on ``Create new index template``.
-  Call the new template ``redirect`` and specify ``redirect.php`` as
   its output file.
-  Assuming your MT archives are in ``~/public_html/mt/archives/`` and
   your WP blog files are in ``~/public_html/wp/``, the template's body
   should contain the following:

   -  ``<?php``
      ``require('wp-config.php');``
      ``header('Content-type: text/plain');``
      ``?>``
      ``<MTEntries lastn="999999'></MTentries>``
      ``Redirect Permanent /mt/archives/<?php echo str_pad("<$MTEntryID$>", 6, '0', STR_PAD_LEFT); ?>.html http://CRSID.user.srcf.net/wp/<$MTArchiveDate format="%Y/%m/%d"$>/<?php echo sanitize_title("<$MTEntryTitle$>"); ?>``

-  Save and rebuild the template.
-  On pip, you also need to change the owner of ``redirect.php`` from
   ``mt`` to your CRSID. Since the file is owned by ``mt``, you cannot
   do this using ``chmod``. Instead, you will need to create a new file
   ``tmp.php``, copy the text from ``redirect.php`` to ``tmp.php``,
   delete ``redirect.php`` and rename ``tmp.php`` to ``redirect.php``.
-  Point your browser to ``redirect.php`` (e.g.
   ``http://CRSID.user.srcf.net/mt/redirect.php``. This should display a
   list of permanent redirect statements. Copy the list displayed on
   your browser into your ``.htaccess`` file, below the rewrite
   statements.

And that's it!
