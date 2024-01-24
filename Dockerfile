#
# --- base image ---
FROM node:20.3-alpine3.17 as base

# install curl/timezone
RUN apk --no-cache add curl tzdata && \
  cp /usr/share/zoneinfo/Asia/Seoul /etc/localtime && \
  echo "Asia/Seoul" > /etc/timezone

# set workdir
WORKDIR /home/node

# copy package.json, package-lock.json into image
COPY yarn.lock .yarnrc.yml package.json tsconfig.json ./
COPY .yarn ./.yarn

RUN yarn install


# --- release ---
FROM base AS release

WORKDIR /home/node

COPY --from=base /home/node/node_modules /home/node/node_modules

COPY . .

RUN yarn run build

ENTRYPOINT ["yarn", "start"]
