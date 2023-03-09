---
title: Gadgetbridge adds AsteroidOS support
layout: news
posted: 2023-03-07
post: true
thumbnails: gadgetbridge
summary: Gadgetbridge has added support for all AsteroidOS watches in release 0.73.0. Thanks to Noodelz for this great work on a near feature-complete initial implementation!
author: Timo Könnecke (eLtMosen)
---
# A new way to sync with your watch!
[Gadgetbridge](https://codeberg.org/Freeyourgadget/Gadgetbridge), the application that allows you to connect your Pebble, Mi Band, Amazfit Bip and HPlus device and many more devices to your Android phone, can now sync to all AsteroidOS watches since [release of version 0.73.0](https://codeberg.org/Freeyourgadget/Gadgetbridge/src/branch/master/CHANGELOG.md)

This has been made possible by [Noodelz contribution to the Gadgetbridge project.](https://codeberg.org/Freeyourgadget/Gadgetbridge/pulls/3013)
Nearly all capabilities provided by AsteroidOSSync are now supported by Gadgetbridge, only the remote volume control and screenshot functions are missing.
Contributions to further polish the Gadgetbridge integration are highly appreciated. Visit our [Matrix channel](https://matrix.to/#/#Asteroid:matrix.org) for help on how to get started.

According to Noodelz, `"there are a few other known issues. One being that the Advertisement service is not being detected, so the only way GB knows that a device is an AsteroidOS device is by its name. I just have a list of currently supported codenames, and that works for now.
The other thing is that call support is pretty bad. If you answer a call, it doesn't dismiss the notification on the watch so it'll keep ringing. This is because calls aren't given an ID, so there's no easy way to store the ID of the call to dismiss the notification.
All updates to notifications will ring the watch. This can be good or bad. For example AntennaPod will update its download notification and send a billion updates to the watch's notification service, and each one will ring. This is because GB doesn't give whether or not a notification update is supposed to be audible or not."`

<img style="width: 60%; height: auto; margin: 0 15VW 0 15VW" src="/public/img/news-img/gadgetbridge-running.jpg" />

5 Asteroid watches paired simultaneously to one phone, something not possible on AsteroidOSSync
