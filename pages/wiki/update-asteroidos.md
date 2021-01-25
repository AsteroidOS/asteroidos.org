---
title: Update AsteroidOS
layout: documentation
---

As currently no AsteroidOS watches have direct access to the Internet, no OTA upgrades are offered. This page documents upgrading AsteroidOS.


# Reflash AsteroidOS

*****

The easiest way is to reflash the entire OS following the usual [installation instructions](https://asteroidos.org/install/).

To get into fastboot, go to Settings -> USB and select "ADB Mode". Connect your watch to your computer and run the following command: `adb shell reboot -f bootloader` (`adb reboot bootloader` will not work on AsteroidOS).

# OPKG over USB

*****

If you don't want to lose your personal data, and prefer upgrading Asteroid without reflashing it, you can share your Internet connection from a PC to the watch and use AsteroidOS' package manager: opkg

Configure a NAT **on your computer** (Note: Replace eth0 with the name of the interface that connects your computer to the Internet) with:

    echo 1 > /proc/sys/net/ipv4/ip_forward
    iptables -t nat -A POSTROUTING -o eth0 -j MASQUERADE

Configure a default gateway and DNS **on the watch** with the following commands ran via [SSH](https://asteroidos.org/wiki/ssh/):

    route add default gw 192.168.2.1
    echo "nameserver 8.8.8.8" >> /etc/resolv.conf

Then upgrade your AsteroidOS with opkg, using the standard commands:

    opkg update
    opkg upgrade
