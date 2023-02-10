---
title: Manual Watchface and Package Installation
layout: documentation
---

# Watchface Installation

### Scripted method

Watchfaces listed in the [unofficial-watchface collection](https://github.com/AsteroidOS/unofficial-watchfaces) bring their own installation script.

To use the script you will need to clone the unofficial-watchfaces repo.
```
git clone https://github.com/AsteroidOS/unofficial-watchfaces
```

Change into the new directory.
```
cd unofficial-watchfaces
```

Execute the script with no flag to use SSH connection and SCP commands.
```
./deploy.sh
```
Or use ADB connection and commands with the `-a` flag.
```
./deploy.sh -a
```

### Manual method
If you wish to install a watchface that has no installation script or is not provided as a package you may install it manually using the following instructions.

Installing a watchface requires pushing the .qml file and the required assets (e.g.  fonts, images, etc.) into the `/usr/share/asteroid-launcher/watchfaces/` directory on your watch.
```
scp watchface-name.qml root@192.168.2.15:/usr/share/asteroid-launcher/watchfaces/
```
If the watchface has additional dependencies on assets you can push them the same way.
```
scp image.png root@192.168.2.15:/usr/share/asteroid-launcher/watchfaces-img/
```
Some watchfaces include their own font.
```
scp fontname.ttf root@192.168.2.15:/usr/share/fonts/
```

# Wallpaper Installation

### Scripted method
The scripts provided in the [asteroid-wallpapers](https://github.com/AsteroidOS/asteroid-wallpapers) repo aim to make adding custom wallpapers easy.

To use the script you will need to clone the [asteroid-wallpapers](https://github.com/AsteroidOS/asteroid-wallpapers) repo.
```
git clone https://github.com/AsteroidOS/asteroid-wallpapers
```
Change into the new directory.
```
cd asteroid-wallpapers
```

Place jpg, jpeg, png, svg, bmp or webp wallpaper images of at least 480x480px resolution here. Then generate preview images and copy scaled versions of your wallpapers to the correct folders.
```
./generate-scaled-images.sh
```
Copy all wallpapers and preview images to a watch connected via USB/SDK Mode:
```
./copy-to-watch.sh
```
For advanced copy options execute:
```
./copy-to-watch.sh -h
```

### Manual method
In case you wish to quickly install a wallpaper that is not provided as a package, you can install it manually using the following command. Mind that copying a large image file might impact overall performance. Usage of the above described scripted method is highly advised.

```
scp wallpapername.jpg root@192.168.2.15:/usr/share/asteroid-launcher/wallpapers/full/
```


# Package Installation

While AsteroidOS has a package manager, there is currently no graphical app store.
### Installation of local packages
Before you can install the package you need to push it to the watch.
```
scp packagename.ipk root@192.168.2.15:/home/root
```
After that you can use [SSH]({{rel 'wiki/ssh'}}) to login and install the package
```
ssh root@192.168.2.15
opkg install packagename.ipk
```

When the package is installed you can remove the installation package from your root users home-directory and close
the [SSH]({{rel 'wiki/ssh'}}) connection to your watch.
```
rm /home/root/packagename.ipk
exit
```

### Reinstallation of local packages
If you need to reinstall a package you can add the `--force-reinstall` flag to the opkg command.
```
opkg install --force-reinstall packagename.ipk
```

# Troubleshooting

### Missing dependencies detected during package install

The package you are trying to install may depend on other packages and their versions. You can install the dependencies first, add the `--force-depends` flag to your install command or decide to not install the package. Ignoring the dependencies can lead to broken or unstable packages.

```
opkg install --force-depends packagename.ipk
```



