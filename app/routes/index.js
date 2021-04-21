"use strict";

/**
 * @this OkanjoServer
 */
module.exports = function() {

    // Establish the correct environment for reporting on the home page
    const pkg = require('../../package.json');
    let env = this.app.currentEnvironment;

    /* istanbul ignore next: testing */
    if (this.app.currentEnvironment === "default") {
        env = "local";
    } else if (this.app.currentEnvironment === "production") {
        env = "live";
    }

    //noinspection JSUnusedGlobalSymbols
    /* istanbul ignore next: this isn't something most apps will leave in */
    this.hapi.route({
        method: 'GET',
        path: '/version',
        handler: (/*request, h*/) => {

            return this.app.response.ok({
                version: pkg.version,
                mode: env
            });

        },
        config: {
            description: "Returns basic information about the app",
            tags: ["General", "App Info", "Excluded"]
        }
    });
};
