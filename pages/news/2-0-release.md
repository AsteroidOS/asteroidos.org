---
title: AsteroidOS 2.0 Release Announcement

layout: news

posted: 2025-02-05

post: true

thumbnails: 2-0-asteroidos

summary: AsteroidOS 2.0 introduces major features and improvements, including Always-on-Display, expanded watch support, new launcher styles, performance enhancements, and updated synchronization clients.

author: AsteroidOS Team

---

# AsteroidOS 2.0 Has Landed

Asteroids travel steadily, occasionally leaving observable distance. It has been a while since our last release, and now it's finally here!

AsteroidOS 2.0 has arrived, bringing major features and improvements gathered during its journey through community space. Always-on-Display, expanded support for more watches, new launcher styles, significant performance increases in parts of the User Interface, and enhancements to our synchronization clients are just some highlights of what to expect.

## Milestones Reached

   * [Always-on Display](https://github.com/AsteroidOS/asteroid/issues/58)
   * [Tilt-to-wake](https://github.com/AsteroidOS/mce/pull/6)
   * [Palm-to-sleep](https://github.com/AsteroidOS/mce/pull/11)
   * [Heart rate monitor app](https://github.com/AsteroidOS/asteroid-hrm)
   * [Music volume control](https://github.com/AsteroidOS/AsteroidOSSync/pull/117)
   * [Compass support](https://github.com/AsteroidOS/asteroid-compass)
   * [Initial step counting support](https://github.com/AsteroidOS/qtsensors/pull/1)
   * [Support for Bluetooth HID and Audio](https://github.com/AsteroidOS/meta-asteroid/pull/27)
   
## Performance and System Enhancements

- **Optimized Rendering**  
  Significant performance improvements have been made to the User Interface, resulting in smoother animations and transitions.

- **Battery Life Improvements**  
  Various optimizations have been implemented to extend battery life during daily use.

- **Stability Fixes**  
  Numerous bug fixes and stability improvements have been applied across the system.

## Design, Usability, and App Improvements

   * [New App Launchers](https://github.com/AsteroidOS/asteroid-settings/pull/35)  
Four more App Launcher styles have been added. Those can be selected in the new Launcher settings page.
   * [Enhanced Wallpaper](https://github.com/AsteroidOS/asteroid-settings/pull/39) and [Watchface gallery](https://github.com/AsteroidOS/asteroid-settings/pull/40)  
Watchfaces are now paired with the user selected Wallpaper already in the Watchface gallery. Helping to find your favourite combination at a glance. Both pages received major performance improvements.
   * [Nightstand mode](https://github.com/AsteroidOS/asteroid-settings/pull/49)  
Use your watch as a bedside clock or simply show charging much more clearly. Selected watchfaces show a large charging status when power is connected. 
The nightstand settings page makes this mode very versatile.
   * [New UI elements and polished icons](https://github.com/AsteroidOS/asteroid-icons-ion/pull/18/files)  
Improved toggles, progress bars and other UI elements by unifying the design and removing inconsistencies.
   * [Ringtone vibration pattern](https://github.com/AsteroidOS/asteroid/issues/99)  
Customise all the things! Here, the vibration pattern on incoming calls.
   * [Calculator app with new layout](https://github.com/AsteroidOS/asteroid-calculator/pull/4)  
Improved button layout for easier operation and better legibility, especially on round displays.
   * [New wallpapers](https://github.com/AsteroidOS/asteroid-wallpapers/pull/4)  
Extending on the well received flatmesh design, triangulated wallpapers turned out to fit beautifully.
   * [Diamonds](https://github.com/AsteroidOS/asteroid-diamonds)  
A 2048 like game with a fresh twist. Suited nicely for small resolutions and displays.
   * [More translations (49 languages)](https://hosted.weblate.org/projects/asteroidos/)  
More then 20 languages added since our last release thanks to much welcome community effort.
   * [Noto Sans system font](https://github.com/notofonts)  
Supporting the localisation efforts, Noto Sans offers consistent font styles for many languages with custom character set.
   * [Color Emoji](https://github.com/AsteroidOS/meta-asteroid/pull/56)  
Underlining the flat nature of our UI, we moved from Noto Color Emoji to Twemoji.
   * [Weather app design overhaul](https://github.com/AsteroidOS/asteroid-weather/pull/12)  
Embracing the new possibilities Noto Sans and its vast variety of font styles offers. The weather app got refined towards better legibility and presentation of very long place names.
   * [Timer app redesign](https://github.com/AsteroidOS/asteroid-timer/pull/10)  
The timer app works in the background now. It got optimised for use on round watches. The design is now consistent with the stopwatch.
   * [Flashlight app](https://github.com/AsteroidOS/asteroid-flashlight)  
Yup, it flashes light. Most useful, so it got added to the stock selection.
   * [Animated Bootsplash logo](https://github.com/AsteroidOS/meta-asteroid/commit/b8f4403139cabf0ff83a663968d901c668151180)  
A very small touch. But yet another possibility for designers to get involved.
   * [Round screens with a tyre cut-off](https://github.com/AsteroidOS/meta-asteroid/pull/41) are now supported.

## Expanded Watch Support

Since 1.0 we added support for the following watches:

   * Fossil Gen 4 Watches (firefish/ray)
   * Fossil Gen 6 Watches (hoki)
   * Huawei Watch (sturgeon)
   * Huawei Watch 2 (sawfish/sawshark)
   * LG Watch W7 (narwhal)
   * Moto 360 2015 (smelt)
   * MTK6580 (harmony/inharmony)
   * OPPO Watch (beluga)
   * Polar M600 (pike)
   * Ticwatch C2+ \& C2 (skipjack)
   * Ticwatch E \& S (mooneye)
   * Ticwatch E2 \& S2 (tunny)
   * Ticwatch Pro, Pro 2020 and LTE (catfish/catfish-ext/catshark)

For a complete list of supported devices and installation instructions, please visit our [installation guide](https://asteroidos.org/install/).

Apart from adding new watches, the community has also been actively enhancing the support for our existing range of watches.
Visit our newly created [feature matrix page](https://asteroidos.org/install/features/) to find out about the detailed support level for your watch.

Despite recent minor improvements, we have decided to remove the Sony Smartwatch 3 (tetra) from our official support due to unresolved hardware [issues](https://github.com/AsteroidOS/meta-tetra-hybris/issues). Additionally, the Samsung Gear Live (sprat) is currently in an unusable state due to persistent display issues. Although the Moto 360 1st gen (minnow) has been successfully ported, it shows underwhelming performance as it is the only watch we have ported with a TI SoC. We will continue to provide install images for these watches, and we welcome new contributors with fresh ideas to help improve support. However, for the time being, we have created an Experimental category in our watch gallery for watches that we do not consider to be suitable for daily use.

## Synchronisation Clients

### [AsteroidOS Sync](https://f-droid.org/en/packages/org.asteroidos.sync/) (Android)

   * [Call detection and display](https://github.com/AsteroidOS/AsteroidOSSync/pull/110)
   * [New Bluetooth lib](https://github.com/AsteroidOS/AsteroidOSSync/pull/127) should improve stability and simplify the paring process
   * [Custom OWM API key support](https://github.com/AsteroidOS/AsteroidOSSync/pull/142)
   * A more modular architecture, allowing for easier extending and maintainability of the app.

### [Gadgetbridge AsteroidOS support](https://codeberg.org/Freeyourgadget/Gadgetbridge) (Android)

Thanks to Noodlez, initial AsteroidOS support has been added to [Gadgetbridge version 0.73.0](https://codeberg.org/Freeyourgadget/Gadgetbridge/src/branch/master/CHANGELOG.md). 

### [Amazfish](https://github.com/piggz/harbour-amazfish) (SailfishOS and Linux Desktop)

Jozef Mlich has added AsteroidOS support to Adam Piggs Amazfish. Initially [developed for SailfishOS](https://sailfishos-chum.github.io/apps/harbour-amazfish/), Amazfish is now also [available in kirigami flavour for linux desktops](https://github.com/piggz/harbour-amazfish).

### [Telescope](https://open-store.io/app/telescope.asteroidos) (UBports Ubuntu Touch)

After our initial release [StefWe](https://github.com/StefWe) created [Telescope](https://github.com/AsteroidOS/telescope) a sync client for UBports.

## Community Contributions

This release would not have been possible without the dedicated efforts of our community contributors. We extend our heartfelt thanks to everyone who reported issues, submitted patches, and provided feedback during the development cycle.

Over the years, the AsteroidOS community has expanded its reach, with community translators adding over 20 languages to the [AsteroidOS Weblate](https://hosted.weblate.org/projects/asteroidos/#languages). Translating into your local language is the easiest way to get involved. Your help is most valuable to make AsteroidOS fit for use in your region.

Watchface creation has been a popular community activity lately. We are happy to present the new and comprehensive [watchfaces creation and design guide](https://asteroidos.org/wiki/watchfaces-creation/). It is garnished with testing and deployment scripts to simplify the process further. 
Our community came up with funny and beautiful new watchfaces. Those are all collected in the [unofficial watchfaces repository](https://github.com/AsteroidOS/unofficial-watchfaces).

eLtMosen has contributed a variety of watchfaces. Two highlights are the minimalistic [pulsedot](https://youtu.be/cXeWRX6N6Sg) and a classic Monty Python inspired [silly walks watchface](https://twitter.com/eLtMosen/status/1403642123338014722).

MagneFire did show-off [Doom](https://twitter.com/MagneFire_/status/1230159641004445696), [Super Tux Kart](https://fosstodon.org/@MagneFire/107105850296484856), [gpSP](https://twitter.com/MagneFire_/status/1220789841673236485) and other [emulated games](https://twitter.com/MagneFire_/status/1353443545831510016) on his watch. The native 2048 port called diamonds was recently included into the stock set of apps.

Dodoradio worked on a few unusual watches, like the [LG Watch W7](https://asteroidos.org/install/narwhal/) with its physical hands to be taken into account. And the [Casio WSD-FXX series](https://github.com/AsteroidOS/meta-smartwatch/pull/140) sporting multifunctional secondary displays. Along with some more conventional ports such as the Fossil Gen5 and Polar M600. For watches with GPS, he contributed a [Map app with waypoint functionality](https://git.dodorad.io/dodoradio/asteroid-map/about) to the community repository.

Beroset implemented the new [Nightstand mode](https://asteroidos.org/news/nightstand/index.html). In addition to his efforts in maintaining the build tools, Beroset has also developed [host-tools](https://github.com/beroset/asteroid-hosttools) which make it easier to work on watches from a Linux host. Furthermore, he has included a user-friendly GUI for deploying watchfaces.

PostmarketOS now offers our launcher and core apps, thanks to postmarketOS developer PureTryOut, who moved our buildsystem from qmake to cmake along the way.

The program [lcd-tools](https://github.com/AsteroidOS/lcd-tools) by lecris and Magnefire was originally developed to control the secondary LCD on the TicWatch Pro. And got extended by dodoradio and beroset to make use of many more features the casio secondary displays offer.

MagneFire, jrt, eLtMosen and beroset joined the AsteroidOS team.

## Infrastructure

Our website [asteroidos.org](https://asteroidos.org) has seen a major content extension.
   * A [FAQ](https://asteroidos.org/faq/) section has been added to provide a quick overview of our project.
   * The Install page has grown into a gallery of supported watches over time with now 22 watches listed. We renamed it to "[Watches](https://asteroidos.org/watches/)" and plan to evolve this page into a purchase guide to aid new users in choosing a supported watch. A first step was to resize the images of all watches to correctly reflect the relative size differences between them, to be able to compare their dimensions.
   * The [Documentation](https://asteroidos.org/wiki/documentation/) pages are frequently updated by community members and nicely keep up with the current state of development. We recently switched to Markdown as our primary markup language for documentation. This enables users without deeper knowledge to contribute to the documentation via GitHub's integrated editor. And will help us to switch the static site generator in the future.

The creator of the unofficial [Subreddit](https://www.reddit.com/r/AsteroidOS/) gave us full access, making it an official channel alongside our [Mastodon account](https://fosstodon.org/@AsteroidOS).

As we already mentioned in a [previous blog post](https://asteroidos.org/news/farewell-freenode), we moved all our communication from freenode to Matrix and Libera.chat. You are invited to join the AsteroidOS Matrix channel using this link. [https://matrix.to/#/#Asteroid:matrix.org](https://matrix.to/#/#Asteroid:matrix.org)

With 2.0 we introduce a community repository, to improve discoverability and simplify the installation of precompiled packages, while building the foundation for a possible graphical software center in the future. Currently, the repository consists of a few debugging tools, community watchfaces, games and emulators. Developers are welcome to create pull requests on the [meta-community](https://github.com/AsteroidOS/meta-asteroid-community) repo for packaging.

After moving our infrastructure to a larger server, we have seen an increase in the frequency of nightly releases. However, it is worth noting that completely rebuilding all packages for all 26 watch system images still takes almost a week. Therefore, we can expect the nightlies to be ready on weekends. 

## Getting Involved

Interested in contributing to AsteroidOS? Whether you're a developer, designer, or enthusiast, there are many ways to get involved:

- **Join our [community forums](https://asteroidos.org/community/)** to discuss ideas and share feedback.
- **Report issues or suggest features** on our [GitHub repository](https://github.com/AsteroidOS/asteroid).
- **Contribute to the codebase** by tackling open issues or developing new features.

Your participation helps make AsteroidOS better for everyone.

## Download AsteroidOS 2.0

Ready to experience the latest features and improvements? Download AsteroidOS 2.0 from our [official website](https://asteroidos.org/download/) and follow the installation instructions for your device.

Thank you for your continued support. We hope you enjoy AsteroidOS 2.0!

*Note: For detailed release notes and a comprehensive list of changes, please refer to our [release page](https://github.com/AsteroidOS/asteroid/releases/tag/v2.0).*

## The Future

As you might have noticed, the current releases linked on the installation pages have feature parity with the 2.0 release. At some point, we decided to switch from our stable 1.0 release to a quasi 1.1 nightly rolling release, as the 1.0 release became too old to maintain. In the future, we would like to change our release cycle to offer more frequent stable releases. A stable release will always be stable. But not too old to no longer be maintainable.

For the future, we are going to set up a roadmap for features we would like to see in an eventual next release.
Based on recent early community work, we might see features like:

   * Combined fitness app (Privacy minded heart rate monitoring and step counter tracking)
   * WiFi setup via the settings app
   * Web based Watchface creation tool
   * Web based flash tool
   * App store for making community contributions easily available
