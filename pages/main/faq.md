---
title: Frequently Asked Questions (FAQ)
slug: faq
layout: faq
---
# What is AsteroidOS?
AsteroidOS is an open source Linux distribution that runs on many different smartwatches. It uses [Qt](http://www.qt.io/) and QML to provide the graphical interface.\
One of the main goals of AsteroidOS is to provide users with greater control over their devices and data privacy. The operating system is fully customizable, and users can modify it to meet their specific needs.

# Which features are provided?
Currently, AsteroidOS has these features available:
 - Always-on-Display
 - Tilt-to-Wake
 - Palm-to-Sleep
 - Phone notifications
 - Multiple app launcher styles
 - Wallpapers
 - [Community watchfaces](https://github.com/AsteroidOS/unofficial-watchfaces)
 - Nightstand mode

# Are any apps preinstalled?
The following apps are delivered with an AsteroidOS installation:
 - Agenda, a calendar
 - Alarm clock
 - Calculator
 - Compass
 - Diamonds game
 - Flashlight
 - Heartrate check
 - Music, a media remote control
 - Settings
 - Stopwatch
 - Timer
 - Weather forecast

# Does an app store exist?
A store to install apps does not yet exist. But this is something that is being considered for future implementation. There are a number of contributed apps that are not installed in the default image. These can be [installed manually]({{rel 'wiki/package-installation/#packageinstallation'}}) if desired.

# Where can I find a phone synchronization app?
A phone is not *required* to use AsteroidOS, but several convenient functions are available when an AsteroidOS watch is paired with a *synchronization client*.
 - Android users can use "AsteroidOSSync" which is available for [download on F-Droid](https://f-droid.org/packages/org.asteroidos.sync/)
 - Ubuntu Touch users can download ["Telescope" from OpenStore](https://open-store.io/app/telescope.asteroidos)
 - There is currently no app for iPhone, however notifications can be shared from an iPhone to the watch. See [this page]({{rel 'wiki/synchronization-clients'}}) for details.

# What features and apps does AsteroidOS **not** provide?
There are a great many more *ideas* for apps than apps at the moment. Some of the more commonly requested, but not yet available applications and features are:
 - Call answering from the watch
 - Fitness and health tracking application (step counter, ongoing heartrate monitor, etc.)
 - Support for using the watch as a phone (for some watches that incorporate a cellular phone chip)
 - *And many more*

Some of these are being worked on, and others are just ideas at this point. If you think you might like to contribute, see our [GitHub repository](https://github.com/AsteroidOS/asteroid/issues) and the [Contact]({{rel 'contact'}}) page. There are many opportunities for creativity!

# Is AsteroidOS based on Android?
No. AsteroidOS uses [libhybris](https://en.wikipedia.org/wiki/Hybris_(software)) to simplify porting to most Android and WearOS watches, but it is not Android nor is it WearOS or a derivative of either.

# Can I run WearOS applications?
No. [WearOS](https://en.wikipedia.org/wiki/Wear_OS) is a version of Android that runs on wearable devices. AsteroidOS is a Linux distribution that does not run Android and therefore cannot run either Android or WearOS applications.

# What is different to WearOS?
One significant difference is that AsteroidOS is open source software, while WearOS is not. That is, if you want to change something and you are a developer, you can [build the software]({{rel 'wiki/building-asteroidos'}}) yourself. Or perhaps you would like to [create your own watchface]({{rel 'wiki/watchfaces-creation'}}).\
Another significant difference is that AsteroidOS, unlike WearOS, tries to make the watch usable without pairing it with a phone. In contrast, WearOS watches only run when they are paired with a phone.

# Does AsteroidOS have any tracking features?
No. AsteroidOS does not collect any tracking data and you don't need to use or establish any accounts to use it. Nothing on the default installation is able to connect to the internet. While it is possible to [connect an AsteroidOS watch to the internet]({{rel 'wiki/ip-connection'}}) this must be explicitly done by the user.

# Can my watch run AsteroidOS?
Maybe. Check the [Watches]({{rel 'watches'}}) page. It lists all devices supported by AsteroidOS. The star rating indicates the current level of support for each device's hardware features. Watches with at least 3 stars can be considered suitable for everyday use.

# My watch isn't listed.
Maybe  you can still run Asteroid OS in the future. See the [porting status]({{rel 'wiki/porting-status'}}) page for details on what kinds of watches might be supported in the future and what the general requirements are for running AsteroidOS.\
If you are interested in porting AsteroidOS to a new watch yourself, please read the [Porting Guide]({{rel 'wiki/porting-guide'}}) page and contact us via our [matrix channel]({{rel 'contact'}}) in case of possible questions.

# Which features of my watch are currently supported?
The available AsteroidOS features depend on the watch you want to use. Review the table on the installation page for your device to get detailed support information.\
Or check the [features table]({{rel 'watches/features'}}) to see a matrix of all AsteroidOS watches and their feature support.

# Will I be able to revert to the previous operating system?
Yes, very easily if you choose the "temporary install" option.\
For most watches, you may choose to only temporarily install AsteroidOS alongside the existing OS, called a "dual-boot". When doing so, the `asteroidos.ext4` image is pushed to the userdata partition using ADB. With no alteration to the previous OS. The downside of this method being, AsteroidOS needs to be manually booted using `fastboot boot boot-image.fastboot` while connected via USB, after every reboot or shutdown. Else, the previous OS will start up as usual.\
In case you decide to replace your previous OS using the full install method, to make the watch boot into AsteroidOS without manual intervention. It is advised that you [make a backup of your entire watch](https://asteroidos.org/wiki/backup/) before flashing AsteroidOS. Only then, you will be able to re-flash those backups to restore the previous OS later.

# When can i expect updates?
The complete rebuild of all packages for all Watch system images and architectures takes almost a week. The build process is started at the beginning of a week. Therefore, it can be expected that new nightlies will be available on the weekend. These will contain all the changes that have been merged up to the start of the build process.

# Can I compile AsteroidOS myself?
If you do not want to flash a prebuilt image onto your watch or wait for the nightlies to be updated, review the [Building AsteroidOS]({{rel 'wiki/building-asteroidos'}}) page for detailed instructions on how to compile AsteroidOS yourself.

# My question is not answered.
There are many additional resources. The [Documentation]({{rel 'wiki/documentation'}}) page should be your first stop. It has a lot of useful information about both using and developing for AsteroidOS. If you can't find your answer on this web site, see [Contact]({{rel 'contact'}}).
