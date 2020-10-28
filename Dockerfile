FROM node:12.16.3-alpine as base

WORKDIR  /usr/app

# Backend sources

FROM base as back-sources

RUN mkdir back

COPY back/package.json back/
COPY back/yarn.lock back/
COPY back/src back/
COPY back/tsconfig.json back/

# Install backend dependencies

FROM back-sources as dependencies

RUN yarn --cwd /usr/app/back install --frozen-lockfile --production

# Build backend

FROM back-sources as back-build

RUN yarn --cwd /usr/app/back install
RUN yarn --cwd /usr/app/back build

# Frontend sources

FROM base as front-sources

RUN mkdir front

COPY front/package.json front/
COPY front/yarn.lock front/
COPY front/src/ front/src/
COPY front/public/ front/public/
COPY front/tsconfig.json front/
COPY front/poi.config.js front/
COPY front/.yarnclean front/

# Build frontend

FROM front-sources as front-build

ARG captcha_site_key
ENV POI_APP_CAPTCHA_SITE_KEY=$captcha_site_key
RUN yarn --cwd /usr/app/front install
RUN yarn --cwd /usr/app/front build

# Release

FROM base as release

COPY --from=dependencies --chown=node:node /usr/app/back/package.json /usr/app/
COPY --from=dependencies --chown=node:node /usr/app/back/node_modules/ /usr/app/node_modules/
COPY --from=back-build --chown=node:node /usr/app/back/dist/ /usr/app/dist/
COPY --from=front-build --chown=node:node /usr/app/front/dist /usr/app/dist/public

USER node

CMD ["yarn", "start"]
