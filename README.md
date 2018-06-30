# Okanjo Boilerplate

This project delivers a fully working application using the Okanjo framework. You can use this app as 
a starting point for new web applications.  

The Okanjo Boilerplate app includes a simple gulp-based build process, supporting:
* Babel + Browserify –  so you can use the latest and greatest ECMA features
* React + Redux – for UI, with JSX support
* Bootstrap + React Bootstrap – for fast UI prototyping
* Less – For friendlier styling
* Realtime Updates – Watches for file changes and automatically does partial rebuilds
* Custom build processes – Easily integrate custom build routines

Of course, if you don't need a UI, you are free to remove all UI and gulp components!

# Installation

To run this app, you will need:
* Node.js LTS v6 or v8 ([http://nodejs.org])
* Yarn (`npm i -g yarn`)

Once cloned, run yarn to install the required dependencies.

For development:
```sh
$ yarn
```
*This will install all dependencies needed to run the app in development mode*

For production:
```sh
$ yarn --production
```
*This will install only the dependencies needed to run the pre-built app*

# Running

To run the web application:
```sh
$ node . web
```

# Related Documentation
* React – https://reactjs.org/docs/hello-world.html
* Redux – https://redux.js.org/
* React-Router – https://reacttraining.com/react-router/web/guides/philosophy
* React-Bootstrap – https://react-bootstrap.github.io/components.html
