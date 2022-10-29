---
title: Local version of asteroidos.org
layout: documentation
---

This web site can be built and run locally within a software container, such as those created by *container engines* like [Docker](https://www.docker.com/) or [podman](https://podman.io/). One reason for doing this is to be able to install and build the documentation without having to load the collection of tools on your real computer. Building and running a documentation server in a local container is the topic of this page.

# Building the web site
---

This documentation will use `podman`, but the commands for `docker` are identical. If you wish to use `docker` instead of `podman`, just substitute `docker` for `podman` in each of the commands shown below.

``` Bash
podman build -t asteroidos-web \
  https://raw.githubusercontent.com/AsteroidOS/asteroidos.org/master/Dockerfile
```

This will create an `asteroidos-web` image which is only around 236 MB and based on the Alpine Linux distribution.

# Running locally
---

This section describes how to make changes to the documentation locally and try them out in a container.

Create a local version of this repository with `git clone https://github.com/AsteroidOS/asteroidos.org.git`. Then go into that directory with `cd asteroidos.org`.

This will start the container and run it in the background with the tag `asteroidos-web`.

``` Bash
podman run --rm --detach \
  --name asteroidos-web \
  --publish 8080:80 \
  --volume "$(pwd)":/tmp/asteroidos.org:z \
  asteroidos-web
```

After the initial clone of `asteroidos.org` you need to install the node dependencys first before `grunt` works

``` Bash
podman exec asteroidos-web npm install
```

This will rebuild the website and you will be able to see it by pointing your browser to `localhost:8080/`.  

``` Bash
podman exec asteroidos-web grunt
```

If you decide to make changes to your copy of the website, you can make the changes and then rebuild by running `grunt` again within the container.

## Running the unmodified version

**Note:** if you want to simply run and view the unmodified version, you can simply use:

``` Bash
podman run --rm --detach --publish 8080:80 asteroid-web
```

This will run the version of the website within the container that existed when the container was constructed.
