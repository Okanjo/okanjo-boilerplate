"use strict";

const OkanjoWorker = require('okanjo-app-broker/OkanjoWorker');
const Cluster = require('cluster');
const OkanjoServer = require('okanjo-app-server');
const OkanjoSessionPlugin = require('okanjo-app-server-session');
const Url = require('url');
const reportingExtension = require('../extensions/reporting');

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
    async init() {

        // Sent the error source context to the API
        this.app.setReportingContext({ worker: "web" });

        // Connect to the basic app services
        await this.app.connectToServices();

        const TWO_WEEKS = 14 * 24 * 60 * 60 * 1000; // 14 days

        // noinspection JSUnusedGlobalSymbols
        const options = {
            extensions: [

                reportingExtension,

                /**
                 * Register session management system
                 * @this OkanjoServer
                 */
                async function() {
                    let cache = null;

                    if (this.app.config.webServer.hapiServerOptions.cache) {
                        cache = this.hapi.cache({
                            cache: 'redisCache', // <-- use the redis cache we made in config.js
                            segment: 'sessions',
                            expiresIn: TWO_WEEKS
                        });
                    }

                    await OkanjoSessionPlugin.register(this, this.app.config.sessionAuth, cache);
                },

                /**
                 * Register HTTPS forcing
                 * @this OkanjoServer
                 */
                async function() {
                    if (this.app.config.webServer.forceHttps) {
                        this.hapi.ext('onRequest', (request, h) => {
                            // will always be running through a load balancer!
                            if (request.headers['x-forwarded-proto'] !== "https" && request.url.path !== '/lb-status') {
                                request.url.protocol = 'https';
                                request.url.host = request.info.host;
                                return h.response('You are being redirected...').takeover().redirect(Url.format(request.url)).code(301);
                            } else {
                                return h.continue;
                            }
                        });
                    }
                }
            ]
        };

        // Create the web server instance
        this.web = new OkanjoServer(this.app, this.app.config.webServer, options);

        await this.web.start();

        /* istanbul ignore next: testing might not use Cluster */
        console.log('Web server', Cluster.worker ? Cluster.worker.id : '0', 'running at:', this.web.hapi.info.uri); // eslint-disable-line no-console
    }

    //noinspection JSUnusedGlobalSymbols,JSUnusedLocalSymbols
    /**
     * Starts the internal shutdown process (hook point)
     */
    async prepareForShutdown(canAsync) {
        /* istanbul ignore else: race condition or aborted startup */
        if (this.web) await this.web.stop();
        this.shutdown();
    }
}

module.exports = exports = WebWorker;