<p align="center">
  <a href="https://ticketpass-test.netlify.app">
    <img src="./public/img/icons/logo.png" width="200">
  </a>
</p>

[![Netlify Status](https://api.netlify.com/api/v1/badges/3f32b5f0-8381-4d33-a4f1-7843ad0f051b/deploy-status)](https://app.netlify.com/sites/ticketpass-test/deploys)
![Unit test](https://github.com/Renato66/ticketpass/workflows/Unit%20test/badge.svg)
![E2e test](https://github.com/Renato66/ticketpass/workflows/E2e%20test/badge.svg)

# Tickectpass test

Its build using [vite](https://github.com/vitejs/vite) and [vue 3](https://github.com/vuejs/vue-next) to do [this](./design.pdf) design
The site is live at [https://ticketpass-test.netlify.app](https://ticketpass-test.netlify.app)

# How to

## Install dependencies

Yarn knowledge is required for running this project [getting started with yarn](https://yarnpkg.com/getting-started)

```
yarn install
```

## Run

### Compiles and hot-reloads for development

You can look at [localhost:3000](http://localhost:3000) to see the app

```
yarn dev
```

## Tests

### Running e2e tests

The tests are made with [cypress](https://www.cypress.io/)

```
yarn test:e2e
```

### Running unit tests

The tests are made with [jest](https://jestjs.io)

```
yarn test:unit
```

## Build

### Compiles and minifies for production

A folder will be created in root path named `dist`

```
yarn build
```
