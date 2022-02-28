---
title: "Setting up IRC"
date: 2021-04-21T16:44:58+01:00
group: others
layout: docs
toc: true
---

## Introduction

Internet relay chat is a protocol for real-time text messaging between
internet-connected computers. While it is dated in comparison to some
other messaging protocols, it continues to be used regularly by SRCF
members and as the emergency messaging platform of choice, with several
servers located around the world.

In this tutorial, you'll be setting up a persistent IRC connection
using `irssi` and `screen`. It's a great entry point to the terminal and
beginners are encouraged to follow this tutorial!

{{< alert type="info" >}}
If at any point you encounter some parts that don't make sense, reading
material from the references section towards the bottom of this page is
highly recommended. They're also there if anything here sparks your
curiosity.
{{<  /alert >}}

## Installing

{{< alert type="info" >}}
The SRCF already has `irssi` and `screen` installed so you can skip this
step but we include it here for completeness in case folks want to
venture out and set up their own machine. As they are standard versions
that come with the Long Term Release of Ubuntu they can be a bit
outdated, so feel free to build the latest version in your directory
from source: <https://github.com/irssi/irssi>.
{{<  /alert >}}

### Install irssi

```bash
$ sudo pacman -S irssi (Arch)
$ sudo yum install irssi (Redhat derivatives)
$ sudo apt-get install irssi (Debian derivatives)
```

### Install screen

```bash
$ sudo pacman -S screen (Arch)
$ sudo yum install screen (Redhat derivatives)
$ sudo apt-get install screen (Debian derivatives)
```

## Configuring

### Create logging directory

```bash
$ mkdir ~/irclogs
```

Getting this ready for later...

### Check if screen is installed

```bash
$ screen -list
```

If there's more than one screen session, you'll have to enter its name
at the end of the next command in Step 5.

### Start a screen session

```bash
$ screen -RD
```

Consult the GNU screen manual
([<https://www.gnu.org/software/screen/manual/screen.html>](https://www.gnu.org/software/screen/manual/screen.html)).

### Start irssi

```bash
$ irssi
```

Having done this you should be presented with an empty `irssi` window.

## Essential settings

Enter these commands in your `irssi` prompt.

```text
/SET nick <nick>
/SET alternate_nick <alternate nick>
/SET user_name <username>   # not necessary if ident enabled
/SET real_name <real name>
/SET use_msgs_window OFF

# Highlight lines containing your nick
/HILIGHT <nick>

# Set timestamp to something useful
/SET timestamp_format %d.%H:%M:%S
```

### Set up logging

Logging is useful because the IRC connection is not persistent over
system restarts (logging will allow you to see any messages you missed
between the last time you checked IRC and the time the system
restarted). It's also useful if you're receiving e.g. tech support, so
you have a record of any instructions you were given!

```text
/SET autolog ON
/SET autolog_level ALL -CRAP -CLIENTCRAP -CTCPS
/SET autolog_path ~/irclogs/%Y/$tag/$0.%m-%d.log
```

### Set quit message

```text
/SET quit_message <message>
```

Default is 'leaving,' mine is 'Scotty, beam me up!' (which is
actually the closest Kirk ever came to saying the commonly misquoted
'beam me up Scotty!' He never said anything remotely like this in the
TV series but said the above in Star Trek IV).

### Add network(s)

For example, 'srcf'.

```text
/NETWORK ADD [-nick <nick>] <Network name (your choice)>
```

### Add one or more servers

The FQDN in our case is `irc.srcf.net`.

```text
/SERVER ADD [-auto] -network <network name> <server FQDN>
```

### Add one or more channels

Commands as follows:

```text
/CHANNEL ADD -auto #<channel name> <network name>
```

Move around windows until you get them in an order that you like (first
go to the window that you wish to move):

```text
/wm <position to move to>
```

(or)

```text
/window move <position to move to>
```

Make sure to check out
[an overview of the channels]({{< relref "/reference/other-services/internet-relay-chat-irc" >}}) on our
server to decide which ones to add.

### Save settings and layout

```text
/SAVE
/LAYOUT SAVE
```

### Restart irssi and confirm everything is set correctly

```text
/QUIT
```

You should now arrive at a terminal, where you can type ``irssi`` to restart the client and check that everything is working.

### Scheduled restarts

You will also need to create the screen session every time the SRCF
reboots, unless you set up an `@reboot` cron job containing
`screen -Udm irssi` using `crontab -e`.

To disconnect from screen without quitting IRC press Ctrl-A, and then
press D. This will place you back onto the command line, where you can
just type Ctrl-D to quit.

When you want to reconnect later use `screen -rd` after you have logged
in, and your should find your irssi exactly as you left it.

## References & recommended reading

1) [<https://www.irchelp.org/irchelp/new2irc.html>](https://www.irchelp.org/irchelp/new2irc.html)
2) [<https://www.irchelp.org/irchelp/changuide.html>](https://www.irchelp.org/irchelp/changuide.html)
3) [<https://www.srcf.net/faq/irc#persistent>](https://www.srcf.net/faq/irc#persistent)
4) [<https://irssi.org/documentation/manual/>](https://irssi.org/documentation/manual/)
5) [<https://irssi.org/beginner/#c3>](https://irssi.org/beginner/#c3)
6) [<https://quadpoint.org/articles/irssi/>](https://quadpoint.org/articles/irssi/)
7) [<http://www.kuro5hin.org/story/2004/3/9/16838/14935>](http://www.kuro5hin.org/story/2004/3/9/16838/14935)
8) [<https://www.gnu.org/software/screen/manual/screen.html>](https://www.gnu.org/software/screen/manual/screen.html)

## Appendix A: useful irssi commands

{{< alert type="info" >}}
Whilst nick, server names, networks names, etc are case sensitive,
commands are not, so /NETWORK is precisely equivalent to /network.{{<  /alert >}}

- List current networks: `/NETWORK`

- Remove servers (especially useful for getting rid of irssi's
    default servers):

    ```text
    /NETWORK REMOVE <server>
    ```

- See all settings (to verify that there's nothing unexpected in
    there): switch to status window and type `/set`.
- Indent (useful with very long lines, so messages can be
    distinguished; experiment with exact value):

    ```text
    /SET indent 4
    ```

- Quit irssi:

    ```text
    /quit
    ```

- Leave channel (after having gone to the channel's window):

    ```text
    /part
    ```

    (or)

    ```text
    /part <message>
    ```

An alternative, but less elegant way, is to just close the window. This
method is needed if it is a split or hidden (e.g. for closing a query
window): `/wc` or, in full, `/WINDOW CLOSE`

- List all channels on IRC server that are public to join (**not**
    good for large networks): `/list`

- Set topic: `/topic`

- Switch between networks: `Ctrl+X`

- List channels known to irssi: `/CHANNEL LIST`

- Reload configuration:

    ```text
    /RELOAD
    /RELOAD <filename>   # for loading a different config file
    ```

- List users in the current channel:

    ```text
    /names
    /n
    ```

- Display user information for a given \<nick\>:

    ```text
    /whois
    /wi
    ```

### Joins/Parts

A number of useful things can be done here.

If you are in relatively few channels that have problems with people
joining/leaving frequently, then just ignore for that channel:

```text
/ignore #<channel> MODES JOINS PARTS QUITS
/ignore -except -pattern <yourNick> #<channel>
```

Replace \# with the wildcard operator (\*) to do this for all channels.

An alternative way for doing this for all channels is to add the
following to \~/.irssi/conf:

```text
ignores = ( { level = "JOINS PARTS QUITS"; } );
```

For a more in depth discussion of levels, and how to put all
join/part/quit messages into their own 'junk' window (freeing up other
windows for discussion), see
[<https://pthree.org/2010/03/12/irssi-handling-joinspartsquits/>](https://pthree.org/2010/03/12/irssi-handling-joinspartsquits/)

## Appendix B: useful screen commands

Screen is an incredibly useful tool for keeping any process (not just
IRC) running after you terminate an ssh section. There are lots of
useful commands listed in the screen manual, and a few are listed below
[<https://www.gnu.org/software/screen/manual/screen.html>](https://www.gnu.org/software/screen/manual/screen.html)

- `ctrl+a x` locks screen.
- `ctrl+a c` creates a new window.
- `ctrl+a n` switches to the next window.

## Suggestions/improvements?

Did you like this or find this cool? We invite you to check out
[more tutorials]({{< relref "/tutorials" >}})

If you have a better way to join the SRCF IRC server (or any other
suggestions for how we could improve this documentation), send us an
email at `support@srcf.net` or submit a Pull Request on
[GitHub](https://github.com/SRCF/docs)!

{{< alert type="info" >}}
This tutorial was based largely on content provided to us by Matthew
Ireland, former member of the SRCF sysadmin team. Thanks Matthew!{{<  /alert >}}
