---
title: Introducing asteroid-hosttools
layout: news
posted: 2023-04-24
post: true
thumbnails: asteroid-hosttools
summary: The asteroid-hosttools make it convenient to work with AsteroidOS smartwatches from a Linux computer.
author: Timo Könnecke (eLtMosen)
---
# Backup and restore has never been easier

With the new software called "[asteroid-hosttools](https://github.com/beroset/asteroid-hosttools)" written by Ed Beroset, it's now easier and faster to work with AsteroidOS smartwatches from a Linux computer. The software comprises three tools: "flashy", "watch-image" and "watch-util".

## Flashy
Deploys an AsteroidOS image to a supported watch connected via USB easily. Nightly builds are automatically downloaded into the current directory and are used to set up a temporary installation or flash the watch permanently using the real installation.\
For example, if you have a TicWatch Pro watch (codename catfish) running the stock WearOS image and would like to try out AsteroidOS, `./flashy catfish --nightly --temp` downloads the nightly catfish images and does a temporary install. Later, if you decide to use AsteroidOS permanently, you can install it with `./flashy catfish --nightly`.

## Watch-image
Allows users to save and restore the original partitions from a watch running WearOS or AsteroidOS. This tool is especially useful for those who would like to use AsteroidOS on their watch for longer time, but would also like to be able to restore the "as shipped" version easily, perhaps to resell the watch.\
Saving the complete watch into an image file is as convenient as `./watch-image <codename> --save`. Restoring was a complicated process as of yet, involving manually extracting the partitions, figuring out which ones are the correct ones and flash those back individually. Now we can use `./watch-image <codename> --restore` and the watch-image script will handle all of those tasks for us. The `-- dissect` feature extracts the partitions from a watch image for manual inspection.

## Watch-util
Offers the most features of the three tools.
- Backup/restore settings for a watch
- Take a screenshot from your watch
- Set screen to "Keep the screen active"
- List and set timezones on your watch
- Set the active wallpaper on your watch
- Sync time from the connected computer
- Restart the ceres user
- Reboot to fastboot

## Conclusion
The asteroid-hosttools provide solutions to some of the most common challenges faced by new users and developers alike. Thanks to the efforts of Ed Beroset, we now have a tool that simplifies commandline based work on watches, making it more accessible to a wider audience.\
With asteroid-hosttools, managing AsteroidOS on your smartwatch has never been easier.

Be sure to head over to the [asteroid-hosttools repository](https://github.com/beroset/asteroid-hosttools) and read about all of the features in detail.
