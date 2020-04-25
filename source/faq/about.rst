Frequently Asked Questions: About the SRCF
------------------------------------------

What is the SRCF?
~~~~~~~~~~~~~~~~~

The SRCF is the University of Cambridge's Student-Run Computing
Facility. We provide web hosting, shell accounts and various other
computing services to members of the University and groups such as
University societies. We are a University society, registered with the
Societies Syndicate. As such we are not formally supported by the
University Administration in any way; instead the service is maintained
by a group of volunteers.

Who are the SRCF?
~~~~~~~~~~~~~~~~~

The SRCF executive — the `committee </committee>`__ and sysadmin (system
administration) team — consists of current and former University of
Cambridge students. We hold elections for the committee positions every
year at our AGM, according to our `constitution <constitution>`__. Any
member of the University (staff or student) can `register </signup>`__
to become a lifetime member of the SRCF, and so use our services. We do
not charge any membership fees, or require anything from our members
beyond that they abide by our `Terms of Service </tos>`__.

Why does the SRCF exist?
~~~~~~~~~~~~~~~~~~~~~~~~

The SRCF was formed in 1999 to provide services which the University
Administration could not, including web hosting, mailing lists, and
other computing resources for student societies. Nowadays, the
`UIS <http://help.uis.cam.ac.uk/email-telephony-and-collaboration/map-collaborative-services/society-web-pages/computing>`__
and many external hosting providers also offer similar services, but
none provide as many features at no cost as the SRCF.

Our sysadmins volunteer due to their interest in the GNU/Linux operating
system and related software, current server technologies, and to gain
valuable experience administering large, multi-user, networked systems.
The SRCF also effectively functions as the Linux Users Group (LUG) of
the University.

What sort of systems do you run?
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

We maintain and manage all of our own hardware (physically located in
Cambridge) and software. We primarily use `Ubuntu
Linux <http://www.ubuntu.com/>`__ as it is free (`in all
senses <http://www.gnu.org/philosophy/free-sw.html>`__), stable and
relatively easy to maintain.

The SRCF's primary server, ``pip``, is our shell server, and hosts our
users' home directories and email. It has two six-core 2.1GHz Intel Xeon
E5-2620 CPUs with 64GB of RAM and four 4TB SATA disks. This is currently
running Ubuntu (we normally upgrade once every year or two, in the
summer).

Most of our other services run on our virtualised cloud known as
``thunder``. This comprises a half-dozen assorted physical servers
running the free version of XenServer and a back-end storage server,
``alto``. Several of these machines were graciously donated by `Third
Light Ltd. <https://www.thirdlight.com>`__ and Peterhouse.

Virtual machines in public service include:

-  ``sinkhole``: web (Apache) and PostgreSQL server
-  ``squirrel``: MySQL database server
-  ``cavein``: long-running resource-hungry services, e.g. game servers
-  ``blizzard``: authoritative DNS (and DNSSEC) server
-  ``flame``: `Usenet (NNTP) server </faq/news>`__
-  ``flood``: `IRC (Internet Relay Chat) server </faq/irc>`__

Until 2006 we had just one server in use, ``kern`` (a dual Athlon 1.6GHz
PC with 2GB of RAM and 400GB of disk). Before that we *used* to run on
an ancient Intel Pentium running at 166MHz with 128MB of RAM. How times
have changed :)

You guys are doing a great job. How can I help you out?
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

We always welcome donations — as we don't charge for our services, it's
the only way we can afford to buy new hardware to keep up with the
demand. If you want to make a donation, please visit `this
page <https://www.srcf.net/donate>`__ and it'll tell you what to do.

If you want to donate some time and experience to help us out, then why
not join our support team? This is an email-based help list for problems
not requiring administrative access to the SRCF server. If you have
experience of using a website or other services on the SRCF, and want to
help out, then send an email to sysadmins@srcf.net to be added to the
list. Many thanks in advance to all who volunteer!

We are also always recruiting new sysadmins. If you have experience
administering Linux systems, or are willing to learn, please send an
email to the committee at committee@srcf.net. We will invite you to meet
the sysadmin team in person, and discuss where you can help out.

How many users do you have?
~~~~~~~~~~~~~~~~~~~~~~~~~~~

There are currently users (members with active shell accounts).

How many members do you have?
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

There are currently members of the society (membership is for life).

How many societies do you host?
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

We currently host society accounts, of which are no longer maintained.

|Membership graph|

.. |Membership graph| image:: /membershipgraph

