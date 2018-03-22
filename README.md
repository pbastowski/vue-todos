# vue-todos

Demo: https://pbastowski.github.io/vue-todos/

This project is meant to demonstrate how to use vue, vue-router and vuex to implement a todo app. It is a visual clone of the popular TodoMVC demo app. 

Visual means that this project does not attempt to implement an MVC pattern of the TodoMVC app, but just copy it's visual (UX) aspects. 

Libraries that we will use:

- Vue 2
- vue-router
- vuex  
- Vuetify

## Installation

Before start, check that your node and npm versions are at least as shown below

- node 8.9.x or higher
- npm 5.6.x or higher

> You can update your node version like this: `npm install npm@latest -g`

Now, we can clone the project and check out the start branch

```bash
git clone https://github.com/pbastowski/vue-todos.git
git checkout start
```

Install vue-cli 3 and it's zero-config module globally 

```bash
npm i -g @vue/cli @vue/cli-service-global 
```

And finally add pug and sass support to vue-cli, as we will be using both in this project

```bash
cd `npm ls -g --depth 0 | head -1` && cd node_modules/@vue/cli-service-global
npm i -E node-sass sass-loader pug pug-loader
```

The above setup for vue-cli can be used for any of your vue experiments and projects.

