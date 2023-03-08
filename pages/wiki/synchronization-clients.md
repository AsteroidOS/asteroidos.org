---
title: Synchronization Clients
layout: documentation
---

<p>AsteroidOS watches can be synchronized with a variety of devices given that they install a "synchronization client". This page lists all the known synchronization clients by platform.</p>

<div class="page-header">
  <h1 id="android">AsteroidOSSync Android application</h1>
</div>

<p>An official synchronization application for Android phones named <a href="https://f-droid.org/packages/org.asteroidos.sync">AsteroidOSSync is available to download on F-Droid:</a></p>
<a href="https://f-droid.org/packages/org.asteroidos.sync">
  <img src="https://fdroid.gitlab.io/artwork/badge/get-it-on.png"
  alt="Get AsteroidOSSync on F-Droid"
  height="80">
</a>
<img src="{{assets}}/img/logo-aossync-sync.png" style="margin: 15px;">
<p>This app currently offers the best experience possible with AsteroidOS.</p>

<div class="page-header">
  <h1 id="gadgetbridge">Gadgetbridge Android application</h1>
</div>
<p>Gadgetbridge support for AsteroidOS watches has been added, <a href="https://codeberg.org/Freeyourgadget/Gadgetbridge/pulls/3013">thanks to community contribution to the Gadgetbridge project</a>.</p>
<a href="https://f-droid.org/packages/nodomain.freeyourgadget.gadgetbridge/">
  <img src="https://fdroid.gitlab.io/artwork/badge/get-it-on.png"
  alt="Get Gadgetbridge on F-Droid"
  height="80">
</a>
<img src="{{assets}}/img/logo-gadgetbridge-sync.png" style="margin: 15px;">
<p>The AsteroidOS Gadgetbridge integration is considered to be in initial stage. Nearly all features provided by AsteroidOSSync are supported. Only the remote volume control and screenshot functions are missing.</p>

<div class="page-header">
  <h1 id="iossync">iOS application</h1>
</div>

<p>There is currently no application available for iOS phones to synchronize with AsteroidOS watches. As far as we know, there hasn't been any development done on such an app yet.</p>

<p>However, if the watch is paired with an iOS device, AsteroidOS is capable of displaying notifications from the phone. Pairing can only done using 3rd party BLE scanner/communication apps like <a href="https://apps.apple.com/gb/app/nrf-connect-for-mobile/id1054362403">nRF Connect</a> as BLE-only devices do not show up in iOS Bluetooth settings. Specific functionality like syncing time or weather forecast are however not supported!</p>

<div class="page-header">
  <h1 id="ubuntu">Ubuntu Touch/UBPorts application</h1>
</div>

<p>A synchronization app for Ubuntu Touch named <a href="https://github.com/AsteroidOS/telescope">Telescope</a> has been started by the community. You can <a href="https://open-store.io/app/telescope.asteroidos">download the app in the OpenStore</a></p>
<a href="https://open-store.io/app/telescope.asteroidos">
  <img src="https://open-store.io/badges/en_US.png"
  alt="Get Telescope on OpenStore"
  style="margin: 15px;">
</a>
<img src="{{assets}}/img/logo-telescope-sync.png" style="margin: 15px;">
<p>This app tries to re-use as much code from the SailfishOS client Starship as possible. Some of their codes is shared in a daemon named <a href="https://github.com/AsteroidOS/asteroidsyncservice">asteroidsyncservice</a> which uses <a href="https://github.com/AsteroidOS/libasteroid">libasteroid</a>. The app is still under development. First functions like notifications, time syncronisation and battery status reading are already implemented.</p>

<div class="page-header">
  <h1 id="sfos">SailfishOS application</h1>
</div>

<p>An official synchronization app for SailfishOS named <a href="https://github.com/AsteroidOS/starship">Starship</a> has been written using <a href="https://github.com/AsteroidOS/libasteroid">libasteroid</a>. However, it is not in a usable state yet.</p>

<div class="page-header">
  <h1 id="desktop">Desktop apps</h1>
</div>

<p>A community member created a desktop Linux synchronization app named <a href="https://github.com/atx/AsteroidOSLinux">AsteroidOSLinux</a>. It is written in Python and offers some basic scripting capabilities for AsteroidOS synchronization. The code is written in a way that makes it very easily extendable for your own usages.</p>

<p>A demo of the <a href="https://github.com/AsteroidOS/libasteroid">libasteroid</a> usage named <a href="https://github.com/AsteroidOS/asteroid-ctrl">asteroid-ctrl</a> is also available as a C++-written CLI application. This app is cross-platform and doesn't do much on its own but can also be extended for your own usages.</p>

<div class="page-header">
  <h1 id="library">Library</h1>
</div>

<p>A library named <a href="https://github.com/AsteroidOS/libasteroid">libasteroid</a> encapsulates the Bluetooth Low Energy profiles of AsteroidOS in a simple API. It is written in C++ using QtBluetooth and is then <a href="https://doc.qt.io/qt-5.10/qtbluetooth-index.html">cross-platform</a>. Its code can be used as a reference implementation for other clients development or as a 3rd party library.</p>

<div class="page-header">
  <h1 id="new">New synchronization clients</h1>
</div>

<p>We would warmly welcome any community members interested in writing a new synchronization app to read the <a href="{{rel 'wiki/ble-profiles'}}">BLE profiles documentation</a> and <a href="{{rel 'contact'}}">get in touch</a> with us via our <a href="https://matrix.to/#/#Asteroid:matrix.org">Matrix channel.</a></p>
