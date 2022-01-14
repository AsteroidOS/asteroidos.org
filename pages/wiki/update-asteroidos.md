---
title: Update AsteroidOS
layout: documentation
---

As currently no AsteroidOS watch has access to the internet by stock means, no OTA upgrades are offered. This page documents upgrading AsteroidOS.


# Reflash AsteroidOS

*****

The easiest way is to reflash the entire OS following the usual [installation instructions](https://asteroidos.org/install/).

You will first have to reboot into fastboot, which is slightly different under AsteroidOS than it is under Android Wear.

First, go to Settings -> USB and make sure your device is in either `Developer Mode` or `ADB Mode` and connect it to your computer.

If your watch is in Developer Mode, run the following command on your computer: ` ssh root@192.168.2.15 'reboot -f bootloader'`.

If your watch is in ADB Mode, run the following command on your computer: `adb shell reboot -f bootloader`.


# Upgrade using OPKG

*****

If you don't want to lose your personal data, and prefer upgrading Asteroid without reflashing it, you have two options to establish an interent connection from the watch.

In case your watch supports Wifi, connect it to your local WLan using <code>connmanctl</code> as described in the next section. Alternatively you can share your internet connection from a PC to the watch via USB. 

Once your watch can connect to the internet, you can use AsteroidOS' package manager: opkg

The standard commands to upgrade are:

    opkg update
    opkg upgrade


# OPKG over Wifi

*****

Connect to your watch using <code>ssh root@192.168.2.15</code> or <code>adb shell</code>.

<pre><code># connmanctl
connmanctl&gt; enable wifi
connmanctl&gt; scan wifi
connmanctl&gt; services
connmanctl&gt; agent on
connmanctl&gt; connect wifi_YOUR-SSID
connmanctl&gt; quit
</code></pre>

Verfify that you got an ip adress asigned with <code># ip a show dev wlan0</code> and upgrade as described above.


# OPKG over USB

*****


Configure a NAT **on your computer** (Note: Replace eth0 with the name of the interface that connects your computer to the Internet) with:

    echo 1 > /proc/sys/net/ipv4/ip_forward
    iptables -t nat -A POSTROUTING -o eth0 -j MASQUERADE

Configure a default gateway and DNS **on the watch** with the following commands ran via [SSH](https://asteroidos.org/wiki/ssh/):

    route add default gw 192.168.2.1
    echo "nameserver 8.8.8.8" >> /etc/resolv.conf

