---
title: Watchfaces Creation
layout: documentation
---

Our goal is to make watchface creation fairly simple.

The provided scripts make it possible to create your first watchface even without any programming skills by redesigning existing SVG images.

Changing code requires some QML knowledge. Even if you are not familiar with QML yet, prior knowledge of any scripting language should be sufficiant to learn quickly from the already existing examples provided by the community.

Those community examples are collected in the [unofficial-watchfaces repo](https://github.com/AsteroidOS/unofficial-watchfaces). This guide will walk you through the steps of how to get started.

# Preparing watchface creation
---

To begin watchface creation starting from a community example, browse the [unofficial-watchfaces repo](https://github.com/AsteroidOS/unofficial-watchfaces) for an existing watchface with features you like to have in your new watchface. Take note of its name and proceed with setting up our humble watchface creation tools.

Open a terminal and clone the unofficial-watchfaces repo to a new subfolder from your current location as it contains all community made watchfaces.

```
git clone https://github.com/AsteroidOS/unofficial-watchfaces
```

Change directory into unofficial-watchfaces folder. `cd unofficial-watchfaces/`

You will find the watchface testing script in this directory. It was created to simulate watchface behaviour on your local machine using `qmlscene`. `qmlscene` is provided by the `qt-creator` package.

Executing the script `./test-in-qmlscene.sh` lists all community watchfaces. Enter a number to start simulating the assigned watchface in qmlscene. A detailed description of the scripts features can be found further down on this page.


The `./cloner.sh` script takes care of copying and renaming all files, folders and references to those, into a name of your liking. E.g.:

```
./cloner.sh analog-nort analog-my-watch-face
```

Your renamed copy will appear in the list of watchfaces when starting `./test-in-qmlscene.sh` again.

The `cloner.sh` expects two inputs. The first watchface must exist, your choosen name must not already exist. Please avoid special characters and spaces in the name. We tend to roughly categorize `analog-` and `digital-` watchfaces by these prefixes.

In this example, analog-nort is choosen as a good example to begin with. It is purely based on rotating SVG images located in `analog-my-watch-face/usr/share/asteroid-launcher/watchface-img/`. You can have your first custom results by just editing the corresponding hour, minute and second images in e.g. [Inkscape](https://inkscape.org).

The actual QML code for your watchface is always located in `analog-my-watch-face/usr/share/asteroid-launcher/watchfaces/analog-my-watch-face.qml`.

To dive deeper into QML, [doc.qt.io](https://doc.qt.io/) offers a [QML Tutorial](https://doc.qt.io/qt-5/qml-tutorial.html) and is a comprehensive source for answering general QML questions.

# Design guidelines
---

Following these guidelines will make it easier to share your creation with others.

Use the SVG image format where ever possible to reduce filesize and ensure scaling to different watch display resolutions.

When setting up the SVG page in the vector editor of your choice, mind to define a pixel `width` and `height` of at least 800 x 800px to prevent upscaling. This is needed as a workaround since QT does only downscale correctly but has unsolved issues with upscaling to higher display resolutions then defined in the SVGs `width` and `height`.

It is advised to optimise SVG images using e.g. [svgo](https://github.com/svg/svgo) to remove editor specific meta data and redundant information that can be removed without loss.

When using PNG or JPG images, please save them without EXIF, preview image and any meta data to reduce size.

All images used in your watchface should reside in `my-watch-face/usr/share/asteroid-launcher/watchface-img/` which is then referenced in the code by `../watchface-img/imagename.suffix` relative to the .qml file location. Putting images anywhere else can cause empty spaces in the watchface settings page.

Names of images and assets should include the watchface name as prefix to the name to avoid conflict with assets from other watchfaces. E.g.: `my-watch-face-imagename.svg`

Font files are to be placed in `my-watch-face/usr/share/fonts/`. They will be copied and installed to the watch by using the `./deploy.sh` script described further below on this page.

Please mind to strictly use fonts issued under open licenses that allow embedded redistribution (OFL/SIL, Apache, BSD, CC-BY, etc.) in case you plan to publish your watchface to the unofficial-watchfaces repo or aim for inclusion into the AsteroidOS stock images.

If you plan to use the AsteroidOS logo in your design, please use the provided `../watchface-img/asteroid-logo.svg`. Any alterations to the logo file should be saved under new filename `my-watch-face-asteroid-logo.svg` to avoid conflict with other watchfaces that use the plain unaltered logo.

Using a background that completely hides the user selected wallpaper is not advised. Please ensure that your design is legible when paired with the stock wallpapers.

When pull requesting your work to the [unofficial-watchfaces repo](https://github.com/AsteroidOS/unofficial-watchfaces), edit the `README.md`. Add your watchface to the alphabetically sorted list and provide license information to the fonts and licensed assets/images you use and thus distribute in your watchface. A more detailed guide how to commit your work can be found further down on this page.

Do not ever forget to brag all over the internet with your cool new watchface and [tag us](https://twitter.com/AsteroidOS) so we can show your work to the broader community! 

# Testing on the watch
---


Use the `./deploy.sh` script to copy your watchface creation to the watch using either SCP or ADB commands.

Connect your AsteroidOS Watch, configured to either ADB Mode (ADB transfer) or Developer Mode (SCP transfer) in Settings &rarr; USB.

Start `./deploy.sh` to use SCP commands or `./deploy.sh -a` for ADB commands.

You can also use `./deploy.sh --help` to get a list of available options.
Select your watchface by entering the alphabetically assigned number to deploy it to the watch.

You can then restart the session on the watch with pressing `y` to install new fonts you provided and show your watchface on the watch.

Note that restarting the session might break things like Always-on-Display or the battery display for the remaining uptime. Reboot the watch in that case.

# Features of the local test script
---

After starting the script with `./test-in-qmlscene.sh` and selecting a watchface, options within the started GUI allow you to use following features:

 - &#9711; checkbox toggles round or square screen display.
 - &#9789; checkbox activates AmbientMode with a black background.
 - 320px checkbox scales down the viewport to 320px from 640px to test scaling behaviour.
 - &#10226; button triggers reload of the QML code to see changes saved to the QML watchface file during `qmlscene` runtime.
 - Screenshot button saves a 640px PNG. Great for creating mockups during design process. Or just to support your bragging effort visually.
 - Generate previews button exports transparent PNG snapshots. Those are converted to WEBP `.thumbnails/` and `watchfaces-previews/` to publish to the unofficial-watchfaces repo.

 - 12h checkbox switches between 24H and 12H time format by toggling `use12H.value`.
 - Set Time checkbox, to set a custom time by manipulating the activated tumblers by either dragging them or using the mouse wheel above them.
 - `featureSlider` to emulate input for features not available on your local system, like the battery display or temperatur data gathered by the weather app.

While developing watchfaces with features not available in the local testing environment, it can be handy to temporarily write the code a little differently to allow it to run under qmlscene. The `featureSlider` is a simple slider that, by default, is not tied to anything, but is free to be used temporarily while developing.  So for temporary test code, one could use something like this:

```
    Item {
        id: batteryChargePercentage
        property var value: (featureSlider.value * 100).toFixed(0)
    }
```
The UI slider then acts as a controller to see how the watchface reacts to the different values. Note that the slider gives a real value from 0.0 to 1.0. To simulate the integer 0 to 100 provided by the real battery on the watch, we scale and convert to a fixed value in the code above.

# Share your watchface
---

Your finished watchface is always welcome on our [unofficial-watchfaces repository](https://github.com/AsteroidOS/unofficial-watchfaces)! You can do this via pull requests. Follow this guide to ensure consistency with existing community watchfaces and a quick review process.

Edit the `README.md` and sort your watchface entry into the list alphabetically. The required thumbnails can be conveniently created by using the `./test-in-qmlscene.sh` script. 

Remember to provide licensing information to all licensed material used in your watchface, at the bottom section of the `README.md`. Only works issued under an open license that allows embedded redistribution (OFL/SIL, Apache, BSD, CC-BY, etc.), are suitable to be merged into our repositories. 

Square thumbnails are taken on the iconic flatmesh background. This helps to easily compare the watchfaces visually on the same background when scrolling through the list. The flatmesh background is automatically downloaded when you start the script and if a custom `background.jpg` isn't used.

Round thumbnails are meant to present watchfaces on a background the developer found to be most suitable. Save this custom background as `background-round.jpg` and the script will use it when generating the previews.

Pressing the `Generate previews` button saves and correctly names three high quality PNG images. Those can either be found at top-level during runtime of qmlscene, in case you like to process them manually. Or you can use the images that get automatically created and copied to the correct folders by the script as soon as you close the qmlscene window.

Wrapping up, your pull request should have the following files included:

 - `my-watch-face/usr/share/asteroid-launcher/watchfaces/my-watch-face.qml`
 - `my-watch-face/usr/share/fonts/`  
For font files not already [contained in AsteroidOS stock](https://github.com/AsteroidOS/asteroid-fonts).
 - `my-watch-face/usr/share/asteroid-launcher/watchfaces-img/my-watch-face-imagename.*`  
All the images used in your watchface belong into this folder.
 - `my-watch-face/usr/share/asteroid-launcher/watchfaces-preview/.../my-watch-face.png`  
Transparent PNG preview files in folders named by resolution.  
 - `my-watch-face/usr/share/asteroid-launcher/wallpapers/my-watch-face-wallpapername.jpg`  
Put a 480x480 JPG file you possibly like to include as custom wallpaper here.
 - `.thumbnails/my-watch-face.webp`  
Square thumbnail in WEBP format taken on Flatmesh wallpaper.
 - `.thumbnails/my-watch-face-round.webp`  
Round thumbnail in WEBP format with transparent circle cut out.
 - `README.md`  
Extended with your watchface entry and licensing information, if required.


Thank you for contributing your work and sharing it with the community!

