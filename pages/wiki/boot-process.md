---
title: Boot Process
layout: documentation
---

<p>This page describes the basis of the AsteroidOS’ boot process. It’s focused on the LG G Watch but it should be similar on most other Android watches.</p>

<div class="page-header">
  <h1 id="general-desc">General description</h1>
</div>
<p>The first component loaded by the LG G Watch is the bootloader, this component is proprietary and can’t be modified, by default it is locked and only allows to boot Android, but we can access it by swiping the screen from top left to bottom right when booting up or with the “adb reboot bootloader” from a PC connected to a running Android or AsteroidOS instance with adb mode enabled.</p>
<p>This bootloader supports the “fastboot” protocol which is also the name of the command used on the computer to communicate with the bootloader. Fastboot allows to unlock the bootloader and then to flash partitions remotely and boot selected kernels. The bootloader can load three kernels, the one flashed on the BOOT partition, the one flashed on the RECOVERY partition and one sent via usb with the “fastboot boot boot.img” command. Kernels are stored in the boot.img format which is a concatenation of a kernel (sometimes with device tree) and an initramdisk. The boot.img format can be packed or unpacked with the mkbootimg and unmkbootimg tools. The AsteroidOS’s kernel is a slightly modified Android Kernel with, for example, a backported Bluetooth subsystem. The AsteroidOS’s ramdisk mostly load the init program of the rootfs which is systemd by default.</p>
<p>Systemd loads many components like</p>
<ul>
<li>Psplash which is a lightweight splashscreen software.</li>
<li>Android’s init which loads the Android log daemon and servicemanager, both needed to run Asteroid-Launcher.</li>
<li>DBus which is needed for inter-process communication.</li>
<li>Adbd which is a daemon implementing the Android Debug Bridge protocol and which is used to get a remote shell and to push/pull files from a connected computer.</li>
<li>MCE which handles the power consumption, inputs and screen…</li>
<li>Patchram which loads a proprietary firmware to the broadcom bluetooth chip.</li>
<li>Bluetoothd which is the BlueZ5 daemon handling bluetooth.</li>
<li>Asteroid-Launcher which is the desktop and wayland compositior.</li>
</ul>
<img src="{{assets}}/img/boot-process.jpg" style="width:100%"/>

<div class="page-header">
  <h1 id="troubleshooting">Troubleshooting the boot process</h1>
</div>
<p>The default initramfs has a section to enable adbd on the watch before booting into the rootfs. You can enable it by appending <code>debug-ramdisk</code> to the boot kernel’s parameters for example with <i>fastboot -c</i>. When you boot the watch, you will be able to access a command line on the ramdisk with <code>adb shell</code>.</p>
<p>Here is an example <a href="https://github.com/AsteroidOS/meta-asteroid/blob/b0dd1970844206a34bbba4477691ec7940bebcf7/recipes-core/initrdscripts/initramfs-scripts-android/init.sh#L42">initscript</a> and the <a href="https://github.com/AsteroidOS/meta-bass-hybris/blob/master/recipes-kernel%2Flinux%2Flinux-bass%2Fimg_info#L10">kernel configuration line</a> of bass.</p>
<h3>Troubleshooting systemd</h3>
<p>If you see the AsteroidOS logo (even for a split second), the watch is able to boot into the rootfs and launch systemd.</p>
<p>Logs are normally stored in a tmpfs filesystem which is lost whenever the watch is rebooted. To disable the tmpfs mount, first mount the sdcard card containing the rootfs, and then the rootfs:</p>
<pre><code># . /machine.conf
# mkdir /sdcard /rfs
# mount /dev/$sdcard_partition /sdcard
# mount -o loop /sdcard/media/0/asteroidos.ext4 /rfs
</code></pre>
<p>You can then disable the <code>/var/volatile</code> tmpfs mount and enable systemd journal logging (/var/log is a symlink to /var/volatile/log):</p>
<pre><code># sed -i '/volatile/d' /rfs/etc/fstab
# mkdir /rfs/var/log/journal
</code></pre>
<p>Once you reboot into the rootfs partition (it’ll fail again), you can hop back into the <code>adb shell</code> and read the journal:</p>
<pre><code># chroot /rfs /bin/journalctl
</code></pre>
