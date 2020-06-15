Timeout
-------

.. note::

   This documentation is not yet complete and is being continuously expanded. It is worth visiting this page regularly. If you wish to expand the documentation yourself, please contact us! We also welcome whoever wants to pass on their knowledge in online teaching - and also those who are interested in taking a closer look under the hood of the system. 

.. warning::

   Timeout is still in its *beta phase*. Please `report <mailto:support@srcf.net>`__ all issues and problems to us - this system thrives on feedback and it is only with your help that we can make Timeout better for all.

What is Timeout?
~~~~~~~~~~~~~~~~

Timeout is the SRCF's solution to a free, robust and multipurpose video conferencing platform. Timeout is free for all members of the university, as are all of our other services :).

**Timeout's key features are:**

* Core video conferencing capabilities (video, audio)
* Live screensharing
* A fully functional web client
* Interacive live polling
* Interactive whiteboard
* Support for live YouTube video integration
* Global and private chat
* Ability to split groups into breakout rooms
* A custom URL for your meeting

See additional features `here <http://develop.bigbluebutton.org/>`__.

Want to request a feature? You can do so by emailing ``support@srcf.net``.

Here's a preview of what Timeout looks like:

.. image:: https://blindsidenetworks.com/wp-content/uploads/2020/02/bigbluebutton-html5-hero.png
   :width: 600

Why should I use Timeout?
~~~~~~~~~~~~~~~~~~~~~~~~~

Timeout is built by the SRCF, a team of volunteers dedicated to providing robust and secure computing services for all University members. We've been around since 1999 and we host over 800 active society websites and over 1000 personal user accounts. If that's not enough to convince you, perhaps these might:

* Timeout is **fast** - our servers are located in Cambridge so your traffic will not have to go to some data center in the US. 
* You can invite anyone - no requirement on participants having Raven
* Timeout is **free** for all
* Timeout does not have any time limits, restrictions or any such nonsense
* Timeout is **ridiculously easy** to use
* Timeout runs in your browser - no additional software needed
* Timeout does not spy on you ;)

Why should I use this over Zoom or Teams?
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

See our :ref:`comparison of Timeout vs. other popular platforms <comparison>`.

This is great! What can I use it for?
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Timeout is based on the open-source project BigBlueButton (BBB). BBB is extremely flexible in the functionality it offers. We have identified the following use-cases within the University:

* Supervisions (1-3, 1-4, 1-5 and for larger groups)
* Faculty/department/society meetings
* Tutorial drop-in hours
* Seminars with 20+ people
* A chat between friends in these trying times

How can I use Timeout?
~~~~~~~~~~~~~~~~~~~~~~

You can use Timeout by going to https://timeout.srcf.net and playing around. We also suggest watching `these tutorial videos <https://bigbluebutton.org/html5/>`__ for getting started. For more information on using Timeout, :ref:`please click here <more-help>`.

I love Timeout. How can I help?
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Timeout is entirely run and hosted by a team of dedicated volunteers. If you'd be interested in helping make this possible, consider joining us or `donating to us <https://www.srcf.net/donate>`__ to allow us to continue providing awesome services to the University community. Anyone can contribute to the SRCF and you don't have to know much to start with - in fact this documentation was written by someone with little technical expertise before starting at the SRCF.

Reporting problems and getting help
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

If you've encountered any problem, it is most helpful if you report this to us so we can fix it. Report problems to us at ``support@srcf.net``.

If you need help, and have already :ref:`read our recommendations <recommendations>` regarding the use of Timeout, then please submit a request, providing the following information in your email:

* Browser used and its version
* Operating system and its version
* Which audio devices were used (headset? microphone? speakers?)
* When the problem occurred
* The server used (visible in the URL)

Why does this exist?
~~~~~~~~~~~~~~~~~~~~
Read more about this on our `blog <https://blog.srcf.net>`__!

Contributions and thanks
~~~~~~~~~~~~~~~~~~~~~~~~

A special thanks to Malcolm Scott, Edwin Balani, Matias Silva for conceiving the project as well as all the other SRCF sysadmins for their continued maintenance of our systems.

Timeout, like many other services, is built on the shoulders of many. It is largely based on the following open-source software:

* BigBlueButton - the actual conference software and its components:
  
  * FreeSWITCH  - as an audio transmission solution
  
  * Kurento Media Server - as a video transmission solution
  
  * coturn - as an audio / video relay

* Greenlight - as a room management system

* Scalelite - as a load distribution system

* bbb-easy-join - for quick room tests

* Prometheus - for monitoring
  
  * bbb-exporter - for statistics from BBB

* Grafana - dashboard and visualization of monitoring

One last thanks to the folks over at `Ulmlernt <https://ulmlernt.de>`__ for building a fantastic Ansible playbook and for sharing that with us.
