Frequently Asked Questions: Basic Usage
---------------------------------------

Can you design/upload/run/fix my website for me?
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Unfortunately, our sysadmin team does not have the capacity to maintain
both our servers and the thousands of websites hosted on it. If you have
a specific technical question (e.g. an error message you don't
understand), email our support list at support@srcf.net. For more
general questions, including how to build a website or use the Linux
command line, a number of tutorials are available on the web. The UIS
provide a number of relevant `training
courses <https://www.training.cam.ac.uk/ucs/course/ucs-unixintro1>`__
and `online
resources <https://help.uis.cam.ac.uk/devices-networks-printing/managed-desktops/mcs/u5>`__.

You may upload a website designed elsewhere to be hosted on the SRCF.
However, it must be you who performs the upload -- you must not share
access to your SRCF account with anyone else, even if they are acting on
your behalf. If you are unable to maintain your own website, we suggest
you use an external hosting provider such as
`Wordpress.com <https://wordpress.com/>`__, or hire a web design/hosting
firm.

How can I upload my website?
~~~~~~~~~~~~~~~~~~~~~~~~~~~~

In order to upload files to your webspace, the recommended way is to use
SCP or SFTP. There are a number of SFTP clients available on OS X,
including `Cyberduck <http://cyberduck.io>`__. If you are using Windows,
then `WinSCP <http://winscp.net/eng/index.php>`__ is a good application
to try first.

When you connect to the server, you should use ``files.srcf.net`` as the
server name (sometimes referred to as the hostname) and give the
username and password that were sent to you when your SRCF account was
created. When you first log in, you should see the contents of your home
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

If you use WinSCP then `this
documentation <http://winscp.net/eng/docs/introduction>`__ and also the
in-built documentation (in the “Help” menu) will be handy.

How do I “log in”?
~~~~~~~~~~~~~~~~~~

Much of the functionality offered by the SRCF is accessible via a
text-mode “shell” interface on our server — using this interface you can
manipulate files on your website directly, as well as running other
programs such as email software. When you get an SRCF account, you can
connect to the server and issue commands by typing them. If you're not
used to this, don't worry — it's much less primitive than it sounds and
very powerful!

If you're running a Unix-based computer (including recent Apple models
running Mac OS X) then logging in is easy as it's built into the system:
just starting a terminal and running ``ssh <username>@shell.srcf.net``
and entering your password when prompted will do the trick.

If you're running a system without a native console, such as MS Windows,
then things are *slightly* trickier. Not much though, you just have to
go and get a console program. We recommend the PuTTY application,
downloadable for free from
`www.chiark.greenend.org.uk/~sgtatham/putty/ <http://www.chiark.greenend.org.uk/~sgtatham/putty/>`__.
Once downloaded, run PuTTY, enter the server name as ``shell.srcf.net``,
the protocol as SSH (port 22) and click to connect. Enter your username
and SRCF password when prompted.
