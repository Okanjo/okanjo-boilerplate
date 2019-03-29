# Okanjo Boilerplate

This project delivers a fully working application using the Okanjo framework. You can use this app as 
a starting point for new web applications.  

The Okanjo Boilerplate app includes a simple gulp-based build process, supporting:
* Babel + Browserify –  so you can use the latest and greatest ECMA features
* React + Redux – for UI, with JSX support
* Bootstrap + React Bootstrap – for fast UI prototyping
* Less – For friendlier styling
* Watchify – Watches for file changes and automatically does partial rebuilds
* Custom build processes – Easily integrate custom build routines

Of course, if you don't need a UI, you are free to remove all UI and gulp components!

# Installation

To run this app, you will need:
* Node.js LTS v8 or v10 – http://nodejs.org

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

To run the web application:
```sh
$ node . web
```

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
    * hapi-qs – https://github.com/dafortune/hapi-qs
    * joi – https://github.com/hapijs/joi
  * Commander.js – https://github.com/tj/commander.js/
* Build Process
  * Babel – https://babeljs.io/docs/en/
  * Gulp – https://gulpjs.com/
  * Browserify – http://browserify.org/
  * Watchify – https://github.com/browserify/watchify
  * ESLint – https://eslint.org/
* UI Stack
  * React – https://reactjs.org/docs/hello-world.html
  * Redux – https://redux.js.org/
  * React-Router – https://reacttraining.com/react-router/web/guides/philosophy
  * React-Bootstrap – https://react-bootstrap.github.io/getting-started/introduction/
  * Less – http://lesscss.org/
* Testing
  * Mocha – https://mochajs.org/
  * Should – https://shouldjs.github.io/
  * nyc – https://github.com/istanbuljs/nyc
