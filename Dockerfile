FROM buildpack-deps:bookworm AS base
# https://hub.docker.com/_/node
# https://github.com/nodejs/docker-node/blob/18ed56ea9ba03c16f48372927f5eb2553033e8de/14/buster/Dockerfile
# https://hub.docker.com/_/python
# https://github.com/docker-library/python/blob/f59139d685b3b39d4452a686521e03fa093efa25/3.8/buster/Dockerfile
COPY --from=python:3.12-bookworm /usr/local/ /usr/local/
COPY --from=node:20-bookworm /usr/local/ /usr/local/
COPY --from=node:20-bookworm /opt/ /opt/
# http://bugs.python.org/issue19846
# > At the moment, setting "LANG=C" on a Linux system *fundamentally breaks Python 3*, and that's not OK.
ENV LANG C.UTF-8
RUN set -ex \
	&& groupadd -r app --gid=999 \
	&& useradd --system --create-home --home /home/app --gid 999 --uid=999 --shell /bin/bash app \
	&& ldconfig -v \
	&& find /usr/local -depth \
		\( \
			\( -type d -a \( -name test -o -name tests -o -name idle_test \) \) \
			-o \
			\( -type f -a \( -name '*.pyc' -o -name '*.pyo' \) \) \
		\) -exec rm -rf '{}' + \
	&& rm -f /usr/local/bin/docker-entrypoint.sh \
	&& python --version \
	&& pip --version \
	&& node --version \
	&& npm --version \
	&& yarn --version \
	&& echo "OK"

# Build container
FROM base AS build
WORKDIR /home/app
RUN echo "# Build time .env config!" >> /home/app/.env && \
	echo "COOKIE_SECRET=undefined" >> /home/app/.env && \
	echo "DATABASE_URL=undefined" >> /home/app/.env && \
	echo "NODE_ENV=production" >> /home/app/.env
# Cache packages!
RUN set -ex && yarn install
ADD --chown=app:app . /home/app
RUN set -ex &&  \
    yarn build && \
    yarn cache clean &&  \
    rm -rf /home/app/.env &&  \
    rm -rf /home/app/.config &&  \
    rm -rf /home/app/.yarn &&  \
    rm -rf /home/app/.cache && \
    ls -lah /home/app/

# Runtime container
FROM base
USER app:app
WORKDIR /home/app
COPY --from=build --chown=root:root /home/app /home/app
