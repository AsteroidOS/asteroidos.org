---
title: Porting Status
layout: documentation
---
This page aims at gathering info about the currently supported platforms and porting efforts.

# WearOS Smartwatches
---

The WearOS smartwatches are the most widespread and easy to support. The source code of their kernels is usually easily available and the drivers can be supported with [libhybris](https://github.com/libhybris/libhybris). Those watches are the current priority of AsteroidOS.

&nbsp;
#### Supported watches:
- Asus Zenwatch *(maintained by locusf)*
- Asus Zenwatch 2 *(maintained by Lrs121 & dlandau)*
- Asus Zenwatch 3 *(maintained by anYc)*
- Huawei Watch *(maintained by MagneFire)*
- LG G Watch *(maintained by kido)*
- LG G Watch R *(maintained by atx)*
- LG G Watch Urbane *(maintained by TheAppleMan & kido)*
- Moto 360 (2nd generation) *(maintained by MagneFire)*
- Samsung Gear Live *(maintained by kido) support currently broken*
- Sony Smartwatch 3 *(maintained by kido)*
- Ticwatch E & S *(maintained by kido)*

&nbsp;
#### Possible ports not supported yet:

- Casio Smart Outdoor Watch
- Diesel Full Guard (pinouts are on the inside)
- Elephone Ele Watch
- Emporio Armani Connected (pinouts are on the inside)
- Fossil Q Explorist (pinouts are on the inside)
- Guess Connect
- Huawei Watch 2
- Hugo BOSS BOSS Touch
- LG Watch Urbane 2nd Edition
- Michael Kors Access Grayson (pinouts are on the inside)
- Misfit Vapor
- Montblanc Summit
- Moto 360 (1st generation)
- Moto 360 Sport
- Nixon Mission
- New Balance RunIQ Watch
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

- Huawei Watch GT
- Huawei Watch GT 2
- PineTime
- Umidigi Uwatch GT
- Honor Magic Watch 2

# Tizen Smartwatches
---

The Samsung Gear S2, S2 Classic and S3 might be supported by AsteroidOS in the future but they will require more work than the other watches. Someone already got interested in the S2 port but gave up because he couldn’t find the kernel’s defconfig.

# Other Smartwatches
---

There are many Android (non-Wear) smartwatches available for a lower price. (e.g: the Omate *, Sony SW, Intex iRist, zWatch etc…) It might be more difficult to get access to the kernel’s or android tree of those devices but libhybris could also make running AsteroidOS on top of them possible. This is typically the case of the MTK6580 watches.

Other low-end smartwatches using cheap Mediatek SoCs aren’t able to run a Linux kernel and can’t be supported by AsteroidOS.
