# vue-todos

Demo: https://pbastowski.github.io/vue-todos/

This project is meant to demonstrate how to use vue, vue-router and vuex to implement a todo app. It is a visual clone of the popular TodoMVC demo app. 

Visual means that this project does not attempt to implement an MVC pattern of the TodoMVC app, but just copy it's visual (UX) aspects. 

Libraries used:

- Vue 2
- vue-router
- vuex  
- Vuetify

You will neeed vue-cli 3 in zero-config mode to run this project. Also, npm version 5.6 or higher is required. Alternatively you can use the latest version of yarn.

## Installation

Do the following:

- clone this repo 
- install vue-cli 3 globally

```bash
npm i -S @vue/cli @vue/cli-service-global 
```

- install pug and sass support globally, as we will be using both in this project

```bash
npm i -g @vue/cli @vue/cli-service-global && cd `npm ls -g --depth 0 | head -1` && cd node_modules/@vue/cli-service-global && npm i -E node-sass pug pug-html-loader pug-loader sass-loader
```

## See the project running

```bash
vue serve
```
