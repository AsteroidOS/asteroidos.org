---
title: Backup Wear OS
layout: documentation
---

Before flashing AsteroidOS to your watch to replace WearOS, we advise to make a backup.

# Manual backup method

### 1. Temporarily install AsteroidOS

Follow the install instructions for a temporary installation. Once booted into AsteroidOS, we can enable SSH or ADB with root access to all partitions on the internal storage.

### 2. Enable SSH or ADB

Open the settings app and the USB page. Select Developer mode to enable SSH. Or ADB mode to use ADB connection.

### 3. Copy mmcblk0 into a local image file

#### 3.a Backup using SSH and `dd`
Navigate to a folder where you want to store the backup. Or add a full path before the image name (after `of=`) in the next command.

    ssh root@192.168.2.15 "dd if=/dev/mmcblk0" | dd "of=watch-backup.img" bs=4096 status=progress

#### 3.b Backup using ADB

    adb pull /dev/mmcblk0/watch-backup.img

The copy process might take up to an hour on watches with 8GB storage.
