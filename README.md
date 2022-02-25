# SRCF Documentation

This is the Git repository for the SRCF's documentation, available at [docs.srcf.net](https://docs.srcf.net). It is built with Hugo, a static site generator written in Go. You can read, contribute and build these docs yourself, just keep reading!

The previous iteration of our documentation was built with Sphinx, but after facing several shortcomings we decided to move to a static site generator.

## Contributing

All contributions to our documentation are very welcome. We have more detailed information for beginners and advanced users alike on our [internal documentation](https://docs.srcf.net/internal/documentation/building/).

### Getting started

Our [Hugo theme](https://github.com/SRCF/srcf-hugo-theme) is a git submodule
imported into this one, so make sure to pass `--recursive` to `git clone`:

```
$ git clone --recursive https://github.com/SRCF/docs.git
```

If you have an older checkout of the repository from when we used Sphinx rather
than Hugo (like the person writing this sentence did), then you might need to
set up submodules directly:

```
$ git submodule init
Submodule 'themes/srcf-hugo-theme' (https://github.com/srcf/srcf-hugo-theme.git) registered for path 'themes/srcf-hugo-theme'
$ git submodule update
Cloning into '/home/me/srcf-docs/themes/srcf-hugo-theme'...
Submodule path 'themes/srcf-hugo-theme': checked out 'f6c43f8ca31241acb44c4a74935b39822565eb86'
```

### TODO

* add search
* vendor static assets centrally

## Credits

This documentation is largely inspired by [Bootstrap](https://github.com/twbs/bootstrap/).
