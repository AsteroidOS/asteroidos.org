---
title: Bluetooth Low Energy Profiles
layout: documentation
---

In order to provide data synchronization capabilities between a watch and another device (typically a phone but that could also be a computer), AsteroidOS defines a variety of Bluetooth Low Energy profiles. This page tries to document those profiles so that developers can implement new synchronization apps.

[Basic knowledge of BLE](https://learn.adafruit.com/introduction-to-bluetooth-low-energy/gatt#services-and-characteristics) is useful to understand this page. In this page, the *server parts* refer to the side of the protocol implemented by [asteroid-btsyncd](https://github.com/AsteroidOS/asteroid-btsyncd) on the watch. The *client parts* refer to what's implemented by external apps such as [AsteroidOSSync](https://github.com/AsteroidOS/AsteroidOSSync/).

# Advertisement

Clients can distinguish an AsteroidOS watch from another BLE device by diving into advertisement payloads. AsteroidOS advertises the following service UUID: **00000000-0000-0000-0000-00a57e401d05**. This information can be filtered when scanning surrounding devices.

# Battery Profile

Clients can read an Asteroid watch's battery level using the BLE battery profile. This profile is a standard [defined by the Bluetooth Consortium](https://www.bluetooth.com/specifications/gatt/viewer?attributeXmlFile=org.bluetooth.service.battery_service.xml) very well documented and implemented by many other devices.

### Battery Service (UUID: 0000180F-0000-1000-8000-00805f9b34fb)
**Battery Level Characteristic (UUID: 00002a19-0000-1000-8000-00805f9b34fb)**

This characteristic can be read or used to be notified of a battery level change. The notified and read values consist of one byte between 0 and 100 representing the current battery level.

# Media Profile

Apps on an asteroid watch can control client's media playback capabilities (for example with the asteroid-music) using the Media profile. This profile is custom and functions as below:

### Media Service (UUID: 00007071-0000-0000-0000-00A57E401D05)
**Title Characteristic (UUID: 00007001-0000-0000-0000-00A57E401D05)**

This characteristic can be written by the client to set the name of the media that is currently being played. Set to "" if no media is played. Values should be UTF-8 strings.

**Album Characteristic (UUID: 00007002-0000-0000-0000-00A57E401D05)**

This characteristic can be written by the client to set the name of the album that is currently being played. Set to "" if no media is played. Values should be UTF-8 strings.

**Artist Characteristic (UUID: 00007003-0000-0000-0000-00A57E401D05)**

This characteristic can be written by the client to set the name of the artist that is currently being played. Set to "" if no media is played. Values should be UTF-8 strings.

**Playing Characteristic (UUID: 00007004-0000-0000-0000-00A57E401D05)**

This characteristic can be written by the client to set the state of the media currently being played. Possible values can be: one byte set to 1 if the media is being played or one byte set to 0 if the media is paused.

**Command Characteristic (UUID: 00007005-0000-0000-0000-00A57E401D05)**

This characteristic can be used by the client to be notified of a command being sent by the server. Possible events are signaled with one bytes between:

 - **0x0**: *Previous* (the client is expected to change media and update the writable characteristics)
 - **0x1**: *Next* (the client is expected to change media and update the writable characteristics)
 - **0x2**: *Play* (the client is expected to play the current media and update the playing characteristics according to the new state)
 - **0x3**: *Pause* (the client is expected to pause the current media and update the playing characteristics according to the new state)
 - **0x4**: *Volume* (the client is expected to change the volume to a supplied target volume and then update the Volume characteristic)

**Volume Characteristic (UUID: 00007006-0000-0000-0000-00A57E401D05)**

This characteristic can be written by the client to set the volume of the current media session. Supported value range is 0-100.

# Notification Profile

Clients can create notifications on the watch side by using the Notification Profile. This profile is typically used to synchronize notifications from a phone to a watch or to send special alerts such as AsteroidOSSync's "Find my watch" feature.

### Notification Service (UUID: 00009071-0000-0000-0000-00A57E401D05)
**Notification Update Characteristic (UUID: 00009001-0000-0000-0000-00A57E401D05)**
This characteristic can be written to send notifications-related commands to the watch. Commands are formated as UTF-8 strings containing an XML tree. The root element can be:

 - **insert**: to be used when the client wants to add or modify a notification on the watch side. In that case, it can contain the following sub-elements:

     - *pn*: (Package name) currently ignored, should be used to identify the Android application at the origin of this notification. This field can safely be ignored by other platforms.
     - *id*: (Identifier) unsigned integer freely assigned by the client to identify a notification. If the server doesn't know any notifications with this ID yet, a notification will be created. If the server already knows a notification attached to this ID, this notification will be updated according to the other insert's sub-elements.
     - *an*: (Application Name) used by the watch's UI to show a human readable name of the application at the origin of this notification.
     - *ai*: (Application Icon) used by the watch's UI to assign an icon to this notification. Icons should be designated by their ion-icons identifier. The complete list of supported icons can be found [here](https://github.com/AsteroidOS/asteroid-icons-ion)
     - *su*: (Summary) used by the watch's UI to show a title to this notification. This field is usually kept short and can be anything that should be seen first in a notification.
     - *bo*: (Body) used by the watch's UI to show the content of this notification. This field should be an arbitrarily long text to be read by the user on the watch.
     - *vb*: (Vibrate) specifies how the watch should notify the user of this notification. Possible values are

         - *strong* Makes the watch use a strong vibration with sound when possible when this notification is received. (This is also the default behavior if no vb element or an incorrect value is received)
         - *normal* Play a subtle vibration when the notification is received on the watch.
         - *ringtone* Vibrates in a strong pattern until the notification is removed.
         - *none* Don't make the watch vibrate at all when the notification is received.

 - **removed**: to be used when the client wants to close a notification on the watch side. In that case, it can only contain the *id* sub-element which contains a notification ID attached to the notification to be closed.

Examples of well-formed values:

```
<insert>
    <pn>com.android.mms</pn>
    <id>42</id>
    <an>SMS</an>
    <ai>ios-text</ai>
    <su>Bob</su>
    <bo>Hey, check out this super cool OS! http://asteroidos.org</bo>
    <vb>strong</vb>
</insert>
```

```
<removed>
    <id>42</id>
</removed>
```

**Notification Feedback Characteristic (UUID: 00009002-0000-0000-0000-00A57E401D05)**

Eventually, this characteristic should allow the server to send command regarding notifications to the client (e.g: close a notification or call an action) but this feature is not standardized nor documented yet. Don't hesitate to contribute!

# Screenshot Profile

A client can save the content of the server's screen using the Screenshot profile.

### Screenshot Service (UUID: 00006071-0000-0000-0000-00A57E401D05)
**Screenshot Request Characteristic (UUID: 00006001-0000-0000-0000-00A57E401D05)**

This characteristic can be written by the client to any value (for example one byte set to 0) to trigger a byte stream on the Screenshot Content Characteristic.

**Screenshot Content Characteristic (UUID: 00006002-0000-0000-0000-00A57E401D05)**

This characteristic can be used to be notified of a screenshot content. After a write to the Screenshot Request Characteristic, the first value signaled by the Screenshot Content Characteristic should be made of four bytes containing the size of the data to be transmitted and can be used to show a progress bar during the screenshot download time. The rest of the transmission is made of chunks of raw data to be concatenated by the client in a buffer to reconstruct a screenshot of the watch's screen. The complete buffer should be a valid JPEG file but other formats could also be considered in the future.

# Time Profile

A client can change the server's system time using the Time Profile. This should be used periodically to synchronize a watch's time with the device it is currently connected to.

### Time Service (UUID: 00005071-0000-0000-0000-00A57E401D05)
**Time Set Characteristic (UUID: 00005001-0000-0000-0000-00A57E401D05)**
This characteristic can be written. It is made of 6 bytes:

 - *Year*: (byte 0) Year - 1900. 
 - *Month*: (byte 1) A value in the range \[0-11\] where 0 = January and 11 = December
 - *Day*: (byte 2) A value in the range \[1-31\]
 - *Hour*: (byte 3) A value in the range \[0-23\]
 - *Minute*: (byte 4) A value in the range \[0-59\]
 - *Second*: (byte 5) A value in the range \[0-59\]

# Weather Profile

A client can fill weather information buffers on the watch using the Weather Profile. Those information can typically be used by asteroid-weather or asteroid-launcher's Today page to show current info.  For each of the characteristics except for the Weather City Characteristic, the data is interpreted as a sequence of five two-byte big-endian values that correspond to "today" through "today + 4 days".

### Weather Service (UUID: 00008071-0000-0000-0000-00A57E401D05)

**Weather City Characteristic (UUID: 00008001-0000-0000-0000-00A57E401D05)**

This characteristic can be written by the client to set the name of the city whose weather information are attached to. Values should be UTF-8 strings and they do **not** need to be NUL-terminated.

**Weather IDs Characteristic (UUID: 00008002-0000-0000-0000-00A57E401D05)**

This characteristic can be written by the client with a value of 10 bytes. Each pair of bytes represents an [OWM weather condition ID](https://openweathermap.org/weather-conditions) for a specific day of forecast. For instance: Bytes 0 and 1 set to 500 represent light rain today.

For example, here is a valid value:

```
0x00 0xc8 0x03 0x21 0x03 0x20 0x01 0xf4 0x02 0x58
```

The interpretation is:
```
0x00c8 = 200 = "Thunderstorm with light rain"
0x0321 = 801 = "Few clouds: 11-25%"
0x0320 = 800 = "Clear"
0x01f4 = 500 = "Light rain"
0x0258 = 600 = "Light snow"
```

**Weather Min Temperatures Characteristic (UUID: 00008003-0000-0000-0000-00A57E401D05)**

This characteristic can be written by the client with a value of 10 bytes. Each pair of bytes represents a minimum temperature for a specific day of forecast. Note that temperatures are given in degrees Kelvin and not Celsius, so a value of 273 (0x0111) would correspond to a temperature of 0°C or 32°F. 

Example:

```
0x01 0x11 0x02 0x11 0x03 0x11 0xff 0xff 0x00 0x00
```

The interpretation is mathematically sound (but physically unrealistic!):
```
0x0111 = 273K = 0°C
0x0211 = 529K = 256°C
0x0311 = 785K = 512°C
0xffff = 65535K = 65262°C
0x0000 = 0K = -273°C
```

**Weather Max Temperatures Characteristic (UUID: 00008004-0000-0000-0000-00A57E401D05)**

This characteristic can be written by the client with a value of 10 bytes. Each pair of bytes represents a maximum temperature for a specific day of forecast. Interpretation is identical to that of the Weather Min Temperatures Characteristic.
