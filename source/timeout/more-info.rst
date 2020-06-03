.. _more-help:

More information
----------------

So you're excited to learn more about Timeout? Great! Let's start:

Registration and signing in
~~~~~~~~~~~~~~~~~~~~~~~~~~~

If you are planning to be the host of a meeting, then you need to `log in <https://timeout.srcf.net>`__ to Timeout. Authentication is done via Raven and Google with your @cam address. If you are joining a meeting, then you do not need to log in.

Once you have logged in, you will be able to create rooms. You may stop or start these rooms at your convenience. A link will be generated which you can share with your participants and optionally set a password. Please only share the link with your participants to prevent third parties from entering the room. 

Common requests
~~~~~~~~~~~~~~~

Using an interactive whiteboard
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

The default presentation that comes with each meeting has a few empty slides and grid slides to emulate the whiteboard functionality. You may then use the whiteboard by accessing the edit tools to the right of the whiteboard and even enable multi-user edit access. If you wish to upload a custom whiteboard layout or even your own slides to annotate, do so using the ``upload presentation`` button. These are a few possible implementations of the interactive whiteboard model:

* Running the call from your mobile device (iPad, tablet) and editing the whiteboard with your digital pen

  * Has shown to not work on some Android tablets

* Running the call from your laptop and editing the whiteboard using a pen tablet, such as those offered by Wacom

* Running the call from your laptop but using your mobile device as a second participant to edit the whiteboard

* Avoiding the use of the integrated whiteboard and instead opting to use *Microsoft Whiteboard* or *Google JAMboard*

  * Use your laptop for video and audio and share your screen, which is displaying the whiteboard

  * Load the whiteboard on your mobile device and edit directly

  * This avoids having to be in the call on two devices and possibly more flexibility in case you want to share your notes with the participants

.. warning::

   Unfortunately, due to limitations of the ``WebRTC`` protocol, it is not possible to share your mobile device screen, including iPads. Refer to the above list for solutions.

.. note::

   If you wish to use pen and paper, we recommend entering the call using a second device with a camera (disabling the microphone and muting the speakers to avoid echo) and turning it on, perhaps propped on some books or a stand. If you have an overhead camera, you can feed this to your laptop as a camera. For those who are more tech-savvy, you may use software that can toggle video inputs on-the-fly, allowing you to set any stream as your video source, be it text, an external camera, or your webcam. A future version of BBB will allow multiple cameras per user.

Guidelines for using Timeout
~~~~~~~~~~~~~~~~~~~~~~~~~~~~

* Rooms can be further configured by clicking the gear next to the participant list → *Restrict viewer rights*.
* Encouraging your participants to respect muting and excess noise is much better than outright banning microphones
* The use the mute function is recommended in order to avoid sending too much background noise. This helps with intelligibility and ensures better transmission of the sound of the person speaking.
* Webcam use is allowed and encouraged provided that the webcam quality is set to "medium" or lower.

Key features
~~~~~~~~~~~~

BBB has an impressive range of features. To view all features available as well as those not covered here, please visit `BBB's official feature page <https://bigbluebutton.org/teachers/>`__.

The "presenter" model
^^^^^^^^^^^^^^^^^^^^^

BBB operates on a presenter model. For this reason, it is not possible for all participants to simultaneously share their screens. The presenter is (though not necessarily) the host. By default, all moderators have the right to "take presenter" permission, allowing them to share their screen to all participants, control the whiteboard, control the presentation, share external YouTube videos (and play/pause them on all participants' screens, and stage polls. A moderator may upgrade other users to moderator status and can also give presenter permission to a participant (who is not a moderator). The host is a moderator by default.

Breakout rooms
^^^^^^^^^^^^^^

* Breakout rooms are temporary spaces

* You can set a time after which the rooms will be closed

  * Note any links or material shared in the chat will not return to the main room afterwards

* All participants have presenter rights and the first to enter the room has moderator rights

* Breakout rooms are extremely useful for groupwork

The whiteboard and presentations
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

To share a presentation, you may opt to share your screen directly or use BBB's native presentation integration. You can upload a presentation to BBB in either ``.pptx`` or ``.pdf`` format and it will be displayed on all the participants' screens. You may annotate this presentation or allow multi-user editing. At the end of the session, users can choose to download the presentation (this can be disabled by the presenter). 

A whiteboard experience can be emulated by leaving one of the slides blank. For this reason, we have included a few blank slides and grid slides in our default presentation.

Recording
^^^^^^^^^
In order to record a session, you must first turn on "Record sessions" in the Room Settings before the meeting starts. Afterwards, during the meeting, the host can press the "Start recording" and "Pause recording" buttons at the top of the page to toggle recording.

The software is designed to first record the session in its entirety, and then processed and cut after the meeting ends. In particular, the session is recorded even if the "Start recording" button has never been pressed, as long as the "Record sessions" setting is enabled. Thus, if you forget to record the session, the system administrators may be able to help retrieve the recordings nevertheless. On the contrary, if you don't want to be recorded at all, turn off the "Record sessions" setting (it is off by default).

Note that after the meeting, it may take a while for the recording to be processed. It will not show up immediately in the interface.

Users joining a meeting for which "Record sessions" is enabled are notified before they join. If no such notification is present, you can safely assume we are not recording you (of course, we make no guarantees about whether another participants is pointing a camera at their screens).
