---
title: Local version of asteroidos.org
layout: documentation
---

This web site can be built and run locally within a software container, such as those created by *container engines* like [Docker](https://www.docker.com/) or [podman](https://podman.io/). One reason for doing this is to be able to install and build the documentation without having to load the collection of tools on your real computer. Building and running a documentation server in a local container is the topic of this page.

# Building the web site
---

This documentation will use `podman`, but the commands for `docker` are identical. If you wish to use `docker` instead of `podman`, just substitute `docker` for `podman` in each of the commands shown below.

``` Bash
podman build https://raw.githubusercontent.com/AsteroidOS/asteroidos.org/master/Dockerfile -t asteroidos-website
```

This will create an `asteroidos-website` image which is only around 236 MB and based on the Alpine Linux distribution.

# Running locally
---

The commands above are useful for creating the latest version of the web site. This section describes how to make changes to the documentation locally and try them out in a container.

Create a local version of this repository with `git clone https://github.com/AsteroidOS/asteroidos.org.git`. Then go into that directory `cd asteroidos.org`.

``` Bash
export adoc = $(podman run --rm -dv "$(pwd)":/tmp/asteroidos.org:z \
    -p8080:80 asteroidos-website)
```

This will start the container and run it in the background, and assign the number returned to a variable called `adoc`.

``` Bash
podman exec ${adoc} grunt
```

This will rebuild the website and you will be able to see it by pointing your browser to `localhost:8080/`.  

If you decide to make changes to your copy of the website, you can make the changes and then rebuild by running `grunt` within the container.

## Running the unmodified version

**Note:** if you want to simply run and view the unmodified version, you can simply use:

``` Bash
podman run --rm -d -p8080:80 asteroid-website
```

This will run the version of the website within the container that existed when the container was constructed.
