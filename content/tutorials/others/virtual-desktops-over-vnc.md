Virtual desktops over VNC {#virtual-desktop}
=========================

The SRCF desktop server `shell.srcf.net` has VNC server software
installed (we're using [TightVNC](http://www.tightvnc.com)). This
allows you run a graphical desktop on our server, and connect to it
remotely.

However, TightVNC does not encrypt sessions, so you must connect through
SSH in order to avoid possible eavesdropping over the internet.

To start it up, you'll first need to be able to connect over SSH to the
SRCF desktop server. Linux and Mac should already provide the `ssh`
terminal command; Windows users may download
[PuTTY](https://www.chiark.greenend.org.uk/~sgtatham/putty/) for a
native SSH client.

Setting a VNC password
----------------------

SSH to `shell.srcf.net` using your SRCF username and password (SSH keys
for your account are also valid), then run the `vncpasswd` command:

    spqr2@pip:~$ vncpasswd
    Using password file /home/spqr2/.vnc/passwd
    Password:
    Verify:
    Would you like to enter a view-only password (y/n)? n

You can say no to a view-only password, for this use case it's unlikely
to be useful.

Starting a new VNC session
--------------------------

To start a new VNC server process in the background:

    spqr2@pip:~$ vncserver -geometry 1920x1080
    New 'X' desktop is pip:12

    Starting applications specified in /home/spqr2/.vnc/xstartup
    Log file is /home/spqr2/.vnc/pip:12.log

Geometry is of the form `<width>x<height>` and may be customised as
desired (the VNC window cannot be resized after you have started the VNC
server).

Take a note of the `:12` in the output; this is the **display number**
assigned automatically to your VNC server and could be any two-digit
number.

Add 5900 to the display number to obtain the **port number** (in this
example, the port number is 5912).

\_(Note that our configuration imposes some additional options upon your
VNC server for security: specifically, `-localhost -nolisten tcp`, to
prevent insecure direct connections to your VNC server from outside of a
SSH connection.)\_

Tunneling over SSH
------------------

As noted above, VNC server connections are insecure. Instead, you should
use an SSH tunnel -- this provides encryption over the wire for free,
and allows you to securely authenticate to, and make use of, your VNC
server instance.

The aim is to forward your VNC port on the desktop server, to a port of
your choosing on your local machine.

### Linux and Mac

Back on your local machine, SSH to `shell.srcf.net` again, but request
forwarding for your chosen port:

    you@home:~$ ssh -N -L 5901:localhost:5912 shell.srcf.net

Replace `5912` with the **port number** for your VNC server (the display
number shown when you started `vncserver`, plus 5900).

(`5901` is your local port on your home machine; leave that set as
shown. Adding `-N` is optional; it tells SSH not to give you a shell
prompt.)

### Windows

In PuTTY's main window, go to ''Connection'' \> ''SSH'' \>
''Tunnels''.

Under ''Add new forwarded port'', set the source port to `5901` (the
local port on your home machine), and the destination to
`localhost:5912` replacing `5912` with the **port number** for your VNC
server (the display number shown when you started `vncserver`, plus
5900).

Connecting with a VNC client
----------------------------

At this stage, you should now have port `5901` on your local machine
acting as a tunnel to your VNC server instance on `shell.srcf.net`. The
last step is to actually point your VNC client to it.

If you don't have a VNC client installed, [this Ubuntu
page](https://help.ubuntu.com/community/VNC/Clients) lists some
possibilities, though may be out of date.

Start your client and connect to `localhost:5901` (this is relative to
your home machine). If all is well, you should be prompted for the VNC
password you created at the start, after which you'll be greeted with
your new desktop.

You can disconnect and later reconnect, and the state should be
preserved.

Ending the VNC session
----------------------

Back over SSH to `shell.srcf.net`:

    spqr2@pip:~$ vncserver -kill :12

Replace `:12` with the **port number** for your VNC server.

Make sure to close any running programs over VNC beforehand, as this
will forcefully kill them too.
