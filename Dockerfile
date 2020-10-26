##### BASE NODE IMAGE #######

FROM node:12.16.3-alpine as base

WORKDIR  /usr/app

##### Frontend source stage ######

FROM base as frontend-source

COPY front/package.json ./
COPY front/yarn.lock ./
COPY front/src ./src
COPY front/public ./public

#### Frontend build stage ####

FROM frontend-source as frontend-build

ARG captcha_site_key

ENV POI_APP_CAPTCHA_SITE_KEY=$captcha_site_key

COPY front/tsconfig.json ./
RUN yarn
RUN yarn build

##### Backend source stage ######

FROM base as backend-source

COPY back/package.json ./
COPY back/yarn.lock ./
COPY back/src ./src

##### Backend dependencies stage ######

FROM backend-source as backend-dependencies

RUN yarn install --frozen-lockfile --production

#### Backend build stage ####

FROM backend-source as backend-build

COPY back/tsconfig.json ./
RUN yarn
RUN yarn build

###### Release stage #####

FROM base as release

COPY package.json ./
COPY --from=backend-dependencies --chown=node:node /usr/app/node_modules/ /usr/app/node_modules/
COPY --from=backend-build --chown=node:node /usr/app/dist/ /usr/app/dist/
COPY --from=frontend-build --chown=node:node /usr/app/dist/ /usr/app/dist/public

USER node

CMD ["yarn", "start"]