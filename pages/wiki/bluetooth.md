---
title: Bluetooth
layout: documentation
---

<p>An app named <a href="https://github.com/AsteroidOS/AsteroidOSSync"><em>AsteroidOSSync</em></a> can be downloaded on Android to synchronize data from a phone to an AsteroidOS watch. Several profiles are already supported: Notifications, Weather, Music and Battery, more could come in the future.</p>

<div class="page-header">
  <h1 id="technical-details">Technical details</h1>
</div>
<p>On the phone, AsteroidOSSync uses the <a href="https://github.com/AsteroidOS/AsteroidOSSync/tree/master/app/src/main/lib/sweetblue">SweetBlue</a> library to access the Bluetooth Low Energy capabilities of Bluedroid as a central device. It scans for watches and implements the client part of the <span class="gt-baf-word-clickable">aforementioned</span> profiles.</p>
<p>On the watch, data are usually received by a BCM20715 BT chip from Broadcom, this chip needs a proprietary firmware which is uploaded by the <a href="https://github.com/AsteroidOS/meta-dory-hybris/blob/master/recipes-android/brcm-patchram-plus/brcm-patchram-plus/patchram.service">patchram</a> systemd service. Once the firmware is uploaded an hci0 interface is created and can be set up with hciconfig.</p>
<p>The Linux Kernel can then receive BLE payloads. A newer Bluetooth subsystem (4.1) has been <a href="https://github.com/AsteroidOS/meta-dory-hybris/blob/master/recipes-kernel/linux/linux-dory/0001-Backport-mainline-4.1-Bluetooth-subsystem.patch">backported</a> to provide newer MGMT API functionalities needed by the userspace (e.g: DBus advertisement). This MGMT API is only used by the BlueZ5’s bluetoothd daemon which exposes various DBus abstraction API. Bluetoothd also had to be <a href="https://github.com/AsteroidOS/meta-asteroid/blob/master/recipes-connectivity/bluez5/bluez5/advertise-name.patch">patched</a> to expose more complete advertisement payloads.</p>
<p>Simple and common interactions with the bluetoothd’s DBus API like checking for the powered/connected status are implemented in <a href="https://github.com/AsteroidOS/qml-asteroid/blob/master/src/utils/src/bluetoothstatus.cpp">org.asteroid.utils.BluetoothStatus</a> of qml-asteroid. This class is for example used in asteroid-launcher, asteroid-music and <a href="https://github.com/AsteroidOS/asteroid-settings/blob/master/BluetoothPage.qml">asteroid-settings</a>.</p>
<p>More complex interactions with bluetoothd are implemented in <a href="https://github.com/AsteroidOS/asteroid-btsyncd">asteroid-btsyncd</a>, a user-space daemon running as a standard user (ceres) and acting as a DBus multiplexer between BlueZ and the apps. On the BlueZ side it registers BLE Services, Characteristics and Advertisement payloads. On the user side, it exposes specific API for each and every usage needed. For example, it communicates with asteroid-music with to the <a href="https://github.com/AsteroidOS/asteroid-music/blob/master/main.qml#L98">MPRIS API</a>, with asteroid-launcher based on the FreeDesktop’s notification API or with asteroid-weather thanks to data saved in the dconf “register”.</p>

<div class="page-header">
  <h1 id="bt-pan">Bluetooth Personal Area Network</h1>
</div>
<p>In order to use BT PAN on AsteroidOS, you first need to modify the default image. Start by adding the following packages to the <i>IMAGE_INSTALL</i> variable of <code>asteroid/src/meta-asteroid/classes/asteroid-image.bbclass</code>:</p>
<pre><code>bluez5-testtools bluez5-noinst-tools python-dbus connman-client</code></pre>
<p>You also need to modify the bluez5’s main configuration in <code>asteroid/src/meta-asteroid/recipes-connectivity/bluez5/bluez5/main.conf</code> to</p>
<pre><code>[General]
#ControllerMode = le
DiscoverableTimeout = 180</code></pre>
<p>Finally, modify <code>build/conf/bblayers.conf</code> to add the following line to <code>BBLAYERS</code>:</p>
<pre><code>/path/to/src/meta-openembedded/meta-networking \</code></pre>
<p>After above changes, you can rebuild a new asteroid rootfs and install it to the watch with the <a href="{{rel 'wiki/building-asteroidos'}}">usual building process</a>.</p>
<p>In order to watch logs and check on progress, open up first a first terminal on the watch via <a href="{{rel 'wiki/building-asteroidos'}}">SSH</a> and run:</p>
<pre><code>tail -F /var/log/messages</code></pre>
<p>In a new terminal, download and push the bt-pan helper script: (<a href="http://blog.fraggod.net/2015/03/28/bluetooth-pan-network-setup-with-bluez-5x.html">more info</a>)</p>
<pre><code>wget https://raw.githubusercontent.com/mk-fg/fgtk/master/bt-pan
chmod +x ./bt-pan
scp bt-pan ceres@192.168.2.15:/tmp/bluetooth/bt-pan</code></pre>
<p>Now, fix up DNS and make sure localhost is a known thing by modifying (if needed) <code>resolv.conf</code> and hosts</p>
<pre><code>sh-4.3# cat /etc/resolv.conf
nameserver 8.8.8.8
nameserver ::1
sh-4.3# cat /etc/hosts
127.0.0.1 localhost</code></pre>
<p>Make sure you can see bluetooth in connman:</p>
<pre><code>sh-4.3# connmanctl technologies
...
/net/connman/technology/bluetooth
Name = Bluetooth
Type = bluetooth
Powered = True
Connected = False
Tethering = False</code></pre>
<p>You can now use bluetoothctl to establish a connection to your computer (<a href="http://trac.gateworks.com/wiki/wireless/bluetooth#PersonalAreaNetworkDeviceProfilePAN">more info</a>)</p>
<pre><code>sh-4.3# bluetoothctl
[NEW] Controller 20:70:02:A0:1F:AC dory [default]
[NEW] Device 3C:15:C2:C7:DA:95 my-rmbp2
agent on
default-agent
discoverable on
pairable on
scan on
pair 3C:15:C2:C7:DA:95
trust 3C:15:C2:C7:DA:95</code></pre>
<p>Launch bt-pan client which triggers bnep0 creation from connman (you will see it in <code>/var/log/messages</code>)</p>
<pre><code>sh-4.3# /tmp/bluetooth/bt-pan --debug client 3C:15:C2:C7:DA:95
DEBUG:root:Using local device (addr: 20:70:02:A0:1F:AC): /org/bluez/hci0
DEBUG:root:Using remote device (addr: 3C:15:C2:C7:DA:95): /org/bluez/hci0/dev_3C_15_C2_C7_DA_95
DEBUG:root:Connected to network (dev_remote: /org/bluez/hci0/dev_3C_15_C2_C7_DA_95, addr: 3C:15:C2:C7:DA:95) uuid 'nap' with iface: bnep0
DEBUG:root:Finished</code></pre>
<p>At this point your default route should still be rndis0 (USB OTG) instead of bnep0:</p>
<pre><code>sh-4.3# ip route
default via 192.168.2.1 dev rndis0
192.168.2.0/24 dev rndis0 proto kernel scope link src 192.168.2.15</code></pre>
<p>If the ip/bcast/netmask fields are missing on bnep0:</p>
<pre><code>sh-4.3# ifconfig bnep0
bnep0 Link encap:Ethernet HWaddr 20:70:02:A0:1F:AC
inet6 addr: fe80::2270:2ff:fea0:1fac%1202001524/64 Scope:Link
UP BROADCAST RUNNING MULTICAST MTU:1500 Metric:1
RX packets:39 errors:0 dropped:0 overruns:0 frame:0
TX packets:4 errors:0 dropped:0 overruns:0 carrier:0
collisions:0 txqueuelen:1000
RX bytes:10504 (10.2 KiB) TX bytes:148 (148.0 B)</code></pre>
<p>Fix it with ifconfig and verify it worked:</p>
<pre><code>sh-4.3# ifconfig bnep0 192.168.2.2 netmask 255.255.255.0 broadcast 192.168.2.255
sh-4.3# ifconfig bnep0
bnep0 Link encap:Ethernet HWaddr 20:70:02:A0:1F:AC
inet addr:192.168.2.2 Bcast:192.168.2.255 Mask:255.255.255.0
inet6 addr: fe80::2270:2ff:fea0:1fac%1201331708/64 Scope:Link
UP BROADCAST RUNNING MULTICAST MTU:1500 Metric:1
RX packets:134 errors:0 dropped:0 overruns:0 frame:0
TX packets:6 errors:0 dropped:0 overruns:0 carrier:0
collisions:0 txqueuelen:1000
RX bytes:40369 (39.4 KiB) TX bytes:252 (252.0 B)</code></pre>
<p>Now that both routes are available, data are still going over rndis0 instead of bnep0:</p>
<pre><code>sh-4.3# ip route
default via 192.168.2.1 dev rndis0
192.168.2.0/24 dev rndis0 proto kernel scope link src 192.168.2.15
192.168.2.0/24 dev bnep0 proto kernel scope link src 192.168.2.2</code></pre>
<p>Delete default route and aad a new default one over bnep0</p>
<pre><code>sh-4.3# ip route delete default
sh-4.3# ip route change default via 192.168.2.1 dev bnep0</code></pre>
<p>Verify default is now over bnep0:</p>
<pre><code>sh-4.3# ip route
default via 192.168.2.1 dev bnep0
192.168.2.0/24 dev rndis0 proto kernel scope link src 192.168.2.15
192.168.2.0/24 dev bnep0 proto kernel scope link src 192.168.2.2</code></pre>
<p>You can now test your connection via ping and nslookup</p>
<pre><code>sh-4.3# ping -c 1 8.8.8.8
PING 8.8.8.8 (8.8.8.8): 56 data bytes
64 bytes from 8.8.8.8: seq=0 ttl=42 time=80.094 ms
sh-4.3# nslookup www.google.com
Server: 8.8.8.8
Address 1: 8.8.8.8 google-public-dns-a.google.com</code></pre>

<div class="page-header">
  <h1 id="bt-hid-audio">Bluetooth Audio and HID</h1>
</div>
<p>You will need to enable legacy mode in order to connect to legacy (BR/EDR) mode Bluetooth devices. To enable legacy mode you will need to edit the configuration file <b>on the watch</b> via <a href="{{rel 'wiki/ssh/'}}">SSH</a> use the following command:</p>
<pre><code>sh-4.4# vi /etc/bluetooth/main.conf
</code></pre>
<p>Now edit the contents to the following:</p>
<pre><code>[General]
#ControllerMode = le
DiscoverableTimeout = 180</code></pre>
Next you will need to restart Bluetooth. To avoid weird behaviour its best to restart the entire system, use the following command:
<pre><code>sh-4.4# reboot
</code></pre>
<p>Now you are ready to connect a Bluetooth device to AsteroidOS use bluetoothctl to connect to a Bluetooth device:</p>
<pre><code>sh-4.4# bluetoothctl
Agent registered
[bluetooth]# agent on
Agent is already registered
[bluetooth]# default-agent
[bluetooth]# discoverable on
[bluetooth]# pairable on
[bluetooth]# scan on
Default agent request successful
Changing pairable on succeeded
Changing discoverable on succeeded
[CHG] Controller 43:43:A0:12:1F:AC Discoverable: yes
Discovery started
[CHG] Controller 43:43:A0:12:1F:AC Discovering: yes
[NEW] Device 27:EC:10:01:00:1A Gamepad.
[bluetooth]# pair 27:EC:10:01:00:1A
Attempting to pair with 27:EC:10:01:00:1A
[CHG] Device 27:EC:10:01:00:1A Paired: yes
Pairing successful
[Gamepad.]# connect 27:EC:10:01:00:1A
Attempting to connect to 27:EC:10:01:00:1A
Connection successful
[Gamepad.]#
</code></pre>
