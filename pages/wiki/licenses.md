---
title: Licenses
layout: documentation
---

<p>An AsteroidOS image is made of plenty of components and it’s hard to describe the full details of all the licenses that are in use in the system. However, when building the system from sources with OpenEmbedded, one can find the exhaustive set of licenses used by each package in the build/tmp-glibc/deploy/licenses directory.</p>

<p>The licenses directory of nightly builds is <a href="https://release.asteroidos.org/nightlies/licenses/">published online</a> for you to check.</p>
<p>The licenses directory of the latest stable version is also available <a href="https://release.asteroidos.org/1.0/licenses/">here</a>.</p>

<h1>Global Overview</h1>
<p>All the apps are distributed under GPLv3. QML-Asteroid is distributed under LGPL-2.1. asteroid-launcher is distributed under BSD. The wallpapers are covered by the CC BY 2.0 and the logo by CC BY SA 2.0.</p>

<p>It’s also worth noticing that on most watches, a few proprietary blobs and firmware need to be used for GPU acceleration and Bluetooth. They are isolated components which can be found in the /vendor/ directory and they are used via <em>libhybris</em>.</p>
