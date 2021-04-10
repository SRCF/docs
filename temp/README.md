# docs
A repository for SRCF documentation.

## Building

Windows: `./make.bat html`

Linux/macOS: `make html`

## Setting the output path

1.  Create a file `Makefile.local` in the root of this repository.  This is an
    optional snippet of Makefile that is automatically sourced in the main
    Makefile.

2.  Set variables, e.g.:

        BUILDDIR = /public/home/spqr2/srcf-docs
