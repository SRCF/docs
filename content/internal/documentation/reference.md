---
title: "Reference"
date: 2021-04-21T16:44:31+01:00
group: documentation
layout: docs
toc: true
---

## Overview

This is a reference of all quirks and features specific to our documentation.

## Shortcodes

Pre-defined bits of HTML that the user can easily inject into the Markdown.

### Alert

```Markdown
{{</* alert type="info" */>}}
    some content in here
{{</*  /alert */>}}
```

`type` can be any valid Bootstrap [alert type](https://getbootstrap.com/docs/5.0/components/alerts/). The above produces

{{< alert type="info" >}}
some content in here
{{<  /alert >}}

### Tables

Default Markdown tables don't come out looking very nice, so we use a shortcode to add Bootstrap classes to them.

Shortcode borrowed from [here](https://willschenk.com/articles/2020/styling_tables_with_hugo/).

Example:

```Markdown
{{</* table “table table-striped table-bordered" */>}}
|———-|———-|———-|
| Item 1   | Item 2   | Item 3   |
| Item 1a  | Item 2a  | Item 3a  |
{{</* /table */ >}}
```

## Front matter params

### Front page favs

`highlight: true` adds a page to the lists on the home page.

## Sidebar

A quick glance at the structure of the `yaml` file should reveal most of the complexity.

* `divider: true` within any group (ie. direct children of the groups list) adds a divider
* `override: /path/to/page` changes the path used to search for a page's permalink when the sidebar is generated. Used on pages like section home page where the slug cannot be changed.

## Other tips

### Cross references

Use a regular Markdown link but with the `relref` shortcode as such:

```Markdown
[mail forwarding]({{</* relref "#mail-forwarding" */>}})
```

### Syntax highlighting

Fenced code blocks should use triple back ticks \`\`\` and the language always included after the first set of back ticks. A full list of valid languages for special highlighting available [here](https://github.com/alecthomas/chroma#supported-languages).