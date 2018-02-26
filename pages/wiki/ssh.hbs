---
title: SSH
layout: documentation
---

<p>By default, you can get a remote shell on you smartwatch with SSH over RNDIS. On some smartwatches, it is also possible to use SSH with Wi-Fi.</p>
<div class="page-header">
  <h1 id="sshoverusb">SSH over USB</h1>
</div>
<p>By default, USB Moded set up udhcpd so that your watch gets the 192.168.2.15 IP address on its rndis interface. You can then connect to your watch from your computer with the following command:</p>
<pre><code>ssh ceres@192.168.2.15
</code></pre>
<p>If your computer does not automatically get an IP address for its rndis interface, you might need to run this first:</p>
<pre><code>sudo dhclient -v enp0s20f0u8
</code></pre>
<div class="page-header">
  <h1 id="sshoverwifi">SSH over Wi-Fi</h1>
</div>
<p>Dropbear is already running on the watch so we just need an IP address configured to connect.</p>
<p>Ensure wireless drivers are enabled for the watch.</p>
<p>Build your <code>asteroid-image</code> with iproute2 and wpa-supplicant. In <code>meta-{watch}-hybris/conf/machine/{watch}.conf</code> add <code>iproute2</code> and <code>wpa-supplicant</code> to <code>IMAGE_INSTALL</code>:</p>
<pre><code>IMAGE_INSTALL += "android-tools android-system msm-fb-refresher brcm-patchram-plus iproute2 wpa-supplicant"
</code></pre>
<p>Once your image is installed on the watch, open up an <code>adb shell</code>:</p>
<pre><code># mkdir /etc/wpa_supplicant
# cp /etc/wpa_supplicant.conf /etc/wpa_supplicant/wpa_supplicant-wlan0.conf
# systemctl enable --now wpa_supplicant@wlan0
# wpa_cli
&gt; scan
&gt; scan_results
&gt; add_network
&gt; set_network X ssid "MYSSID"
&gt; set_network X psk "MYPSK"
&gt; enable_network X
&gt; select_network X
&gt; save_config
# ip a show dev wlan0
</code></pre>
<p>The watch should automatically get an IPv6 address from your network or you can set a static IPv4. You can disconnect from adb and connect via SSH.</p>
<p>By default, there is no <code>root</code> or <code>ceres</code> password, and no firewall rules.</p>
