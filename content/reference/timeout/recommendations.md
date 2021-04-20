Recommendations for using Timeout {#recommendations}
=================================

Browser
-------

A general requirement is an up-to-date browser that supports HTML5 and
[WebRTC](https://webrtc.org). Apart from this, there are a few other
guidelines to follow:

-   Chrome or any Chromium-based browsers are strongly recommended
-   Firefox occasionally reports problems with increased CPU load and
    webcam crashes on the end device when using Timeout.
-   Make sure that your browser is up-to-date
-   Edge / Safari / etc. work, but are not officially supported.
    Experience has shown that connection breaks and dropouts
    occasionally occur here

Audio
-----

There is an echo test built into BBB that will take care of most
echo-related problems. BBB also filters out background noise quite well,
unless if it is loud and varying. If you experience audio problems, then
please try the following:

-   Using a headset/earphones
-   Testing via <https://test.webrtc.org>

Video
-----

-   Webcams should work without restrictions if they are set up
    correctly.
    -   You can test if your webcam works at <https://test.webrtc.org>.
    -   If there are any problems, please switch browsers in accordance
        with our browser recommendations above.
-   We ask you to set webcam quality to 'medium' or lower, if possible
    -   Webcams generate a lot more load on our servers than pure audio
        transmission.
    -   When sharing your webcam, choose the 'medium quality' or 'low
        quality' option in the dropdown menu
