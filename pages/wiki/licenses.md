---
title: Licenses
layout: documentation
---

An AsteroidOS image is made of plenty of components and it’s hard to describe the full details of all the licenses that are in use in the system.\
However, when building the system from sources with OpenEmbedded, one can find the exhaustive set of licenses used by each package in the `build/tmp-glibc/deploy/licenses` directory.\
It’s also worth noticing that on most watches, a few proprietary blobs and firmware need to be used for GPU acceleration and Bluetooth. They are isolated components which can be found in the <code>/vendor/</code> directory and they are used via `libhybris`.


The licenses directory of nightly builds is [published online](https://release.asteroidos.org/nightlies/licenses/) for you to check.\
The licenses directory of the latest stable version is also available [here](https://release.asteroidos.org/1.0/licenses/)

# Global Overview

- All the apps are distributed under GPLv3.
- QML-Asteroid is distributed under LGPL-2.1.
- asteroid-launcher is distributed under BSD.
- The wallpapers are covered by the CC BY 2.0 and the logo by CC BY SA 2.0.
