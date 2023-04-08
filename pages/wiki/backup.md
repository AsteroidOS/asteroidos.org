---
title: Backup Guide
layout: documentation
---

Before flashing AsteroidOS to your watch to replace WearOS, we advise to make a complete backup.

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

    adb pull /dev/mmcblk0/ watch-backup.img

The copy process might take up to an hour on watches with 8GB storage.


# Scripted backup and restore

### 1. Clone asteroid-hosttools

Beroset has written a set of tools to make working with watches from a linux computer very convenient. This backup guide will only cover the backup and restore features of asteroid-hosttools. Please be sure to read the [asteroid-hosttools documentation](https://github.com/beroset/asteroid-hosttools) to make use of the full capabilities they provide.\
Clone the asteroid-hosttools using the following command:
```
git clone https://github.com/beroset/asteroid-hosttools
```
And change into the asteroid-hosttools directory:
```
cd asteroid-hosttools
```

### 2. Temporarily install AsteroidOS

Adapt `<watch-codename>` in the following commands according to your watches codename listed on the [Watches page](https://asteroidos.org/watches/). I.e `dory` for the LG G Watch or `sturgeon` for the Huawei Watch.
```
./flashy <watch-codename> --temp --nightly
```

### 3. Backup the entire watch

Following command will create a file called `original-<watch-codename>.img`.
```
./watch-image <watch-codename> --save
```

### 4. Restore a backup

To restore the backup image created in step 3, make sure the `original-<watch-codename>.img` file exists.\
Then issue the restore command:
```
./watch-image <watch-codename> --restore
```
