---
title: "Building the docs"
date: 2021-04-21T16:28:17+01:00
group: documentation
layout: docs
---

To build our docs, you will need the Hugo binary. A binary is the bundled up version of a program which you can run as a command, eg. `hugo config`.

## Building on `pip`

We have hugo binaries available on `pip`, so if you're building there, there's no need to install a binary and you can run `hugo` as per usual.

## Building locally

Sometimes it is useful to preview changes locally, either for convenience or necessity (lack of internet).

1. Grab Hugo [with these instructions](https://gohugo.io/getting-started/installing/)
2. Extract the tarball: `tar -xvf filename.tar.gz`
3. Run: `./hugo`

The above is easy if you're on a UNIX-like system, such as any Linux distro or macOS. If you're on Windows, then [Windows Subsystem for Linux](https://docs.microsoft.com/en-us/windows/wsl/install-win10) or any terminal emulator for Windows ([Microsoft Terminal](https://github.com/microsoft/terminal) is good) will do just fine but can be fiddly.

## Building in production

The production version of these docs is available at https://docs.srcf.net.

There is a Makefile to facilitate generating the docs and associated files.
