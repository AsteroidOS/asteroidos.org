---
title: Emulator
layout: documentation
---

<p>If you don't have a supported smartwatch or if you want to develop an app without having to touch your device you can try AsteroidOS in an emulator.</p>

<div class="page-header">
  <h1 id="getqemuasteroid">Get a qemux86 build of AsteroidOS</h1>
</div>

<p>Nightly builds of AsteroidOS for QEMU can be found <a href="https://release.asteroidos.org/nightlies/qemux86/">here</a>. You will need to download <a href="https://release.asteroidos.org/nightlies/qemux86/asteroid-image-qemux86.ext4">a prebuilt rootfs</a> and <a href="https://release.asteroidos.org/nightlies/qemux86/bzImage-qemux86.bin">kernel</a>.</p>

<p>If you want more control over your asteroid image, you can also <a href="https://asteroidos.org/wiki/building-asteroidos/">build AsteroidOS yourself</a> using the "qemux86" machine codename (the resulting rootfs and kernel will then be located in your <i>build/tmp-glibc/deploy/images/qemux86/</i> directory).</p>

<div class="page-header">
  <h1 id="getappropriateqemu">Get an appropriate version of QEMU</h1>
</div>

<p>The AsteroidOS emulator image requires a paravirtualized GPU only offered by QEMU when built with support for Virgil3D. Recent distribitions (such as Fedora 27) offer QEMU packages built with Virgil and can be used directly to run AsteroidOS.</p>

<p>Unfortunately, most Linux distributions (such as Debian) still do not provide QEMU packages with support for this setup. Moreover, OpenEmbedded currently offers no clean way to build a host QEMU binary with Virgil due to various constraints. You then need to compile QEMU yourself.</p>

<p><b>TODO:</b> Test and integrate a set of QEMU build instructions like the ones provided by <a href="https://at.projects.genivi.org/wiki/display/GDP/QEMU+with+hardware+graphics+acceleration#QEMUwithhardwaregraphicsacceleration-Compiling">the Genivi project</a>.</p>

<div class="page-header">
  <h1 id="runasteroidqemu">Run AsteroidOS</h1>
</div>

<p>Once you have a correct version of QEMU, a rootfs and a kernel, you can start AsteroidOS in an emulator using:</p>

<pre><code>qemu-system-i386 -enable-kvm -kernel bzImage-qemux86.bin -device virtio-vga,virgl=on -net nic -net user,hostfwd=tcp::2222-:22 -drive format=raw,file=asteroid-image-qemux86.ext4 -m 512 -display sdl,gl=on --append "quiet root=/dev/hda rw mem=512M video=800x800"</code></pre>

<p>The previous command sets up a port forwarding so that you can connect to the emulator using SSH with the following command:</p>

<pre><code>ssh -p 2222 ceres@localhost</code></pre>
