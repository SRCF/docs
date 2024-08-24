---
title: "Deploy a web app"
date: 2021-04-21T16:44:58+01:00
group: websites
layout: docs
toc: true
highlight: true
---

## Overview

Nowadays, most content served to users via the web is dynamic and via web applications. This tutorial will show you how to set up a simple web application with Flask in Python, but the process is much the same for any other web framework and we give tips for other languages.

## Introduction

The SRCF hosts a general purpose web server that can serve all types of content. While the existence of a `public_html` folder might lead users to think that only static content can be served, Apache's `.htaccess` file allows for arbitrary reverse proxying to a TCP port or UNIX socket. This gives users great freedom to do whatever they wish, including hosting applications written in popular frameworks like Django, Flask, Sinatra, Ruby on Rails, Express, etc.

{{< alert type="info" >}}
We make available a sample group that contains examples of various web frameworks running on the SRCF: <https://sample.soc.srcf.net>,
and you can take a look at their configuration inside
`/public/societies/sample`.
{{< /alert >}}

## Pre-requisites

Before starting,

1. Ensure that you are comfortable in some capacity with the terminal
2. Ensure that you are logged into (and performing any subsequent commands on) our **web server**, `webserver.srcf.net`

## Environments

### Python: set up a `venv`

You will want to deploy your application in a Python `venv` so that you
can easily install and manage dependencies and versions.

A `venv` is a
virtual Python environment that contains its own Python binary as well
as all of your dependencies. When you activate your `venv`, PATH variables
like `python` and `pip` will use the correct versions specified when you
created your `venv`.

1. Create a directory for your app to live in:

    ```bash
    mkdir -p ~/myapp
    cd ~/myapp
    ```

2. Set up a venv

    ```bash
    python3 -m venv venv
    ```

3. Activate the venv

    ```bash
    . venv/bin/activate
    ```

    You should do this step every time before running your app or
    managing installed packages.

4. Done! Your Python `venv` is now installed and hooked into your shell.

### Node: installing `nvm`

You will want to deploy your application using `nvm` so that you can
easily install and manage dependencies and versions.

`nvm` stands for Node Version Manager. Ubuntu only provides a
significantly outdated version of Node.js (v4.2.6 at the time of
writing) in its repositories. Using `nvm` allows you to choose any
version of Node to use in your environment. Note that it is your
responsibility to keep your node installations and `nvm` itself updated.

1. Create a directory for your app to live in:

    ```bash
    mkdir -p ~/myapp
    cd ~/myapp
    ```

2. Install `nvm` in your home directory. You'll need to find the
    latest version from [the NVM GitHub](https://github.com/nvm-sh/nvm),
    and copy the one-liner straight into your shell to install it. At
    the time of writing, it looks like this:

    ```bash
    curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash
    ```

    {{< alert type="danger" >}}
Piping a script straight into your shell is potentially dangerous as you are allowing arbitrary code to be executed. Make sure you trust any script you run or vet it beforehand.
    {{<  /alert >}}

    Make sure you read the installation instructions, then go ahead and run it, and close/re-open your terminal as it suggests.

3. Install whatever version of `node.js` you want.

    ```bash
    nvm install 12
    nvm alias default 12
    ```

4. Done! The version of `node.js` you specified is now installed and
    hooked into your shell.

### Ruby: install `rbenv`

You will want to deploy your application using `rbenv` so that you can
easily install and manage dependencies and versions.

1. Create a directory for your app to live in:

    ```bash
    mkdir -p ~/myapp
    cd ~/myapp
    ```

2. Install `rbenv` in your home directory:

    ```bash
    git clone https://github.com/rbenv/rbenv.git ~/.rbenv
    cd ~/.rbenv && src/configure && make -C src
    echo 'export PATH="$HOME/.rbenv/bin:$PATH"' >> ~/.bashrc
    ~/.rbenv/bin/rbenv init
    ```

3. Follow the printed instructions on appending to your `~/.bashrc`
    file:

    ```bash
    echo 'eval "$(rbenv init -)"' >> ~/.bashrc
    ```

4. Install `ruby-build` as a plugin:

    ```bash
    mkdir -p "$(rbenv root)"/plugins
    git clone https://github.com/rbenv/ruby-build.git "$(rbenv root)"/plugins/ruby-build
    ```

5. Install whichever version of Ruby you want.

    ```bash
    rbenv install 2.6.6
    rbenv local 2.6.6
    ```

6. Done! You now have a working Ruby installation that's hooked into
    your shell.

### Install your web framework

You should not rely on the system-wide versions of web frameworks present on our webserver as they are LTS releases and may be out of date. Instead, use the version manager that comes with your framework/language to install a more up to date version.

* Node: `npm i express`
* Python: `pip install flask` or `pip install django`
* Ruby: `gem install rails`

## Create your app

If you have an existing `node.js` app you can simply copy the code to a
directory of your choosing, `~/myapp/src` for example. You can use
`scp/sftp` to upload it or clone it using `git` or some other source
control tool.

If you're new to web apps, though, it's recommended you follow the getting started guide (or equivalent) for your language/framework of interest:

* Node: https://nodejs.org/en/docs/guides/getting-started-guide/
* Express: https://expressjs.com/en/starter/installing.html
* Ruby on Rails: https://guides.rubyonrails.org/getting_started.html
* Flask: https://flask.palletsprojects.com/en/1.1.x/quickstart/

We do have a few lines of code in a few languages that can springboard your app below. For real examples, you should visit the content of the `sample` group at `/public/societies/sample/`

### Flask

There is a demo flask app setup at <https://sample.soc.srcf.net/flask/>.
If you're logged in via ssh, you can find the code at
`/public/societies/sample/flask/app.py`.

### Django

To create a skeleton Django project:

```bash
django-admin startproject example
mv example python
cd python
```

Now take a look at `django/example/settings.py` for how to configure
your site. There is also a demo available at
<https://sample.soc.srcf.net/django/>.

### Ruby on Rails

Ruby on Rails is arguably one of the most popular and influential web
frameworks. To create a skeleton Rails project:

```bash
gem install rails
rails new myapp
```

You should now have a new Ruby on Rails project setup in the `myapp`
directory.

### Sinatra

Sinatra is a lightweight web microframework that's well suited to
simple projects. To install it run `gem install sinatra` and then put
the following in `myapp.rb`:

```ruby
require 'sinatra'
get '/' do
    'Hello world!'
end
```

You can then run this by typing `ruby myapp.rb` and going to
<http://localhost:4567> in your web browser. For futher information See
the [Sinatra documentation](http://sinatrarb.com/intro.html).

### Express

Sample site at https://sample.soc.srcf.net/nodejs/
and see `nodejs/app.js` for a minimum base application.

## Deploy your app

In a production environment, your app will need to "boot" (ie. start up) in a well-controlled manner. You will also want it to run in the background and ensure it restart when our web server reboots. `systemd` is a popular choice for "supervising" a service.

{{< alert type="danger" >}}
**Don't run development servers on the SRCF** -- these typically
provide remote code execution via debug consoles, which grants any
visitor full access to your SRCF account. Ensure your site runs in a
production mode if configurable.
{{<  /alert >}}

### Boot scripts

First create a bash script that will run your web app at
`~/myapp/run.sh` with the following content:

{{< alert type="info" >}}
The scripts provided here are just examples and won't necessarily be perfect for your set-up. For example, they assume you're using a UNIX socket over a TCP port. More than likely, the getting started guides referred to above will have their own boot scripts too.
{{<  /alert >}}

#### Python

```sh
#!/bin/bash -e

. ~/myapp/venv/bin/activate
export PYTHONPATH='/home/crsid/myapp'
exec gunicorn -w 2 -b unix:/home/crsid/myapp/web.sock \
    --log-file - main:app
```

Replace `main:app` with the module containing the app, and name of your
app.

#### Node

```sh
#!/bin/bash -e

USER="$(whoami)"
[ -e "/home/crsid/myapp/web.sock" ] && rm "/home/crsid/myapp/web.sock"
umask 0

. ~/.nvm/nvm.sh
NODE_ENV=production PORT="/home/crsid/myapp/web.sock" \
    exec ~/myapp/src/bin/www
```

Replace `~/myapp/src/bin/www` with the path to your app.

#### Ruby

```sh
#!/bin/bash -e

eval "$(rbenv init -)"
cd ~/myapp/src
RAILS_ENV=production \
      exec bin/rails server -b /home/crsid/myapp/web.sock
```

Replace `~/myapp/src` with the path to your app.

Now, for all frameworks, make the `run.sh` script executable:

```bash
chmod +x ~/myapp/run.sh
```

You should now be able to execute the script and access your website (or
see any errors in your terminal).

### Using `systemd`

The SRCF may restart any of its servers as part of regular or emergency
maintenance. When this happens, you'll likely want your app to start up
again. Similarly you may want your app to automatically restart if it
crashes. We highly recommend using `systemd` to supervise your app.

1. Create a directory for your app `~/myapp`.
2. Place a startup script at `~/myapp/run.sh`. Your script should end by
    `exec`ing the server process. If you followed one of our tutorials
    for Django, Node or Rails, you've already created this file, so can
    move on to the next step. Otherwise, an example would be:

    ```sh
    #!/bin/sh -e
    exec ~/myapp/run-server
    ```

    Your server should run in the *foreground* (it should not
    daemonise), and the `run.sh` script should end with an `exec` line so
    that signals are sent to the server (and not to the shell that
    started it).

    Once you've written the script, make it executable
    (`chmod +x ~/myapp/run.sh`). Test it by executing it in your terminal
    before moving on; it will be easier to debug problems.

3. Write a systemd service file so your app will be supervised on
    startup.

    For applications in your personal account, create the unit directory
    if it doesn't exist:

    ```bash
    mkdir -p ~/.config/systemd/user
    ```

    For a group account, substitute `~` for `/societies/foosoc`, where
    `foosoc` is the short name of the account.

    Then, save the following to the file
    `~/.config/systemd/user/myapp.service` (or
    `/societies/foosoc/.config/systemd/user/myapp.service` for groups):

    ```ini
    [Unit]
    Description={YOUR USER, SOCIETY OR GROUP NAME} Webapp
    ConditionHost=sinkhole

    [Install]
    WantedBy=default.target

    [Service]
    ExecStart=/home/{CRSid}/myapp/run.sh
    Restart=always
    ```

4. Tell systemd to start your app on startup, by running
    `systemctl --user enable myapp`.

5. You'll need to start your app manually once (on future reboots, it
    will be started for you). To do that, run
    `systemctl --user start myapp`.

    To control your app, you can use the `systemctl` tool. See
    `man systemctl` for full details.

    In summary,

    * **Restart an app.** `systemctl --user restart myapp`
    * **Bring an app offline.** `systemctl --user stop myapp`
    * **Bring an app back online.** `systemctl --user start myapp`
    * **Check the status of an app.** `systemctl --user status myapp`

    By default, your app's standard output and error streams are sent
    to systemd's journal however only the root user can access these.
    You will want to make your app write to a log file rather than stdout
    or stderr.

We have further more general reading [on `systemd` services]({{< relref "/reference/shell-and-files/scheduled-tasks#systemd" >}}).

### Notes for Python

#### Installing gunicorn

We recommend using gunicorn to serve your application. After activating
your `venv`, install it with `pip install gunicorn`.

Note that you may see a warning about a syntax error. As long as the
output ends in 'Successfully installed gunicorn', [it's safe to
ignore this](https://stackoverflow.com/a/25611194).

#### Reloading your app

Gunicorn will reload your app if you send it SIGHUP. You can teach
systemd that fact by adding the following line under `[Service]` in your
systemd unit file:

```ini
ExecReload=/bin/kill -HUP $MAINPID
```

and then running `systemctl --user daemon-reload`. After that, you can
use `systemctl` to reload your app:

```bash
systemctl --user reload myapp
```

### Notes for Ruby

* You may need to migrate your database first.
* Make sure you've set secret keys for the app and any gems that need
    them (e.g. Devise).
* Static file serving is off by default in production, but you'll
    want to turn it on: set both `config.assets.compile` and
    `config.public_file_server.enabled` to true in
    `config/environments/production.rb`.

## Forwarding requests

You then need to configure Apache to forward web requests to the
`web.sock` socket specified in the `run.sh` script. We explain how to do
this in the [reference for web apps]({{< relref "/reference/web-hosting/web-applications#routing-traffic-to-your-app" >}}).

## Closing remarks

Did you like this or find this cool? We invite you to check out
[more tutorials]({{< relref "/tutorials" >}})
or [get in touch]({{< relref "/#help-and-support" >}}) to tell us what you thought!

If you have any suggestions for how we could improve this documentation
please send us an email at `support@srcf.net` or submit a Pull Request
on [GitHub](https://github.com/SRCF/docs)!
