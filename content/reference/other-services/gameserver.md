---
title: "Game servers"
date: 2021-04-20T09:27:49+01:00
group: game-servers
layout: docs
---

## Overview

If you want to run a server for your favourite online game (or any other
long-running application) you should use `doom.srcf.net`, as described
[here]({{< relref "/reference/shell-and-files/ssh" >}}).

Please limit your server to around 1GB of RAM and set it to `nice` level
19 to avoid causing problems for other users. For example, if you are
running a Minecraft server, then the following should work:

```
    nice -n 19 java -Xms1024m -Xmx1024m -jar minecraft_server.jar
```

It is possible (and probable, in the case of Minecraft) that the default
port for your application will be in use. We don't have any specific
rules for picking a port for your application, so just pick
high-numbered ports at random until you find one that isn't in use.

## Running at startup

If you want your server application to run at system startup, you can
create a `cron` job for it as described
[here]({{< relref "/reference/shell-and-files/scheduled-tasks" >}}).
