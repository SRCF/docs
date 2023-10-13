---
title: "SSH and servers"
date: 2021-04-20T09:27:49+01:00
group: shell-and-files
layout: docs
toc: true
---

## Overview

You can connect to our servers over SSH in order to run programs, manage
files, and change your password.

## Clients

You will need an SSH client -- Mac and Linux come with `ssh` in the
terminal; for Windows, you can enable OpenSSH in Optional Features, use
a Linux distro in WSL, or install a Windows client like PuTTY.

Alternatively, you can access a [web-based
terminal](https://www.srcf.net/terminal/) in your browser.

## Passwordless SSH

Passwordless SSH is often a point we get asked about.

There are a number of reasons why your passwordless ssh setup might not
be working but by far the most common (and the hardest to detect on the
client side!) is incorrect permissions on your `.ssh` directory. Because
the `authorized_keys` file contains sensitive information it must not be
readable by any other user. Therefore you should ensure that the file
`$HOME/.ssh/authorized_keys` have permissions `-rw-------` (i.e. 600).
660 (`-rw-rw----`) will not work even if you are the only member of the
group that owns the `authorized_keys` file. The same caution about
permissions applies to the `.ssh` directory itself.

## Available hosts

### Shell

`shell.srcf.net`

Our main server is **pip**. This is a general-purpose machine for
running software. It has the following SSH fingerprints:

    DSA  MD5:12:8f:8a:1c:e4:f7:a2:9d:80:a3:ef:85:f8:79:a4:ed
    DSA  SHA256:fshymFC90Vd0BrlFnAdilNKSWNsoQVI7qa8/GIMBqtw
    RSA  MD5:4d:da:7f:b2:99:9d:42:8b:10:b4:e5:37:d5:bd:43:b4
    RSA  SHA256:ud4XwVhosGW3oHZ2POzW4oz0zGC2y7JWLGOM1dbIqZw

### Web

`webserver.srcf.net`

Web applications should be run from **sinkhole**, our webserver. This
includes Apache, our server software of choice, along with custom
backend servers which Apache can proxy to. Sinkhole has SSH fingerprints
as follows:

    DSA      MD5:20:28:75:a4:c5:0b:08:47:c5:ae:f8:8c:21:01:1a:00
    DSA      SHA256:iyt8GRgVBQSNyaH/yX7QZuFODMzfpsO9xV7UnaxICLI
    ECDSA    MD5:90:78:92:7b:1e:4e:51:22:30:3b:e0:dd:97:9c:aa:e4
    ECDSA    SHA256:G1glvFC2H4VR9mA1RkJCRVVyLB6e/LarI+8ZUFRGds8
    ED25519  MD5:55:2e:b8:bb:53:79:9a:62:0f:62:24:e3:8d:7f:87:62
    ED25519  SHA256:WalyNfnZm6yuIhMhe6kj17NikSK8LuC2I6iggWYTKcY
    RSA      MD5:76:aa:f1:63:ec:ca:ac:97:fb:05:35:3c:c7:8f:55:ff
    RSA      SHA256:DSC30UdUoQNYWhwU4icuPOyrDC9xVjsnKbRC3Mz9RZM

## Games & others

`doom.srcf.net`

If you'd like to run a game server or more CPU-intensive application,
please use **doom**, which has fingerprints:

    ECDSA    MD5:74:52:6e:52:d7:07:51:9e:93:12:51:82:8c:b4:ec:0a
    ECDSA    SHA256:QdTm7ECl0KObTodBBpY6Qs57PFmr3MHvQfT50IbKa3U
    ED25519  MD5:49:d8:e6:67:19:1c:c5:ed:12:de:3a:64:91:95:4c:9d
    ED25519  SHA256:kh1Sr6Nrlp/vK9ijKZ43/IQ2tqdPzY/fnZdnGBIKgIM
    RSA      MD5:f1:ee:8c:a7:7a:cb:f7:c7:dc:c5:7e:56:9a:83:f5:bc
    RSA      SHA256:c1dlaFnPyJ44CnjZIeV6zLHQCPlIH9Og0K3dL16XGfo


## Troubleshooting

### Unsupported term-type environment variable
If the terminal behaves incorrectly on certain keypresses - such as by
outputting weird glyphs, or by not removing characters when inputting a
backspace - then it is possible ssh has misconfigured the `TERM`
environment variable.

This can be checked by running `toe -a | grep $TERM`. (`toe -a` lists
all supported values for the `TERM` variable, and `| grep $TERM`
performs a search within `toe`'s output to try to find your session's
value of `$TERM`). If running the command shows no output, then your
value of `TERM` is unsupported.

You can temporarily select a more general terminal type
(`xterm-256color` should work) for your session by setting the `TERM`
environment variable when running `ssh`:
```bash
TERM=xterm-256color ssh ...
```
To correct this persistently, run the following command (on your
device):
```bash
infocmp -a $TERM | ssh <Your CRSid>@shell.srcf.net tic -x -
```
This will install your device's terminal-type to your account's home
directory (inside `~/.terminfo/`). You will not need to make any manual
changes to contents of this directory. Your terminal should now work
correctly for all subsequent sessions.
