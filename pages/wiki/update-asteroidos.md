---
title: Update AsteroidOS
layout: documentation
---

As currently no AsteroidOS watch has access to the internet by stock means, no GUI for OTA upgrades is offered. This page documents upgrading AsteroidOS.



# Upgrade using OPKG

Set the correct time and date on the watch. AsteroidOS needs to validate the remote server's certificate and establish a secure connection.

If you don't want to lose your personal data, and prefer upgrading Asteroid without reflashing it, you have two options to establish an internet connection from the watch.

In case your watch supports WLAN, connect it to your local Wi-Fi network using `connmanctl` as described on the [IP Connection page]({{rel 'wiki/ip-connection/). Alternatively you can share your internet connection from a PC to the watch via USB. '}}

Once your watch can connect to the internet, you can use AsteroidOS' package manager: `opkg`

The standard commands to upgrade are:

    opkg update
    opkg upgrade

## Common problems

If you get messages like these, it's most likely because the time or date (or both) are not set correctly.

```
Downloading https://release.asteroidos.org/nightlies/ipk/all/Packages.gz.
 * opkg_validate_cached_file: Failed to download https://release.asteroidos.org/nightlies/ipk/all/Packages.gz headers: SSL peer certificate or SSH remote key was not OK.
```

# Reflash AsteroidOS

When no IP connection can be established on your watch, the easiest way to upgrade is to reflash the entire OS following the usual [installation instructions](https://asteroidos.org/install/).

You will first have to reboot into fastboot, which is slightly different under AsteroidOS than it is under WearOS.

First, go to Settings -> USB and make sure your device is in either `Developer Mode` or `ADB Mode` and connect it to your computer.

If your watch is in Developer Mode, run the following command on your computer: ` ssh root@192.168.2.15 'reboot -f bootloader'`.

If your watch is in ADB Mode, run the following command on your computer: `adb shell reboot -f bootloader`.

In case your watch does not successfully boot, try the manual methods to reach the fastboot (bootloader) menu described in the last section of the [useful commands page]({{rel 'wiki/useful-commands/).'}}
