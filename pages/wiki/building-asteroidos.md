---
title: Building AsteroidOS
layout: documentation
---

If you decide to compile AsteroidOS from source be aware that it’s a simple process but requires a lot of disk space (potentially more than 100GB) and the first build might take you a lot of time (hours). Report any problem to the [issue tracker](https://github.com/AsteroidOS/asteroid/issues):

<video class="" id="" width="100%" height="100%" controls="" loop="" autoplay=""><source src="https://asteroidos.org/asteroid.mp4" type="video/mp4"></video>

# General information
---

You might want to build AsteroidOS in Docker because you'll get a clean build environment that works no matter what kinds of package repositories or package versions you have installed or how outdated your Linux distribution is or which Linux distribution you're using in the first place.

Another advantage of Docker is that it *should* also work on Windows and OS X. (However, this has not been tested yet!)

Using Docker also allows you to easily roll back. Consider the following: If you were to simply delete the repository and uninstall the `prerequisites` you will potentially remove packages that you had installed before and might actually still need.

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

Before you continue to *Build without Docker* or *Build with Docker*, make sure you're in the asteroid directory:

```
cd asteroid/
```

# Build without Docker
---

## Downloading
---

Install the prerequisites:


```
apt-get install git build-essential cpio diffstat gawk chrpath texinfo python2 python3 wget shared-mime-info
```

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

## Updating the Sources
---

You can update the AsteroidOS sources with the following command:

```
source ./prepare-build.sh update
```


# Build with Docker
---

These instructions have been tested on Ubuntu 19.04, but should also be applicable to Debian Sid (at least at the time of writing). For other distributions the dependencies may have different names and you may have to install additional ones.


## Setup
---

Build a Docker image called *asteroidos-toolchain* from the given Dockerfile:

```
sudo docker build --tag asteroidos-toolchain .
```

Remove the Docker container called *asteroidos-toolchain* in case it already exists:

```
sudo docker rm -f asteroidos-toolchain
```

## Usage example
---

**Run this as a non root user**
Create a Docker container called *asteroidos-toolchain* from the Docker image which we also called *asteroidos-toolchain* and build AsteroidOS for *dory* (the LG G Watch) within the container:

```
sudo docker rm -f asteroidos-toolchain ; sudo docker run --name asteroidos-toolchain -it -v /etc/passwd:/etc/passwd:ro -u "$(id -u):$(id -g)" -v "$HOME/.gitconfig:/$HOME/.gitconfig:ro" -v "$(pwd):/asteroid" asteroidos-toolchain bash -c "source ./prepare-build.sh dory && bitbake asteroid-image"
```


Note: The files created during the build simply go to the current directory (which should be *asteroid*), more specifically, the output goes to the subdirectories *asteroid/src* and *asteroid/build*.

To build for a different watch than the LG G Watch, use its corresponding codename instead of *dory* when executing the *docker run ...* command.

You can find the codenames for the supported watched on the [Install page]({{rel 'install'}}).

Explanation of the above docker rm ... ; docker run ...* command:

```
# sudo docker rm -f asteroidos-toolchain  Removes the Docker container called "asteroidos-toolchain" in case it already exists
# -it                                     Attaches the terminal to the container so that we can see the output. Otherwise it would run blindly in the background.
# -u "$(id -u):$(id -g)"                      Ensures that the current user id and group id from the host is used on files inside the container to avoid permission issues.
# -v /etc/passwd:/etc/passwd              Ensures that the user ids and groups from the host are also available in the Docker container. (Otherwise the -u and -g would be useless.)
# /etc/passwd                             Contains the user names and their ids.
# "$HOME/.gitconfig:/$HOME/.gitconfig"    Shares your user's git config with the container.
# -v "$(pwd):/asteroid"                   Is used to mount the current directory (which is your asteroid git repo clone) into the container.

# bash -c "source ./prepare-build.sh dory && bitbake asteroid-image"   This is the command to be executed inside of the container.
                                                                       "dory" being the codename of your watch.
```


# Installing
---

After a while, the generated image should be available in *build/tmp-glibc/deploy/images/dory/*. (No matter if you built with or without Docker.)

Install AsteroidOS using your usual device's instructions, which you can find on the [Install page]({{rel 'install'}}).
