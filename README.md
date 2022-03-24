# Okanjo Boilerplate

[![Node.js CI](https://github.com/Okanjo/okanjo-boilerplate/actions/workflows/node.js.yml/badge.svg)](https://github.com/Okanjo/okanjo-boilerplate/actions/workflows/node.js.yml) [![Coverage Status](https://coveralls.io/repos/github/Okanjo/okanjo-boilerplate/badge.svg?branch=master)](https://coveralls.io/github/Okanjo/okanjo-boilerplate?branch=master)

This project delivers a fully working application using the Okanjo framework. You can use this app as 
a starting point for new web applications.  

The Okanjo Boilerplate app includes a simple gulp-based build process, supporting:
* Webpack + Babel – so you can use the latest and greatest ECMA features
* React + Redux – for UI, with JSX support
* Bootstrap + React Bootstrap – for fast UI prototyping
* Sass – For friendlier styling

Of course, if you don't need a UI, you are free to remove all UI and webpack components!

# Installation

To run this app, you will need:
* Node.js LTS v12, v14, v16 – http://nodejs.org

Once cloned, run npm to install the required dependencies.

For development:
```sh
$ npm i
```
*This will install all dependencies needed to run the app in development mode*

For production:
```sh
$ npm i --production
```
*This will install only the dependencies needed to run the pre-built app*

# Running

To start the app:
```sh
$ npm start
```

# Building

To run the build pipeline:
```sh
$ npm run build
```

# Testing

To run unit tests and code coverage:

```sh
$ npm run report
```

# Scripts

All the scripts registered are:

- `npm run clean` – Purges the coverage and build artifacts
- `npm run build` – Runs the webpack build pipeline
- `npm run test` – Runs the unit tests (no coverage)
- `npm run cover` – Runs the unit tests with coverage
- `npm run lint` – Runs eslint for code quality checks
- `npm run report` – Runs unit tests with coverage and eslint quality checks
- `npm run watch` – Runs the webpack build pipeline with updates enabled
- `npm run start` – Starts the app

# Related Documentation

* Framework
  * Okanjo
    * App – http://developer.okanjo.com/okanjo-app
    * Broker – http://developer.okanjo.com/okanjo-app-broker
    * Redis – http://developer.okanjo.com/okanjo-app-redis
    * Server – http://developer.okanjo.com/okanjo-app-server
    * Session – http://developer.okanjo.com/okanjo-app-server-session
  * Hapi – https://hapijs.com/api
    * catbox-redis – https://github.com/hapijs/catbox-redis
    * good – https://github.com/hapijs/good
      * good-console – https://github.com/hapijs/good-console
      * good-squeeze – https://github.com/hapijs/good-squeeze
    * hapi-auth-basic-key – https://github.com/kfitzgerald/hapi-auth-basic-key
    * joi – https://github.com/sideway/joi
  * Commander.js – https://github.com/tj/commander.js/
* Build Process
  * Babel – https://babeljs.io/docs/en/
  * Webpack – https://webpack.js.org/
  * ESLint – https://eslint.org/
* UI Stack
  * React – https://reactjs.org/docs/hello-world.html
  * Redux + DevTools – https://redux.js.org/
    * Redux-Thunk – https://github.com/reduxjs/redux-thunk
    * Redux-Localstorage – https://github.com/elgerlambert/redux-localstorage
  * React-Router – https://reacttraining.com/react-router/web/guides/philosophy
  * React-Bootstrap – https://react-bootstrap.github.io/getting-started/introduction/
  * Sass – https://sass-lang.com/
  * Utilities
    * Classnames – https://github.com/JedWatson/classnames
    * TitleCase – https://github.com/blakeembrey/change-case
* Testing
  * Mocha – https://mochajs.org/
  * Should – https://shouldjs.github.io/
  * nyc – https://github.com/istanbuljs/nyc
