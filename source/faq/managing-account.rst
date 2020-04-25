Frequently Asked Questions: Managing Your Account
-------------------------------------------------

How do I change my password?
~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Log in to the SRCF server and issue the command ``yppasswd`` — you will
be prompted for your old password before being asked to give the new one
twice. Make sure that your choice of password is secure — don't use
dictionary words, names or anything else which can be associated easily
with you (such as a phone number or car registration number), and please
don't use simple substitutions (e.g. using “f15hcake” instead of
“fishcake”) as these can be easily guessed. The best passwords are
collections of random letters and numbers, which you can remember by
inventing a simple mnemonic. The command ``apg`` can be used to suggest
good passwords.

If you don't understand all of that, or have forgotten your old password
so you can't log in, you can email sysadmins@srcf.net and we'll give you
a new random password.

Can I tell my friend my password so that he can help maintain my website?
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

You are the only person authorised to use your password. If we find any
evidence that it is being used by someone else then your account will be
suspended indefinitely and without notice.

If you would like to run a website which is maintained by several people
then you should apply for a group account.

If you suspect that someone else knows your password, please change your
password immediately and notify sysadmins@srcf.net.

What is SSH and why should I use it?
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

SSH is a remote login protocol similar to telnet, but which uses
encryption to prevent eavesdropping. If you use telnet to log into any
machine, it is trivial for a cracker to obtain your password from any
machine on any of the networks between you and the remote machine - with
SSH this is not the case. We therefore require you to use SSH to connect
to our systems.

What's your view on world writable files?
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

World writable files are files that anybody on the system can write to
(edit). Whilst in general you can trust other SRCF users not to modify
your files, there are several reasons why world-writable files are a
problem:

-  People make mistakes. For instance, if you have a world-writable
   directory, and somebody runs "rm -r /" by mistake (this has happened
   at least once) then all the files in that directory will be deleted.
-  Users' accounts may have been compromised. We have had one incident
   where a worm entered the computer via an insecure society website and
   proceeded to overwrite every world-writable file on the computer.
-  World writable files make things easier for attackers. If for
   instance a directory underneath your public\_html directory is
   world-writable then an attacker able to write files on the system
   could place a script there containing commands that he could execute
   as you.

To avoid problems like this we recommend that you avoid creating
world-writable files and directories, and if you have created them then
you change them to be non-world-writable. You can do this using the
"chmod" command - "chmod o-w filename" will remove world-writable
permissions from a file and "chmod -R o-w ~" will do the same for all
world-writable files in your home directory.

Some cgi scripts will tell you that they need to have world-writable
files / directories to work. This is almost certainly not the case on
the SRCF system where cgi / php scripts run as the user that owns them
rather than the webserver. For society accounts it is often necessary to
make the files group-writable rather than world-writable (presuming that
the intended effect is to allow multiple members of the society to write
to them). If you can't get a script to work without world-writable files
/ directories then get in touch with support@srcf.net and we'll see what
we can do to help.

I can see everybody's files!
~~~~~~~~~~~~~~~~~~~~~~~~~~~~

This is the way it's supposed to be - on UNIX (and UNIX-like) systems
users can see all of each others' files by default (as UNIX was designed
for use in an academic environment to make sharing work etc. easier). It
is possible to remove the "world readable" setting from files (log in on
the command prompt and run ``chmod o-rwx ⟨filename⟩``"), and you should
do that with files containing passwords. Similarly, you can create a
directory (perhaps called “private”) use the same command to stop other
users accessing it. It's not a good idea to make your whole home
directory private as some programs (such as the web server) need to see
files inside it.

Other security issues
~~~~~~~~~~~~~~~~~~~~~

As well as keeping your password safe, you also need to make sure that
any additional software that you install is secure. Exploiting a
vulnerability that allows an attacker access either to your account or
that of a society user is often the first step in getting administrative
access to the machine. This is particularly true for PHP and CGI scripts
used on your website, but any software may be affected. Please take into
account the following when installing software of your own:

-  If there is a suitable piece of software in the stable Ubuntu release
   then ask us to install it centrally rather than installing your own
   copy. Centrally installed software gets upgraded automatically when
   security patches are released. You can search for Ubuntu packages at
   http://packages.ubuntu.com/.
-  Use existing software rather than writing your own, especially if
   there is an existing piece of software which is popular and has a
   strong community of users.
-  Make sure you install security patches *as soon as they are
   released*. Google makes it very easy for attackers to find their
   targets once a vulnerability is known.
-  Subscribe to the announcement mailing list associated with the
   software you install, so that you find out quickly about any security
   issues.

If you do suspect that an attacker has obtained access to your account,
please let us know immediately so that we can make sure that they
haven't made changes to the system. Remember, if an attacker
successfully gains access, it may result in several days of downtime not
just for your website, but for everyone who uses the machine.

What happens to my account when I graduate?
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

You continue to be a member of the SRCF for life. As long as you are
contactable by email, your account will remain active. Note this means
you will likely have to change your address from ``@cam.ac.uk`` to
something else when you graduate. Contact the sysadmins at
sysadmins@srcf.net to do so.

What is the full path to my filespace?
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Personal filespaces are kept in the ``/home/`` directory, for example
``/home/abc45/``. Society filespaces are in ``/societies/``, for example
``/societies/foosoc/``. Although we try to minimise the number of
changes to the filesystem, we cannot guarantee that this will always be
the case. We therefore recommend that you avoid using absolute paths
wherever possible, such as by using relative paths instead. If this is
not possible, we recommend that you make it easy for you to change the
location of your files, e.g. by setting things up so that file locations
can be specified in configuration files.

How do I find out how much of my quota I have used?
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Simply log in and use the command:

::

    quota -gsQ

Note that the ``-g`` is required as our disk usage quotas are managed on
a per-group rather than per-user basis, with each user having their own
group.

I've run out of quota — Can I get it increased?
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Our initial quota of is deliberately set relatively low to reduce the
risk of users accidentally filling the disk (this is surprisingly easy
to do, for example with log files). If you would like more and have good
reason then just ask the `sysadmins <mailto:sysadmins@srcf.net>`__ and
we'll increase it for you. Note that while disk space is cheap, we need
to supply it four times over (as we use RAID). More disk space also
tends to mean more bandwidth, and other problems associated with running
a larger server, so please be considerate in your disk usage. If you
need a lot more resources we may ask you to consider making a
`donation <https://www.srcf.net/donate>`__ towards the costs of running
the server.
