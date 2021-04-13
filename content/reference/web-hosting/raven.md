Raven authentication {#raven}
====================

You can configure your site, or a subset of pages, to require user
authentication with [Raven](https://raven.cam.ac.uk), the university\'s
authentication system.

With .htaccess
--------------

The SRCF has the
[mod\_ucam\_webauth](https://raven.cam.ac.uk/project/apache/) module
installed, which makes it easy to do basic authentication using Raven.
[Full
documentation](https://raven.cam.ac.uk/project/apache/README.Config) is
available, though here are a few common cases.

To protect a directory (whether `public_html` for your entire site, or a
subdirectory of it), create or edit a `.htaccess` file in that
directory, and add the following:

    AuthType Ucam-WebAuth
    Require valid-user

This will permit access to anyone with a \"current\" Raven account, i.e.
active students and staff. To permit access to *any* Raven account
(including graduated students), add a *Ptags* directive:

    AARequiredPtags none

Alternatively, you may want to limit access to Raven-authenticated users
or visitors within the cam.ac.uk domain:

    Order allow,deny
    Allow from .cam.ac.uk
    AuthType Ucam-WebAuth
    Require valid-user
    Satisfy any

To limit page access to group account admins only, add a `unix-group`
*Require* directive:

    Require unix-group <groupname>

You can also list specific users:

    Require user <crsid> <crsid>...

To create a \"logout\" link, add the following to your .htaccess file
(which will create `/logout` relative to the directory containing the
`.htaccess` file):

    <FilesMatch "logout">
        SetHandler AALogout
    </FilesMatch>

### Example configuration:

    RewriteEngine On
    RewriteCond %{HTTPS} off
    RewriteRule (.*) https://%{HTTP_HOST}%{REQUEST_URI} [R=permanent]

    AuthType Ucam-WebAuth
    Require user CRSID

Replace CRSID with your CRSID.

The `Rewrite` section makes all connections to `.../wp-admin/` use SSL
which will protect your password, the `AuthType` section uses Raven to
restrict access to the directory, you probably want to use your CRSID on
the `Require` line.

::: {.note}
::: {.admonition-title}
Note
:::

A file beginning with a `.` is a hidden file on unix. If you are using
the gnome [graphical desktop](../webdesktop/) then pressing Ctrl-h in
nautilus (the default file browser) will show hidden files. (If you are
using something else you should be able to work out what to do.)
:::

Within an application
---------------------

If you\'re writing or maintaining a webapp that needs to authenticate
users for certain pages, you\'ll likely need a Raven or UCamWebAuth
library. The [Raven developer
documentation](https://docs.raven.cam.ac.uk) may be useful for finding a
suitable integration.
