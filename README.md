# GPT API FRONT

- You can use chat-GPT API functions via this codes.

## Prerequisitions

- You should have chat-GPT API Key
- Or have your own LLM(Large Language Model)
  - In this case, the body requirements would be different agains open-ai's.
  - You have to customize the requesting functions by yourself.
- This codes are written on Node.JS 18.12.1. I recommend you to run this code over version 18 over.
- All the dependencies are managed by Yarn berry.

## File Structures

- pages: All the pages should be saved this folder.
  - "index.tsx" file is the main landing-page.
  - "\_app.tsx" file is the rendering page. Typically defines CSS files, scripts, web sites' title here.
    - This file will be loaded between pages. So you can load styles, images, and other stuffs every rendering moment which is globally adapted.
- components: Components codes are saved here. The folder name is not mandatory rule.
- src: Functions are saved here. I saved requesting functions and interface files here.

## Install all the dependencies

- Install dependencies
  `yarn install`

## Environment Variables

- To run this code and secure sensitive informations(such as API key, backend server url, DB access information, etc), use env file.
- make .env file and put the informations in it.

## Run on Development Environments

- Run the code
  `yarn run dev`
- You can then see the pages on "http://localhost:3000/"

## Build

- You can check all the codes are good by commanding below.
  `yarn run build`
- If something goes wrong, it means the codes should occur error. It commonly shows type error.

## Deploy

- If you concluded every codes are good, then you can deploy this codes.
- There's two ways to deploy: Docker, Locally running.

### Docker

- Docker is great tool to deploy and manage the process.
- I'm using Dockerfile and docker-compose to deploy.
- Define running environments and all the tasks to run this code in Dockerfile.
- Then write docker-compose file to use this Dockerfile.

### Locally

- You can write your own script to run on local without Docker.
- Install all the dependencies and build the codes on local server.
- Then follow the steps below.
  1. Make the script: vi run.sh -> type "yarn run start"
  2. Make it runable: chmod +x ./run.sh
  3. Run the script on background: You can run it background by using pm2 or nohup
