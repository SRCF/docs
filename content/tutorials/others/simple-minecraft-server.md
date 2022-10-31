---
title: "Simple Minecraft Server"
date: 2022-10-31T17:20:00+00:00
group: others
layout: docs
toc: true
---

## Overview

In this tutorial, you will learn how to set up a vanilla Minecraft Java server hosted by the SRCF.

## Introduction

Game servers and other CPU-intensive applications are hosted at `doom.srcf.net`.

## Pre-requisites

To follow this tutorial you will need:

* An SRCF account
* Basic familiarity with the terminal

## Logging in

Before starting you must log in to `doom.srcf.net` via SSH. You will have to use your CRSid and your SRCF password.

Log in using your computer's terminal (PowerShell on Windows) with the following command.

```
ssh CRSid@doom.srcf.net
```

## Setting up the Minecraft server

I suggest you create a directory for the server using these commands.

```
mkdir mc
cd mc
```

The machine already has java set up, so that you can avoid the hassle of getting it working.

The JAR file for the server can be found [here](https://www.minecraft.net/en-us/download/server). To download the JAR
file on the server you must copy the download link from the page and then run the `wget` command, replacing the url 
with the address you copied from the download page.

```
wget https://piston-data.mojang.com/.../server.jar
```

You can now run the server using the command

```
nice -n 19 java -Xms1024m -Xmx1024m -jar server.jar nogui
```

It will set up some directories and then quit, saying that you need to accept the end user license agreement. To do this,
open the `eula.txt` file that was created with a text editor such as

```
nano eula.txt
```

Change the line that says `eula=false` to `eula=true` and quit using CTRL+X. When asked `Save modified buffer?`
press Y to save your changes.

It's also necessary to change the port number the server will run on. To do this, open the `server.properties` file

```
nano server.properties
```

and find the lines `query.port=25565` and `server-port=25565`. Replace `25565` with a random number between 1024 and 65535.
Remember the number you use, because you will need it later to connect to the server.

If you want to change the gamemode you can do this here by amending the line `gamemode=survival`.

You can now run the server again using

```
nice -n 19 java -Xms1024m -Xmx1024m -jar server.jar nogui
```

This time you should find that the server starts successfully. If you open your Minecraft client and connect to
`doom.srcf.net:<port>` (where <port> is your random number) you should spawn into your world!

## Running the server in the background

At the moment you have to log into the machine and start the minecraft server manually every time you want to
use it. You can use GNU screen to leave it running.

To do this, type

```
screen -dR
```

In the new terminal that opens, start the server.

```
nice -n 19 java -Xms1024m -Xmx1024m -jar server.jar nogui
```

You can then leave the new terminal using CTRL-A then pressing d. Now you can log out of the doom machine using

```
logout
```

You should now have a Java Minecraft server ready to play!

{{ < alert type="warning" > }}

You may notice that in the command to start the server the memory it can use is limited to 1GB and its priority is set
using `nice`. Please do not change the priority or memory usage of your server in order to be considerate to other
users of the SRCF's systems!

{{ < /alert > }}
## Closing remarks

Did you like this or find this cool? We invite you to check out
[more tutorials]({{< relref "/tutorials" >}})
or [get in touch]({{< relref "/#help-and-support" >}}) to tell us what you thought!

If you have any suggestions for how we could improve this documentation
please send us an email at `support@srcf.net` or submit a Pull Request
on [GitHub](https://github.com/SRCF/docs)!
