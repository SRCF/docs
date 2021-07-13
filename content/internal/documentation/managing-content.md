---
title: "Managing content"
date: 2021-04-21T16:44:39+01:00
group: documentation
layout: docs
toc: true
---

## Overview

Any contribution to this documentation is welcome. Helping to fix/correct a section is often a good way for newcomers to get around using Git and the terminal.

The below contains instructions for creating or updating content.

## Obtaining the source

You should **first [fork](https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/working-with-forks)** our repository into your own GitHub space and make the desired changes there.

Depending on the complexity of your change, you can either:

* use the GitHub web UI (click "edit this file") to make your change. GitHub automatically forks the repository you're trying to edit.
* [clone your forked repository](https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository), edit locally, optionally test your changes, push to your repository and finally make a pull request back to ours

{{< alert type="warning" >}}
These docs use our Hugo theme, which is a Git submodule. Therefore, when cloning, be sure to add `--recurse-submodules` to `git clone` in order to pull the theme repository as well.
{{<  /alert >}}

The above process is known as the ["GitHub flow"](https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/github-flow) and is standard practice across many distributed projects under version control.

If you are creating pages, then you will need to clone the repository locally.

## Changing content

Our docs are written in Markdown, a standard markup format. A quick tutorial is available [here](https://guides.github.com/features/mastering-markdown/).

Editing is an important step, and for that you will need a good text editor. VS Code, Atom, Notepad++ are all reliable choices with good extensions to make typing Markdown even easier. For those interested in using the terminal, nano works great for small edits and vim for a full-fledged text editor.

If you just want to fix a typo or add a few sentences, editing text should be sufficient. To do fancier things with Hugo and build upon our docs, you should check out their [documentation](https://gohugo.io/getting-started/). You should also read the additional available pages on these docs.

## Creating a page

Use the standard `hugo new` command to create your page so that the right template (archetype) is used. The template is populated with data like the current date when you create a new page.

To create a tutorial called "How to feed your dog", you would type `hugo new tutorials/animals/how-to-feed-your-dog.md"` into your terminal. The title and file name do not need to match, but it's good to keep things consistent and informative for other contributors.

{{< alert type="warning" >}}
Ensure that you are in the cloned directory for any commands.
{{<  /alert >}}

## Commit, push and PR

Now it is time to commit your changes, push them to your repository and make a pull request into our repository. If any of those words are foreign to you, you might want to [visit a Git tutorial](https://git-scm.com/book/en/v2) or [browse a quick primer](https://training.github.com/downloads/github-git-cheat-sheet/).

Before you commit, make sure your message is informative by following [these tips](https://chris.beams.io/posts/git-commit/). After you've pushed your changes to your local repository, navigating to your repository on GitHub should show a prompt asking you to make a pull request back to upstream (us). If not, then you can [create your own pull request](https://github.com/SRCF/docs/pulls) manually. Be sure to add informative details as to what the nature of your PR is and what issues it solves (if any).

## Updating the sidebar

1. **Add an entry in the sidebar data file**

    * If you are adding a standalone page, just add a `- title: <something>` to the `groups` list.
    * If you are adding a page in a group, add its title under the `pages` list.
    * If you are adding a new group with child pages, add a title for your group and a `pages` list attribute.

2. **Add the `group:` parameter in the page's front matter**

    This must correspond to the urlized group title in the data file.

## Test building

See the [building]({{< relref "building" >}}) section.
