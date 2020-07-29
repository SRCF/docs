.. _custom-domains:

Custom domains
--------------

As part of our web hosting, we provide free domains for both individuals (of the form ``<crsid>.user.srcf.net``) and group accounts (``<groupname>.soc.srcf.net``).  These are configured as standard, and will serve any web content placed in the ``public_html`` directory of the respective personal or group account (subject to a 20-minute delay when publishing a new website).

We also support external domains purchased from a domain registrar.  For these to serve your site, you'll first need to make sure the domain resolves to us -- this is controlled by DNS records, which your registrar should allow you to configure.

.. hint::
    The base domain (e.g. ``example.com``) is generally represented by *@*, and subdomains (e.g. ``bubbles.example.com``) would just be *bubbles*.

Add the following records in your DNS:

1. @ A 131.111.179.82
2. @ AAAA 2001:630:212:700:2::1
3. www CNAME webserver.srcf.societies.cam.ac.uk

The first sets your base domain to forward to our webserver's IPv4 address, the second does much the same but for IPv6. The third sets an alias from www.yourwebsite.co.uk to our webserver.

.. note::
    Alternatively, you could use an external DNS provider such as CloudFlare. They tend to be much more flexible in what one is able to do with their registrar's DNS.

More information
^^^^^^^^^^^^^^^^

The preferred method is a **CNAME** record, which acts as an alias from your domain to ours.  The value of this record should be ``webserver.srcf.societies.cam.ac.uk`` -- this means your domain will continue to work even if we move servers, as our hostname will stay the same.  Note that you must remove any other non-CNAME records for this particular (sub)domain.

CNAMEs are generally not supported on base domains (``example.com``), only subdomains, so the alternative is to use **A** (for IPv4) and **AAAA** (IPv6) records to specify an IP address.  The A record should be set to ``131.111.179.82``, whilst AAAA should be ``2001:630:212:700:2::1``.  Make sure to remove any non-SRCF A/AAAA records for that domain, otherwise browsers may arbitrarily choose between our server and whatever else is configured.

You can confirm if the domain is resolving to us correctly by visiting it in your browser -- you should be greeted with a "non-existent site" page on our site.  Once this is visible to you, use the SRCF control panel to assign the domain to your (group) account.

.. warning::

    DNS takes time to propagate.  Each record has an associated time-to-live (TTL) -- this is how long the record is valid for, so a long TTL means browsers and computers will cache the resulting location for a longer period.  If you had a previous DNS record with a TTL of 1 day, you may need to wait that long before the domain starts resolving correctly.

Multiple websites from one account
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

You may wish to run more than one website under a single account.  This can be done if you have your own domain, by delegating different (sub)domains to different sites.

First, make sure all the desired domains are configured as above.  When emailing us, tell us which directory each site should be served from -- **this must be a subdirectory of public_html**, or public_html itself.

For example, you may wish to serve ``example.com`` from */groups/<groupname>/public_html*, and ``bubbles.example.com`` from */groups/<groupname>/public_html/bubbles*.

What about email?
~~~~~~~~~~~~~~~~~

The SRCF cannot process mail for your domain -- we are prevented from doing so by the university.  This means you must not point **MX** records at SRCF machines, as any mail sent there will be dropped before it enters the CUDN.

You should check what services your domain registrar provides, which may include forwarding addresses (so that mail sent to ``bubbles@example.com`` is redirected to a mailbox elsewhere) or real mailboxes (so that you connect to your registrar's mail server to read mail).
