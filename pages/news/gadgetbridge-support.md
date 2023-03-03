---
title: Gadgetbridge AsteroidOS support
layout: news
posted: 2023-03-03
post: true
thumbnails: gadgetbridge
summary: Gadgetbridge has added support for all AsteroidOS watches in release 0.73.0. Thanks to Noodelz for this great work on a near feature complete initial implementation!
author: Timo Könnecke (eLtMosen)
---
<h1>A new way to sync with your watch!</h1>
<p><a href="https://codeberg.org/Freeyourgadget/Gadgetbridge">Gadgetbridge</a>, the application that allows you to connect your Pebble, Mi Band, Amazfit Bip and HPlus device and many more devices to your Android phone, can now sync to all AsteroidOS watches since <a href="https://codeberg.org/Freeyourgadget/Gadgetbridge/src/branch/master/CHANGELOG.md">release of version 0.73.0</a></p>

<p>This has been made possible by <a href="https://codeberg.org/Freeyourgadget/Gadgetbridge/pulls/3013">Noodelz contribution to the Gadgetbridge project.</a></p>

<p>Nearly all capabilities provided by AsteroidOSSync are now supported by Gadgetbridge too. Only remote volume control and the screenshot are missing.</p>

<p>According to Noodelz, <code>"there are a few other known issues. One being that the Advertisement service is not being detected, so the only way GB knows that a device is an AsteroidOS device is by its name. I just have a list of currently supported codenames, and that works for now.<br>
The other thing is that call support is pretty bad. If you answer a call, it doesn't dismiss the notification on the watch so it'll keep ringing. This is because calls aren't given an ID, so there's no easy way to store the ID of the call to dismiss the notification.<br>
All updates to notifications will ring the watch. This can be good or bad. For example AntennaPod will update its download notification and send a billion updates to the watch's notification service, and each one will ring. This is because GB doesn't give whether or not a notification update is supposed to be audible or not."</code></p>

<p>Below photo shows 5 asteroid watches being paired simultaniously to one phone.</p>

<img class="community-header-img" style="width: 50%; height: auto;" src="/public/img/news-img/gadgetbridge-running.jpg" />

<p></p>
