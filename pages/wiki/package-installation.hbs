---
title: Manual Watchface and Package Installation
layout: documentation
---

<div class="page-header">
  <h1 id="watchfaceinstallation">Watchface Installation</h1>
</div>
<div>
  <p>Some watchfaces (e.g. <a href="https://github.com/AsteroidOS/unofficial-watchfaces">the unofficial-watchface
      collection</a>) bring their own installation script.
    If you wish to install a watchface that has no installation script or is not provided as a package you can install
    it manually using the following instructions.</p>
  <div>
    <p>Installing a watchface only requires pushing the .qml file and the required assets (e.g.
      fonts, images, etc.) in the <code>/usr/share/asteroid-launcher/watchfaces/</code> directory on your watch.</p>
    <pre><code>scp watchface-name.qml root@192.168.2.15:/usr/share/asteroid-launcher/watchfaces/</code></pre>
    <p>If the watchface has additional dependencies on assets you can push them the same way.</p>
    <pre><code>scp image.png root@192.168.2.15:/usr/share/asteroid-launcher/watchfaces/</code></pre>
    <p>Some watchfaces include their own font.</p>
    <pre><code>scp fontname.ttf root@192.168.2.15:/usr/share/fonts/</code></pre>
  </div>
</div>
<div class="page-header">
  <h1 id="wallpaperinstallation">Wallpaper Installation</h1>
</div>
<p>If you wish to install a wallpaper that has no installation script or is not provided as a package you can install
  it manually using the following instructions.</p>
<pre><code>scp wallpapername.png root@192.168.2.15:/usr/share/asteroid-launcher/wallpapers/</code></pre>

<div class="page-header">
  <h1 id="packageinstallation">Package Installation</h1>
</div>
<div>
  <p>While AsteroidOS has a package manager, there is currently no graphical app store.</p><br />
  <h4>Installation of local packages</h4>
  <p>Before you can install the package you need to push it to the watch.
    <pre><code>scp packagename.ipk root@192.168.2.15:/home/root</code></pre>
    After that you can use <a href="{{rel 'wiki/ssh'}}">SSH</a> to login and install the package
    <pre><code>ssh root@192.168.2.15</code></pre>
    <pre><code>opkg install packagename.ipk</code></pre>
    When the package is installed you can remove the installation package from your root users home-directory and close
    the <a href="{{rel 'wiki/ssh'}}">SSH</a> connection to your watch.
    <pre><code>rm /home/root/packagename.ipk</code></pre>
    <pre><code>exit</code></pre>
  </p>
</div>
<div>
  <br />
  <h4>Reinstallation of local packages</h4>
  <p>If you need to reinstall a package you can add the <code>--force-reinstall</code> flag to the opkg command.</p>
  <pre><code>opkg install --force-reinstall packagename.ipk</code></pre>
</div>

<div class="page-header">
  <h1 id="troubleshooting">Troubleshooting</h1>
</div>
<div>
  <h4>Using scp results in a <code>REMOTE HOST IDENTIFICATION HAS CHANGED!</code> warning</h4>
  <p>
    This means that there is already a different device known with the same IP adress. This happens if you reinstall
    AsteroidOS or you use multiple watches. The warning can be resolved by removing the record of the IP adress from the
    list of known hosts as follows:
    <pre><code>ssh-keygen -R 192.168.2.15</code></pre>
  </p>
  <br />
  <h4>Mssing dependencies detected during package install</h4>
  <p>
    The package you are trying to install may depend on other packages and their versions. You can install the
    dependencies first, add the <code>--force-depends</code> flag to your install command or decide to not install the
    package. Ignoring the dependencies can lead to broken or unstable packages.
    <pre><code>opkg install --force-depends packagename.ipk</code></pre>
  </p>
</div>