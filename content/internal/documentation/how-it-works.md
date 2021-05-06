---
title: "How it works"
date: 2021-04-21T16:44:58+01:00
group: documentation
layout: docs
toc: true
---

## Overview

These docs use the Hugo static site generator (SSG) and are hosted on our web server `sinkhole`. The content is split into folders that are logically organized based on the nature of their content.

## History

These docs evolved from the original "Frequently Asked Questions" pages that were available from the mid 2000s to 2020. Most of the dated information has been removed but some historical artifacts remain.

Around March of 2020, the FAQs were re-organized into a series of pages that addressed technical aspects of our services. These now form the bulk of what is now the "technical reference". They were generated with Sphinx and accordingly written in reStructuredText (the choice for this was nothing other than an academic exercise at the time). Over time, though, as the docs were expanded, it became apparent that:

* certain user issues arose more than others and consequently needed more detail in the docs
* step-by-step instructions were beginning to emerge in some pages, mixed in with other content
* there was a growing need for tutorials and guides after a few were written up and positive feedback was received

These and a few other reasons like the ability to write in Markdown, the flexibility of SSGs, and efforts to lower barriers to entry, led to the creation of these docs (a.k.a "docs v2").

## Project structure

An important step to the second iteration of our documentation was addressing different *types* of information, nicely summarized by [this philosophy](https://diataxis.fr/). Accordingly, the `content` folder has subfolders to match the type of content it houses.

It helps to be familiar with Hugo's directory structure, but the two main folders of interest are `content` and `layouts`, seen below.  

```bash
    docs
    ┣ archetypes
    ┣ content
    ┃ ┣ guides
    ┃ ┣ internal
    ┃ ┃ ┣ documentation
    ┃ ┃ ┃ ┗ updating-a-page.md
    ┃ ┃ ┗ _index.md
    ┃ ┣ reference
    ┃ ┣ tutorials
    ┃ ┗ _index.md
    ┣ data
    ┃ ┗ sidebar.yaml
    ┣ layouts
    ┃ ┣ _default
    ┃ ┣ partials
    ┃ ┣ shortcodes
    ┃ ┗ index.html
    ┣ resources
    ┣ static
    ┃ ┣ css
    ┃ ┃ ┗ style.css
    ┃ ┣ vendor
    ┃ ┗ .htaccess
    ┗ config.toml
```

An overview of the purpose of all folders and files:

* **archetypes**

    An archetype is essentially a template for a new section entry, like `reference`, `tutorials`, and other root-level dirs below `content`. Hugo looks in this folder when using the `hugo new` command like so:

    ```bash
        hugo new internal/documentation/another-page.md
    ```

    and creates an empty page with the pre-filled boilerplate in the archetype.

* **content**

    The key is in the name. All direct child directories of `content` are sections. A section is a special grouping of content in Hugo. All written content goes in here and is automatically turned into `html` during build. By default, the directory structure here mirrors that of the final build.

    Our content also has a root-level `_index.md` that sets special properties in its front matter (the yaml enclosed in dashes at the top of each Markdown file). We have a few single `.md` pages here that are also directly converted as-is into `html`.

* **data**

    Useful for extracting text from repetitive/iterative partials or renders. The sidebar is a good example of this.

* **layouts**

    Location for all HTML templates, including partials and shortcodes. Hugo has a strict template look up order.

* **static**

    Everything here is copied as-is into the final build.

Content is grouped in the sidebar according to its `group` property. Sidebar logic then links a page to an entry in the sidebar with this group property. This is because there are times when it makes sense for the file name (and consequently URL) to be different from the sidebar text. In most cases though, a best effort should be made to keep the file name and sidebar entry consistent (urlized versions of each other).

## The sidebar

The sidebar sources its text from a `yaml` data file in the `data` folder. At a glance, this file has a top-level list of category objects.

```yaml
    # category object
    - category: Internal 
      # list of groups
      groups:
        # a group called "documentation"
        - title: Documentation
          # pages under this group
          pages:
            - title: How it works
            - title: Building
            - title: Managing content
            - title: Reference
```

Each category object has a name, which must correspond to the Hugo section name (when urlized), eg. "tutorials", "reference", essentially the name of the folder.

Children of the `groups` list form the "dropdowns" in the sidebar. Children of a group under the `pages` object, form the individual pages in each group. All names (for groups and individual pages) are mapped to the `title` attribute.

The sidebar logic uses three pieces of information to match any page to its text data in this file: the slug (in most cases the file name, or when overridden in front matter), the urlized group name (provided as a parameter in front matter), the section (mapped to the `category` attribute).

## Design decisions

* redirects are added in `.htaccess` for the old docs version
* "ugly URLs"
  * initially investigated this option to reduce redirects needed
  * real tests resulted in undesired behavior for [index files](https://github.com/gohugoio/hugo/issues/4428)
  * to avoid hacks that might break in the future, we use the default (uglyURLs: false) and live with the trailing slash

