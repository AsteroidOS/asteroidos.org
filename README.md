# asteroidos.org

> Official website and documentation for AsteroidOS

## Quickstart

Assemble and Grunt are used to build the site. To get started:

1. Make sure you have the following installed:
   * [NodeJS](https://nodejs.org/en/download/)
   * [Git](https://git-scm.com/downloads)
2. Run:
   ``` Bash
   git clone https://github.com/AsteroidOS/asteroidos.org.git # Clone this repository
   cd asteroidos.org # Go to the root of the repo
   npm install # Install dependencies
   npx grunt # Build the site (If your npm version is so old that it doesn't support npx, run `npm i -g grunt` followed by `grunt` instead)
   ```

If all worked properly, you should have your website ready in an `_asteroidos.org` folder

## Using `docker` or `podman`

This can also be built and run inside a container even more simply.

``` Bash
podman build https://raw.githubusercontent.com/AsteroidOS/asteroidos.org/master/Dockerfile -t asteroidos-docserver
```

This will create an `asteroidos-docserver` image which is only around 236 MB and based on the Alpine Linux distribution.  To run it locally:

``` Bash
podman run -p8080:80 asteroidos-docserver
```

This will run a server in the container which can then be reached on your local machine by pointing your browser to `localhost:8080/`.  

Although `podman` was used here, `docker` command syntax is identical.

## License
This website is a fork of lesscss.org

Copyright (c) 2017, Florent Revest, Alexis Sellier, Less Core Team, Contributors
Content released under [Creative Commons](./LICENSE-CC).
Source code released under the [MIT License](./LICENSE-MIT).
