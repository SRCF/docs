---
title: "Custom domains"
date: 2021-04-20T09:27:49+01:00
group: custom-domains
highlight: true
layout: docs
---

## Overview

As part of our web hosting, we provide free domains for both individuals
(of the form `<crsid>.user.srcf.net`) and group accounts
(`<groupname>.soc.srcf.net`). These are configured as standard, and will
serve any web content placed in the `public_html` directory of the
respective personal or group account (subject to a 20-minute delay when
publishing a new website).

We also support external domains purchased from a domain registrar. If
you are looking to buy a domain for yourself or your society then we can
recommend [Mythic
Beasts](https://www.mythic-beasts.com) but there are plenty of other registrars out there with varied pricing.

You'll need to make sure the domain resolves to us
-- this is controlled by DNS records, which your registrar should allow
you to configure. If you've delegated DNS from your registrar to a
third-party service such as Cloudflare, you'll need to configure it
there.

{{< alert type="info" >}}
The base domain (e.g. `example.com`) is generally represented by *@*,
and subdomains (e.g. `bubbles.example.com`) would just be *bubbles*.
{{< /alert >}}

Assuming you want to serve your site from the base domain `example.com`,
your DNS records should look something like the following:

```
  Subdomain   Type    Value
  ----------- ------- ------------------------------------
  @           A       131.111.179.82
  @           AAAA    2001:630:212:700:2::1
  www         CNAME   webserver.srcf.societies.cam.ac.uk
```

The first record (`A`) makes your base domain point to our webserver's
IPv4 address; the second (`AAAA`) does the same but for IPv6. The third
(`CNAME`) sets an alias from `www.example.com` to our webserver.

If instead you want to use the subdomain `bubbles.example.com`:

```
  Subdomain     Type    Value
  ------------- ------- ------------------------------------
  bubbles       CNAME   webserver.srcf.societies.cam.ac.uk
  www.bubbles   CNAME   webserver.srcf.societies.cam.ac.uk
```

## More information

The preferred method is a **CNAME** record, which acts as an alias from
your domain to ours. The value of this record should be
`webserver.srcf.societies.cam.ac.uk` -- this means your domain will
continue to work even if we move servers, as our hostname will stay the
same. Note that you must remove any other non-CNAME records for this
particular (sub)domain.

CNAMEs should **not** be used on base domains (`example.com`, sometimes
called the zone apex), only on subdomains. The alternative is to use
**A** (for IPv4) and **AAAA** (IPv6) records to specify an IP address.
The A record should be set to `131.111.179.82`, whilst AAAA should be
`2001:630:212:700:2::1`. Make sure to remove all other A/AAAA records
for that domain, otherwise browsers and other software may arbitrarily
choose between our web server and whatever else is configured.

You can confirm if the domain is resolving to us correctly by visiting
it in your browser -- you should be greeted with a 'non-existent
site' page on our site. Once this is visible to you, use the SRCF
control panel to assign the domain to your (group) account.

{{< alert type="warning" >}}
DNS takes time to propagate. Each record has an associated time-to-live
(TTL) -- this is how long the record is valid for, so a long TTL means
browsers and computers will cache the resulting location for a longer
period. If you had a previous DNS record with a TTL of 1 day, you may
need to wait that long before the domain starts resolving correctly. For
testing purposes, it may be helpful to set your TTLs to the lowest value
that your DNS provider permits so that changes to preexisting records
propagate as quickly as possible.
{{< /alert >}}

### Document roots and multiple websites

You may wish to run more than one website under a single account. This
can be done if you have your own domain, by delegating different
(sub)domains to different sites.

`<crsid>.user.srcf.net` and `<groupname>.soc.srcf.net` domains are fixed
at serving the root of your `public_html` directory. When adding custom
domains to your account, you can optionally set a *Document root* --
this is a subdirectory of `public_html` which acts as the root of your
domain.

For example, you may wish to serve `example.com` from
*/societies/\<groupname\>/public\_html*, and `bubbles.example.com` from
*/societies/\<groupname\>/public\_html/bubbles*. This means that
*/societies/\<groupname\>/public\_html/bubbles/index.html* would be
served as the index page of `bubbles.example.com`.

### HTTPS

HTTPS provides secure communication between our servers and your website
visitors, and is recommended for any site that handles personal
information or provides password authentication. In comparison, HTTP
transmits in plain text, and is susceptible to eavesdropping over an
untrusted network (such as public wi-fi or other shared networks).

Websites served from `.user.srcf.net` and `.soc.srcf.net` addresses come
with working HTTPS by default, but custom domains must be opted-in
manually. This can be done using the [Let's Encrypt
form](https://srcf-admin.soc.srcf.net/lets-encrypt/). Requests will be
queued, and processed together at the end of each day.

Note that your domains need to be actively resolving to us in order to
have certificates issued -- if not, they will be dropped from the
queue. The resulting certificate we'll serve will list each of your
domains as a Subject Alternative Name (SAN). Once opted in, no further
action is required -- certificates will automatically be renewed close
to their expiry.

{{< alert type="info" >}}
Custom domains are shown with **www** and **non-www** variants. We serve
your site on both of these domains, even if only one of the variants
actually resolves to us. If *via wildcard* is shown, we are actually
accepting requests for any subdomain of the listed domain, though we are
currently unable to issue wildcard certificates due to limitations with
the issuer. Please [contact the sysadmins](https://www.srcf.net/contact)
if you wish to request certificates for specific subdomains other than
www.
{{< /alert >}}

Websites that are not opted-in will not be served over HTTPS, so will
only respond to plain HTTP. Requests for an HTTPS version will show a
'non-existent site' page.

Note that we only handle serving your website over HTTPS, and will still
accept HTTP connections. If your site uses a CMS that stores a canonical
domain, you'll need to update that to use HTTPS if desired. You can
also use a .htaccess file to require secure connections, and redirect
plain HTTP.

### What about email?

The SRCF cannot process mail for your domain -- we are prevented from
doing so by the university. This means you must not point **MX** records
at SRCF machines, as any mail sent there will be dropped before it
enters the CUDN.

You should check what services your domain registrar provides, which may
include forwarding addresses (so that mail sent to `bubbles@example.com`
is redirected to a mailbox elsewhere) or real mailboxes (so that you
connect to your registrar's mail server to read mail).
