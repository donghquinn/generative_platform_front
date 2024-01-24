#
# --- base image ---
FROM node:20.3-alpine3.17 as base

# set workdir
WORKDIR /home/node

# copy package.json, package-lock.json into image
COPY yarn.lock ./

# --- release ---
FROM base AS release

COPY . .

RUN yarn install

RUN yarn run build

ENTRYPOINT ["yarn", "start"]

# #
# # --- base image ---
# FROM node:20.3-alpine3.17 as base

# # set workdir
# WORKDIR /home/node

# # copy package.json, package-lock.json into image
# COPY yarn.lock .yarnrc.yml package.json tsconfig.json ./
# COPY .yarn ./.yarn

# RUN yarn install


# # --- release ---
# FROM base AS release

# WORKDIR /home/node

# COPY --from=base /home/node/node_modules /home/node/node_modules

# COPY . .

# RUN yarn run build

# CMD ["yarn", "start"]
