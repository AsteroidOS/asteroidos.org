FROM alpine:20231219
LABEL maintainer="Ed Beroset <beroset@ieee.org>"
WORKDIR /tmp/
RUN apk --no-cache add nodejs git npm lighttpd
RUN git clone https://github.com/AsteroidOS/asteroidos.org.git
WORKDIR /tmp/asteroidos.org
RUN sed -i -e 's#/var/www/localhost#/tmp/asteroidos.org/_asteroidos.org#' /etc/lighttpd/lighttpd.conf
RUN sed -i -e 's#/htdocs##' /etc/lighttpd/lighttpd.conf
RUN npm i -g npm@latest
RUN npm install
RUN npm i -g grunt
RUN grunt
CMD ["lighttpd", "-D", "-f", "/etc/lighttpd/lighttpd.conf"]
