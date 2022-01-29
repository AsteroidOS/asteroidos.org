---
title: SSH
layout: documentation
---

<p>By default, you can get a remote shell on you smartwatch with SSH over RNDIS. On some smartwatches, it is also possible to use SSH with Wi-Fi.</p>
<div class="page-header">
  <h1 id="sshoverusb">SSH over USB</h1>
</div>
<p>USB Moded already set up udhcpd so that your watch gets the 192.168.2.15 IP address on its rndis interface. You can then connect to your watch from your computer with the following command:</p>
<pre><code>ssh ceres@192.168.2.15
</code></pre>
<p>If your computer does not automatically get an IP address for its rndis interface, you might need to run this first:</p>
<pre><code>sudo dhclient -v enp0s20f0u8
</code></pre>
<div class="page-header">
  <h1 id="sshoverwifi">SSH over Wi-Fi</h1>
</div>
<p>Dropbear is already running on the watch so we just need to configure an IP address to connect to.</p>
<p>The <a href="https://asteroidos.org/wiki/ip-connection">IP Connection page</a> describes how to set up Wi-Fi.</p>
<p>Once the setup is done, you can look for the IP address your Router assigned via DHCP, with <code># ip a show dev wlan0</code>.</p>
<div class="page-header">
  <h1 id="troubleshooting">Troubleshooting</h1>
</div>
<div>
  <h4>Using SCP/SSH results in a <code>REMOTE HOST IDENTIFICATION HAS CHANGED!</code> warning</h4>
  <p>
    This means that there is already a different device known with the same IP adress. This happens if you reinstall
    AsteroidOS or you use multiple watches. The warning can be resolved by removing the record of the IP adress from the
    list of known hosts as follows:
    <pre><code>ssh-keygen -R 192.168.2.15</code></pre>
  </p>
</div>
