---
title: Building AsteroidOS
layout: documentation
---

If you decide to compile AsteroidOS from source be aware that it’s a simple process but requires a lot of disk space (potentially more than 100GB) and the first build might take you a lot of time (hours). Report any problem to the [issue tracker](https://github.com/AsteroidOS/asteroid/issues):

<video class="" id="" width="100%" height="100%" controls="" loop="" autoplay=""><source src="https://asteroidos.org/asteroid.mp4" type="video/mp4"></video>

# General information
---

You might want to build AsteroidOS in a *container engine* such as [Docker](https://www.docker.com/) or [podman](https://podman.io/) because you'll get a clean build environment that works no matter what kinds of package repositories or package versions you have installed or how outdated your Linux distribution is or which Linux distribution you're using in the first place.

Another advantage of Docker specifically is that it *should* also work on Windows and OS X. (However, this has not been tested yet!)

Using containers also allows you to easily roll back.  Without a container, if you decided to delete the AsteroidOS repository and unistall the prerequisite software packages from your computer, you will potentially remove packages that you had installed before and might actually still need.  With a container, simply deleting the container image has no other effect on the host computer.

# Clone the repository
---

Clone the main repository using the following command:

```
git clone https://github.com/AsteroidOS/asteroid.git
```

If you haven't set a global git name and email yet, adapt the following *git config* commands to your information. (This is only required to clone some git repositories when building.)

```
git config --global user.email "you@example.com"
git config --global user.name "Your Name"
```

Before you continue to *Build without containers* or *Build with containers*, make sure you're in the asteroid directory:

```
cd asteroid/
```

# Build without containers
---

## Downloading
---

Install the prerequisites:

| Distro | Command |
| ------ | ------- |
| Ubuntu | ```apt-get install git build-essential cpio diffstat gawk chrpath texinfo python3 wget shared-mime-info zstd liblz4-tool``` |
| Fedora | ```dnf install chrpath diffstat g++ lz4 rpcgen perl perl-bignum python3-pip socat texinfo``` |
| Arch | ```yay -Sy base-devel cpio diffstat gawk chrpath texinfo python3 wget shared-mime-info zstd lz4 rpcsvc-proto``` |

This repository basically only contains a shell script that populates *src/* with OpenEmbedded and the appropriate Asteroid layers. Then, it setups the environment for a bitbake build. The following command will setup a build for *dory* (the LG G Watch) but you can also build an image for other watches by using the corresponding codename. (Codenames can be found on the <a href="{{rel 'install'}}">Install page</a>.)

```
source ./prepare-build.sh dory # Be careful that this script must be sourced and not only ran
```

If the environment has been correctly setup, you should now be in the *build* subdirectory.

## Building
---

Once the environment is prepared, you can simply trigger a build with the following command:

```
bitbake asteroid-image
```
*Note:* Bitbake is a powerful tool that can also build single packages (e.g: bitbake strace) or [the SDK]({{rel 'wiki/building-asteroidos'}}) for example. Refer to its documentation for more details.

If this step was successful, you can proceed to the *Installing* section below.

## Updating the Sources
---

You can update the AsteroidOS sources with the following command:

```
source ./prepare-build.sh update
```


# Build with containers
---

These instructions have been tested on Ubuntu 19.04 (with Docker) and Fedora 34 (with podman), but should also be applicable to Debian Sid (at least at the time of writing). For other distributions the dependencies may have different names and you may have to install additional ones.

From a user's point of view, Docker and podman are quite similar and accept almost all of the exact same commands, but there are some difference.  The most significant differences for building Asteroid are that podman does not use a daemon and can be run "rootless" (that is, as a non-root user).  This makes some things a bit easier, but either can be used.


## Setup
---

Remove the Docker container called *asteroidos-toolchain* if it already exists:

```
sudo docker rm -f asteroidos-toolchain
```
or
```
podman rm -f asteroidos-toolchain
```


Build a container image called *asteroidos-toolchain* from the given Dockerfile:

```
sudo docker build --tag asteroidos-toolchain .
```
or
```
podman build --tag asteroidos-toolchain .
```

## Building the software
---

Now that the container with the toolchain software has been created, we can use this to build AsteroidOS.  All of the tools are contained and run within the container, but we use a *shared volume*, essentially some drive space that both the host computer and the container can read and write, for actually creating the AsteroidOS image files.

In this example, we will build AsteroidOS for *dory* (the LG G Watch).  To build for a different watch than the LG G Watch, use its corresponding codename instead of *dory* when executing the *docker run ...* command.  You can find the codenames for the supported watched on the [Install page]({{rel 'install'}}).

Assuming that you have carefully followed the instructions so far and are in the `asteroid` directory, you can now build the sofware.

**Run this as a non root user**:

```
sudo docker run --rm -it -v /etc/passwd:/etc/passwd:ro -u "$(id -u):$(id -g)" \
  -v "$HOME/.gitconfig:/$HOME/.gitconfig:ro" -v "$(pwd):/asteroid" asteroidos-toolchain \
  bash -c "source ./prepare-build.sh dory && bitbake asteroid-image"
```
or
```
podman run --rm -it -v  "$(pwd)":/asteroid:z --userns keep-id asteroidos-toolchain \
  bash -c "source ./prepare-build.sh dory && bitbake asteroid-image"
```

The files created during the build are placed in the current directory; more specifically, the source files are placed in a `src` subdirectory and build artefacts, including the final binary images are placed in the `build` subdirectory.

Here is a detailed explanation of the Docker command above:

 - `sudo docker run` Runs a container image
 - `--rm` Cleans up after the command is run by removing temporary container storage
 - `-it`  Attaches the terminal to the container so that we can see the output. Otherwise it would run blindly in the background.
 - `-u "$(id -u):$(id -g)"` Ensures that the current user id and group id from the host is used on files inside the container to avoid permission issues.
 - `-v /etc/passwd:/etc/passwd`  Ensures that the user ids and groups from the host are also available in the Docker container. (Otherwise the -u and -g would be useless.)
 - `/etc/passwd` Contains the user names and their ids.
 - `"$HOME/.gitconfig:/$HOME/.gitconfig"` Share your user's git config with the container.
 - `-v "$(pwd):/asteroid"` Mount the current directory (which is your asteroid git repo clone) into the container.
 - `bash -c "source ./prepare-build.sh dory && bitbake asteroid-image"`  This is the command to be executed inside of the container with "dory" being the codename of your watch.

Here is a detailed explanation of the podman version of the command above:

 - `podman run` Runs a container image
 - `--rm` Cleans up after the command is run by removing temporary container storage
 - `-it` Attaches the terminal to the container so that we can see the output. Otherwise it would run blindly in the background.
 - `-v "$(pwd)":/asteroid:z` Mount the current directory (which is your asteroid git repo clone) into the container. The ":z" tells SELinux, if it's running, to allow multiple containers to share this mount.
 - `--userns keep-id` Run as the current user inside the container
 - `bash -c "source ./prepare-build.sh dory && bitbake asteroid-image"`  This is the command to be executed inside of the container with "dory" being the codename of your watch.

If this step was successful, you can proceed to *Installing* below.

# Installing
---

After a while, whether you build with or without containers, the generated image should be available in *build/tmp-glibc/deploy/images/dory/* (for "dory" -- for other watches, the image files are in the corresponding code word directory.)

Install AsteroidOS using your usual device's instructions, which you can find on the [Install page]({{rel 'install'}}).
