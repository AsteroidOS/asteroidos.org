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

If no IP connection can be established on your watch, the easiest way to upgrade is to reflash the entire operating system following the usual [installation instructions](https://asteroidos.org/watches/). Make sure you select AsteroidOS in the Prerequisites checkbox to see the appropriate instructions.
