---
title: "Getting Started: Groups"
date: 2021-04-19T23:50:47+01:00
layout: docs
group: getting-started-groups
---

## Note for beginners

It is becoming increasingly common that the role of “webmaster” is merged into the job of the secretary or the publicity officer. This often means that modifying the website becomes a daunting task due to unfamiliarity with the relevant technical aspects and/or the SRCF. We’ve tried to lower the barriers to entry by writing helpful tutorials with beginners in mind. If you are new to this, please do not be discouraged as we are here to help! We offer several ways of [getting help]({{< relref "/#help-and-support" >}}), including a live chat.

As a quick introduction, the Student-Run Computing Facility is best known (though we do other things!) for providing free web hosting and email forwarding for students in Cambridge.

*The above is copied from our society handovers guide.*

## Users vs. groups

Even as a society webmaster, or someone looking to setup a website for a group, you are first and foremost a user. This means that our getting started guide for users is entirely applicable (and useful) to you. The main difference is that your `public_html` is now a shared between all the admins of your group.

In your home directory, a shortcut (symbolic link) to your group's file space is automatically created, and in it is the `public_html` you will want. This is also a shortcut to your group's *public* file space, which contains the actual `public_html` directory. Here is a useful breakdown that also includes the absolute file paths:

```bash
    spqr2@pip:~$ ls -l
    mysociety1 -> /societies/mysociety1
    mysociety2 -> /societies/mysociety2
    public_html -> /public/home/spqr2/public_html
```

```bash
    spqr2@pip:~$ cd mysociety1
    spqr2@pip:~$ pwd -P
    /societies/mysociety1
    spqr2@pip:~$ ls -l
    public_html -> /public/societies/mysociety1
```

## Your options

The fact that you are given full access to our webserver means that you have many many different possibilities in the types of websites you can host: dynamic or static, custom made vs. a standard content management system (CMS), PHP vs. Python, the list of options goes on.

There are different usecases, and different levels of technical skill required by each, so choose the one the makes the most sense for you and your group. A good chunk of societies tend to favor the PHP-powered WordPress CMS, which is why we've [written a special guide]({{< relref "tutorials/websites/wordpress-from-scratch" >}}) for it to make sure you install it properly and securely.
