---
title: Emulator
layout: documentation
---

If you don't have a supported smartwatch or if you want to develop an app without having to touch your device you can try AsteroidOS in an emulator.

**Note:** The emulator has some known issues under x11 sessions. Make sure that you run it in a wayland session. You can check your session type with `echo $XDG_SESSION_TYPE`.

# Get a qemux86 build of AsteroidOS

Nightly builds of AsteroidOS for QEMU can be found [here](https://release.asteroidos.org/nightlies/qemux86/). You will need to download [a prebuilt rootfs](https://release.asteroidos.org/nightlies/qemux86/asteroid-image-qemux86.ext4) and [kernel](https://release.asteroidos.org/nightlies/qemux86/bzImage-qemux86.bin).

If you want more control over your asteroid image, you can also [build AsteroidOS yourself](https://asteroidos.org/wiki/building-asteroidos/) using the "qemux86" machine codename (the resulting rootfs and kernel will then be located in your `build/tmp-glibc/deploy/images/qemux86/` directory).

# Get an appropriate version of QEMU

The AsteroidOS emulator image requires a paravirtualized GPU only offered by QEMU when built with support for Virgil3D. Recent distribitions (such as Fedora 27) offer QEMU packages built with Virgil and can be used directly to run AsteroidOS.

Unfortunately, most Linux distributions (such as Debian) still do not provide QEMU packages with support for this setup. Moreover, OpenEmbedded currently offers no clean way to build a host QEMU binary with Virgil due to various constraints. You then need to compile QEMU yourself.

**TODO:** Test and integrate a set of QEMU build instructions like the ones provided by [the Genivi project](https://at.projects.genivi.org/wiki/display/GDP/QEMU+with+hardware+graphics+acceleration#QEMUwithhardwaregraphicsacceleration-Compiling).

# Run AsteroidOS

Once you have a correct version of QEMU, a rootfs and a kernel, you can start AsteroidOS in an emulator using:

```bash
qemu-system-i386 -enable-kvm -kernel bzImage-qemux86.bin \
-device virtio-vga,virgl=on \
-net nic -net user,hostfwd=tcp::2222-:22 \
-drive format=raw,file=asteroid-image-qemux86.ext4 \
-m 512 \
-display sdl,gl=on \
-cpu qemu64,+ssse3,+sse4.1,+sse4.2 \
-device usb-mouse -machine usb=on \
--append "quiet root=/dev/hda rw mem=512M video=800x800"
```

The previous command sets up a port forwarding so that you can connect to the emulator using SSH with the following command:

```
ssh -p 2222 ceres@localhost
```
