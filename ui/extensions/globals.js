"use strict";


/**
 * @this OkanjoServer
 * @param env
 */
module.exports = function(env) {

    const pkg = require('../../package.json');

    env.addGlobal('env', this.app.currentEnvironment);
    env.addGlobal('pid', process.pid);
    env.addGlobal('version', pkg.version);

    env.addFilter('json', function (val) {
        return JSON.stringify(val);
    });


};
