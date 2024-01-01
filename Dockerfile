#
# --- base image ---
FROM node:20.3-alpine3.17 as base

# set workdir
WORKDIR /home/node

COPY . .

RUN yarn install

RUN yarn run build

ENTRYPOINT ["yarn", "start"]
