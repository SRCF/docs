---
title: "Gopher"
date: 2021-04-20T09:27:49+01:00
group: other-services
layout: docs
---

## Overview

Gopher is a protocol for distributing, searching and retrieving
documents over the Internet as an alternative to the Hypertext Transfer
Protocol (HTTP). In contrast to the World Wide Web, Gopherspace is
navigated using a menu-based interface.

Your normal web browser likely won't be able to access Gopher sites so
you will need to install some other software or browser plugin first.
Once you do this you should be able to find the SRCF's presence at
`gopher://gopher.srcf.net/`.

## Publishing your Gopher site

To get started with a Gopher site you'll want to create a subdirectory
in your public home directory called `public_gopher`:

```
>     /public/home/spqr2/public_gopher         # For individual users
>     /public/societies/foosoc/public_gopher   # For groups and societies
```

After a short delay your site will be available via Gopher at:

```
>     gopher://gopher.srcf.net/1/users/spqr2
>     gopher://gopher.srcf.net/1/societies/foosoc
```

## Customising your directory listing

Gopher sites consist of a directory listing of files and a description
(or abstract) for each file. To attach an abstract to a file, say
`myfile.txt`, create another file called `myfile.txt.abstract` with a
line or two of descriptive text. This will be displayed with any links
to that file. To attach an abstract to a directory, create a `.abstract`
file inside that directory.

The directory listing of a Gopher site can be customised using a
`gophermap` file in the directory in question. For full details on how
to do this take a look at the `/var/gopher/gophermap-info.txt` file on
`pip`.
