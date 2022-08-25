---
title: Install
slug: install
layout: main-install
---

<div id="FAQ" class="page-header">
  <h1>Install FAQ</h1>
</div>

<div class="callout">
    <h4>Will I be able to revert to the previous operating system after installing AsteroidOS on my watch?</h4>
    When installing AsteroidOS on most watches, you may choose to replace your previous OS entirely or install it alongside the existing OS, called a "dual-boot". If you decide to replace your previous OS, it is advised that you make a backup of your <b>userdata</b> and <b>boot</b> partitions before flashing AsteroidOS. You will then be able to re-flash the previous OS later.
</div>

<div class="callout">
    <h4>What features will and won't work on my watch with AsteroidOS?</h4>
    The available AsteroidOS features depend on the watch you want to use. Review the table in your device's installation page for detailed support information or the [features table]({{rel 'install/features'}}) for a summary.
</div>

<div class="callout">
    <h4>My watch is not listed on this page. What can I do?</h4>
    You should refer to the <a href="{{rel 'wiki/porting-status'}}">Porting Status</a> page of the documentation and check if a port of AsteroidOS to your watch is possible or in progress. If you are interested in porting AsteroidOS yourself to a new watch, please read the <a href="{{rel 'wiki/porting-guide'}}">Porting Guide</a> page and contact us via IRC.
</div>

<div class="callout">
    <h4>I do not want to flash a prebuilt image on my watch. Can I compile AsteroidOS myself?</h4>
    Review the <a href="{{rel 'wiki/building-asteroidos'}}">Building AsteroidOS</a> page for detailed instructions on how to compile AsteroidOS yourself.
</div>

<div class="callout">
    <h4>My fastboot command displays "invalid sparse file format at header magic" when starting to flash the device</h4>
    This is not a fatal error and can safely be ignored.
</div>

<div class="callout">
    <h4>My fastboot command crashes or hangs at "invalid sparse file format at header magi" (with a missing "c" in magic)</h4>
    This error occurs when using deprecated fastboot and ADB commands on Windows systems. If you already had those commands installed and skipped downloading our <a href="https://release.asteroidos.org/tools/adb_1_0_39+fastboot+ext2simg.zip">supplied zip file</a>, please install those commands instead.
</div>

<div class="callout">
    <h4>Commands fail or stop during the ~5 minute flashing process</h4>
    Smartwatches are prone to lose a proper connection to their cradle over time due to sweat corroding the watch pins. This is a particularly a regular problem with dory (LG G Watch). Cleaning the pins with isopropyl alcohol or even carefully sanding them (e.g. with a nailfile) can restore a reliable connection.
</div>

<div class="callout">
    <h4>My Asus Zenwatch 2 flashed successfully but does not boot</h4>
    There are two versions of the Asus Zenwatch 2, codenamed Sparrow and Wren. Their images are not interchangeable. Please ensure you are using the right files.
</div>

