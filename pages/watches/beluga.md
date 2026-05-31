---
title: OPPO Watch
deviceNames: [ beluga ] 
section: install
layout: aw-install
installParts: [ install-prepare-adb, install-unlock-adb-beluga, install-select-method, install-full, install-temp-encrypted ]
---
<div class="callout callout-warning">
    <h4>Variant Warning!</h4>
    <p>The OPPO Watch Free and OPPO Watch X are not supported! See the list on the <a href="{{rel 'wiki/porting-status'}}">porting status</a> page to find out if your model is supported.</p>
</div>
<div class="callout callout-info">
    <p>Make sure your OPPO Watch has been updated to a current firmware version via the WearOS update feature. There have been reports of problems with the installation instructions described below if the firmware version is too old.</p>
</div>
<div class="callout callout-warning">
    <h4>Step Counter Warning!</h4>
    <p>The step counter on OPPO Watches requires a one-time activation of the pedometer algorithm in the watch's co-processor. This activation is performed automatically by WearOS the first time the health stack records steps. Without it, step counting will not work in AsteroidOS.<br> Complete the initial WearOS setup by pairing the watch with your phone using the WearOS app. Then walk until the step counter shows a non-zero count in the WearOS health UI. Only then proceed with the AsteroidOS installation. The co-processor retains this state permanently and AsteroidOS will benefit from it.<br> If you have already unlocked the bootloader and wiped WearOS without completing this step, you will need to restore WearOS, complete the setup and health activation, and then reflash AsteroidOS.</p>
</div>
<div class="callout callout-info">
    <h4>USB Info</h4>
    <p>USB support is marked "partial" due to non working SSH connection. Only ADB connection is available.</p>
</div>
