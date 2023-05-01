---
title: Fossil Gen 6 support
layout: news
posted: 2023-06-03
post: true
thumbnails: hoki
summary: The Fossil Gen 6, codenamed "hoki" is now supported by AsteroidOS.
author: Darrel Griët (MagneFire)
---

AsteroidOS has been ported to the Fossil Gen 6!

This port is quite unique as it's the first Snapdragon Wear 4100 watch to gain AsteroidOS support.

The port isn't perfect out of the box. Check our [GitHub repository](https://github.com/AsteroidOS/meta-smartwatch/issues?q=is%3Aissue+is%3Aopen+label%3Ahoki) for the current issues.

Most of the currently supported watches can't be bought new. This brought up the desire to port AsteroidOS to newer watches. Breaking new grounds with this sort of ports helps us gain useful knowledge for future ports.

The Fossil Gen 6 was specifically chosen in favor of the TicWatch Pro 3 (some of [our community members](https://github.com/AsteroidOS/meta-smartwatch/issues/175) now own this watch) because it exposes a regular USB connection. Making it easier to install AsteroidOS as there's no need for special cables or docks.

# Kernel sources

The challenge began with Fossil Group not having the kernel sources available for download.
A community member (Zoey) and I contacted Fossil Group separately to inquire for the kernel sources as they legally should because the Linux kernel is licensed under GPL-2.0.

I didn't think this would be particularly hard since all previous Fossil and Skagen watches have the kernel sources hosted by [Google](https://android.googlesource.com/kernel/msm/+refs).
However it took Fossil Group some time to release the kernel sources for the Fossil Gen 6.
After a couple of back and forths with Fossil Group, an issue was raised internally. Following this, it took about four months for them to release the kernel [sources](https://github.com/fossil-engineering/kernel-msm-fossil-cw).

This would make it possible to start a new port.

# The port

The watch originally launched with Android 9 based WearOS 2.0 which someone on XDA has posted for [download](https://forum.xda-developers.com/t/need-fossil-gen-6-ota-url.4387157/post-86792599).

This made an initial port relatively straightforward as we already have watches using a similar Android 9 base.

Getting the kernel to compile was a bit challenging as the vendor kernel doesn't actually provide a [device tree](https://github.com/fossil-engineering/kernel-msm-fossil-cw/blob/fossil-android-msm-hoki-lw1.2-4.14/arch/arm64/boot/dts/qcom/Makefile#L2). The device tree was recreated by dumping the flash memory using [this](https://forum.xda-developers.com/t/twrp-twrp-for-fossil-gen-6-aka-hoki.4474863/) TWRP image followed by decompiling the Device tree Blob and packaging that with the kernel source. There was also a function missing. Once this was fixed the kernel started booting!

Relatively few other patches were required to get the AsteroidOS UI up and running. It mostly consisted of adapting `beluga` specific changes such that they would work with `hoki`.

# Thank you

This port wouldn't be possible without the help from the following individuals:
- dodoradio who helped write formal e-mails to Fossil Group.
- Charlotte from Fossil Group. Helping raise the issue internally.
