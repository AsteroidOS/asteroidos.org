---
title: AsteroidOS 1.0 released
layout: news
posted: 2018-05-15
post: true
summary: After nearly four years of development, AsteroidOS reached its first stable release. Plenty of features are already included and lots of exciting challenges are still ahead.
thumbnails: asteroidos-1.0-released
author: Florent Revest
---

<p>Four years ago, I envisioned an open-source operating system for smartwatches that would eventually become known as <i>AsteroidOS</i>. This project has steadily grown and gathered contributions from about <i>100 contributors</i> from all around the world, all united behind the idea of an open wearable platform. When I first started, I never imagined how big this project would become and the quantity of work required to reach a stable version for daily usage.</p>

<p>Today, it is my great pleasure to finally announce the availability of AsteroidOS 1.0, the first stable release of this project!</p>

<div class="videocontainer">
  <iframe src="https://www.youtube-nocookie.com/embed/bEmKH7ylSXc?rel=0&amp;controls=0&amp;showinfo=0" frameborder="0" allowfullscreen class="video"></iframe>
</div>

<h1>What's in the 1.0 release?</h1>

<ul>
    <li>AsteroidOS 1.0 provides all the features needed for a modern wearable experience: <i>phone notifications, an agenda, an alarm clock, a calculator, a music remote control, settings customizations, a stopwatch, a timer, and a weather forecast app</i> are all included in this first release.
</li>
    <li>These features can be synchronized using Bluetooth Low Energy (BLE) with Android phones thanks to a companion app named <a href="https://f-droid.org/en/packages/org.asteroidos.sync/">AsteroidOSSync</a>. <a href="https://github.com/AsteroidOS/libasteroid">Libraries</a>, <a href="https://github.com/AsteroidOS/asteroid-ctrl">examples</a>, and <a href="{{rel 'wiki/ble-profiles/'}}">documentation</a> are all provided to help developers create new connectivity features and <a href="{{rel 'wiki/synchronization-clients/'}}">synchronization applications</a> for new platforms.</li>
    <li>A wide variety of smartwatches are currently working: the <i><a href="{{rel 'watches/dory'}}">LG G Watch</a>, <a href="{{rel 'watches/bass/'}}">LG G Watch Urbane</a>, <a href="{{rel 'watches/lenok/'}}">LG G Watch R</a>, <a href="{{rel 'watches/anthias/'}}">Asus Zenwatch 1</a>, <a href="{{rel 'watches/wren/'}}">Asus Zenwatch 2</a>, <a href="{{rel 'watches/swift/'}}">Asus Zenwatch 3</a>, and <a href="{{rel 'watches/tetra/'}}">Sony Smartwatch 3</a></i> are the initial hardware targets. Additionally, it can <a href="{{rel 'wiki/emulator/'}}">run on a software emulator</a> for testing and development. The process of <a href="{{rel 'wiki/porting-guide/'}}">porting AsteroidOS to a new hardware watch</a> is extensively documented in our wiki to help anyone expand our <a href="{{rel 'wiki/porting-status/'}}">list of supported watches</a>.</li>
    <li>The smartwatch experience is <a href="https://github.com/AsteroidOS/unofficial-watchfaces">highly customizable</a> thanks to <a href="https://talk.maemo.org/showthread.php?t=100185">a community of watchfaces designers and developers</a>. <a href="{{rel 'wiki/watchfaces-creation/'}}">Documentation</a> and support is provided to enable anyone to help create a new watchface.</li>
    <li>AsteroidOS is fully translated in 20 languages: <i>Chinese, Czesh, Danish, Dutch, English, Farsi, French, German, Greek, Hebrew, Italian, Kabyle, Korean, Norwegian, Portuguese, Russian, Slovak, Spanish, Turkish and Ukrainian</i>. The project can be <a href="https://hosted.weblate.org/projects/asteroidos/">translated to more languages online</a>.</li>
    <li>Last, but not least, it comes with a <a href="https://release.asteroidos.org/1.0/sdk/">Software Development Kit (SDK)</a>, <a href="https://github.com/AsteroidOS/asteroid-gps-test">examples</a>, and <a href="{{rel 'wiki/creating-an-asteroid-app/'}}">a tutorial</a> enabling developers to create new custom watch applications for the OS.</li>
</ul>

<center><img class="community-header-img" src="/public/img/news-thumbnails/1-0-screenshots1.webp"></img></center>

<h1>What's next?</h1>

<p>AsteroidOS is built on standard Linux technologies including OpenEmbedded, opkg, Wayland, Qt5, systemd, BlueZ, and PulseAudio. This makes it the ideal platform to build any sort of wearable project you can imagine. Do you want to <a href="https://twitter.com/jkrippy/status/932800484703862784">run Docker on your watch</a>? AsteroidOS can do it. Do you want to run Quake on your watch? AsteroidOS can do that too. The sky is really the limit! Our community welcomes anyone interested in playing with a smartwatch project.</p>

<p>A few often requested items being discussed for upcoming development are:</p>
<ul>
    <li><a href="https://github.com/AsteroidOS/asteroid/issues/58">Always-on display</a></li>
    <li><a href="https://github.com/AsteroidOS/asteroid-launcher/issues/29">Grouped notifications</a></li>
    <li><a href="https://github.com/AsteroidOS/AsteroidOSSync/issues/19">Calendar synchronization</a></li>
    <li><a href="{{rel 'wiki/synchronization-clients/'}}">Synchronization apps for more platforms</a></li>
</ul>

<p>Down the development road a bit, the integration of a personal assistant would also be possible now thanks to our rock solid base platform.</p>

<p>On a less technical side, I look forward to organizing new community events like the ones we've already had in <a href="https://twitter.com/AsteroidOS/status/897508413692923904">London</a>, <a href="https://twitter.com/AsteroidOS/status/957238049615810561">Brussels</a>, <a href="https://twitter.com/AsteroidOS/status/770510222737702912">Berlin</a>, <a href="https://twitter.com/JamesNoori/status/857152404688601088">Gothenburg</a> and <a href="https://twitter.com/AsteroidOS/status/930137446569988096">Toulouse</a>. Stay tuned on <a href="https://twitter.com/AsteroidOS">Twitter</a>!</p>

<center><img class="community-header-img" src="/public/img/news-thumbnails/1-0-screenshots2.webp"></img></center>
