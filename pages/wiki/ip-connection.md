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

Verfify that you got an ip adress asigned with <code># ip a show dev wlan0</code>.

Some more <a href="https://wiki.archlinux.org/index.php/ConnMan#Connecting_to_a_protected_access_point">details</a> on ArchWiki



# IP over USB

*****


Configure a NAT **on your computer** (Note: Replace eth0 with the name of the interface that connects your computer to the Internet) with:

    echo 1 > /proc/sys/net/ipv4/ip_forward
    iptables -t nat -A POSTROUTING -o eth0 -j MASQUERADE

Configure a default gateway and DNS **on the watch** with the following commands ran via [SSH](https://asteroidos.org/wiki/ssh/):

    route add default gw 192.168.2.1
    echo "nameserver 8.8.8.8" >> /etc/resolv.conf

