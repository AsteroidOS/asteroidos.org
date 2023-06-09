---
title: IP Connection
layout: documentation
---

Configuring an IP connection on your watch has to be done manually until a GUI settings option is available.
On watches that support WLAN, you can enable Wi-Fi and configure the connection using <code>connmanctl</code> like described below.
Forwarding IP requests to a connected PC via USB is another option, explained in the second paragraph.

By default, there is no <code>root</code> or <code>ceres</code> password, and no firewall rules. A password can be set using the <code>passwd</code> command.



# IP over WLAN

*****

Connect to your watch using <code>ssh root@192.168.2.15</code> or <code>adb shell</code>.

<pre><code># connmanctl
connmanctl&gt; enable wifi
connmanctl&gt; scan wifi
connmanctl&gt; services
connmanctl&gt; agent on
connmanctl&gt; connect wifi_CODE-FOR-YOUR-SSID
connmanctl&gt; quit
</code></pre>

Check whether an IP address has been assigned to the watch using <code>ip a show dev wlan0</code> or <code>ifconfig wlan0</code>.

Note that activated WLAN consumes additional power. Currently, it is recommended to disable the function after use.
<code>connmanctl disable wifi</code> is used to disable Wi-Fi and power off WLAN temporarily.
<code>connmanctl enable wifi</code> activates WLAN again and connects to the last used Wi-Fi network.

Some more <a href="https://wiki.archlinux.org/index.php/ConnMan#Connecting_to_a_protected_access_point">details</a> on ArchWiki



# IP over USB

*****

It is possible to allow your watch to be able to use your Linux computer's internet connection via a USB connection.  You will need:

 1. A Linux computer with RNDIS support loaded and enabled
 2. The ability to change network configurations on that computer
 3. A network connection

This works by using the RNDIS driver to allow the USB device to appear to be a network interface.  RNDIS stands for "Remote Network Driver Interface Specification" and was a proprietary protocol from Microsoft.  It is supported in Linux by the `rndis_host` driver.  This driver may either be compiled into the kernel, or more typically provided as an optional module.  If you're not sure, you can try this `lsmod` to see if it's loaded on your computer.

```
lsmod |grep ndis
rndis_host             24576  0
cdc_ether              24576  1 rndis_host
usbnet                 61440  2 rndis_host,cdc_ether
```

If it isn't you might be able to use `modprobe rndis_host` (with root privileges) to install the module.  

Once the `rndis_host` is installed and running, you can enable Network Address Translation (NAT) to allow your Linux computer to share it's internet IP address with the watch.  To configure a NAT **on your computer** (Note: Replace eth0 with the name of the interface that connects your computer to the Internet) with:

    echo 1 > /proc/sys/net/ipv4/ip_forward
    iptables -t nat -A POSTROUTING -o eth0 -j MASQUERADE

Here again, you might need root privileges for those commands, depending on how your computer is configured.

Configure a default gateway and DNS **on the watch** with the following commands ran via [SSH]({{rel 'wiki/ssh'}}) as the `root` user:

    route add default gw 192.168.2.1
    echo "nameserver 8.8.8.8" >> /etc/resolv.conf

Note that this assumes that your computer's IP address on RNDIS is 192.168.2.1, which is the default, but if you have multiple watches, or have plugged and unplugged the same watch a few times, it might be different.  To make sure, on the watch, you can type `who` and it will reply with something like this:

```
root            pts/0           00:01   Jun  9 08:06:24  192.168.2.2
```

In this particular case, the address shown is 192.168.2.2, so the first command listed above would be `route add default gw 192.168.2.2`.
