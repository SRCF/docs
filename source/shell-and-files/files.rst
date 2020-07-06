Files and transfer
------------------

Your home directory on SRCF servers is ``/home/<crsid>``.  Society account files can be found at ``/societies/<socname>``.  These directories are private to you / society admins.

All accounts also come with a "public" directory (these are located at ``/public/home/<crsid>`` and ``/public/societies/<socname>`` respectively).  This includes your website root ``public_html``, but you're free to use them as you wish.

You can use SFTP or SCP to transfer files between your SRCF account and your personal computer.  Mac and Linux come with ``scp`` for per-file transfer; you may prefer a graphical client -- options include WinSCP on Windows, or Cyberduck for Mac/Windows.

Quotas
~~~~~~

We provide users with 2GB of space for their personal files, and each society account also comes with 2GB of its own space.  If you run out, you may request additional quota from the sysadmins.  For larger increases, you may be asked to justify the need, and the SRCF committee may need to approve it.

Consider searching for cache files in your home directory that may be taking up unnecessary space, or compressing large files (e.g. high-resolution photos on websites).


Snapshots
~~~~~~~~~

Although *the SRCF does not guarantee to take backups* of users' data, snapshots of ``/home``, ``/public`` and ``/societies`` are generally taken regularly for disaster recovery purposes. Snapshots may be accessed using the hidden (it will not show up in ls -a or in shell autocomplete) directory ``.snapshot``, available at any level of the file hierarchy.

For example:
::
	spqr2@pip:~$ ls -lut .snapshot
	total 336
	drwxr-x--- 2 spqr2 spqr2 8192 Jul  6 18:00 sv_hourly.0
	drwxr-x--- 2 spqr2 spqr2 8192 Jul  6 17:00 sv_hourly.1
	drwxr-x--- 2 spqr2 spqr2 8192 Jul  6 16:00 sv_hourly.2
	drwxr-x--- 2 spqr2 spqr2 8192 Jul  6 15:00 sv_hourly.3
	drwxr-x--- 2 spqr2 spqr2 8192 Jul  6 14:00 sv_hourly.4
	drwxr-x--- 2 spqr2 spqr2 8192 Jul  6 13:00 sv_hourly.5
	drwxr-x--- 2 spqr2 spqr2 8192 Jul  6 12:00 sv_hourly.6
	drwxr-x--- 2 spqr2 spqr2 8192 Jul  6 11:00 sv_hourly.7
	drwxr-x--- 2 spqr2 spqr2 8192 Jul  6 10:00 sv_hourly.8
	drwxr-x--- 2 spqr2 spqr2 8192 Jul  6 09:00 sv_hourly.9
	drwxr-x--- 2 spqr2 spqr2 8192 Jul  6 08:00 sv_hourly.10
	drwxr-x--- 2 spqr2 spqr2 8192 Jul  6 07:00 sv_hourly.11
	drwxr-x--- 2 spqr2 spqr2 8192 Jul  6 06:00 sv_hourly.12
	drwxr-x--- 2 spqr2 spqr2 8192 Jul  6 05:00 sv_hourly.13
	drwxr-x--- 2 spqr2 spqr2 8192 Jul  6 04:00 sv_hourly.14
	drwxr-x--- 2 spqr2 spqr2 8192 Jul  6 03:00 sv_hourly.15
	drwxr-x--- 2 spqr2 spqr2 8192 Jul  6 02:00 sv_hourly.16
	drwxr-x--- 2 spqr2 spqr2 8192 Jul  6 01:00 sv_hourly.17
	drwxr-x--- 2 spqr2 spqr2 8192 Jul  6 01:00 sv_daily.0
	drwxr-x--- 2 spqr2 spqr2 8192 Jul  6 00:00 sv_hourly.18
	drwxr-x--- 2 spqr2 spqr2 8192 Jul  5 23:00 sv_hourly.19
	drwxr-x--- 2 spqr2 spqr2 8192 Jul  5 22:00 sv_hourly.20
	drwxr-x--- 2 spqr2 spqr2 8192 Jul  5 21:00 sv_hourly.21
	drwxr-x--- 2 spqr2 spqr2 8192 Jul  5 20:00 sv_hourly.22
	drwxr-x--- 2 spqr2 spqr2 8192 Jul  5 19:00 sv_hourly.23
	drwxr-x--- 2 spqr2 spqr2 8192 Jul  5 01:00 sv_daily.1
	drwxr-x--- 2 spqr2 spqr2 8192 Jul  4 01:00 sv_weekly.0
	drwxr-x--- 2 spqr2 spqr2 8192 Jul  4 01:00 sv_daily.2
	drwxr-x--- 2 spqr2 spqr2 8192 Jul  3 01:00 sv_daily.3
	drwxr-x--- 2 spqr2 spqr2 8192 Jul  2 01:00 sv_daily.4
	drwxr-x--- 2 spqr2 spqr2 8192 Jul  1 01:00 sv_daily.5
	drwxr-x--- 2 spqr2 spqr2 8192 Jun  2 01:00 sv_daily.6
	drwxr-x--- 2 spqr2 spqr2 8192 Jun 29 01:00 sv_daily.7
	drwxr-x--- 2 spqr2 spqr2 8192 Jun 28 01:00 sv_daily.8
	drwxr-x--- 2 spqr2 spqr2 8192 Jun 27 01:00 sv_weekly.1
	drwxr-x--- 2 spqr2 spqr2 8192 Jun 27 01:00 sv_daily.9
	drwxr-x--- 2 spqr2 spqr2 8192 Jun 26 01:00 sv_daily.10
	drwxr-x--- 2 spqr2 spqr2 8192 Jun 25 01:00 sv_daily.11
	drwxr-x--- 2 spqr2 spqr2 8192 Jun 24 01:00 sv_daily.12
	drwxr-x--- 2 spqr2 spqr2 8192 Jun 23 01:00 sv_daily.13
	drwxr-x--- 2 spqr2 spqr2 8192 Jun 20 01:00 sv_weekly.2
	drwxr-x--- 2 spqr2 spqr2 8192 Jun 13 01:00 sv_weekly.3

Note that snapshots are named ``sv_[type].[index]``, with index 0 indicating the most recent snapshot of that type. The listing above shows 24 hourly, 14 daily and 4 weekly snapshots; you may see fewer or more than this.

Snapshots preserve file permissions and are read-only, so if you wish to retrieve something from a snapshot, you must have had permission to access it at the time the snapshot was taken, and must copy (rather than move) it out of the snapshot.

Snapshots going further back in time *may* be available on an off-site disaster-recovery replica; if you need access to these, contact the sysadmins (but please don't count on them being available; you should take your own backups regardless).
