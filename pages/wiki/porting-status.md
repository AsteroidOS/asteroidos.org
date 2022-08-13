---
title: Porting Status
layout: documentation
---
This page aims at gathering info about the currently supported platforms and porting efforts.

# WearOS Smartwatches
---

The WearOS smartwatches are the most widespread and easy to support. The source code of their kernels is usually easily available and the drivers can be supported with [libhybris](https://github.com/libhybris/libhybris). Those watches are the current priority of AsteroidOS.

&nbsp;
#### Supported watches and other ports:
- [Asus Zenwatch 1 - anthias]({{rel 'install/anthias)'}}
  - *maintained by locusf*
- Asus Zenwatch 2 [1,63" - sparrow]({{rel 'install/sparrow'}}) / [1,45" - wren]({{rel 'install/wren)'}}
  - *maintained by Lrs121 & dlandau*
- [Asus Zenwatch 3 - swift]({{rel 'install/swift)'}}
  - *maintained by anYc*
- [Fossil Gen 4 - firefish]({{rel 'install/firefish)'}}
  - *maintained by dodoradio & MagneFire*
- [Huawei Watch - sturgeon]({{rel 'install/sturgeon)'}}
  - maintained by MagneFire*
- [Huawei Watch 2 - sawfish/sawshark]({{rel 'install/sawfish)'}}
  - *maintained by MagneFire, flocke, fosspill, FlorentBrianFoxcorner, jrt and the community*
- [LG G Watch - dory]({{rel 'install/dory)'}}
  - *maintained by kido*
- [LG G Watch R - lenok]({{rel 'install/lenok)'}}
  - *maintained by atx*
- [LG Watch Urbane - bass]({{rel 'install/bass) '}}
  - *maintained by TheAppleMan & kido*
- [LG Watch W7 - narwhal]({{rel 'install/narwhal)'}}
  - *maintained by dodoradio & MagneFire*
- [Moto 360 (1st gen) - minnow]({{rel 'install/minnow)'}}
  - *maintained by MagneFire*
- [Moto 360 (2nd gen) - carp/smelt]({{rel 'install/smelt)'}}
  - *maintained by MagneFire*
- [OPPO Watch (41/46mm) - beluga]({{rel 'install/beluga)'}}
  - *maintained by MagneFire & wannaphong*
- [Skagen Falster 2 - ray]({{rel 'install/ray)'}}
  - *maintained by MagneFire* 
- [Sony Smartwatch 3 - tetra]({{rel 'install/tetra)'}}
  - *unmaintained*
- [Ticwatch E & S - mooneye]({{rel 'install/mooneye)'}}
  - *maintained by kido*
- [Ticwatch C2/C2+/S2 - skipjack]({{rel 'install/skipjack)'}}
  - *maintained by R0NAM1*
- [Ticwatch Pro - catfish/catfish_ext/catshark]({{rel 'install/catfish)'}}
  - *maintained by C9Glax, LecrisUT & MagneFire*

&nbsp;
#### Possible ports not supported yet:

- Casio Smart Outdoor Watch
- Diesel Full Guard (pinouts are on the inside)
- Elephone Ele Watch
- Emporio Armani Connected (pinouts are on the inside)
- Fossil Q Explorist (pinouts are on the inside)
- Guess Connect
- Hugo BOSS BOSS Touch
- LG Watch Urbane 2nd Edition
- Michael Kors Access Grayson (pinouts are on the inside)
- Misfit Vapor
- Montblanc Summit
- Moto 360 Sport
- Nixon Mission
- New Balance RunIQ Watch
- Samsung Gear Live *(no longer maintained)*
- Samsung Gear S
- Tag Heuer Connected
- Tag Heuer Connected Modular 45
- Tommy Hilfiger 24/7 You
- Verizon Wear 24
- ZTE Quartz

&nbsp;
#### Impossible ports because of lack of pinouts:
- Fossil Q Control
- Fossil Q Founder
- Fossil Q Marshal
- Fossil Q Venture
- Fossil Q Wander
- Gc Connect
- LG Watch Sport
- LG Watch Style
- Louis Vuitton Tambour
- Michael Kors Access
- Michael Kors Access Mesdames
- Michael Kors Dylan
- Michael Kors Sofie
- Movado Connect
- Polar M600
- Skagen Falster

&nbsp;
#### Impossible ports due to unmet hardware dependencies:

- Honor Magic Watch 2
- Huawei Watch GT
- Huawei Watch GT 2
- OPPO Watch Free
- PineTime
- Umidigi Uwatch GT

# Tizen Smartwatches
---

The Samsung Gear S2, S2 Classic and S3 might be supported by AsteroidOS in the future but they will require more work than the other watches. Someone already got interested in the S2 port but gave up because he couldn’t find the kernel’s defconfig.

# Other Smartwatches
---

There are many Android (non-Wear) smartwatches available for a lower price. (e.g: the Omate *, Sony SW, Intex iRist, zWatch etc…) It might be more difficult to get access to the kernel’s or android tree of those devices but libhybris could also make running AsteroidOS on top of them possible. This is typically the case of the MTK6580 watches.

Other low-end smartwatches using cheap Mediatek SoCs aren’t able to run a Linux kernel and can’t be supported by AsteroidOS.
