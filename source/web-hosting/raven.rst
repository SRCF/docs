Raven authentication
--------------------

You can configure your site, or a subset of pages, to require user authentication with `Raven <https://raven.cam.ac.uk>`__, the university's authentication system.

With .htaccess
~~~~~~~~~~~~~~

The SRCF has the `mod_ucam_webauth <https://raven.cam.ac.uk/project/apache/>`__ module installed, which makes it easy to do basic authentication using Raven.  `Full documentation <https://raven.cam.ac.uk/project/apache/README.Config>`__ is available, though here are a few common cases.

To protect a directory (whether ``public_html`` for your entire site, or a subdirectory of it), create or edit a ``.htaccess`` file in that directory, and add the following::

    AuthType Ucam-WebAuth
    Require valid-user

This will permit access to anyone with a "current" Raven account, i.e. active students and staff.  To permit access to *any* Raven account (including graduated students), add a *Ptags* directive::

    AARequiredPtags none

Alternatively, you may want to limit access to Raven-authenticated users or visitors within the cam.ac.uk domain::

    Order allow,deny
    Allow from .cam.ac.uk
    AuthType Ucam-WebAuth
    Require valid-user
    Satisfy any

To create a "logout" link, add the following to your .htaccess file (which will create ``/logout`` relative to the directory containing the ``.htaccess`` file)::

    <FilesMatch "logout">
        SetHandler AALogout
    </FilesMatch>

Within an application
~~~~~~~~~~~~~~~~~~~~~

If you're writing or maintaining a webapp that needs to authenticate users for certain pages, you'll likely need a Raven or UCamWebAuth library.  The `Raven developer documentation <https://docs.raven.cam.ac.uk>`__ may be useful for finding a suitable integration.
