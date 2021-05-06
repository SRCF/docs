---
title: "Web applications"
date: 2021-04-20T09:27:49+01:00
group: web-hosting
highlight: true
layout: docs
toc: true
---

## Introduction

All accounts include regular web hosting, which is suitable for
static content, PHP (WordPress, Joomla, etc.), and CGI/FastCGI. For
those wishing to host more advanced web apps with the SRCF (Django,
Flask, Rails, Node.js, etc.) and leverage their full flexibility, we
provide these overview docs and
[more custom tutorials]({{< relref "/tutorials" >}}) too:

We also provide a number of sample websites for you. You can explore
them live at <https://sample.soc.srcf.net/> and view the backend at
`/public/societies/sample`.

You can host basically any kind of web application that can bind to a
socket, including all of the popular frameworks like Flask, Django, Ruby on Rails, Express, and beyond. We provide tips and information on getting your apps to run on our web server.

## Adding our badge

We encourage you to add the SRCF badge to your website so that
others can find us. It's a great way to help us out as it costs little
to you but helps us out immensely, in turn allowing us to provide better
services to you. You can find the badges
[here](https://srcf.net/publicity).

## Connecting

We provide a webserver (currently named `sinkhole`), for hosting
applications. **You should connect to this server**, not to the public
login server, `pip`.

You connect to this server via SSH using your normal SRCF account name
and password.

- **Host:** webserver.srcf.net
- **Port:** 22

## Routing traffic to your app

The SRCF uses Apache to serve websites so if you need to run a backend
web app, for example a Django, Rails or Express server, then you will
need to forward web requests. See also our guidance on [port binding]({{ relref "/reference/shell-and-files/software-and-installation#port-binding}}).

### Using UNIX sockets

You will need to configure your application to use a UNIX socket. The
socket should only be accessible to you, which can be done by picking a
path in your home directory (e.g. `/home/ab123/myapp/web.sock`) or by
using appropriate file modes.

Then add the following to your `.htaccess` file, replacing
`<path-to-socket>` with the path to your socket (e.g.
`/home/ab123/myapp/web.sock`) and `<url>` with your domain name (e.g.
`ab123.user.srcf.net`) :

```ApacheConf
    RequestHeader set Host expr=%{HTTP_HOST}
    RequestHeader set X-Forwarded-For expr=%{REMOTE_ADDR}
    RequestHeader set X-Forwarded-Proto expr=%{REQUEST_SCHEME}
    RequestHeader set X-Real-IP expr=%{REMOTE_ADDR}
    RewriteRule ^(.*)$ unix:<path-to-socket>|http://<url>/$1 [P,NE,L,QSA]
```

### Using TCP ports

You will need to pick a port (we've used 999 here but you should pick a
different one above 1024) and configure your application to bind to that
port. Be aware that port-based forwarding offers less security than UNIX
socket-based forwarding and that any other user will be able to forward
requests to the same port you are using. For that reason, we don't set
the headers we do above as they can easily be forged by another user.
Those things being considered, you can put the following in your
`.htaccess` file to enable forwarding requests to a port:

```ApacheConf
    RewriteRule "^(.*)$" http://localhost:999/$1 [P,NE,L,QSA]
```

{{< alert type="info" >}}
If you are serving a page on your root URL, you will have to add `DirectoryIndex disabled` to your `.htaccess` file to prevent the default Apache file listing behavior.
{{<  /alert >}}

## Databases

MySQL and PostgreSQL accounts are included with your SRCF account.

{{< alert type="info" >}}
The source for these docs are generously provided by the Open Computing
Facility. They have been amended to include SRCF-specific information.
Read more about them [here](https://www.ocf.berkeley.edu).
{{< /alert >}}
