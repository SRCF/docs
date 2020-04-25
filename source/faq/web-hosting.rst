Frequently Asked Questions: Web Hosting
---------------------------------------

Can I run CGI scripts?
~~~~~~~~~~~~~~~~~~~~~~

Yes, see `here <cgi.html>`__ for more details.

Can I use Server-Side Includes?
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Yes — all files ending in ``.shtml`` and ``.sxhtml`` are server-parsed
by default. Only these extensions will be supported for SSI
functionality in future and new extensions cannot be specified in
``.htaccess`` files. Sorry :-)

See this `tutorial <http://httpd.apache.org/docs/howto/ssi.html>`__ for
more information on server-side includes.

Can I use WSGI?
~~~~~~~~~~~~~~~

Unfortunately, no; however, we are looking into ways to enable this.

This is because mod\_wsgi, the Apache module which enables WSGI, does
not work well on multi-user systems: all python processes are restricted
to being run as a single user. This would present security problems on
the SRCF, unless such a restrictive environment was used that WSGI would
not be useful.

How can I access remote files from within PHP?
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

On the SRCF system, we restrict the use of functions which call the PHP
``fopen()`` directive to only access the local filesystem: this affects
``fopen()`` itself, as well as directives like ``include()``,
``require_once()`` and so on. The reasoning is that some security
incidents occurred where attackers were able to convince insecure
scripts to include and execute a malicious PHP script from a remote
location.

After such incidents, we decided that anyone who *really* wants to be
able to perform operations on remote files via PHP should have to be
fully aware that that's what they're doing. If you definitely do want to
run remote fopen commands then you need to place a file called
``php_override.ini`` in the top level of your website containing the
line

::

    allow_url_fopen = On

Remember, PHP remote fopen is a security risk — make sure you know what
you're doing!

Can I use Apache content-negotiation?
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Yes, content negotiation is enabled by default for all SRCF-served
websites. This enables you to automatically serve multi-lingual
documents — the server will automatically choose the most appropriate
one for the viewer (provided you follow the instructions in Apache's
`content-negotiation
tutorial <http://httpd.apache.org/docs/content-negotiation.html>`__.)

Perhaps more useful is that content negotiation allows you to drop the
file extension when you make a hyperlink to a file: ``foo.php`` can be
linked to with an HTML link like ``<a href="foo" ...>``. Linking like
this is easier for visitors to remember and helps avoid “link rot” —
it's highly recommended.

Common gotchas: you have to be careful not to have a directory at the
same level also called “foo”, though, and any PHP include statements
need to use the full filename.

I have registered www.foo.com — can I point it at my SRCF website?
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Yes - we can set up what is known as “virtual hosting”, which
effectively means that each of the names which refer to our machine acts
as a separate server, with separate configuration files, logs and all
the rest. This has a number of advantages over the simple redirection
offered by many other people - for a start all file names work, so
http://www.foo.com/bar/hello.html is equivalent to
http://spqr2.user.srcf.net/bar/hello.html and so on. Also you don't end
up relying on a third party's machine to do the redirection as well as
the web server itself.

It is possible to have more than one domain (or subdomain) pointing at a
single account, so that each name points to a different subdirectory
within your public\_html directory.

To set up virtual hosting, you should find someone outside of the
Cambridge University Data Network (CUDN) who is willing to host the DNS
server for your domain (we are not allowed to do this for you) - this
will normally be the same organisation with whom you registered the
domain.

Once you have done this, instruct them to set up a “CNAME” record for
your domain pointing to ``webserver.srcf.societies.cam.ac.uk`` and let
us know so that we can configure the server appropriately.
Alternatively, DNS “A” and “AAAA” records referencing the IP address of
the SRCF webserver (``A — 131.111.179.82``,
``AAAA — 2001:630:212:700:2::1``) will work, but is slightly less robust
to changes in our local setup — CNAMEs are the preferred method.

Once you have done this, head to the `Control
Panel <https://control.srcf.net>`__ and select the “Add custom domain”
button in the “Website” section of the user/society page.

Please note that we are not allowed to act as the mail exchange for
external domains — see the FAQ entry: `Can you host the mail exchange or
name server for my domain? </faq/other-services.html#mx>`__ for more
details.

Do you offer any uptime guarantees?
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

| While we strive to make our system available all the time, we are not
  in a position to guarantee a minimum level of service. We do
  occasionally need to take the system down for maintenance (although we
  try to do this when it will cause minimal disruption), and there is
  always the risk of the unforeseen. If the availability of your site is
  mission-critical then we recommend that you seek a commercial hosting
  solution.
| See also: `Scheduled vulnerable period <../index.html#vulnerable>`__.

How do I get web stats for my account?
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

For sites which have `migrated to the new style of
address <https://srcf-admin.soc.srcf.net/subdomains/>`__, web stats are
available at `webstats.srcf.net <https://webstats.srcf.net/>`__. These
stats are updated daily.

For sites which have not yet migrated, or to view archived statistics
for sites which recently migrated, the old stats system is still
available at
`webalizer.soc.srcf.net <http://webalizer.soc.srcf.net/>`__. To enable
this for your site, log in and run ``touch .enable_webstats`` in your
home directory (or society directory if you want society webstats).
These stats are generated using webalizer every Sunday morning.

Can I use a secure (HTTPS) connection?
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Yes, simply replace the ``http://`` with ``https://`` in front of the
URL of any page hosted on our server to make a secure connection. For
example, https://www.srcf.net/ connects securely to our front page.

If you would like to make a particular page *only* accessible over
HTTPS, you should use the ``SSLRequireSSL`` directive in a ``.htaccess``
file. More information can be found in the `Apache
documentation <http://httpd.apache.org/docs-2.4/mod/mod_ssl.html#sslrequiressl>`__.

Our SSL certificate covering \*.srcf.net does not allow for secure
connections to domains for which we provide virtual hosting. However,
you can request a certificate for your domains (for free) from `Let's
Encrypt <https://letsencrypt.org/>`__ by visiting
https://srcf-admin.soc.srcf.net/lets-encrypt/.

Can I protect my web page with a password?
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Yes - you can do this using a ``.htaccess`` file in the directory that
you would like to protect. For more information, see the `Apache
documentation <http://httpd.apache.org/docs/2.2/howto/auth.html>`__ on
the subject. See also the next `question <#raven>`__.

**Note:** Apache basic authentication is insecure, if you are going to
use it make sure you are also using ssl or your passwords will be sent
in plain text across the internet. It is also not possible to chmod
apache password files as reccomended in the Apache documentation.
`Digest <http://httpd.apache.org/docs/2.2/mod/mod_auth_digest.html>`__
or `Raven <#raven>`__ authentication is better.

Can I use the UCS Raven web authentication service on my website?
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Yes. The SRCF has the
`mod\_ucam\_webauth <http://raven.cam.ac.uk/project/apache/>`__ module
installed which makes it very easy to do basic authentication using
`Raven <http://raven.cam.ac.uk>`__. Simply create a ``.htaccess`` file
in the directory you wish to protect that contains:

::

          AuthType Ucam-WebAuth
          Require valid-user

Alternatively you may want to limit access to Raven authenticated users
or those in the cam.ac.uk domain:

::

          Order allow,deny
          Allow from .cam.ac.uk
          AuthType Ucam-WebAuth
          Require valid-user
          Satisfy any

To create a "logout" link, add the following to your .htaccess file:

::

          <FilesMatch "logout">
        SetHandler AALogout
          </FilesMatch>

and then create a link using: ``<a href="logout">Logout</a>``.

Read the full
`documentation <http://raven.cam.ac.uk/project/apache/README.Config>`__
for this module.

To use Raven via CGI or PHP you may install the Perl
`module <http://raven.cam.ac.uk/project/perl/>`__ or PHP
`class <https://wiki.cam.ac.uk/raven/PHP_library>`__ in your home or
society file space. Making centrally installed versions of these modules
available is currently under consideration by the sysadmins.

How do I make non-English characters and symbols display correctly?
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

To make this work, you need to ensure that the character encoding for
your document is correctly specified. For security reasons, our server
is configured to automatically specify a character set, which by default
will be ISO-8859-1. This is suitable for English and most Western
European languages. It is possible that in the future we may change this
to be UTF-8, so please bear this in mind when creating internationalised
pages. Note that specifying a character set in a ``meta`` tag will not
work, as the server specified character set will take precedence.
Instead, to specify an alternative character set you must create a file
called ‘\ ``.htaccess``\ ’ in your ``public_html`` directory containing
the line:

::

    AddDefaultCharset <character set>

The recommendation here is to use Unicode encoded as UTF-8. This is the
standard, and can represent almost all characters in use around the
world (and many which aren't).

It is worth also noting that many symbols used in everyday English are
not part of the ASCII character set - in particular, the GBP and Euro
signs (£ and €), and directional quotes (‘...’ and “...”) fall into this
category, and need to be specified as HTML entities if you are not using
UTF-8.

The answer to the previous question only works for HTML files: how do I do this in PHP?
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

The best way of doing this in PHP is to use the following command:

::

    echo 'default_charset = "utf-8"' >> php_override.ini

Or to add that line to your ``php_override.ini`` file

One way to do this is to put the PHP command:

::

    header("Content-Type: text/html; charset=UTF-8");

(or whatever character set you want to use) at the start of all your PHP
scripts.
