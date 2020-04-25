Frequently Asked Questions: User Contributed
--------------------------------------------

The following instructions were provided by our users but are not
supported by the SRCF.

How do I submit a FAQ?
~~~~~~~~~~~~~~~~~~~~~~

Email the publicity officer: publicity@srcf.net

How to set up MediaWiki for use with Raven on the SRCF
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Contributed by Nicholas Wilson and edited, htmlified and tested by
Daniel Thomas if you have difficulties with this or find a bug in it
please contact Daniel Thomas (drt24) as these instructions are not
supported by the SRCF

Alternate instructions can be found on the `Raven Wiki's page for
MediaWiki <https://wiki.csx.cam.ac.uk/raven/Mediawiki>`__ but these
appear to be for a previous version

#. The easiest method to do this is to start by logging in to the
   `desktop service. <../desktop>`__, you should also read our `basics
   page <basics>`__ first.
#. You will need to install Mediawiki separately for each society or
   personal site. Get a MySQL or PostgreSQL database for your society or
   user if you haven't already by following the `database
   FAQ. <./databases>`__
   `Download MediaWiki <http://www.mediawiki.org/wiki/Download>`__, it
   comes as a zip file. Make a folder "wiki" under public\_html in your
   society folder and unpack the MediaWiki zip file there (so you have a
   public\_html/wiki/includes and so on).
#. If you want your whole site to be the wiki and so you want all
   connections to the base of your site ot be redirected to the wiki.
   Add a special file in public\_html (next to wiki) called ".htaccess"
   with the following contents:

   ::

       Options +FollowSymlinks
       AAAlwaysDecode On

       RewriteEngine On
       RewriteBase /<socname>
       RewriteRule ^wiki/requireRaven/(.*)$ w/$1 [R,L]
       RewriteCond %{QUERY_STRING} ^title=Special:UserLogin&returnto=(.*)$
       RewriteRule ^wiki/.*$ wiki/requireRaven/%1 [R,L]
       RewriteRule ^w/Special:UserLogin wiki/requireRaven/index.php [R,L]
       RewriteRule ^w/(.*)$ wiki/index.php?title=$1 [PT,L,QSA]
       RewriteRule ^w/?$ wiki/index.php [L,QSA]
       RewriteRule ^/?$ wiki/index.php [L,QSA]

   | Here ``<socname>`` is the abbreviation which forms part of the url
     for your site, for example 'The Society for Foo' might have a
     ``<socname>`` of ``foosoc``. ``<Society Name>`` refers to the full
     name of the society e.g. 'The Society for Foo' and ``<Site Name>``
     refers to the name of the website e.g. "The Society for Foo's
     Website".
   | If you don't want your whole site to be a wiki you can add
     additional directory and for example have a folder
     ``~/<socname>/w/`` with a folder ``~/<socname>/w/wiki``, inside it
     and put the .htaccess file in the ``~/<socname>/w/`` folder instead
     and change ``RewriteBase /<socname>`` to:
     ``RewriteBase /<socname>/w/``

#. Add a folder called "requireRaven" in wiki and add a file called
   ".htaccess" there with contents:

   ::

       RewriteEngine On
       RewriteCond %{HTTPS} off
       RewriteRule (.*) https://%{HTTP_HOST}%{REQUEST_URI} [R=permanent]

       AADescription "<Site Name>"
       AuthType WebAuth
       Require valid-user

#. Browse to your site's main page and click the link to configure the
   wiki but DO NOT FILL IN THE FORM.
#. Open a terminal (if you are not already using, one see Applications
   -> Accessories -> Terminal on the desktop service or use the `Ajax
   Terminal <../shellinabox/>`__) and type (without the dolar signs):

   ::

       $ mkdir ~/<socname>/public_html/wiki/config
       $ umask 0007
       $ touch ~/<socname>/public_html/wiki/config/LocalSettings.php
       $ chgrp <socname> ~/<socname>/public_html/wiki/config/LocalSettings.php
       $ umask 0002

   (This is so that the file is secret right from the start; if we let
   the MW installation script create the file, it will be world-readable
   for a few seconds, allowing a malicious process a brief window to get
   a read handle on it and steal your password.)

#. Now fill in the form. Pick a strong password and write it down so you
   don't forget it. (running something like
   ``apg -a 1 -n 1 -m 16 -E \"\'`` will generate a strong password)
   Trying to select a creative commons licence may accidentally submit
   the form without input checking so if you want to do that, do it
   last.
#. Move your LocalSettings.php file from the config folder up one
   directory. Modify or add to the existing sections to look like these:

   ::

       ## The URL base path to the directory containing the wiki;
       ## defaults for all runtime URL paths are based off of this.
       ## For more information on customizing the URLs please see:
       ## http://www.mediawiki.org/wiki/Manual:Short_URL
       $wgScriptPath       = "/<socname>/wiki";
       $wgScriptExtension  = ".php";
       $wgArticlePath = "/<socname>/w/$1";  # Virtual path (left part of first rewrite rule). MUST be DIFFERENT from the path above!
       $wgUsePathInfo = true;

   #. To allow file uploads (photos, sound, videos, and so on), play
      around with this section:

      ::

          ## To enable image uploads, make sure the 'images' directory
          ## is writable, then set this to true:
          $wgEnableUploads       = true;
          $wgStrictFileExtensions = false;
          $wgFileExtensions = array_merge( $wgFileExtensions, array( 'pdf', 'mp3', 'svg', 'ogg' ) );
          $wgAllowTitlesInSVG = true;
          $wgUseImageMagick = true;
          $wgImageMagickConvertCommand = "/usr/bin/convert";

      Note that because of the way the SRCF is set up, it is absolutely
      vital to add these lines to prevent users uploading world-writable
      files:

      ::

          $wgDirectoryMode = 0775;
          umask(0002);

   #. To get the Raven authentication to work, add these lines:

      ::

          require_once "$IP/extensions/AutoREMOTEUSER/AutoREMOTEUSER.php";
          $wgAuth = new Auth_remoteuser();

   #. To disable editing by anonomous users (i.e. those not logged in
      via Raven):

      ::

          #Anonymous users can't edit pages
          $wgGroupPermissions['*']['edit'] = false;
          $wgShowIPinHeader = false;
          # Anonymous users can't create pages
          $wgGroupPermissions['*']['createpage'] = false;

#. Now you will need to actually install the extension: add `this
   file <user-contrib/AutoREMOTEUSER.php>`__ to
   wiki/extensions/AutoREMOTEUSER/. Note that you must use the provided
   customised version, not the upstream one, whatever version it is at.

There is quite a lot of further configuring that will need to be done,
but the rest is generic (for example you will want to make ``$wgLogo``
point to your logo for the site and ``$wgFavicon`` point to a favicon
for the site). Errors you may get:

-  Problems with images, or automated emails about world-writable files,
   will be because you didn't follow the instructions 8.1.
-  Double check that LocalSettings.php is not world-readable.

   ::

       $ stat LocalSettings.php

   Should say something like: ``Access: (0660/-rw-rw----)  Uid: ...``
   somewhere in its output.

-  All the files should be group writable and owned by the society user
   (for society accounts) see `FAQ: Managing Society
   Accounts <managing-socaccount.html>`__

How to run Apache Tomcat on the SRCF
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Contributed by Richard Whitehouse and edited, htmlified and tested by
Daniel Thomas if you have difficulties with this or find a bug in it
please contact Daniel Thomas (drt24) as these instructions are not
supported by the SRCF

In a SSH shell outside of the public\_html directory (in
/societies/SOCNAME/):

#. Download the latest version (last updated 2010-02-01 `check this is
   still the right version <http://tomcat.apache.org/index.html>`__):

   ::

       wget http://mirror.ox.ac.uk/sites/rsync.apache.org/tomcat/tomcat-6/v6.0.24/bin/apache-tomcat-6.0.24.tar.gz
           

#. Extract it:

   ::

       tar -xvvzf apache-tomcat-6.0.24.tar.gz 
           

#. Move it to somewhere sensible:

   ::

       mv apache-tomcat-6.0.24 tomcat
           

#. Set the permissions to something more sensible.

   ::

       chmod -R g+rw tomcat
           

#. Edit the server file:

   ::

       vim tomcat/conf/server.xml
           

#. Find:

   ::

       <Connector port="8080" protocol="HTTP/1.1" 
               connectionTimeout="20000" 
               redirectPort="8443" />
           

#. Replace with:

   ::

       <Connector address="127.0.0.1" port="PORTNUMBER" protocol="HTTP/1.1" 
               connectionTimeout="20000" 
               redirectPort="8443" />
           

   replacing PORTNUMBER with a arbitrarily selected large unused port.
   (>1024 and `not in
   use <http://www.iana.org/assignments/port-numbers>`__).

#. | It is no longer necessary to use php scripts to start and stop the
     tomcat server. Now it is possible to use sudo -u as follows:
   | Start the server using:

   ::

             sudo -u socuser tomcat/bin/startup.sh
           

   And stop the server using:

   ::

             sudo -u socuser tomcat/bin/shutdown.sh
           

   where *socuser* is the name of the society user that you are admin
   of.

#. | Inside the directory you want pointing at the Tomcat server:
   | Create the following .htaccess file

   ::

       RewriteEngine on
       RewriteRule (.*) http://localhost:PORTNUMBER/$1 [P]
         

   | where PORTNUMBER is the portnumber selected earlier.
   | Obviously you can change this to the application required on the
     Tomcat server.

#. To start the server, run:

   ::

            sudo -u socuser tomcat/bin/startup.sh
          

   where *socuser* is the name of the society user that you are admin
   of.

#. Visit SOCNAME.soc.srcf.net/tomcat/ to check tomcat is running
   (Assuming you are redirecting to tomcat from the /tomcat/ directory).
#. When you want to stop tomcat run:

   ::

             sudo -u socuser tomcat/bin/shutdown.sh
           

Enable society IMAP inboxes on srcf.net maildomain
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Contributed by Ian Abel and edited, and tested by Daniel Thomas if you
have difficulties with this or find a bug in it please contact Daniel
Thomas (drt24) as these instructions are not supported by the SRCF.

#. Don't do this if you don't understand Exim forward files or IMAP
   subfolders or heaven forbid, symlinks and unix permissions.
#. Make a directory in ``~SOCNAME`` named 'mail' (name is not required,
   but makes sense, don't burden future admins with puzzles), with
   permissions ``u+rwx g+rws``
#. Add a line to the society .forward such as
   '``save $home/mail/mailbox_name``' (or
   '``unseen save $home/mail/mailbox_name``' if you want it to get
   delivered as normal as well).
#. Each society admin that wishes to read this mail should make sure
   they have a directory named 'mail' (name **is** important) in their
   home directory
#. run

   ::

       ln -s /societies/socname/mail/mailbox_name /home/CRSid/mail/

   to create the mailbox in their mailbox namespace

#. Use the `normal IMAP instructions <email#reading>`__ to connect to
   CRSid's inbox, and then 'mail/mailbox\_name' is a subfolder that you
   can subscribe to
