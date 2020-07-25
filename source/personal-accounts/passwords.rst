Passwords
---------

When your personal account is first created, you'll receive a randomly generated password by email.  You can change it by connecting over SSH and running ``passwd``.

This password is valid for SSH, file transfer and email.  It's **not** valid for database access -- both MySQL and PostgreSQL accounts must be requested separately and come with their own password.  It's also **not** valid for Mailman mailing lists, as each list comes with its own owner and moderator passwords.

Group accounts do not come with passwords, and can not be logged in as directly.  If you need to manage files in a group account, connect using your personal account and navigate to the group account's files.  You should avoid storing your personal credentials in any group applications or config files.
