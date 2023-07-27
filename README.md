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

## Run on Development Environments

- Run the code
  `yarn run dev`
- You can then see the pages on "http://localhost:3000/"
