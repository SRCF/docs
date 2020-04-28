How our systems work
--------------------

This section looks at how the SRCF operates and is able to provide its services.

We maintain and manage all of our own hardware (physically located in Cambridge) and software. We primarily use Ubuntu Linux as it is free (`in all senses <https://www.gnu.org/philosophy/free-sw.html>`__), stable and relatively easy to maintain.

Summary
~~~~~~~

The SRCF owns (through several gracious direct donations and purchases) 9 physical serves that are mounted on a server rack, which is on University grounds. We also own several 1 and 10 GB ethernet switches mounted on the same rack. The server machines are named mirzam, sheliak, fog, smog, tahayi, milne, mist, pileus (retired), alto (retired), nimbus (retired), stratus, and cirrus.

Of these, 6 form a *cluster* of machines that host our virtual machines (VMs), collectively named **thunder**. That leaves 3 machines - stratus and smog host the VM disk images and tahayi is the SRCF's primary server, ``pip``. ``pip`` is our shell server and hosts all user files. It has two six-core 2.1GHz Intel Xeon E5-2620 CPUs with 64GB of RAM and four 4TB SATA disks. This is currently running Ubuntu 16.04 (xenial).

.. note::
    Software upgrades usually occur once every year or two during the summer.
