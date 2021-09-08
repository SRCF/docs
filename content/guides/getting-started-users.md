---
title: "Getting Started: Users"
date: 2021-04-19T23:50:28+01:00
layout: docs
group: getting-started-users
---

## Introduction

If you are a new user and wondering what to do, this guide is your first port of call. Here, we go through the process of getting familiar with the main services the SRCF offers you and how to work with them. It is worth mentioning that we have various [tutorials]({{< relref "tutorials" >}}) that break down the steps shown here into much more detail, with a beginner-first approach in mind.

## Create an account

To start with, you'll need to [create a personal
account](https://control.srcf.net/signup). This will allow you to use
the control panel to manage our various services.

## Connect to the shell server

The primary way to connect to our public facing servers is via a protocol known as SSH. Make sure to [read our tutorial]({{< relref "tutorials/shell-and-files/logging-in" >}}) on that, and come back once you've finished!

## Upload your first website

Now, let's create your first website on the SRCF. Remember the `public_html` directory you saw in your home directory when you first logged in? Any file in that directory is served by `sinkhole`, our webserver, on the domain `<yourCRSid>.user.srcf.net`. By default, webservers look for an `index.html` page to serve, otherwise they'll list the files in your `public_html` directory, which isn't very user friendly.

{{< alert type="danger" >}}
As indicated by the name, you should not place any private files, for example files that contain secrets, in the `public_html` directory. They will be publicly accessible under your default SRCF domain.
{{<  /alert >}}

First, ensure that you are now in the `public_html` directory by changing into it: `cd public_html`. To create a simple file, we use the text editor "nano", by typing the command followed by the name of the file we want to create: `nano index.html`. You are now freely able to type any text you wish, so let's add the following HTML by copying and pasting into your terminal.

{{< alert type="info" >}}
If you are not familiar with HTML and CSS and how websites work, then don't fret. There are plenty of very good resources on the web for this. Simply typing into a search engine should help you go a long way! The content below is sourced [this page](https://www.w3schools.com/w3css/w3css_web_html.asp).
{{< /alert >}}

```html
    <!DOCTYPE html>
    <html lang="en">
        <meta charset="UTF-8">
        <title>I love the SRCF</title>
        <meta name="viewport" content="width=device-width,initial-scale=1">
        <body>
            <h1>Hello there!</h1>
        </body>
    </html> 
```

Now press "ctrl-o" then enter to confirm the file name, followed by "ctrl-x" to exit the editor. You should now be able to see a "Hello there!" on your SRCF domain.

## Now what?

Believe it or not, the basic skills shown here cover most of what you should need to make use of our shell server and our webserver. You are welcome to browse our other tutorials for more advanced information, or simply play around with the Linux environment we offer you!
