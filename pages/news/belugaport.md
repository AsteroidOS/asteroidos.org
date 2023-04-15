---
title: OPPO Watch support
layout: news
posted: 2023-04-16
post: true
thumbnails: beluga
summary: The OPPO Watch, codenamed "beluga" is now supported by AsteroidOS.
author: Wannaphong Phatthiyaphaibun (wannaphong)
---
The OPPO Watch codenamed `beluga` is the best smartwatch from OPPO. Unlike other watches in the market with square screens, `beluga` has the most sensors (including a microphone), and has accessible USB connections that, unlike many smartwatches, do not require removing the back cover. 

# The porting process #
Porting AsteroidOS to `beluga` was difficult.  @MagneFire and I faced many problems. We found that the method used to port other AsteroidOS watches could not be used for `beluga`. For example, during porting, kernels are booted using the `fastboot boot` command.  This allows us to test the kernel in progress without writing anything to the watch that might make it not bootable, otherwise known as "bricking" the device. After many tries with different kernel patches and configuration variations, a different method was found: flashing the `recovery` partition. This is required because the OPPO Watch has a security chip that blocks running another kernel.  This is why the temporary install is very hard to do on this watch. After we could get the details of software in the watch using our kernel, we found OPPO Watch uses a version of WearOS which is based on the Android 9 kernel, unlike other watches in AsteroidOS at the time that used the Android 8 kernel. So @MagneFire coded a new layer to add support for newer watches originally based on the Android 9 kernel. Since Android 9 hardware drivers are mostly using a different method to access the hardware (hwbinder interface). The AsteroidOS packages weren't yet configured for this. Once these issues were solved, AsteroidOS started running much better on `beluga`, gaining high hardware compatibility. Finally, the result is that we not only now have AsteroidOS support for the OPPO Watch, but now AsteroidOS can also more easily support other watches originally based on the newer Android kernel.

# Some firsts #
Not only is this the first port that was originally based on Android 9, but it's also the first watch supported by AsteroidOS that uses the Snapdragon Wear 3100 chip.
