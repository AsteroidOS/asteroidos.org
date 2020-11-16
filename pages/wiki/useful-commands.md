---
title: Useful commands
layout: documentation
---

AsteroidOS comes with several command line tools that are very handy to control a watch from SSH or a script. This page tries to document the basic features of those commands, don't hesitate to use their --help options if you want to learn more.

# Notifications

---

AsteroidOS complies to the [freedesktop.org notifications specification](https://people.gnome.org/~mccann/docs/notification-spec/notification-spec-latest.html), which means you can use standard Linux desktop tools such as libnotify to show notifications in asteroid-launcher. However, lipstick already comes with a useful command named `notificationtool` that allows to create/update/close/list notifications from the CLI.

```
# Creates a new notification with various paramters
notificationtool -o add \
        --icon=ios-happy \
        --application="Super App" \
        --urgency=3 \
        --hint="x-nemo-preview-summary Incredible preview title" \
        --hint="x-nemo-preview-body Exceptional preview content" \
        --hint="x-nemo-feedback information_strong" \
        "Great Title" \
        "Amazing content"
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

Systemd is the init system used by AsteroidOS. It is controlled by a command named `systemctl`. This command can be used to restart the user session or the entire system into different mode.

```
systemctl restart user@1000 # Restarts the ceres session (including the entire UI)
reboot # Simply reboot your watch
systemctl --force reboot bootloader # Restarts the watch in bootloader mode
systemctl --force reboot recovery # Restarts the watch in recovery mode
```
