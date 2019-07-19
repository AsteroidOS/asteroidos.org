---
title: Building AsteroidOS
layout: documentation
---

<p>If you decide to compile AsteroidOS from source be aware that it’s a simple process but requires a lot of disk space (potentially more than 100GB) and the first build might take you a lot of time (hours). Report any problem to the <a href="https://github.com/AsteroidOS/asteroid/issues">issues tracker</a>:</p>

<video class="" id="" width="100%" height="100%" controls="" loop="" autoplay=""><source src="https://asteroidos.org/asteroid.mp4" type="video/mp4"></video>

<div class="page-header">
  <h1 id="general-information">General information</h1>
</div>
<p>You might want to build AsteroidOS in Docker because you'll get a clean build environment that works no matter what kinds of package repositories or package versions you have installed or how outdated your Linux distribution is or which Linux distribution you're using in the first place.</p>
<p>Another advantage of Docker is that it <em>should</em> also work on Windows and OS X. (However, this has not been tested yet!)</p>
<p>Using Docker also allows you to easily roll back. Consider the following: If you were to simply delete the repository and uninstall the `prerequisites` you will potentially remove packages that you had installed before and might actually still need.</p>

<div class="page-header">
  <h1 id="git-setup">Clone the repository</h1>
</div>

<p>Clone the main repository using the following command:</p>
<pre><code>git clone https://github.com/AsteroidOS/asteroid.git</code></pre>

<p>If you haven't set a global git name and email yet, adapt the following <em>git config</em> commands to your information. (This is only required to clone some git repositories when building.)</p>

<pre><code>git config --global user.email "you@example.com"
git config --global user.name "Your Name"</code></pre>

<p>Before you continue to <em>Build without Docker</em> or <em>Build with Docker</em>, make sure you're in the asteroid directory:</p>
<pre><code>cd asteroid/</code></pre>

<div class="page-header">
  <h1 id="build-without-docker">Build without Docker</h1>
</div>

<div class="page-header">
  <h2 id="downloading">Downloading</h2>
</div>
<p>Install the prerequisites:</p>
<pre><code>apt-get install git build-essential cpio diffstat gawk chrpath texinfo python2 python3 wget shared-mime-info</code></pre>

<p>This repository basically only contains a shell script that populates <em>src/</em> with OpenEmbedded and the appropriate Asteroid layers. Then, it setups the environment for a bitbake build. The following command will setup a build for <em>dory</em> (the LG G Watch) but you can also build an image for other watches by using the corresponding codename. (Codenames can be found on the <a href="{{rel 'install'}}">Install page</a>.)</p>
<pre><code>source ./prepare-build.sh dory # Be careful that this script must be sourced and not only ran
</code></pre>
<p>If the environment has been correctly setup, you should now be in the <em>build</em> subdirectory.</p>
<div class="page-header">
  <h2 id="building">Building</h2>
</div>
<p>Once the environment is prepared, you can simply trigger a build with the following command:</p>
<pre><code>bitbake asteroid-image</code></pre>
<p><em>Note:</em> Bitbake is a powerful tool that can also build single packages (e.g: bitbake strace) or <a href="{{rel 'wiki/building-asteroidos'}}">the SDK</a> for example. Refer to its documentation for more details.</p>

<div class="page-header">
  <h2 id="updating">Updating the Sources</h2>
</div>
<p>You can update the AsteroidOS sources with the following command:</p>
<pre><code>source ./prepare-build.sh update</code></pre>

<div class="page-header">
  <h1 id="build-with-docker">Build with Docker</h1>
</div>

<p>These instructions have been tested on Ubuntu 19.04, but should also be applicable to Debian Sid (at least at the time of writing). For other distributions the dependencies may have different names and you may have to install additional ones.</p>

<div class="page-header">
  <h2 id="docker-build-setup">Setup</h2>
</div>

<p>Build a Docker image called <em>asteroidos-toolchain</em> from the given Dockerfile:</p>
<pre><code>sudo docker build --tag asteroidos-toolchain .</code></pre>

<p>Remove the Docker container called <em>asteroidos-toolchain</em> in case it already exists:</p>
<pre><code>sudo docker rm -f asteroidos-toolchain</code></pre>

<div class="page-header">
  <h2 id="docker-build-usage">Usage example</h2>
</div>
<p>Create a Docker container called <em>asteroidos-toolchain</em> from the Docker image which we also called <em>asteroidos-toolchain</em> and build AsteroidOS for <em>dory</em> (the LG G Watch) within the container:</p>
<pre><code>sudo docker rm -f asteroidos-toolchain ; sudo docker run --name asteroidos-toolchain -it -v /etc/passwd:/etc/passwd -u `id -u`:`id -g` -v "$HOME/.gitconfig:/$HOME/.gitconfig" -v "$(pwd):/asteroid" asteroidos-toolchain bash -c "source ./prepare-build.sh dory && bitbake asteroid-image"</code></pre>

<p>Note: The files created during the build simply go to the current directory (which should be <em>asteroid</em>), more specifically, the output goes to the subdirectories <em>asteroid/src</em> and <em>asteroid/build</em>.</p>
<p>To build for a different watch than the LG G Watch, use its corresponding codename instead of <em>dory</em> when executing the <em>docker run ...</em> command.</p>
<p>You can find the codenames for the supported watched on the <a href="{{rel 'install'}}">Install page</a>.</p>

<p>Explanation of the above <em>docker rm ... ; docker run ...</em> command:</p>
<pre><code># sudo docker rm -f asteroidos-toolchain  Removes the Docker container called "asteroidos-toolchain" in case it already exists
# -it                                     Attaches the terminal to the container so that we can see the output. Otherwise it would run blindly in the background.
# -u `id -u`:`id -g`                      Ensures that the current user id and group id from the host is used on files inside the container to avoid permission issues.
# -v /etc/passwd:/etc/passwd              Ensures that the user ids and groups from the host are also available in the Docker container. (Otherwise the -u and -g would be useless.)
# /etc/passwd                             Contains the user names and their ids.
# "$HOME/.gitconfig:/$HOME/.gitconfig"    Shares your user's git config with the container.
# -v "$(pwd):/asteroid"                   Is used to mount the current directory (which is your asteroid git repo clone) into the container.

# bash -c "source ./prepare-build.sh dory && bitbake asteroid-image"   This is the command to be executed inside of the container.
                                                                       "dory" being the codename of your watch.</code></pre>

<div class="page-header">
  <h1 id="installing">Installing</h1>
</div>
<p>After a while, the generated image should be available in <em>build/tmp-glibc/deploy/images/dory/</em>. (No matter if you built with or without Docker.)</p>
<p>Install AsteroidOS using your usual device's instructions, which you can find on the <a href="{{rel 'install'}}">Install page</a>.</p>
