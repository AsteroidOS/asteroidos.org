---
title: Frequently Asked Questions (FAQ)
slug: faq
layout: documentation
---
# FAQ

This page contains some Frequently Asked Questions.
## What is AsteroidOS?
AsteroidOS is an open source Linux distribution that runs on many different smartwatches. It uses [Qt](http://www.qt.io/) and QML to provide the graphical interface.\
One of the main goals of AsteroidOS is to provide users with greater control over their devices and data privacy. The operating system is fully customizable, and users can modify it to meet their specific needs.

## Which features does AsteroidOS provide?
Currently, AsteroidOS has these features available:
 - Always-on-Display
 - Tilt-to-Wake
 - Palm-to-Sleep
 - phone notifications
 - multiple app launcher styles
 - wallpapers
 - [community watchfaces](https://github.com/AsteroidOS/unofficial-watchfaces)
 - nightstand mode

## Does AsteroidOS have any apps included?
The following apps are delivered with an AsteroidOS installation:
 - agenda, a calendar
 - alarm clock
 - calculator
 - compass
 - diamonds game
 - flashlight
 - heartrate check
 - music, a media remote control
 - settings
 - stopwatch
 - timer
 - weather forecast

## Is there something like a "Play Store" to download apps?
Not yet, but this is something that is being considered for future implementation. There are a number of contributed apps that are not installed in the default image. These can be [installed manually]({{rel 'wiki/package-installation/#packageinstallation'}}) if desired.

## Where can I find a phone synchronization app?
A phone is not *required* to use AsteroidOS, but several convenient functions are available when an AsteroidOS watch is paired with a *synchronization client*.
 - Android users can use "AsteroidOSSync" which is available for [download on F-Droid](https://f-droid.org/packages/org.asteroidos.sync/)
 - Ubuntu Touch users can download ["Telescope" from OpenStore](https://open-store.io/app/telescope.asteroidos)
 - There is currently no app for iPhone, however notifications can be shared from an iPhone to the watch. See [this page]({{rel 'wiki/synchronization-clients'}}) for details.

## Is AsteroidOS based on Android?
No. AsteroidOS uses [libhybris](https://en.wikipedia.org/wiki/Hybris_(software)) to simplify porting to most Android and WearOS watches, but it is not Android nor is it WearOS or a derivative of either.

## Can I run WearOS applications?
No. [WearOS](https://en.wikipedia.org/wiki/Wear_OS) is a version of Android that runs on wearable devices. AsteroidOS is a Linux distribution that does not run Android and therefore cannot run either Android or WearOS applications.

## What are the differences between AsteroidOS and WearOS?
One significant difference is that AsteroidOS is open source software, while WearOS is not. That is, if you want to change something and you are a developer, you can [build the software]({{rel 'wiki/building-asteroidos'}}) yourself. Or perhaps you would like to [create your own watchface]({{rel 'wiki/watchfaces-creation'}}).\
Another significant difference is that AsteroidOS, unlike WearOS, tries to make the watch usable without pairing it with a phone. In contrast, WearOS watches only run when they are paired with a phone.

## Does AsteroidOS have any tracking features?
No. AsteroidOS does not collect any tracking data and you don't need to use or establish any accounts to use it. Nothing on the default installation is able to connect to the internet. While it is possible to [connect an AsteroidOS watch to the internet]({{rel 'wiki/ip-connection'}}) this must be explicitly done by the user.

## Can I run AsteroidOS on my watch?
Maybe. Check the [Install]({{rel 'install'}}) page to see if your watch is listed.

## Which features of my watch are currently supported by AsteroidOS?
Check the [features table]({{rel 'install/features'}}) to see all of the watches and which features they support.

## My watch isn't listed. Can I still run AsteroidOS?
Maybe in the future. See the [porting status]({{rel 'wiki/porting-status'}}) page for details on what kinds of watches might be supported in the future and what the general requirements are for running AsteroidOS.

## Will I be able to revert to the previous operating system after installing AsteroidOS on my watch?
Yes, if you choose the "temporary install" option. See the [installation FAQ]({{rel 'install#FAQ'}}) for details.

## What features and apps does AsteroidOS currently **not** provide?
There are a great many more *ideas* for apps than apps at the moment. Some of the more commonly requested, but not yet available applications and features are:
 - call answering from the watch
 - fitness and health tracking application (step counter, ongoing heartrate monitor, etc.)
 - support for using the watch as a phone (for some watches that incorporate a cellular phone chip)
 - *and many more*

Some of these are being worked on, and others are just ideas at this point. If you think you might like to contribute, see our [GitHub repository](https://github.com/AsteroidOS/asteroid/issues) and the [Contact]({{rel 'contact'}}) page. There are many opportunities for creativity!

## What if my question isn't answered here?
There are many additional resources. The [Documentation]({{rel 'documentation'}}) page should be your first stop. It has a lot of useful information about both using and developing for AsteroidOS. If you can't find your answer on this web site, see [Contact]({{rel 'contact'}}).
