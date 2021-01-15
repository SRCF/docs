Scheduled tasks
---------------

You can make use of cron or systemd timers to run programs on a schedule.  In either case, you will need to configure it on the right server (e.g. tasks relating to web applications should probably run on **sinkhole**, game servers on **cavein** or **doom** and anything else most likely on **pip**).

For cron, connect over SSH and run ``crontab -e``, which will open an editor and an explanation of the file format.  You can add entries to run something at a fixed interval, or on server reboot::

    # Run at 03:21 every day:
    21 3 * * * /home/<crsid>/daily.sh

    # Run at server startup:
    @reboot /home/<crsid>/startup.sh

If you want to setup cron jobs for a group or society account then you'll need to run ``sudo -u SOCNAME crontab -e``.
