---
title: OpenEmbedded
layout: documentation
---

# OpenEmbedded

[OpenEmbedded](http://www.openembedded.org/wiki/Main_Page) (OE) is the build system used by AsteroidOS. It provides a way to easily maintain embedded Linux distributions. OE is also used by projects such as WebOS-Ports, SHR or Ångström. OpenEmbedded is supported by the [Yocto project](https://www.yoctoproject.org/) from the Linux Foundation and provides a rock-solid basis for AsteroidOS.

OpenEmbedded uses the [`bitbake`](https://docs.yoctoproject.org/bitbake/) tool which is developed in Python to generate images (like `asteroid-image`) from packages (like `asteroid-launcher-dev`) built from recipes (ex: `asteroid-launcher_git.bb`) provided in layers (ex: `meta-asteroid`).

Layers are git repositories containing a bunch of related recipes, example of layers include board support packages (BSPs) like [meta-dory-hybris](https://github.com/AsteroidOS/meta-smartwatch/tree/master/meta-dory) or `meta-rockchip` which describe a way to support a new machine, but also UI layers like `meta-xfce` or `meta-gnome` which describe the building process of graphic components.

A recipe describes how to fetch, patch, configure, compile, install, package (in `.rpm`, `.deb` or `.ipk`) and test a piece of software. Bitbake handles all those operations and the dependencies between them and between recipes. In the end it can generate images or an SDK for multiple targets.

Contributing to the AsteroidOS’s OE architecture mostly consists in maintaining the [meta-asteroid](https://github.com/AsteroidOS/meta-asteroid) and [meta-smartwatch](https://github.com/AsteroidOS/meta-smartwatch) repositories which contain the recipes related to AsteroidOS and the watches' BSPs.

In depth info can be found in the [Yocto Project's manual](https://docs.yoctoproject.org/index.html)

<img src="{{assets}}/img/openembedded.png" style="width:100%"/>


# A Quick Tutorial

The rest of this description assumes that you have already read and followed the [Building AsteroidOS]({{rel 'wiki/building-asteroidos'}}) instructions, and that you have built AsteroidOS for at least one platform (a particular watch or the emulator), and that you are familiar with [`git`](https://www.atlassian.com/git/tutorials) and the [Linux](https://www.linux.org/forums/linux-beginner-tutorials.123/) command line.

This tutorial will introduce you to the following topics:

 - [Changing an existing application:](#changing-an-existing-application) You don't like how something behaves or want to fix an issue in an existing application? This will introduce you to the tooling used to allow you to make these changes.
 - [Adding a new application:](#adding-a-new-application) Use the tooling to create a new application recipe and test it on a watch.
 - [Sharing your changes:](#sharing-your-changes) You've made changes on your local build of AsteroidOS. How do you share these changes? This will be explained in this part of the tutorial.


## Changing an Existing Application

This will guide you step-by-step from the process of wanting to make a change to actually making that change and getting it running on your watch.

Let's say that you want to make a simple change to the flashlight app on the watch. Your favorite color is blue, so you want to change the flashlight screen's color to a blue color.

Since you have already run `bitbake asteroid-image` you know that there are over 5000 tasks to create the image file that can be flashed to a watch. How do you figure out which of those 5000 tasks builds the flashlight application?

Two fundamental concepts within Yocto and bitbake are the *layer* and the *recipe* as mentioned above. Examine the layers in the AsteroidOS project:

```
bitbake-layers show-layers
NOTE: Starting bitbake server...
layer                 path                                      priority
==========================================================================
meta-qt5              /home/developer/asteroid/src/meta-qt5  7
meta                  /home/developer/asteroid/src/oe-core/meta  5
meta-asteroid         /home/developer/asteroid/src/meta-asteroid  7
meta-asteroid-community  /home/developer/asteroid/src/meta-asteroid-community  7
meta-oe               /home/developer/asteroid/src/meta-openembedded/meta-oe  5
meta-multimedia       /home/developer/asteroid/src/meta-openembedded/meta-multimedia  5
meta-gnome            /home/developer/asteroid/src/meta-openembedded/meta-gnome  5
meta-networking       /home/developer/asteroid/src/meta-openembedded/meta-networking  5
meta-android          /home/developer/asteroid/src/meta-smartphone/meta-android  7
meta-python           /home/developer/asteroid/src/meta-openembedded/meta-python  5
meta-filesystems      /home/developer/asteroid/src/meta-openembedded/meta-filesystems  5
meta-anthias          /home/developer/asteroid/src/meta-smartwatch/meta-anthias  7
meta-bass             /home/developer/asteroid/src/meta-smartwatch/meta-bass  7
meta-beluga           /home/developer/asteroid/src/meta-smartwatch/meta-beluga  7
meta-catfish          /home/developer/asteroid/src/meta-smartwatch/meta-catfish  7
meta-dory             /home/developer/asteroid/src/meta-smartwatch/meta-dory  7
meta-lenok            /home/developer/asteroid/src/meta-smartwatch/meta-lenok  8
meta-mooneye          /home/developer/asteroid/src/meta-smartwatch/meta-mooneye  7
meta-mtk6580          /home/developer/asteroid/src/meta-smartwatch/meta-mtk6580  7
meta-narwhal          /home/developer/asteroid/src/meta-smartwatch/meta-narwhal  7
meta-ray              /home/developer/asteroid/src/meta-smartwatch/meta-ray  7
meta-sawfish          /home/developer/asteroid/src/meta-smartwatch/meta-sawfish  7
meta-skipjack         /home/developer/asteroid/src/meta-smartwatch/meta-skipjack  6
meta-smelt            /home/developer/asteroid/src/meta-smartwatch/meta-smelt  7
meta-sparrow          /home/developer/asteroid/src/meta-smartwatch/meta-sparrow  7
meta-sprat            /home/developer/asteroid/src/meta-smartwatch/meta-sprat  7
meta-sturgeon         /home/developer/asteroid/src/meta-smartwatch/meta-sturgeon  7
meta-swift            /home/developer/asteroid/src/meta-smartwatch/meta-swift  8
meta-tetra            /home/developer/asteroid/src/meta-smartwatch/meta-tetra  7
meta-wren             /home/developer/asteroid/src/meta-smartwatch/meta-wren  7
```

By convention, Yocto layers all begin with `meta`. There are layers for individual pieces such as Qt, networking, Python, and filesystems. These are followed by the layers for each of the watch codenames. If you are looking for an AsteroidOS-specific application, you can probably guess that it's in the `meta-asteroid` layer, but you can also ask the computer to search for you.

Originally, `bitbake` and its related tools were the only way to do things, but there is now a newer and much more convenient tool named [`devtool`](https://docs.yoctoproject.org/dev/ref-manual/devtool-reference.html). To search for a recipe with `flashlight` in the name:

```
devtool search flashlight
```

After a minute or so, `devtool` finds a single recipe: `asteroid-flashlight`. You can now modify this recipe:


```
devtool modify asteroid-flashlight
```

The last two lines of output will be something like these:

```
INFO: Source tree extracted to /home/developer/asteroid/build/workspace/sources/asteroid-flashlight
INFO: Recipe asteroid-flashlight now set up to build from /home/developer/asteroid/build/workspace/sources/asteroid-flashlight
```

Navigate into this directory, and find the relevant line in `src/main.qml` and alter the color from white to light blue:

```
color: flashOn ? "lightblue" : "#66444444"
```

Save the altered source code and build this copy of the flashlight app:

```
devtool build asteroid-flashlight
```

After some time, the build will complete and you can test the application on a watch.

```
devtool deploy-target asteroid-flashlight root@192.168.2.15
```

Now the flashlight app will show a light blue screen. Reverting to the original version is very simple:

```
devtool undeploy-target asteroid-flashlight root@192.168.2.15
```

## Adding a New Application

Let's say you have decided to create a new application. As described in [Creating an Asteroid app]({{rel 'wiki/creating-an-asteroid-app'}}) page, the [Asteroid-helloworld](https://github.com/AsteroidOS/asteroid-helloworld) which can be used as the basis for your own new application can be cloned and then modified. So let's say you've done that and now you'd like to integrate the app into the Yocto and bitbake build system.

For these instructions, it is assumed that you have already built AsteroidOS for `sturgeon` (or your preferred test platform). Let's say you have already cloned the `asteroid-helloworld` into a directory named `~/tools/AsteroidOS/asteroid-helloworld/`. You can very easily create a recipe for it with `devtool`:

```
devtool add hello ~/tools/AsteroidOS/asteroid-helloworld/
```

```
$ devtool add hello ~/tools/AsteroidOS/asteroid-helloworld/
NOTE: Starting bitbake server...
NOTE: Starting bitbake server...
INFO: Please add the following line for 'LICENSE' to a 'lib/recipetool/licenses.csv' and replace `Unknown` with the license:
84dcc94da3adb52b53ae4fa38fe49e5d,Unknown
NOTE: Starting bitbake server...
INFO: Recipe /home/developer/asteroid/build/workspace/recipes/hello/hello_git.bb has been automatically created; further editing may be required to make it fully functional
```

So the tool has created a recipe based on just the name we have given and the directory containing the source. Since it seems unsure about the license and suggests that further editing might be required, let's take its advice and edit the recipe. The simplest way to do that is again to use `devtool`:

```
devtool edit-recipe hello
```

This will open the recipe in an editor. It says that the license is unknown, so we change the line from `LICENSE = "Unknown"` to `LICENSE = "GPL-3.0-only"`. Not that the `SRC_URI` is set to point to a git repository. This is because `devtool` is smart enough to figure out that even though you gave it a local directory, it discovered that the source was actually git and made the appropriate changes. We can now attempt to build.

```
devtool build hello
```

However this fails because we're still missing something. In this case, we're missing two things. First, instead of the `inherit cmake` line, it should be `inherit cmake_qt5` and second, we need to add the following line just below that:

```
DEPENDS += "qml-asteroid asteroid-generate-desktop-native qttools-native qtdeclarative-native"
```

With those two small changes, we should now get a successful build.

As before, we can easily test on the watch:

```
devtool deploy-target hello root@192.168.2.15
```

This will automatically install all of the install targets from the `hello` project onto the watch. Start the launcher on the watch and scroll to the end of your list of apps, and you should now see a "HELLO WORLD APP" at the end. Running it will show "Hello World!" on the screen.

Removing it from the watch is also the same as before:

```
devtool undeploy-target hello root@192.168.2.15
```

## Sharing your changes

If you make a change to AsteroidOS software that you think might be useful to others, such as a bug fix or feature enhancement, there are several ways to share it, depending on what exactly is being changed.

 - creating a recipe patch file
 - creating a pull request for an AsteroidOS project
 - creating an installable package (`.ipk`)

## Creating a recipe patch file

Many of the software packages that make up an AsteroidOS image are not unique to AsteroidOS. They may be general purpose tools such as `systemctl` or watch-specific software from other open source repositories such as `mcetool`. For these, there may be a need to introduce a patch just for AsteroidOS. To do so, first, within the appropriate `workspace` directory where you made changes, use `git commit` to commit the changes to the local repository. Once this is done, automatically create the patch. For our example, we could do that with this command:

```
devtool finish asteroid-flashlight meta-asteroid
```

This creates one patch for each new git commit and automatically updates the recipe file in the named layer (in this case, `meta-asteroid`). (Note that this is just an example and would not really be appropriate for `asteroid-flashlight` because this application is unique to AsteroidOS.)  To see what was done, you can navigate to `asteroid/src/meta-asteroid` and type `git diff`. You will see that the patch file has been added to the recipe for `asteroid-flashlight`. Also note that to ensure you don't lose any work, `devtool` will not delete the directory tree in `workspace` unless you specifically ask it to do so.

## Create a pull request

For an AsteroidOS application, it may be more appropriate to create a [*pull request*](https://opensource.com/article/19/7/create-pull-request-github). To do that, we need to create a fork of the software we want to modify, create a branch, make the changes, commit and push the changes, and then create a pull request (PR). This guide doesn't describe all of these steps in detail, but describes how to use `devtool` and `git` to create a PR.

Once the changes are made, as in the `asteroid-flashlight` example above, you can simply use git to point to your own repository. Specifically, navigate to `asteroid/build/workspace/sources/asteroid-flashlight` and use the command `git remote -v` to see that the remote repository is the original source. Change it to point to your own repository with `git remote set-url origin MYCLONE`, substituting your repository's URL for `MYCLONE`. If you have already made local commits, you may wish to change the name of the branch from `devtool` (which is what `devtool` uses by default) to something meaningful to you before pushing the changes to your repository. Then create a PR from the new branch in the usual way.

## Create an installable package

Chances are that your own Linux computer uses `.rpm` or `.deb` files with a package manager to allow simplified installation of software. AsteroidOS uses the [`opkg`](https://en.wikipedia.org/wiki/Opkg) package manager which uses `.ipk` files. To create one from your modified software, here we need to use `bitbake` rather than `devtool`:

```
bitbake asteroid-flashlight
```

Note that this typically creates four different `ipk` files. We can take a look:

```
cd tmp-glibc/deploy/ipk/armv7vehf-neon/
ls asteroid-flashlight*
```

This returns the names of the four files:

```
asteroid-flashlight-dbg_+git999-r1_armv7vehf-neon.ipk
asteroid-flashlight-dev_+git999-r1_armv7vehf-neon.ipk
asteroid-flashlight_+git999-r1_armv7vehf-neon.ipk
asteroid-flashlight-src_+git999-r1_armv7vehf-neon.ipk
```

We can ignore the `-dbg`, `-dev` and `-src` files and simply choose the one with the shortest name, which is the release version of the package. We can copy it to the watch:

```
scp asteroid-flashlight_+git999-r1_armv7vehf-neon.ipk root@192.168.2.15:.
```

Now we can [`ssh`]({{rel 'wiki/ssh/#sshoverusb'}}) as root to the watch (`ssh root@192.168.2.15`) and install the package:

```
opkg --force-reinstall install asteroid-flashlight_+git999-r1_armv7vehf-neon.ipk
```
