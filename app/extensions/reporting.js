"use strict";

/**
 * Request logging
 * @this OkanjoServer
 */
module.exports = async function() {

    const options = {
        ops: {
            interval: 60000
        },
        reporters: {
            appConsoleReporter: [
                {
                    module: '@hapi/good-squeeze',
                    name: 'Squeeze',
                    args: [
                        {
                            error: '*',
                            ops: '*',
                            log: '*',
                            response: {
                                include: '*',
                                exclude: ['Do Not Log']
                            }
                        }
                    ]
                },
                {
                    module: '@hapi/good-console'
                },
                'stdout'
            ]
        }
    };

    /* istanbul ignore next: we don't want to see all the logs when running reports */
    if (process.env.SILENCE_REPORTS) {
        options.reporters.appConsoleReporter.pop(); // strip stdout so we don't log to console
    }

    await this.hapi.register({
        plugin: require('@hapi/good'),
        options
    });
};