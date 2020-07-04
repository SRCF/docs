:orphan:

.. _first-file-upload:

Let's get filin': upload your files via SFTP
---------------------------------------------

Data. It's everywhere and nowhere. This tutorial will help you upload your first files to the SRCF so you can serve them up from your web page or use them in whatever you're working on. 

In this tutorial, you will be using SFTP to upload your files. Let's get started!

.. note::
  You may or may not have heard of another file transfer protocol called SCP. Most clients like FileZilla and WinSCP are equally compatible with this.

0. Introduction
~~~~~~~~~~~~~~~

FTP stands for ‘file transfer protocol’ and is another method of connecting to a web server (different to HTTP). It’s the quickest and easiest way to transfer files between the computer you’re working on and the web server where they’ll be supplied to people viewing your website.

1. Get an SFTP/SCP client
~~~~~~~~~~~~~~~~~~~~~~~~~

We recommend one of the following:

* `Cyberduck <http://cyberduck.io>`__
* `WinSCP <http://winscp.net/eng/index.php>`__

Some of these might only be available for macOS or Windows or vice versa.

.. hint::
  If you use WinSCP then `this
  documentation <http://winscp.net/eng/docs/introduction>`__ and also the
  win-built documentation (in the “Help” menu) will be handy.

2. Connecting
~~~~~~~~~~~~~

.. tip::
  If you have any questions about the user interface, we recommend checking the documentation of the SFTP client you chose in the first instance. We'll be more broadly discussing here what you should do, but won't focus on one particular client.

1. Use ``files.srcf.net`` as the server name (sometimes referred to as the hostname)
2. Give the username and password that were sent to you when your SRCF account was created. 

3. Uploading
~~~~~~~~~~~~

When you first log in, you should see the contents of your home
directory on our server. Inside your home directory you will find a
``public_html`` directory — this is where you can put your personal
website.

If you want to upload a society website, you need to connect to the
server in the same way, still using your personal username and password.
However, rather than putting your files in the ``public_html`` directory
in your filespace, you should also find a directory named after the
abbreviation used for your society. Inside here you'll find another
``public_html`` directory which is where the society website files go.

Please note that it can take up to 20 minutes between uploading a new
site and that site being published on the web. Please be patient.

4. Closing remarks
~~~~~~~~~~~~~~~~~~

Did you like this or find this cool? We invite you to check out :ref:`more tutorials <tutorials>`, :ref:`read our recommended resources<recommended-resources>` or :ref:`talk to us <get-help>` to tell us what you thought!