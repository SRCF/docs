.. _deploy-rails:

Deploying a Ruby on Rails app
-----------------------------

Introduction
^^^^^^^^^^^^

Ruby is a popular if esoteric programming language with several well-known web frameworks such as Sinatra and Ruby on Rails. This tutorial will help you get your Ruby-based web app setup on the SRCF.

You can find out more about the Ruby language here: https://www.ruby-lang.org/.

Server
^^^^^^

You must host the app from the correct server. Please see the :ref:`app hosting docs <app-hosting>`.

Setting up rbenv
^^^^^^^^^^^^^^^^

You will want to deploy your application using ``rbenv`` so that you can easily install and manage dependencies and versions.

1. Create a directory for your app to live in:

   ::

      mkdir -p ~/myapp
      cd ~/myapp

2. Install ``rbenv`` in your home directory:

   ::

      git clone https://github.com/rbenv/rbenv.git ~/.rbenv
      cd ~/.rbenv && src/configure && make -C src
      echo 'export PATH="$HOME/.rbenv/bin:$PATH"' >> ~/.bashrc
      ~/.rbenv/bin/rbenv init

3. Follow the printed instructions on appending to your ~/.bashrc file:

   ::

      echo 'eval "$(rbenv init -)"' >> ~/.bashrc

4. Install ``ruby-build`` as a plugin:

   ::

      mkdir -p "$(rbenv root)"/plugins
      git clone https://github.com/rbenv/ruby-build.git "$(rbenv root)"/plugins/ruby-build

5. Install whichever version of Ruby you want.

   ::

      rbenv install 2.6.6
      rbenv local 2.6.6

6. Done! You now have a working Ruby installation that's hooked into your shell.

Add or create your web app
^^^^^^^^^^^^^^^^^^^^^^^^^^

If you already have a Ruby-based web app, then you can copy in your files to the directory you chose above. For example, you can use ``scp/sftp`` to upload it or clone it using ``git`` or some other source control tool.

If you're a beginner then take a look at some of the starter projects below.

Rails
~~~~~

Ruby on Rails is arguably one of the most popular and influential web frameworks. To create a skeleton Rails project::

   ::

      gem install rails
      rails new myapp

You should now have a new Ruby on Rails project setup in the ``myapp`` directory. Take a look at the `Rails documentation <https://guides.rubyonrails.org/getting_started.html>`__ for more help getting started.

Sinatra
~~~~~~~

Sinatra is a lightweight web microframework that's well suited to simple projects. To install it run ``gem install sinatra`` and then put the following in ``myapp.rb``::

   ::

      require 'sinatra'
      get '/' do
          'Hello world!'
      end

You can then run this by typing ``ruby myapp.rb`` and going to http://localhost:4567 in your web browser. For futher information See the `Sinatra documentation <http://sinatrarb.com/intro.html>`__.

Preparing your app
^^^^^^^^^^^^^^^^^^

The SRCF uses systemd to supervise processes and Apache to serve web content so you will need to make sure you prepare your app for this before it can run. First create a script that will run your web app at ``~/myapp/run`` with the following content:

::

   #!/bin/bash -e
   eval "$(rbenv init -)"
   cd ~/myapp/src
   RAILS_ENV=production \
         exec bin/rails server -b /home/crsid/myapp/web.sock

Replace ``~/myapp/src`` with the path to your app, then make the ``run`` script executable:

::

   chmod +x ~/myapp/run

You then need to configure Apache to forward web requests to the ``web.sock`` socket specified in the ``run`` script. We explain how to do this in the :ref:`app hosting docs <forward-requests>`.

You should now be able to execute the script and access your website (or see any errors in your terminal).

Now follow our instructions :ref:`here <supervise-systemd>` to setup the systemd user service that will manage your app and start it automatically at boot.

Some things to keep in mind:

-  You may need to migrate your database first.
-  Make sure you've set secret keys for the app and any gems that need them (e.g. Devise).
-  Static file serving is off by default in production, but you'll want to turn it on: set both ``config.assets.compile`` and ``config.public_file_server.enabled`` to true in ``config/environments/production.rb``.

Suggestions/improvements?
^^^^^^^^^^^^^^^^^^^^^^^^^

Did you like this or find this cool? We invite you to check out :ref:`more tutorials <tutorials>` and :ref:`read our recommended resources<recommended-resources>`.

If you have a better way to host Rails-based apps on the SRCF web server (or any other suggestions for how we could improve this documentation), send us an email at ``support@srcf.net`` or submit a Pull Request on `GitHub <https://github.com/SRCF/docs>`__!

.. note:: This tutorial was originally based on content by the Open Computing Facility and amended to include SRCF-specific information. Read more about them `here <https://www.ocf.berkeley.edu>`__.
