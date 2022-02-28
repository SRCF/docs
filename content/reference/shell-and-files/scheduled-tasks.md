---
title: "Scheduled tasks"
date: 2021-04-20T09:27:49+01:00
group: shell-and-files
layout: docs
toc: true
---

## Overview

You can make use of cron or systemd timers to run programs on a
schedule. In either case, you will need to configure it on the right
server (e.g. tasks relating to web applications should probably run on
**sinkhole**, game servers on **cavein** or **doom** and anything else
most likely on **pip**).

## Cron

Connect over SSH and run `crontab -e`, which will open an editor and an
explanation of the file format. You can add entries to run something at
a fixed interval, or on server reboot:

```text
# Run at 03:21 every day:
21 3 * * * /home/<crsid>/daily.sh

# Run at server startup:
@reboot /home/<crsid>/startup.sh
```

If you want to setup cron jobs for a group or society account then
you'll need to run `sudo -u SOCNAME crontab -e`.

A tool like [this](https://crontab.guru/) is helpful for mastering syntax.

## systemd

### Unit files

You can use user unit files to manage services, which should be placed
inside `~/.config/systemd/user/` (where `~` is your home directory, e.g.
`/home/<crsid>` or `/societies/<name>`).

A sample personal account unit file, `porridge.service`, might look like
the following:

```ini
[Unit]
Description=spqr2 Porridge app
ConditionHost=pip

[Install]
WantedBy=default.target

[Service]
ExecStart=/home/spqr2/porridge/run.sh
Restart=on-failure
```

`ExecStart` defines the command to be run. For group account services,
ensure any paths to programs or directories are absolute and not via
personal account paths (i.e. `/societies/foosoc`, not
`/home/spqr2/foosoc`). You may also need to define `WorkingDirectory` as
the directory path where your service is run from.

`ConditionHost` is required to ensure your service only runs on a single
desired server, as your home directory and all your unit files will be
present on all servers. Valid values are `pip`, `sinkhole`, `doom` or
`cavein`. In order for services to run without you being logged in, your
user account needs to have *lingering* enabled. This is a per-server
state, and is controlled by the existence of unit files with a valid
`ConditionHost` line -- it may take up to 20 minutes for lingering to
be enabled on creation of your first service.

By default, your services' standard output and error streams are sent
to systemd's journal, however only the root user can access these. You
should make your service write to their own log file rather than stdout
or stderr.

Consult the [systemd
documentation](https://www.freedesktop.org/software/systemd/man/systemd.unit.html)
for all available options. Note that some options are not available for
user units (as opposed to system-wide units).

### Timers

The above unit will give you a long-running service, one that starts
your program at system startup. To schedule execution, drop the
`[Install]` section from the unit file and instead create a
corresponding timer file `porridge.timer`:

```ini
[Unit]
Description=spqr2 Porridge daily update
ConditionHost=pip

[Install]
WantedBy=timers.target

[Timer]
OnCalendar=daily
```

This will execute your program at midnight each day. The `OnCalendar`
line accepts phrases like `daily` and `weekly`, or time strings of the
form `DayOfWeek Year-Month-Day Hour:Minute:Second` (for example,
`Sat *-*-1..7 18:00:00` gives you 6pm on the first Saturday of each
month).

### Service control

To control your app, you can use the `systemctl` command over SSH. Basic
commands are of the form `systemctl --user <action> <unit>`. Actions
include `start`, `stop` and `restart` to run your service now, `enable`
and `disable` to set whether the unit launches on system startup, and
`status` to show information about it. The unit parameter is the name of
the unit file itself, e.g. `porridge.service` or `porridge.timer`.

If you make a change to a unit file, you need to run
`systemctl --user daemon-reload` on the affected server in order to pick
up the change.

Due to an implementation detail, you must call `systemctl` as follows
when interacting with a group account's services (here using `foosoc`
for the account name):

```bash
sudo -Hu foosoc XDG_RUNTIME_DIR=/run/user/$(id -u foosoc) systemctl --user ...
```

{{< alert type="info" >}}
You might like to add a function to your `~/.bashrc` to make this easier
to remember:

```sh
socsudo () {
    soc=$1
    shift
    sudo -Hu soc XDG_RUNTIME_DIR=/run/user/$(id -u $soc) '$@'
}
```

{{< /alert >}}

..and then run `socsudo foosoc systemctl --user ...`.

If you receive an error like this setting up your group account's first
service:

```text
Failed to connect to bus: No such file or directory
```

...then you may need to wait up to 20 minutes for lingering to be
switched on -- this will happen automatically once a service file is
detected with a valid `ConditionHost` line.
