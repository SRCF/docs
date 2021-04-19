Setting up Internet Relay Chat (IRC) {#setup-irc}
====================================

1. Introduction
---------------

Internet relay chat is a protocol for real-time text messaging between
internet-connected computers. While it is dated in comparison to some
other messaging protocols, it continues to be used regularly by SRCF
members and as the emergency messaging platform of choice, with several
servers located around the world.

In this tutorial, you\'ll be setting up a persistent IRC connection
using irssi and screen. It\'s a great entrypoint to the terminal and
beginners are encouraged to follow this tutorial!

::: {.note}
::: {.admonition-title}
Note
:::

If at any point you encounter some parts that don\'t make sense, reading
material from the references section towards the bottom of this page is
highly recommended. They\'re also there if anything here sparks your
curiosity.
:::

2. Installing
-------------

::: {.hint}
::: {.admonition-title}
Hint
:::

The SRCF already has `irssi` and `screen` installed so you can skip this
step but we include it here for completeness in case folks want to
venture out and set up their own machine. As they are standard versions
that come with the Long Term Release of Ubuntu they can be a bit
outdated, so feel free to build the latest version in your directory
from source: <https://github.com/irssi/irssi>.
:::

### Install irssi

    $ sudo pacman -S irssi (Arch)
    $ sudo yum install irssi (Redhat derivatives)
    $ sudo apt-get install irssi (Debian derivatives)

### Install screen

    $ sudo pacman -S screen (Arch)
    $ sudo yum install screen (Redhat derivatives)
    $ sudo apt-get install screen (Debian derivatives)

3. Configuring
--------------

### Create logging directory

    mkdir ~/irclogs

Getting this ready for later\...

### If screen was already installed (reported in step 2), check

    screen -list

If there\'s more than one screen session, you\'ll have to enter its name
at the end of the next command in Step 5.

### Start a screen session

    screen -RD

From the GNU screen manual
([<http://www.gnu.org/software/screen/manual/screen.html>](http://www.gnu.org/software/screen/manual/screen.html)):

    ‘-d [pid.sessionname]’
    ‘-D [pid.sessionname]’
        Do not start screen, but instead detach a screen session running elsewhere (see Detach). ‘-d’ has the same effect as typing C-a d from the controlling terminal for the session. ‘-D’ is the equivalent to the power detach key. If no session can be detached, this option is ignored. In combination with the -r/-R option more powerful effects can be achieved:
            -d -r
                Reattach a session and if necessary detach it first. 
            -d -R
                Reattach a session and if necessary detach or even create it first. 
            -d -RR
                Reattach a session and if necessary detach or create it. Use the first session if more than one session is available. 
            -D -r
                Reattach a session. If necessary detach and logout remotely first. 
            -D -R
                Attach here and now. In detail this means: If a session is running, then reattach. If necessary detach and logout remotely first. If it was not running create it and notify the user. This is the author's favourite. 
            -D -RR
                Attach here and now. Whatever that means, just do it.
    Note: It is a good idea to check the status of your sessions with screen -list before using this option. 

### Start irssi

    $ irssi

Having done this you should be presented with an empty irssi window.

### Tedious, yet essential settings (enter at irssi prompt)

    /SET nick <nick>
    /SET alternate_nick <alternate nick>
    /SET user_name <username>   # not necessary if ident enabled
    /SET real_name <real name>
    /SET use_msgs_window OFF

### Highlight lines containing your nick

    /HILIGHT <nick>

### Set timestamp to something sensible (day is particularly useful)

    /SET timestamp_format %d.%H:%M:%S

### Set up logging

Logging is useful because the IRC connection is not persistent over
system restarts (logging will allow you to see any messages you missed
between the last time you checked IRC and the time the system
restarted). It\'s also useful if you\'re receiving e.g. tech support, so
you have a record of any instructions you were given!

    /SET autolog ON
    /SET autolog_level ALL -CRAP -CLIENTCRAP -CTCPS
    /SET autolog_path ~/irclogs/%Y/$tag/$0.%m-%d.log

### Set quit message

    /SET quit_message <message>

Default is \"leaving,\" mine is \"Scotty, beam me up!\" (which is
actually the closest Kirk ever came to saying the commonly misquoted
\"beam me up Scotty!\" He never said anything remotely like this in the
TV series but said the above in Star Trek IV).

### Add network(s)

    /NETWORK ADD [-nick <nick>] <Network name (your choice)>

For example, \"srcf\".

### Add one or more servers

    /SERVER ADD [-auto] -network <network name> <server FQDN>

The FQDN in our case is `irc.srcf.net`.

### Add one or more channels

    /CHANNEL ADD -auto #<channel name> <network name>

Move around windows until you get them in an order that you like (first
go to the window that you wish to move):

    /wm <position to move to>
    <or>
    /window move <position to move to>

Make sure to chcek out
[an overview of the channels \<channel-overview\>]{role="ref"} on our
server to decide which ones to add.

### Save settings and layout

    /SAVE
    /LAYOUT SAVE

### Restart irssi and confirm everything is set correctly

    /RESTART

### Ensure that screen and irssi are started on reboot

You will also need to create the screen session every time the SRCF
reboots, unless you set up an `@reboot` [cron
job](http://team.macnn.com/drafts/crontab_defs.html) containing
`screen -Udm irssi` using `crontab -e`.

To disconnect from screen without quitting IRC press Ctrl-A, and then
press D. This will place you back onto the command line, where you can
just type Ctrl-D to quit.

When you want to reconnect later use `screen -rd` after you have logged
in, and your should find your irssi exactly as you left it.

4. References & recommended reading
-----------------------------------

1)  [<http://www.irchelp.org/irchelp/new2irc.html>](http://www.irchelp.org/irchelp/new2irc.html)
2)  [<http://www.irchelp.org/irchelp/changuide.html>](http://www.irchelp.org/irchelp/changuide.html)
3)  [<http://www.srcf.net/faq/irc#persistent>](http://www.srcf.net/faq/irc#persistent)
4)  [<http://www.irssi.org/documentation/manual>](http://www.irssi.org/documentation/manual)
5)  [<http://irssi.org/beginner/#c3>](http://irssi.org/beginner/#c3)
6)  [<http://quadpoint.org/articles/irssi/>](http://quadpoint.org/articles/irssi/)
7)  [<http://www.kuro5hin.org/story/2004/3/9/16838/14935>](http://www.kuro5hin.org/story/2004/3/9/16838/14935)
8)  [<http://www.gnu.org/software/screen/manual/screen.html>](http://www.gnu.org/software/screen/manual/screen.html)
9)  [<http://team.macnn.com/drafts/crontab_defs.html>](http://team.macnn.com/drafts/crontab_defs.html)
10) [<http://crunchbanglinux.org/wiki/irssi>](http://crunchbanglinux.org/wiki/irssi)

Appendix A: useful irssi commands
---------------------------------

::: {.note}
::: {.admonition-title}
Note
:::

Whilst nick, server names, networks names, etc are case sensitive,
commands are not, so /NETWORK is precisely equivalent to /network.
:::

-   List current networks:

<!-- -->

    /NETWORK

-   Remove servers (especially useful for getting rid of irssi\'s
    default servers):

<!-- -->

    /NETWORK REMOVE <server>

-   See all settings (to verify that there\'s nothing unexpected in
    there): switch to status window and type /set.
-   Indent (useful with very long lines, so messages can be
    distinguished; experiment with exact value):

<!-- -->

    /SET indent 4

-   Quit irssi:

<!-- -->

    /quit

-   Leave channel (after having gone to the channel\'s window):

<!-- -->

    /part
    <or>
    /part <message>

An alternative, but less elegant way, is to just close the window. This
method is needed if it is a split or hidden (e.g. for closing a query
window):

    /wc

or, in full,

    /WINDOW CLOSE

-   List all channels on IRC server that are public to join (**not**
    good for large networks):

<!-- -->

    /list

-   Set topic:

<!-- -->

    /topic

-   Switch between networks:

<!-- -->

    Ctrl+X

-   List channels known to irssi:

<!-- -->

    /CHANNEL LIST

-   Reload configuration:

<!-- -->

    /RELOAD
    /RELOAD <filename>   # for loading a different config file

-   List users in the current channel:

<!-- -->

    /names
    /n

-   Display user information for a given \<nick\>:

<!-- -->

    /whois
    /wi

### Channel Operator Commands

-   Make another user, \<nick\>, a channel op:

<!-- -->

    /op <nick>

-   Change channel topic:

<!-- -->

    /topic
    /t

-   Set or list bans for a channel (the following three commands are
    indeed all aliases):

<!-- -->

    /ban
    /bans
    /b

-   Kick or kickban a user:

<!-- -->

    /kick (/k)
    /kickban (/kb)

### Joins/Parts

A number of useful things can be done here.

If you are in relatively few channels that have problems with people
joining/leaving frequently, then just ignore for that channel:

    /ignore #<channel> MODES JOINS PARTS QUITS
    /ignore -except -pattern <yourNick> #<channel>

Replace \# with the wildcard operator (\*) to do this for all channels.

An alternative way for doing this for all channels is to add the
following to \~/.irssi/conf:

    #
    ignores = ( { level = "JOINS PARTS QUITS"; } );

For a more in depth discussion of levels, and how to put all
join/part/quit messages into their own \"junk\" window (freeing up other
windows for discussion), see
[<https://pthree.org/2010/03/12/irssi-handling-joinspartsquits/>](https://pthree.org/2010/03/12/irssi-handling-joinspartsquits/)

Appendix B: useful screen commands
----------------------------------

Screen is an incredibly useful tool for keeping any process (not just
IRC) running after you terminate an ssh section. There are lots of
useful commands listed in the screen manual, and a few are listed below
[<http://www.gnu.org/software/screen/manual/screen.html>](http://www.gnu.org/software/screen/manual/screen.html)

-   <pre>ctrl+a x</pre> locks screen.
-   <pre>ctrl+a c</pre> creates a new window.
-   <pre>ctrl+a n</pre> switches to the next window. 

### Suggestions/improvements?

Did you like this or find this cool? We invite you to check out
[more tutorials \<tutorials\>]{role="ref"} and
[read our recommended resources\<recommended-resources\>]{role="ref"}.

If you have a better way to join the SRCF IRC server (or any other
suggestions for how we could improve this documentation), send us an
email at `support@srcf.net` or submit a Pull Request on
[GitHub](https://github.com/SRCF/docs)!

::: {.note}
::: {.admonition-title}
Note
:::

This tutorial was based largely on content provided to us by Matthew
Ireland, former member of the SRCF sysadmin team. Thanks Matthew!
:::
