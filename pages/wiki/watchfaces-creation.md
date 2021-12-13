---
title: Watchfaces Creation
layout: documentation
---

<p>Our goal is to make watchface creation fairly simple.<br>The provided scripts make it possible to create your first watchface even without any programming skills by redesigning existing SVG images.<br>Changing code requires some QML knowledge. Even if you are not familiar with QML yet, prior knowledge of any scripting language should be sufficiant to learn quickly from the already existing examples provided by the community.<br>Those community examples are collected in the <a href="https://github.com/AsteroidOS/unofficial-watchfaces">unofficial-watchfaces repo</a>. This guide will walk you through the steps of how to get started.</p>
<div class="page-header">
  <h1 id="preparingwfcrea">Preparing watchface creation</h1>
</div>
<div>
  <p>To begin watchface creation starting from a community example, browse the <a href="https://github.com/AsteroidOS/unofficial-watchfaces">unofficial-watchfaces repo</a> for an existing watchface with features you like to have in your new watchface. Take note of its name and proceed with setting up our humble watchface creation tools.</p>
  <p>Open a terminal and clone the unofficial-watchfaces repo to a new subfolder from your current location as it contains all community made watchfaces.</p>
  <p><code>git clone https://github.com/AsteroidOS/unofficial-watchfaces</code></p>
  <p>Change directory into unofficial-watchfaces folder. <code>cd unofficial-watchfaces/</code></p>
  <p>You will find the watchface testing script in this directory. It was created to simulate watchface behaviour on your local machine using <code>qmlscene</code>. <code>qmlscene</code> is provided by the <code>qt-creator</code> package.</p>
  <p>Executing the script <code>./test-in-qmlscene.sh</code> lists all community watchfaces. Enter a number to start simulating the assigned watchface in qmlscene. A detailed description of the scripts features can be found further down on this page.</p>
</div>
<div>
  <p>The <code>./cloner.sh</code> script takes care of copying and renaming all files, folders and references to those, into a name of your liking. E.g.:</p>
  <p><code>./cloner.sh analog-nort analog-my-watch-face</code></p>
  <p>Your renamed copy will appear in the list of watchfaces when starting <code>./test-in-qmlscene.sh</code> again.</p>
  <p>The <code>cloner.sh</code> expects two inputs. The first watchface must exist, your choosen name must not already exist. Please avoid special characters and spaces in the name. We tend to roughly categorize <code>analog-</code> and <code>digital-</code> watchfaces by these prefixes.</p>
  <p>In this example, analog-nort is choosen as a good example to begin with. It is purely based on rotating SVG images located in <code>analog-my-watch-face/usr/share/asteroid-launcher/watchface-img/</code>. You can have your first custom results by just editing the corresponding hour, minute and second images in e.g. <a href="https://inkscape.org">Inkscape</a>.</p>
  <p>The actual QML code for your watchface is always located in <code>analog-my-watch-face/usr/share/asteroid-launcher/watchfaces/analog-my-watch-face.qml</code>.
  <p>To dive deeper into QML, <a href="https://doc.qt.io/">doc.qt.io</a> offers a <a href="https://doc.qt.io/qt-5/qml-tutorial.html">QML Tutorial</a> and is a comprehensive source for answering general QML questions.</p>
  </div>
<div class="page-header">
  <h1 id="guidlines">Design guidelines</h1>
</div>
<div>
  <p>Following these guidelines will make it easier to share your creation with others.</p>
  <p>Use the SVG image format where ever possible to reduce filesize and ensure scaling to different watch display resolutions.<br>When setting up the SVG page in the vector editor of your choice, mind to define a pixel <code>width</code> and <code>height</code> of at least 800 x 800px to prevent upscaling. This is needed as a workaround since QT does only downscale correctly but has unsolved issues with upscaling to higher display resolutions then defined in the SVGs <code>width</code> and <code>height</code>.<br>It is advised to optimise SVG images using e.g. <a href="https://github.com/svg/svgo">svgo</a> to remove editor specific meta data and redundant information that can be removed without loss.</p>
  <p>When using PNG or JPG images, please save them without EXIF, preview image and any meta data to reduce size.</p>
  <p>All images used in your watchface should reside in <code>my-watch-face/usr/share/asteroid-launcher/watchface-img/</code> which is then referenced in the code by <code>../watchface-img/imagename.suffix</code> relative to the .qml file location. Putting images anywhere else can cause empty spaces in the watchface settings page.</p> 
  <p>Names of images and assets should include the watchface name as prefix to the name to avoid conflict with assets from other watchfaces. E.g.: <code>my-watch-face-imagename.svg</code></p>
  <p>Font files are to be placed in <code>my-watch-face/usr/share/fonts/</code>. They will be copied and installed to the watch by using the <code>./deploy.sh</code> script described further below on this page.<br>Please mind to strictly use fonts issued under open licenses that allow embedded redistribution (OFL/SIL, Apache, BSD, CC-BY, etc.) in case you plan to publish your watchface to the unofficial-watchfaces repo or aim for inclusion into the AsteroidOS stock images.
  <p>If you plan to use the AsteroidOS logo in your design, please use the provided <code>../watchface-img/asteroid-logo.svg</code>. Any alterations to the logo file should be saved under new filename <code>my-watch-face-asteroid-logo.svg</code> to avoid conflict with other watchfaces that use the plain unaltered logo.</p>
  <p>Using a background that completely hides the user selected wallpaper is not advised. Please ensure that your design is legible when paired with the stock wallpapers.</p>
  <p>When pull requesting your work to the <a href="https://github.com/AsteroidOS/unofficial-watchfaces">unofficial-watchfaces repo</a>, edit the <code>README.md</code>. Add your watchface to the alphabetically sorted list and provide license information to the fonts and licensed assets/images you use and thus distribute in your watchface.</a>
  <p>Do not ever forget to brag all over the internet with your cool new watchface and <a href="https://twitter.com/AsteroidOS">tag us</a> so we can show your work to the broader community!<p> 
</div>
<div class="page-header">
  <h1 id="testingwfwatch">Testing on the watch</h1>
</div>
<div>
  <p>Use the <code>./deploy.sh</code> script to copy your watchface creation to the watch using either SCP or ADB commands.</p>
  <p>Connect your AsteroidOS Watch, configured to either ADB Mode (ADB transfer) or Developer Mode (SCP transfer) in Settings -> USB.</p>
  <p>Start <code>./deploy.sh</code> to use SCP commands or <code>./deploy.sh -a</code> for ADB commands.</p>
  <p>You can also use <code>./deploy.sh --help</code> to get a list of available options.</p>
  <p>Select your watchface by entering the alphabetically assigned number to deploy it to the watch.</p>
  <p>You can then restart the session on the watch with pressing <code>y</code> to install new fonts you provided and show your watchface on the watch.</p>
  <p>Note that restarting the session might break things like Always-on-Display or the battery display for the remaining uptime. Reboot the watch in that case.</p>
</div>
<div class="page-header">
  <h1 id="scriptfeatures">Features of the local test script</h1>
</div>
<div>
  <p>After starting the script with <code>./test-in-qmlscene.sh</code> and selecting a watchface, options within the started GUI allow you to use following features:</p>
  <p> - &#9711; checkbox toggles round or square screen display.</p>
  <p> - &#9789; checkbox activates AmbientMode with a black background.</p>
  <p> - 320px checkbox scales down the viewport to 320px from 640px to test scaling behaviour.</p>
  <p> - &#10226; button triggers reload of the QML code to see changes saved to the QML watchface file during <code>qmlscene</code> runtime.</p>  
  <p> - Screenshot button saves a JPG, named correctly for use as <code>.thumbnail</code> to publish to unofficial-watchfaces repo.</p>
  <p> - 12h checkbox switches between 24H and 12H time format by toggling <code>use12H.value</code>.</p>
  <p> - Set Time checkbox, to set a custom time by manipulating the activated tumblers by either dragging them or using the mouse wheel above them.</p>
  <p> - <code>featureSlider</code> to emulate input for features not available on your local system, like the battery display or temperatur data gathered by the weather app.</p>
</div>
<div>
  <p>While developing watchfaces with features not available in the local testing environment, it can be handy to temporarily write the code a little differently to allow it to run under qmlscene. The <code>featureSlider</code> is a simple slider that, by default, is not tied to anything, but is free to be used temporarily while developing.  So for temporary test code, one could use something like this:</p>
  <pre lang=""><code>  Item {
        id: batteryChargePercentage
        property var value: (featureSlider.value * 100).toFixed(0)
    }</code></pre>
  <p>The UI slider then acts as a controller to see how the watchface reacts to the different values. Note that the slider gives a real value from 0.0 to 1.0. To simulate the integer 0 to 100 provided by the real battery on the watch, we scale and convert to a fixed value in the code above.</p>  
</div>
<div>
  <p>
</div>
