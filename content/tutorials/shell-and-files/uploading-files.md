---
title: "Uploading files"
date: 2021-04-21T16:44:58+01:00
group: shell-and-files
layout: docs
toc: true
---

## Introduction

This tutorial will help you upload
your first files to the SRCF so you can serve them up from your web page
or use them in whatever project you're working on.

In this tutorial, you will be using SFTP to upload your files. Let's
get started!

{{< alert type="info" >}}
You may or may not have heard of another file transfer protocol called
SCP. Most clients like FileZilla and WinSCP are equally compatible with
this.{{<  /alert >}}

## Background

FTP stands for 'file transfer protocol' and is another method of
connecting to a web server (different to HTTP). It's the quickest and
easiest way to transfer files between the computer you're working on
and the web server where they'll be supplied to people viewing your
website.

## Get an SFTP/SCP client

We recommend one of the following:

- [Cyberduck](http://cyberduck.io)
- [WinSCP](http://winscp.net/eng/index.php)

Some of these might only be available for macOS or Windows or vice
versa.

{{< alert type="info" >}}
If you use WinSCP then [this
documentation](http://winscp.net/eng/docs/introduction) and also the
win-built documentation (in the 'Help' menu) will be handy.
{{<  /alert >}}

## Connecting

{{< alert type="info" >}}
If you have any questions about the user interface, we recommend
checking the documentation of the SFTP client you chose in the first
instance. We'll be more broadly discussing here what you should do, but
won't focus on one particular client.
{{<  /alert >}}

1. Use `files.srcf.net` as the server name (sometimes referred to as
    the hostname)
2. Give the username and password that were sent to you when your SRCF
    account was created.

## Uploading a file

When you first log in, you should see the contents of your home
directory on our server. Inside your home directory you will find a
`public_html` directory --- this is where you can put your personal
website.

If you want to upload a group website, you need to connect to the server
in the same way, still using your personal username and password.
However, rather than putting your files in the `public_html` directory
in your filespace, you should also find a directory named after the
short name used for the group's account. Inside here you'll find
another `public_html` directory which is where the group website files
go.

Please note that it can take up to 20 minutes between uploading a new
site and that site being published on the web. Please be patient.

## Closing remarks

Did you like this or find this cool? We invite you to check out
[more tutorials]({{< relref "/tutorials" >}})
or [get in touch]({{< relref "/#help-and-support" >}}) to tell us what you thought!

If you have any suggestions for how we could improve this documentation
please send us an email at `support@srcf.net` or submit a Pull Request
on [GitHub](https://github.com/SRCF/docs)!
