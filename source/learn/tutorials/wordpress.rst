.. _website-wordpress:

Create your own website with WordPress
--------------------------------------

In this tutorial, you'll learn how to create a fully functional blog/personal website using WordPress. This is a great first project if you're a user starting out with the SRCF, websites in general or want to use a tried-and-tested Content Management System.

This tutorial assumes you have an SRCF personal account (with or without society admin permissions) and can SSH and transfer files. See our :ref:`other tutorials <tutorials>` for that.

.. note::
  WordPress started off as a blogging platform but then evolved into a fully featured `Content Management System <https://en.wikipedia.org/wiki/Content_management_system>`__. This means that with a few clicks and virtually no knowledge of website design or coding, you can have a very professional site up and running which is easy to update and maintain. WordPress has huge user and development bases meaning that there is a lot of help available, as well as a plugin to handle just about any desired function. WordPress powers 35% of the web!

1. Sign up for the SRCF
~~~~~~~~~~~~~~~~~~~~~~~

If you don't have an SRCF account already, make sure to :ref:`create one <getting-started-personal>`. If you wish to create a website for your society, you need to `create a society account too <https://control.srcf.net/signup/society>`__.

2. Setting up your database
~~~~~~~~~~~~~~~~~~~~~~~~~~~~

WordPress needs a MySQL database to run. This works a bit like Excel, storing all of the data for your website in tables and loading this into templates when each page is loaded. You can create your MySQL database `here <https://docs.srcf.net/services/databases.html>`__.

3. Make sure everything is OK
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Now that you've got everything setup, let's check if you can log in with an FTP client. FTP stands for ‘file transfer protocol’ and is another method of connecting to a web server (different to HTTP). It’s the quickest and easiest way to transfer files between the computer you’re working on and the web server where they’ll be supplied to people viewing your website.

You’ll want to connect to files.srcf.net via SFTP (the S stands for secure). You should see a folder called public_html which we’ll be uploading all of our files to.

Next up, check that you can access your database: log in to phpMyAdmin. This is a web-based control panel where you can view and edit your database manually. You should see your personal database on the left along with any society account databases. They should all look pretty empty at this point.

If everything is working so far and you have all of your login details and passwords, we’re good to go! Congratulations, that was the hardest bit of the whole process…

All credit goes to `Phil Ewels <http://phil.ewels.co.uk/>`__ for writing this up originally on his own blog. This tutorial contains some slight updates and modifications.