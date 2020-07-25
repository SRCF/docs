.. _more-terminal:

Getting to know the terminal
----------------------------

This tutorial will walk you through some more advanced commands that you can perform in a UNIX-like terminal, which the SRCF provides you with. You will learn many of the basic commands that are used and why in conjunction with other tools they can be very powerful.

This tutorial assumes you have an SRCF personal account (with or without society admin permissions) and can SSH. See our :ref:`other tutorials <tutorials>` for that.


Introduction
~~~~~~~~~~~~

The SRCF offers you much more than just a web server - everyone who has
an account has full shell access to our Linux servers. This allows you to
manipulate and edit the contents of your filespace directly without
having to worry about downloading and uploading files, as well as
running all sorts of other software which you might not have available
to you under your usual operating system.

Basic commands
~~~~~~~~~~~~~~

After sucessfully loging in you will see a few lines of text welcoming you to the system and telling you any recent news, followed by a *command prompt*:

.. code-block:: bash

   pip:~$

You are now logged in and can give the system commands by typing them
after the prompt. If you wish to start a particular program, the command
is just the name of the program you wish to run. For example typing
'date' and pressing return will tell you the current date and time:

.. code-block:: bash

   pip:~$ date
   Wed Apr  5 22:29:11 BST 2020
   pip:~$

After each command has finished, a new prompt will be displayed ready
for the next command. Some interactive programmes, such as the email
reader ``pine`` will fill the whole screen, but will still return to the
command prompt afterwards.

Commands with arguments
~~~~~~~~~~~~~~~~~~~~~~~

Some commands require *arguments*, that is additional parameters which
alter the way that they run, for example the command 'ping', which is
used to check the speed of an Internet connection, requires the name of
a host as an argument:

.. code-block:: bash

   pip:~$ ping www.bbc.co.uk
   PING www.bbc.net.uk (212.58.224.35): 56 data bytes
   64 bytes from 212.58.224.35: icmp_seq=0 ttl=247 time=4.9 ms
   64 bytes from 212.58.224.35: icmp_seq=1 ttl=247 time=4.6 ms

   --- www.bbc.net.uk ping statistics ---
   2 packets transmitted, 2 packets received, 0% packet loss
   round-trip min/avg/max = 4.6/4.7/4.9 ms
   pip:~$

(To stop the 'ping' program, press control-c)

.. note::
  To find information about the arguments for a command, use the 'man'
  command, for example 'man ping' will tell you about the 'ping' command.
  Use the arrow keys to scroll through the man text and press 'q' when you
  want to return to the command prompt.

File system
~~~~~~~~~~~

All files stored on the system reside in *directories* (this is the
equivalent of Windows folders). The directories are arranged in a
hierachical structure - directories may contain subdirectories and so
on. The top of the hierachy is called the *root directory*, and is
represented by ``/``. Other directories are refered to by their *path*,
for example, ``/home/abc45/`` represents the directory ``abc45`` which is a
subdirectory of 'home', which in turn is a subdirectory of the root
directory. Files can be specified by adding the file name to the end of
the path, for example ``/home/abc45/my_file.txt`` is a reference to the
file ``my_file.txt`` which is stored in the directory ``/home/abc45/``.

At any point during your session you will be 'in' a particular directory
called the *working directory*. Rather than using full paths as above,
it is possible to refer to the location of files relative to working
directory by ommiting the leading ``/``, for example 'my_dir/my_file.txt'
represents the file 'my_file.txt' within the directory 'my_dir', which
is a subdirectory of the working directory. Filenames given without a
preceding path are assumed to be in the working directory. All
directories have a special subdirectory called ``..`` which refers to the
directory one level higher up in the hierachy (the *parent direcvtory*),
so ``../some_file.txt`` is the file ``some_file.txt`` in the parent
directory of the working directory.

To find out your current directory, use the command 'pwd':

.. code-block:: bash

   pip:~$ pwd
   /users/abc45
   pip:~$

You can change the working directory by using the 'cd' command, for
example:

.. code-block:: bash

   pip:~$ cd my_dir
   pip:~/my_dir$ 

Notice how the working directory is displayed as part of the command
prompt. The symbol '~' is an abbreviation for your *home directory*, in
other words the directory you start off in when you first log in.

To view the contents of the working directory, use the command 'ls':

.. code-block:: bash

   pip:~$ ls
   public_html  mysoc  my_file.txt
   pip:~$

Althernatively, use 'ls -alF' to give more detailed information. The
above example shows that the working directory has two directories
'public_html' and 'mysoc', the first of which contains your webspace and
the latter of which is a link to the 'mysoc' society filespace. There is
also one file, 'my_file.txt' (there is no way of differentiating between
files and directories in the above example - you need to use the 'ls
-alF' form to show that information).

More commands
~~~~~~~~~~~~~

The following table gives some common commands used to manipulate files:

+-----------------------------------+-----------------------------------+
| Command                           | Meaning                           |
+-----------------------------------+-----------------------------------+
| ::                                | Creates a copy of 'file1' at the  |
|                                   | location specified by 'file2'     |
|    cp <file1> <file2>             |                                   |
+-----------------------------------+-----------------------------------+
| ::                                | Moves 'file1' to the location     |
|                                   | specified by 'file2'. Note that   |
|    mv <file1> <file2>             | if 'file1' and 'file2' are in the |
|                                   | same directory you can use this   |
|                                   | command to rename the file.       |
+-----------------------------------+-----------------------------------+
| ::                                | Deletes 'file'                    |
|                                   |                                   |
|    rm <file>                      |                                   |
+-----------------------------------+-----------------------------------+
| ::                                | Creates a directory called 'dir'  |
|                                   |                                   |
|    mkdir <dir>                    |                                   |
+-----------------------------------+-----------------------------------+
| ::                                | Removes the directory 'dir' (it   |
|                                   | must be empty first)              |
|    rmdir <dir>                    |                                   |
+-----------------------------------+-----------------------------------+
| ::                                | Edits 'file' using the 'nano'     |
|                                   | text editor.                      |
|    nano <file>                    |                                   |
+-----------------------------------+-----------------------------------+

Note that the last command starts the nano text editor. This is a very
powerful editor which is worth getting to know, but it can seem complex
at first. If you get stuck in it, pressing control-x will return to the command prompt.

Exiting
~~~~~~~

To log out of the system, type 'exit' at the command prompt.

Closing remarks
~~~~~~~~~~~~~~~~~~

Did you like this or find this cool? We invite you to check out :ref:`more tutorials <tutorials>`, :ref:`read our  recommended resources<recommended-resources>` or :ref:`talk to us <get-help>` to tell us what you thought!

If you have any suggestions for how we could improve this documentation please send us an email at ``support@srcf.net`` or submit a Pull Request on `GitHub <https://github.com/SRCF/docs>`__!
