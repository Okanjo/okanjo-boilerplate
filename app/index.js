const config = require('../config');
const OkanjoApp = require('okanjo-app');

// Create a new instance of the core okanjo app class
const app = new OkanjoApp(config);

app.services = {};

app.workers = {
    web: require('./workers/WebWorker')
};

module.exports = app;