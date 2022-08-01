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
- [Asus Zenwatch 1](https://asteroidos.org/install/anthias) *(maintained by locusf)*
- [Asus Zenwatch 2](https://asteroidos.org/install/sparrow) *(maintained by Lrs121 & dlandau)*
- [Asus Zenwatch 3](https://asteroidos.org/install/swift) *(maintained by anYc)*
- [Fossil Gen 4](https://asteroidos.org/install/firefish) *(maintained by dodoradio & MagneFire)*
- [Huawei Watch](https://asteroidos.org/install/sturgeon) *(maintained by MagneFire)*
- [Huawei Watch 2](https://asteroidos.org/install/sawfish) *(maintained by MagneFire, flocke, fosspill, FlorentBrianFoxcorner, jrt and the community)*
- [LG G Watch](https://asteroidos.org/install/dory) *(maintained by kido)*
- [LG G Watch R](https://asteroidos.org/install/lenok) *(maintained by atx)*
- [LG Watch Urbane](https://asteroidos.org/install/bass) *(maintained by TheAppleMan & kido)*
- [LG Watch W7](https://asteroidos.org/install/narwhal) *(maintained by dodoradio & MagneFire)*
- [Moto 360 (1st gen)](https://asteroidos.org/install/minnow) *(maintained by MagneFire)*
- [Moto 360 (2nd gen)](https://asteroidos.org/install/smelt) *(maintained by MagneFire)*
- [Skagen Falster 2](https://asteroidos.org/install/ray) *(maintained by MagneFire)*
- [OPPO Watch](https://asteroidos.org/install/beluga) *(maintained by MagneFire & wannaphong)*
- [Sony Smartwatch 3](https://asteroidos.org/install/tetra) *(unmaintained)*
- [Ticwatch E & S](https://asteroidos.org/install/mooneye) *(maintained by kido)*
- [Ticwatch C2/C2+/S2](https://asteroidos.org/install/skipjack) *(maintained by R0NAM1)*
- [Ticwatch Pro](https://asteroidos.org/install/catfish) *(maintained by C9Glax, LecrisUT & MagneFire)*

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
