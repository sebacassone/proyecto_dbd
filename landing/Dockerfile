FROM node:lts-alpine as builder

WORKDIR /usr/src/app

COPY package.json yarn.lock ./
RUN yarn install --network-timeout 1000000

COPY . .

ARG API_HOST=/api
ARG INCLUDED_ROUTES=*
ARG EXCLUDED_ROUTES=
ARG DEFAULT_REDIRECT=public
ARG NODE_OPTIONS=--max_old_space_size=16000

ENV REACT_APP_DEBUG 0
ENV REACT_APP_API_HOST ${API_HOST}
ENV REACT_APP_INCLUDED_ROUTES ${INCLUDED_ROUTES}
ENV REACT_APP_EXCLUDED_ROUTES ${EXCLUDED_ROUTES}
ENV REACT_APP_DEFAULT_REDIRECT ${DEFAULT_REDIRECT}
ENV SKIP_PREFLIGHT_CHECK=true
ENV NODE_OPTIONS=--openssl-legacy-provider

RUN printenv > .env

RUN node build-utils/pre-build.js
RUN yarn build

FROM nginx:1.23.2-alpine

RUN wget https://github.com/stedolan/jq/releases/download/jq-1.6/jq-linux64 && \
  mv jq-linux64 /usr/bin/jq && \
  chmod a+x /usr/bin/jq && \
  mkdir -p /var/www /var/www-src

COPY --from=builder /usr/src/app/build /var/www-src/

COPY build-utils/default.conf /etc/nginx/conf.d
COPY build-utils/nginx.conf /etc/nginx
COPY build-utils/entrypoint.sh /

ENTRYPOINT ["/entrypoint.sh"]
CMD ["nginx", "-g", "daemon off;"]
