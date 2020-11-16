---
title: Watchfaces Creation
layout: documentation
---

<p>Watchface creation is fairly simple, requiring only QML knowledge. This guide will walk you through the steps.</p>
<div class="page-header">
  <h1 id="preparingwfcrea">Preparing watchface creation</h1>
</div>
<div>
<p>First, clone the <a href="https://github.com/AsteroidOS/asteroid-launcher">https://github.com/AsteroidOS/asteroid-launcher</a> repository as it contains all watchfaces. Then, navigate to the <code>watchfaces</code> directory. In here, copy <code>000-default-digital.qml</code> to a new file to use as a base for watchface creation.</p>
</div>
<div class="page-header">
  <h1 id="testingwflocal">Testing your watchface locally</h1>
</div>
<div>
<p>To test your watchface locally, I personally open the qml file using qmlscene: <code>qmlscene xxx-my-watchface.qml</code>. Of course, other QML previewing tools should work too.</p>
</div>
<div>
<p>To be able to test properly, replace all references to <code>wallClock.time</code> with <code>new Date()</code>, place an image in the same directory named <code>background.jpg</code> and put the following code just below the first Item statement:</p>
<pre lang=""><code>  Image {
      source: "background.jpg"
      width: 160
      height: 160
  }</code></pre>
</div>
<div>
<p>The above code allows you to see what the watchface would look like on an actual device, as qmlscene by default uses a pure white background.</p>
</div>
<div class="page-header">
  <h1 id="testingwfwatch">Testing on the watch</h1>
</div>
<div>
<p>Make sure to replace all instances of <code>new Date()</code> with <code>wallClock.time</code> and remove the background <code>Image</code> statement. Then, simply push it to the watch: <code>scp xxx-my-watchface.qml root@192.168.2.15:/usr/share/asteroid-launcher/watchfaces/</code>. You can then go to watchfaces in the AsteroidOS settings. If you also pushed an <code>xxx-my-watchface.jpg</code> file, this will be used as preview. Otherwise, you will have to tap a white square to activate it.</p>
</div>
<div>
<p>If you want to update the watchface, you have to push the new version to the device. Do note that AsteroidOS may cache the watchface. The easiest way to fix this is to “restart” the device by running the following command: <code>ssh -t root@192.168.2.15 "systemctl restart user@1000"</code>.</p>
</div>
