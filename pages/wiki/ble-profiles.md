---
title: Bluetooth Low Energy Profiles
layout: documentation
---

<p>In order to provide data synchronization capabilities between a watch and another device (typically a phone but that could also be a computer), AsteroidOS defines a variety of Bluetooth Low Energy profiles. This page tries to document those profiles so that developers can implement new synchronization apps.</p>

<p><a href="https://learn.adafruit.com/introduction-to-bluetooth-low-energy/gatt#services-and-characteristics">Basic knowledge of BLE</a> is useful to understand this page. In this page, the <i>server parts</i> refer to the side of the protocol implemented by <a href="https://github.com/AsteroidOS/asteroid-btsyncd">asteroid-btsyncd</a> on the watch. The <i>client parts</i> refer to what's implemented by external apps such as <a href="https://github.com/AsteroidOS/AsteroidOSSync/">AsteroidOSSync</a>.</p>

<div class="page-header">
  <h1 id="advertisement">Advertisement</h1>
</div>

<p>Clients can distinguish an AsteroidOS watch from another BLE device by diving into advertisement payloads. AsteroidOS advertises the following service UUID: <b>00000000-0000-0000-0000-00a57e401d05</b>. This information can be filtered when scanning surrounding devices.</p>

<div class="page-header">
  <h1 id="batteryprofile">Battery Profile</h1>
</div>

<p>Clients can read an Asteroid watch's battery level using the BLE battery profile. This profile is a standard <a href="https://www.bluetooth.com/specifications/gatt/viewer?attributeXmlFile=org.bluetooth.service.battery_service.xml">defined by the Bluetooth Consortium</a> very well documented and implemented by many other devices.</p>

<h3>Battery Service (UUID: 0000180F-0000-1000-8000-00805f9b34fb)</h3>
<p><b>Battery Level Characteristic (UUID: 00002a19-0000-1000-8000-00805f9b34fb)</b></p>
<p>This characteristic can be read or used to be notified of a battery level change. The notified and read values consist of one byte between 0 and 100 representing the current battery level.</p>

<div class="page-header">
  <h1 id="mediaprofile">Media Profile</h1>
</div>

<p>Apps on an asteroid watch can control client's media playback capabilities (for example with the asteroid-music) using the Media profile. This profile is custom and functions as below:</p>

<h3>Media Service (UUID: 00007071-0000-0000-0000-00A57E401D05)</h3>
<p><b>Title Characteristic (UUID: 00007001-0000-0000-0000-00A57E401D05)</b></p>
<p>This characteristic can be written by the client to set the name of the media that is currently being played. Set to "" if no media is played. Values should be UTF-8 strings.</p>
<p><b>Album Characteristic (UUID: 00007002-0000-0000-0000-00A57E401D05)</b></p>
<p>This characteristic can be written by the client to set the name of the album that is currently being played. Set to "" if no media is played. Values should be UTF-8 strings.</p>
<p><b>Artist Characteristic (UUID: 00007003-0000-0000-0000-00A57E401D05)</b></p>
<p>This characteristic can be written by the client to set the name of the artist that is currently being played. Set to "" if no media is played. Values should be UTF-8 strings.</p>
<p><b>Playing Characteristic (UUID: 00007004-0000-0000-0000-00A57E401D05)</b></p>
<p>This characteristic can be written by the client to set the state of the media currently being played. Possible values can be: one byte set to 1 if the media is being played or one byte set to 0 if the media is paused.</p>
<p><b>Command Characteristic (UUID: 00007005-0000-0000-0000-00A57E401D05)</b></p>
<p>This characteristic can be used by the client to be notified of a command being sent by the server. Possible events are signaled with one bytes between:</p>
<ul>
    <li><b>0x0</b>: <i>Previous</i> (the client is expected to change media and update the writable characteristics)</li>
    <li><b>0x1</b>: <i>Next</i> (the client is expected to change media and update the writable characteristics)</li>
    <li><b>0x2</b>: <i>Play</i> (the client is expected to play the current media and update the playing characteristics according to the new state)</li>
    <li><b>0x3</b>: <i>Pause</i> (the client is expected to pause the current media and update the playing characteristics according to the new state)</li>
    <li><b>0x4</b>: <i>Volume</i> (the client is expected to change the volume to a supplied target volume and then update the Volume characteristic)</li>
</ul>
<p><b>Volume Characteristic (UUID: 00007006-0000-0000-0000-00A57E401D05)</b></p>
<p>This characteristic can be written by the client to set the volume of the current media session. Supported value range is 0-100.</p>

<div class="page-header">
  <h1 id="notificationprofile">Notification Profile</h1>
</div>

<p>Clients can create notifications on the watch side by using the Notification Profile. This profile is typically used to synchronize notifications from a phone to a watch or to send special alerts such as AsteroidOSSync's "Find my watch" feature.</p>

<h3>Notification Service (UUID: 00009071-0000-0000-0000-00A57E401D05)</h3>
<p><b>Notification Update Characteristic (UUID: 00009001-0000-0000-0000-00A57E401D05)</b></p>
<p>This characteristic can be written to send notifications-related commands to the watch. Commands are formated as UTF-8 strings containing an XML tree. The root element can be:</p>
<ul>
    <li><b>insert</b>: to be used when the client wants to add or modify a notification on the watch side. In that case, it can contain the following sub-elements:</li>
    <ul>
        <li><i>pn</i>: (Package name) currently ignored, should be used to identify the Android application at the origin of this notification. This field can safely be ignored by other platforms.</li>
        <li><i>id</i>: (Identifier) unsigned integer freely assigned by the client to identify a notification. If the server doesn't know any notifications with this ID yet, a notification will be created. If the server already knows a notification attached to this ID, this notification will be updated according to the other insert's sub-elements.</li>
        <li><i>an</i>: (Application Name) used by the watch's UI to show a human readable name of the application at the origin of this notification.</li>
        <li><i>ai</i>: (Application Icon) used by the watch's UI to assign an icon to this notification. Icons should be designated by their ion-icons identifier. The complete list of supported icons can be found <a href="https://github.com/AsteroidOS/asteroid-icons-ion">here</a></li>
        <li><i>su</i>: (Summary) used by the watch's UI to show a title to this notification. This field is usually kept short and can be anything that should be seen first in a notification.</li>
        <li><i>bo</i>: (Body) used by the watch's UI to show the content of this notification. This field should be an arbitrarily long text to be read by the user on the watch.</li>
        <li><i>vb</i>: (Vibrate) specifies how the watch should notify the user of this notification. Possible values are
        <ul>
            <li><i>strong</i> Makes the watch use a strong vibration with sound when possible when this notification is received. (This is also the default behavior if no vb element or an incorrect value is received)</li>
            <li><i>normal</i> Play a subtle vibration when the notification is received on the watch.</li>
            <li><i>ringtone</i> Vibrates in a strong pattern until the notification is removed.</li>
            <li><i>none</i> Don't make the watch vibrate at all when the notification is received.</li>
        </ul>
        </li>
    </ul>
    <li><b>removed</b>: to be used when the client wants to close a notification on the watch side. In that case, it can only contain the <i>id</i> sub-element which contains a notification ID attached to the notification to be closed.</li>
</ul>
<p>Examples of well-formed values:</p>
<pre><code><xmp><insert>
    <pn>com.android.mms</pn>
    <id>42</id>
    <an>SMS</an>
    <ai>ios-text</ai>
    <su>Bob</su>
    <bo>Hey, check out this super cool OS! http://asteroidos.org</bo>
    <vb>strong</vb>
</insert></xmp></code></pre>
<pre><code><xmp><removed>
    <id>42</id>
</removed></xmp></code></pre>
<p><b>Notification Feedback Characteristic (UUID: 00009002-0000-0000-0000-00A57E401D05)</b></p>
<p>Eventually, this characteristic should allow the server to send command regarding notifications to the client (e.g: close a notification or call an action) but this feature is not standardized nor documented yet. Don't hesitate to contribute!</p>

<div class="page-header">
  <h1 id="screenshotprofile">Screenshot Profile</h1>
</div>

<p>A client can save the content of the server's screen using the Screenshot profile.</p>

<h3>Screenshot Service (UUID: 00006071-0000-0000-0000-00A57E401D05)</h3>
<p><b>Screenshot Request Characteristic (UUID: 00006001-0000-0000-0000-00A57E401D05)</b></p>
<p>This characteristic can be written by the client to any value (for example one byte set to 0) to trigger a byte stream on the Screenshot Content Characteristic.</p>
<p><b>Screenshot Content Characteristic (UUID: 00006002-0000-0000-0000-00A57E401D05)</b></p>
<p>This characteristic can be used to be notified of a screenshot content. After a write to the Screenshot Request Characteristic, the first value signaled by the Screenshot Content Characteristic should be made of four bytes containing the size of the data to be transmitted and can be used to show a progress bar during the screenshot download time. The rest of the transmission is made of chunks of raw data to be concatenated by the client in a buffer to reconstruct a screenshot of the watch's screen. The complete buffer should be a valid JPEG file but other formats could also be considered in the future.</p>

<div class="page-header">
  <h1 id="timeprofile">Time Profile</h1>
</div>

<p>A client can change the server's system time using the Time Profile. This should be used periodically to synchronize a watch's time with the device it is currently connected to.</p>

<h3>Time Service (UUID: 00005071-0000-0000-0000-00A57E401D05)</h3>
<p><b>Time Set Characteristic (UUID: 00005001-0000-0000-0000-00A57E401D05)</b></p>
<p>This characteristic can be written. It is made of 5 bytes:</p>
<ul>
    <li><i>Year</i>: (byte 0) An unsigned value to be added to 1900 to set the current year.</li>
    <li><i>Month</i>: (byte 1) A value between 0 and 11 (included) with 0 corresponding to January and 11 to December</li>
    <li><i>Day</i>: (byte 2) A value between 0 and 31</li>
    <li><i>Hour</i>: (byte 3) A value between 0 and 60</li>
    <li><i>Minute</i>: (byte 4) A value between 0 and 60</li>
    <li><i>Second</i>: (byte 5) A value between 0 and 60</li>
</ul>

<div class="page-header">
  <h1 id="weatherprofile">Weather Profile</h1>
</div>

<p>A client can fill weather information buffers on the watch using the Weather Profile. Those information can typically be used by asteroid-weather or asteroid-launcher's Today page to show current info.</p>

<h3>Weather Service (UUID: 00008071-0000-0000-0000-00A57E401D05)</h3>
<p><b>Weather City Characteristic (UUID: 00008001-0000-0000-0000-00A57E401D05)</b></p>
<p>This characteristic can be written by the client to set the name of the city whose weather information are attached to. Values should be UTF-8 strings.</p>
<p><b>Weather IDs Characteristic (UUID: 00008002-0000-0000-0000-00A57E401D05)</b></p>
<p>This characteristic can be written by the client with a value of 10 bytes. Each pair or byte represents an <a href="https://openweathermap.org/weather-conditions">OWM weather condition ID</a> for a specific day of forecast. For instance: Bytes 0 and 1 set to 500 represent light rain today.</p>
<p><b>Weather Min Temperatures Characteristic (UUID: 00008003-0000-0000-0000-00A57E401D05)</b></p>
<p>This characteristic can be written by the client with a value of 10 bytes. Each pair or byte represents a minimum temperature for a specific day of forecast. For instance: Bytes 2 and 3 set to 20 represent a minimum temperature of 20°C tomorrow.</p>
<p><b>Weather Max Temperatures Characteristic (UUID: 00008004-0000-0000-0000-00A57E401D05)</b></p>
<p>This characteristic can be written by the client with a value of 10 bytes. Each pair or byte represents a maximum temperature for a specific day of forecast. For instance: Bytes 4 and 5 set to 30 represent a maximum temperature of 30°C the day after tomorrow.</p>
