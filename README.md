# SRCF Documentation

This is the Git repository for the SRCF's documentation, available at [docs.srcf.net](https://docs.srcf.net). It is built with Hugo, a static site generator written in Go. You can read, contribute and build these docs yourself, just keep reading!

The previous iteration of our documentation was built with Sphinx, but after facing several shortcomings we decided to move to a static site generator.

## Building

To make documentation easy to write, we use [Markdown](https://commonmark.org/) and define certain styles for that content. Hugo mixes the text and our styles into good old HTML that is then rendered by your browser at lightning speeds. This process is called "building".

To build these docs, you will need the Hugo binary. A binary is the bundled up version of a program which you can run as a command, eg `hugo build`.

1. Grab Hugo [with these instructions](https://gohugo.io/getting-started/installing/)
2. Clone this repository ([what is cloning?](https://github.com/git-guides/git-clone))
3. Change into the directory: `cd docs`
4. Build: `hugo build`

The above is easy if you're on a UNIX-like system, such as any Linux distro or macOS. If you're on Windows, fret not: [Windows Subsystem for Linux](https://docs.microsoft.com/en-us/windows/wsl/install-win10) or any terminal emulator for Windows ([Microsoft Terminal](https://github.com/microsoft/terminal) is good) will do just fine.

## Contributing

To do fancier things with Hugo and improve our docs, you should check out their [great documentation](https://gohugo.io/getting-started/). You should also read the project structure section to understand how to add new pages.

Editing is an important step, and for that you will need a good text editor. VS Code, Atom, Notepad++ are all solid choices with good extensions to make typing Markdown even easier.

To contribute, you should first fork our repository into your own GitHub space, clone that repository and begin your work there. Once you've made your changes, stage and commit them ([a good message always helps!](https://chris.beams.io/posts/git-commit/)) and push to your repository. Once you load your repository, GitHub will kindly ask you if you want to create a pull request to merge your changes into our repository.
