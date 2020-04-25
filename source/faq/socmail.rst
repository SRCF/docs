Frequently Asked Questions: Society Email Addresses
---------------------------------------------------

Can societies have email addresses @srcf.net?
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

They certainly can. This can be useful for setting up 'Role' addresses
for the society account, passing mail sent to socname-president@srcf.net
to the correct user, for example.

This has the obvious benefit of allowing one email address to exist
throughout the years, so when one president leaves, the email address
remains the same, stopping users having to look up or find the latest
crsid.

What are the default society email addresses?
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

If you have not specifically set up any mail processing for your
society, the following addresses will be in operation:

-  **[socname]-admins@srcf.net** - this address cannot be overridden.
   Mail sent here will be distributed to the individual SRCF mail
   accounts of all the users who are admins of the society. So, society
   admins who do not check their email on the SRCF should set up
   forwarding from their personal SRCF accounts to their main email
   account.
-  **[socname]-webmaster@srcf.net** - by default this address is
   re-routed to [socname]-admins@srcf.net (see above). This can be
   overridden in a society .forward file.

**IMPORTANT:** Since important messages for society admins may be sent
to one or other of the above addresses, which by default forward to the
local SRCF email addresses of the society admins, please ensure that you
either check your local SRCF inbox or arrange for your personal SRCF
email account to forward to an account you do read — see the FAQ entry:
`How do I read my SRCF email? </faq/email#forwarding>`__ for more
details.

How do I control what happens to society email?
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

There are two ways. One way is to set up one or more Mailman mailing
lists — see the FAQ entry: `How do I get a Mailman mailing list set
up? </faq/other-services.html#lists>`__ for more details. These can have
names of the form [socname]@srcf.net or [socname]-[anything]@srcf.net,
and will take priority over the .forward method described below. Mailing
lists are appropriate if you wish to distribute mail to a large number
of people or if you wish mailing list members to have the ability to
(un)subscribe themselves.

The second method is to set up a ``.forward`` file in your society's
directory (/societies/[socname]/.forward). This will be used to process
all email sent to addresses of the form [socname]@srcf.net or
[socname]-[anything]@srcf.net, with the exception of
[socname]-admins@srcf.net which always has the behaviour described in
the previous answer, and any names already used for your mailing lists.

I don't know the syntax of a .forward file, is there another way?
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

We have a new script to create basic .forward files from a
simple-to-edit list of forwarding addresses. To use this, first create
the file 'autoforward' in the society account's home directory, i.e.
'/societies/[socname]/autoforward'. In that file, add lines in the
format:

::

    address:email,email,email

In a more specific example:

::

    socialsecs:user1@cam.ac.uk,user2@example.org,user3@cam.ac.uk

When the script srcf-autoforward is run the .forward file which will be
generated will ensure that mail to socname-socialsecs@srcf.net is
forwarded to the three users listed in the comma separated list
following the colon. Add any subsequent forwarding addresses you wish to
the file for processing.

Once the file is created, or when you have edited the autoforwards file,
run:

::

    srcf-autoforward socname

to process the autoforward file and create a correctly formatted set of
forwarding rules for your society account.

Note that there is one difference to the usual operation of .forward
files, which is that if no delivery is set up during the .forward file
processing, then the email will be bounced (unlike your personal
.forward file, where the mail would end up in your personal inbox).

What if I want to edit my .forward file directly?
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Then you can do that directly, using the information below.

The syntax of .forward files is explained in detail in the
`exim <http://www.exim.org/>`__ documentation, specifically,
`here <http://www.exim.org/exim-html-3.30/doc/html/filter.html>`__.

Note that if you use the “save” command, you must specify absolute file
paths (e.g.“'/societies/mysoc/saved-emails”), and if you use the logfile
command, you must not only use an absolute file path but also must
specify a mode parameter of 0660, otherwise the logfile will not be
readable or writable by you! e.g. “logfile /societies/mysoc/emaillog
0660”

To get you started, here is an example .forward file for the fictional
society “mysoc”. It would be at ``/societies/mysoc/.forward``. Lines
beginning with # are comments, but note that the first line (“# Exim
filter”) is special and must be left intact for the filter file to work.

::

    # Exim filter

    #  mysoc-webmaster@srcf.net should go to abc12@cam.ac.uk

    if ($local_part_suffix is "-webmaster") then
      deliver abc12@cam.ac.uk
    endif

    # Publicity address. mysoc-publicity@srcf.net should go
    # to abc12 and def34

    if ($local_part_suffix is "-publicity") then
      deliver abc12@cam.ac.uk
      deliver def34@cam.ac.uk
    endif

    # forward anything else sent to mysoc-[anything]@srcf.net
    # or mysoc@srcf.net to the committee mailing list:

    if not delivered then
      deliver soc-mysoc-committee@lists.cam.ac.uk
    endif
