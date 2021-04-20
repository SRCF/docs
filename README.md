# SRCF Documentation

This is the Git repository for the SRCF's documentation, available at [docs.srcf.net](https://docs.srcf.net). It is built with Hugo, a static site generator written in Go. You can read, contribute and build these docs yourself, just keep reading!

The previous iteration of our documentation was built with Sphinx, but after facing several shortcomings we decided to move to a static site generator.

## Building

To make documentation easy to write, we use [Markdown](https://commonmark.org/) and define certain styles for that content. Hugo mixes the text and our styles into good old HTML that is then rendered by your browser. This process is called "building".

To build these docs, you will need the Hugo binary. A binary is the bundled up version of a program which you can run as a command, eg `hugo config`.

1. Grab Hugo [with these instructions](https://gohugo.io/getting-started/installing/)
2. Clone this repository ([what is cloning?](https://github.com/git-guides/git-clone))
3. Change into the directory: `cd docs`
4. Build: `hugo`

The above is easy if you're on a UNIX-like system, such as any Linux distro or macOS. If you're on Windows, fret not: [Windows Subsystem for Linux](https://docs.microsoft.com/en-us/windows/wsl/install-win10) or any terminal emulator for Windows ([Microsoft Terminal](https://github.com/microsoft/terminal) is good) will do just fine.

## Contributing

To do fancier things with Hugo and improve our docs, you should check out their [documentation](https://gohugo.io/getting-started/). You should also read the project structure section to understand how to add new pages.

Editing is an important step, and for that you will need a good text editor. VS Code, Atom, Notepad++ are all solid choices with good extensions to make typing Markdown even easier.

To contribute, you should first fork our repository into your own GitHub space, clone that repository and begin your work there. Once you've made your changes, stage and commit them ([a good message always helps!](https://chris.beams.io/posts/git-commit/)) and push to your repository. Once you load your repository, GitHub will kindly ask you if you want to create a pull request to merge your changes into our repository.

### Project structure

An important step to the second iteration of our documentation was addressing different *types* of information, nicely summarized by [this philosophy](https://diataxis.fr/). Accordingly, the `content` folder has subfolders to match the type of content it houses.

Content is grouped in the sidebar according to its `group` property. Sidebar logic then links a page to an entry in the sidebar with this group property. This is because there are times when it makes sense for the file name (and consequently URL) to be different from the sidebar text. In most cases though, a best effort should be made to keep the file name and sidebar entry consistent (urlized versions of each other).

### Shortcodes

Useful implemented shortcodes

#### Alert

```hugo
{{< alert type="info" >}}
{{< /alert >}}
```

`type` can be any valid Bootstrap alert type.

### Custom parameters

`highlight: true` adds a page to the lists on the home page.

### Other tips

Cross references: `[mail forwarding]({{< relref "#mail-forwarding" >}})`

### Design decisions

* redirects are added in `.htaccess` for the old docs version
* "ugly URLs"
  * initially investigated this option to reduce redirects needed
  * real tests resulted in undesired behavior for [index files](https://github.com/gohugoio/hugo/issues/4428)
  * to avoid hacks that might break in the future, we use the default (uglyURLs: false) and live with the trailing slash

### TODO

* add contributors list
* add search
* add "all" layout for PDF

## Credits

This documentation is largely inspired by [Bootstrap](https://github.com/twbs/bootstrap/).
