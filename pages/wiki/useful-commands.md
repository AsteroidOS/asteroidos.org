---
title: Useful commands
layout: documentation
---

AsteroidOS comes with several command line tools that are very handy to control a watch from SSH or a script. This page tries to document the basic features of those commands, don't hesitate to use their --help options if you want to learn more.

Commands and gestures to enter the fastboot (bootloader) mode are listed at the bottom of this page.

# Notifications

---

AsteroidOS complies to the [freedesktop.org notifications specification](https://specifications.freedesktop.org/notification-spec/notification-spec-latest.html), which means you can use standard Linux desktop tools such as libnotify to show notifications in asteroid-launcher.
On AsteroidOS a useful command named `notificationtool` is provided that allows you to create/update/close/list notifications from the CLI.

```
# Creates a new notification with various parameters
notificationtool -o add \
        --icon=ios-happy \
        --application="Super App" \
        --urgency=3 \
        --hint="x-nemo-preview-summary Incredible preview title" \
        --hint="x-nemo-preview-body Exceptional preview content" \
        --hint="x-nemo-feedback notif_strong" \
        "Great Title" \
        "Amazing content"
```

# Launch applications

---

AsteroidOS uses an `invoker` to launch apps. The invoker is used to allow for quicker app startup by caching many of the Qt components into memory.

```
# Launch the alarm clock app using the invoker and hide the title bar.
# Ensure that this command is executed under the `ceres` user.
EGL_PLATFORM=wayland \
        QT_QPA_PLATFORM=wayland \
        QT_WAYLAND_DISABLE_WINDOWDECORATION=1 \
        invoker --single-instance --type=qtcomponents-qt5 \
        /usr/bin/asteroid-alarmclock
```



# Screenshots

---

The AsteroidOS Wayland compositor is named asteroid-launcher, it is based on lipstick which offers a DBus API to take screenshots. This DBus interface can be used from the command line with dbus-send but a tool named screenshottool makes the usage of this command easier.

```
# Saves a screenshot in $HOME after 3 seconds
screenshottool /home/ceres/screenshot.jpg 3
```

# Alarms

---

Managing the time is very important on a smartwatch. Systemd provides basic timer capabilities but the timed daemon goes further and is much more capable. This daemon also comes with a tool named `timedclient-qt5` that can help you run commands on special events.

```
# Executes the /home/ceres/test.sh script every day at 12:15
timedclient-qt5 -a'whenDue;runCommand=/home/ceres/test.sh@ceres' \
        -r'hour=12;minute=15;everyDayOfWeek;everyDayOfMonth;everyMonth' \
        -e'APPLICATION=Test;TITLE=Test'
```

# USB

---

In AsteroidOS, the USB mode is handled by a daemon named usb_moded. This daemon offers a DBus interface that is exposed to the GUI by asteroid-launcher and asteroid-settings. However, usb_moded also comes with a command named `usb_moded_util` to control this DBus interface from the command line.

```
usb_moded_util -m # Returns a list of supported modes
usb_moded_util -q # Shows the currently used USB mode
usb_moded_util -s adb_mode # Set USB to the ADB mode
```

# Screen

---

A daemon named MCE is in charge of handling various screen related behaviors. For example, MCE handles the device locking, the tap to unlock, the current brightness, fading and dimming and others.... It can be controlled thanks to a CLI tool named `mcetool`.

```
mcetool # Displays the current state of various variables
mcetool -D on # Enables "demo mode": screen stays on
mcetool -M disabled # Disables the tap to unlock functionality
```

# Restart

---

Systemd is the init system used by AsteroidOS. It is controlled by a command named `systemctl`. This command can be used to restart the user session or the entire system into a different mode.

```
systemctl restart user@1000 # Restarts the ceres session (including the entire UI)
reboot # Simply reboot your watch
systemctl --force reboot bootloader # Restarts the watch in bootloader mode
systemctl --force reboot recovery # Restarts the watch in recovery mode
```

# Time zone, date & time

---

Although we offer [synchronization clients]({{rel 'wiki/synchronization-clients'}}) for different platforms, it might still be useful to set the time zone or synchronise the date and time using standard Linux tools. The Linux folder `/usr/share/zoneinfo/` contains the naming scheme for your local time zone in `<continent>/<zone>` format.

**Please Note** that setting a time zone will break time sync with the forementioned client apps.

```
ssh root@192.168.2.15 "timedatectl set-timezone <continent>/<zone>" # e.g. Europe/Berlin
ssh root@192.168.2.15 "date -s @`(date -u +"%s" )`"
```

# Boot to fastboot (bootloader) menu

---

In case you can not boot to the fastboot menu using `adb reboot bootloader`, try the manual method for your watch specified below. These methods come in very handy in case your watch does neither boot AsteroidOS, nor WearOS successfully in its current state.

&nbsp;
#### Anthias, Bass, Dory, Lenok, Mooneye, Sparrow, Swift, Wren
During the first seconds of the boot process, swipe diagonally across the screen. Starting from the top/left outer edge of the screen to the bottom/right.

&nbsp;
#### Catfish, Skipjack
Power down the watch. Keep holding both buttons during the boot process until the fastboot menu appears.

&nbsp;
#### Firefish
After the watch stops vibrating on startup, immediately touch the top/left & bottom/right of the screen and press the middle button while the manufacturer logo displays.

&nbsp;
#### Sawfish, Sawshark, Sturgeon
Press and hold the power button when the manufacturer bootlogo appears, until the vibration finishes. Release the button and press it again quickly. The time frame for this method is short and might need several attempts. Some users report that spamming power button presses already during the vibration helps.

&nbsp;
#### Smelt
Keep holding the power button during the boot process and release it quickly after the second (double) vibration.
