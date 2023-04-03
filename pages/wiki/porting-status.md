---
title: Porting Status
layout: documentation
---
This page aims at gathering info about the currently supported platforms and porting efforts.

# WearOS Smartwatches
---

The WearOS smartwatches are the most widespread and easy to support. The source code of their kernels is usually easily available and the drivers can be supported with [libhybris](https://github.com/libhybris/libhybris). Those watches are the current priority of AsteroidOS.

### Supported watches

{{#each (getAllWithStatus "supported")}}
- <a href="../../install/{{#if reference}}{{reference}}{{else}}{{name}}{{/if}}">{{models}} ({{name}})</a>
{{#if maintainers}}
  - maintained by {{#maintainers}}{{#if @index}}, {{/if}}{{.}}{{/maintainers}}
{{else}}
  - *unmaintained*
{{/if}}
{{/each}}

### Experimental watches

{{#each (getAllWithStatus "experimental")}}
- <a href="../../install/{{#if reference}}{{reference}}{{else}}{{name}}{{/if}}">{{models}} ({{name}})</a>
{{#if maintainers}}
  - maintained by {{maintainers}}
{{else}}
  - *unmaintained*
{{/if}}
{{/each}}

&nbsp;
### Unreleased early ports with initial support
- [Casio WSD-FXX Series (ayu/koi)](https://github.com/AsteroidOS/meta-smartwatch/pull/140) maintained by dodoradio
- [Fossil Gen5 (triggerfish)](https://github.com/AsteroidOS/meta-smartwatch/pull/138) maintained by dodoradio
- [LG Watch Urbane 2nd Edition (nemo)](https://github.com/AsteroidOS/meta-smartwatch/pull/153) maintained by eLtMosen

&nbsp;
### Possible ports not yet supported
- Diesel Full Guard (pinouts are on the inside)
- Elephone Ele Watch
- Emporio Armani Connected (pinouts are on the inside)
- Fossil Q Explorist (pinouts are on the inside)
- Guess Connect
- Hugo BOSS BOSS Touch
- Michael Kors Access Grayson (pinouts are on the inside)
- Misfit Vapor
- Montblanc Summit
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
### Impossible ports because of lack of pinouts
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
- Skagen Falster

&nbsp;
### Impossible ports due to unmet hardware dependencies

- Fitbit watches & smartbands
- Honor Magic Watch 2
- Huawei Watch GT Series
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
