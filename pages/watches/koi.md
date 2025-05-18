---
title: Casio WSD-F10/F20
deviceNames: [ koi ]
label: ayu/koi
section: install
# layout: aw-install
# installParts: [ install-prepare-adb, install-unlock-adb-round, install-select-method, install-full-adb-push-ext4, install-temp-flash-boot-to-recovery ]
---
<div class="callout callout-warning">
    <h4>WARNING: Bricking issues!</h4>
    <p>These watches are known to brick themselves in various ways. Most bricks are recoverable, but occasionally the watch will seemingly corrupt its bootloader partition, which will cause it to get stuck in WearOS and bootloop. Proceed with extreme caution and first consult <a href="https://matrix.to/#/#Asteroid:matrix.org">our matrix chat</a> for step by step guidance during the installation.</p>
</div>
<div class="callout callout-info">
    <h4>Model number and variants</h4>
    <p></p>
    <p>The "Casio Smart Outdoor Watch WSD-F10" <code>koi</code> and "Casio Pro Trek Smart WSD-F20" <code>ayu</code>share a platform. The only difference is the inclusion of GPS and a modified casing design in the <code>ayu</code> model. Generally, both watches are referred to as <code>koi</code>.
    </p><p>
    AsteroidOS has only been tested on <code>ayu</code>, but it should work on <code>koi</code>. The USB access procedure for the WSD-F10 <code>koi</code> is unknown. If you have a WSD-F10 and want to help test, please get in touch with us on <a href="https://matrix.to/#/#Asteroid:matrix.org">#Asteroid:matrix.org</a>.
    </p><p>
    The Casio WSD-F21HR and WSD-F30 are completely separate watches and not compatible with <code>koi</code>. Work is currently in progress on the WSD-F21HR.
    </p>
</div>

<div class="callout callout-info">
    <h4>USB connection</h4>
    <p>Both models need a custom adapter cable to connect to the USB pads.</p>
    <p>On ayu the USB pads are hidden under the Casio logo plate. Accessing those pads does not affect your watch's water resistance.</p>
    <p>The front bezel can be removed by unscrewing the four screws on the front of the watch and unclipping the faceplate. The Casio logo plate should then come free.</p>
    <p>Then you can then use pogo pins to connect a USB cable to the watch. The left pad is D- (white) and the right pad is D+ (green). Ensure that the magnetic charger is also connected to the watch while accessing USB, as it is needed for the signal ground. The charger should be connected to the same computer as your USB data cable.</p>
    <p>Do not, under any circumstances, solder to the pads. This can melt the plastic casing of the watch and cause all sorts of other damage.</p>
    <img src="{{assets}}/img/medaka_ayu_usb.png" class="install-usbmod-img">
    <p>3D printable docks for all Casio WSD variants are available here: <a href="https://www.printables.com/model/609744-casio-wsd-fxx-series-developer-usb-dock">https://www.printables.com/model/609744-casio-wsd-fxx-series-developer-usb-dock</a></p>
</div>
