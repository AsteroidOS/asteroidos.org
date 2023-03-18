---
title: Backup Wear OS
layout: documentation
---

Before flashing AsteroidOS to your watch to replace WearOS, we advise to make a backup.

# Manual method

## 1. Temporarily install AsteroidOS

Follow the install instructions for a temporary installation. Once booted into AsteroidOS, we can enable adb with root access to all partitions on the internal storage.

## 2. Enable Developer Mode

Open the settings app and the USB page. Select Developer mode to enable SSH.

## 3. Copy mmcblk0 into a local image file

Navigate to a folder where you want to store the backup. Or add a full path before the image name (after `of=`) in the next command.

    ssh root@192.168.2.15 "dd if=/dev/mmcblk0" | dd "of=original-watch-backup.img" bs=4096 status=progress

The copy process might take up to an hour on watches with 8GB storage.

# Scripted method

