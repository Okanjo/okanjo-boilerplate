"use strict";

/**
 * App
 * @type {OkanjoApp}
 */
const OkanjoWorker = require('okanjo-app-broker/OkanjoWorker');
const Cluster = require('cluster');
const OkanjoServer = require('okanjo-app-server');
const OkanjoSessionPlugin = require('okanjo-app-server-session');
const Url = require('url');

/**
 * Web server worker
 */
class WebWorker extends OkanjoWorker {

    /**
     * Constructor
     * @param app
     */
    constructor(app) {
        super(app);
    }

    /**
     * Start a web server instance when the worker boots up
     */
    init(callback) {

        // Sent the error source context to the API
        this.app.setReportingContext({ worker: "web" });

        // Connect to the basic app services
        this.app.connectToServices(() => {

            const TWO_WEEKS = 14 * 24 * 60 * 60 * 1000; // 14 days

            // noinspection JSUnusedGlobalSymbols
            const options = {
                extensions: [
                    /**
                     * Register session management system
                     * @this OkanjoServer
                     * @param callback
                     */
                    function(callback) {
                        let cache = null;

                        if (this.app.config.webServer.hapiServerOptions.cache) {
                            cache = this.hapi.cache({
                                cache: 'redisCache', // <-- use the redis cache we made in config.js
                                segment: 'sessions',
                                expiresIn: TWO_WEEKS
                            });
                        }

                        OkanjoSessionPlugin(this, this.app.config.sessionAuth, cache, callback);
                    },

                    /**
                     * Register HTTPS forcing
                     * @this OkanjoServer
                     * @param next
                     */
                    function(next) {
                        if (this.app.config.webServer.forceHttps) {
                            this.hapi.ext('onRequest', (request, reply) => {
                                // will always be running through a load balancer!
                                if (request.headers['x-forwarded-proto'] !== "https" && request.url.path !== '/lb-status') {
                                    request.url.protocol = 'https';
                                    request.url.host = request.info.host;
                                    reply.redirect(Url.format(request.url)).code(301);
                                } else {
                                    reply.continue();
                                }
                            });
                        }
                        next();
                    }
                ]
            };

            // Create the web server instance
            this.web = new OkanjoServer(this.app, this.app.config.webServer, options, (err) => {
                /* istanbul ignore if: out of scope */
                if (err) this.app.report('Blew up initializing web server', err);

                // Start the server after initialization
                this.web.start((err) => {
                    /* istanbul ignore else: out of scope */
                    if (!err) {
                        /* istanbul ignore next: cluster won't likely be running during testing */
                        console.log('Web server', Cluster.worker ? Cluster.worker.id : '0', 'running at:', this.web.hapi.info.uri);
                    }

                    /* istanbul ignore if: Added for unit testing, will allow us to start testing when we know the server is up */
                    if (callback) callback(err);

                });

            });

        });
    }


    //noinspection JSUnusedGlobalSymbols,JSUnusedLocalSymbols
    /**
     * Starts the internal shutdown process (hook point)
     */
    prepareForShutdown(canAsync) {
        this.web.stop(this.shutdown.bind(this));
    }
}

module.exports = exports = WebWorker;