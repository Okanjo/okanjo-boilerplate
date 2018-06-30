/**
 * @this OkanjoServer
 */
module.exports = function() {

    // Establish the correct environment for reporting on the home page
    const info = require('../../package.json');
    let env = this.app.currentEnvironment;

    /* istanbul ignore else: trust me */
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
        handler: (request, reply) => {

            reply(this.app.response.ok({
                version: info.version,
                mode: env
            }));

        },
        config: {
            description: "Returns basic information about the app",
            tags: ["General", "App Info", "Excluded"]
        }
    });
};