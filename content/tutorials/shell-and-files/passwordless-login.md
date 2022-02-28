---
title: "Passwordless login: SSH keys"
date: 2021-04-21T16:44:58+01:00
group: shell-and-files
layout: docs
toc: true
highlight: true
---

## Overview

Passwords aren't very safe. Instead of [remembering multiple passwords](https://www.youtube.com/watch?v=3NjQ9b3pgIg) for multiple servers (nowadays made easier with password managers), it is common practice to use so-called SSH keys to login to a remote server. This tutorial will show you how to set-up an SSH key pair so you can log in to any of our servers without the need of a pesky password!

## Introduction

A well-established method of authentication is via passwords. This, however, has been shown to be quite vulnerable, [time and time again](https://haveibeenpwned.com/). An alternative solution  to logging in to servers via SSH that offers lots of flexibility, is to use SSH keys.

SSH keys always exist in pairs: there is a private key and a public key. You will keep the private key while placing your public key in any servers you want to access. Just like you shouldn't use one password for everything, you should use multiple private keys if you have access to a reasonable quantity of servers.

When logging in to a server, the SSH client on your computer requests the public key for the account you're trying to log in to and checks to see if your private key is compatible with that one. This works because Math.

## Generating a key pair

1. Open your terminal of choice
2. Paste in the following command with an email of your choice

    ```bash
    $ ssh-keygen -t ed25519 -C "your_email@example.com"
    ```

    This creates an SSH key pair, using your email as a label. You should wee the following output

    ```text
    Generating public/private ed25519 key pair.
    ```

3. When you're prompted to "Enter a file in which to save the key," press Enter. This accepts the default file location, which is in the `.ssh` directory in your home directory.
4. Optionally enter a password when prompted.

{{< alert type="info" >}}
As before, if someone gains access to your computer, they also gain access to every system that uses that key. To add an extra layer of security, you can add a passphrase to your SSH key.
{{<  /alert >}}

## Adding your keys to `ssh-agent`

You can use `ssh-agent` to securely save your passphrase so you don't have to reenter it. You can find further guidance on this [here](https://docs.github.com/en/github/authenticating-to-github/working-with-ssh-key-passphrases).

## Adding your key to the server

You now need to add your public key to one of our servers. Since all of our user-facing server share file systems, you only need to do this once.

A handy utility exists for this:

```bash
ssh-copy-id -i ~/.ssh/mykey spqr2@pip.srcf.net
```

More useful information on that [here](https://www.ssh.com/academy/ssh/copy-id).

If that doesn't work, you can always upload your public key to the server as you would a normal file. Your public keys should go in the `~/.ssh/authorized_keys` file, separated by line breaks (press "enter").

{{< alert type="danger" >}}
Make sure you upload your **public** key, not your **private** key. To check, you can always open the file in question and if it contains something like the following then you know it's the private key.

```text
-----BEGIN PRIVATE KEY-----
BASE64 ENCODED DATA
-----END PRIVATE KEY-----
```

{{<  /alert >}}

## Logging in

With your SSH keys in place, you should now be able to `ssh sqpr2@pip.srcf.net` without being prompted for your password!

You can even make this process simpler by [setting up an SSH configuration file](https://www.ssh.com/academy/ssh/config), to, for example, be able to type `ssh srcf-webserver` and log into the web server!

## Closing remarks

Did you like this or find this cool? We invite you to check out
[more tutorials]({{< relref "/tutorials" >}})
or [get in touch]({{< relref "/#help-and-support" >}}) to tell us what you thought!

If you have any suggestions for how we could improve this documentation
please send us an email at `support@srcf.net` or submit a Pull Request
on [GitHub](https://github.com/SRCF/docs)!
