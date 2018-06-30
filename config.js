const Path = require('path');
const TWO_WEEKS = 14 * 24 * 60 * 60 * 1000; // 14 days


//noinspection JSUnusedGlobalSymbols
module.exports = {

    //region Default Config
    webServer: {

        hapiServerOptions: {
            // cache: [
            //     {
            //         name: 'redisCache',
            //         engine: require('catbox-redis'),
            //         host: this.app.config.redis.host,
            //         port: this.app.config.redis.port,
            //         database: this.app.config.redis.db || 0,
            //         partition: 'app-cache'
            //     }
            // ]
        },

        // HAPI global options
        hapiConnectionOptions: {
            routes: {
                // cors: true, // always allow CORS - think about it!
                // jsonp: 'callback', // allow transposition of responses to JSONP callbacks when desired
                validate: {
                    options: {
                        // Show all errors with the request, not just the first one (great for form error presentation)
                        abortEarly: false,

                        // Don't get hung up on unknown garbage
                        allowUnknown: true,
                        stripUnknown: true
                    }
                }
            }
        },

        // Basic config
        port: 7001,
        drainTime: 1, // how long to wait to drain connection before killing the socket on shutdown (in ms)

        // Worker config
        workers: 1, // How many workers to maintain at any given time

        // Route config
        routePath: [
            Path.join(__dirname, 'app', 'routes')
        ],

        // Socket.io config
        webSocketEnabled: false, // Whether socket.io is bound to the web server port
        webSocketConfig: undefined, // socket.io server options

        // View handler options
        viewHandlerEnabled: true, // Whether the server should even do view handing at all √
        cacheTemplates: false, // Whether HAPI will cache the output of templates
        viewPath: Path.join(__dirname, 'ui', 'views'), // The directory where view files are based out of
        nunjucksEnvOptions: { // http://mozilla.github.io/nunjucks/api.html#configure
            noCache: true
        },
        nunjucksExtensionsPath: Path.join(__dirname, 'ui', 'extensions'), // The directory where extension modules live, sig: function(env) { /* this = webServer */ }

        // Static file handler options
        staticHandlerEnabled: true, // Whether to enable static asset serving
        staticListingEnabled: true, // Whether to allow directory listings
        staticPaths: [ // The directory of static assets,  e.g. /static/css/main.css => GET /css/main.css
            { path: Path.join(__dirname, 'ui', 'static', 'dist'), routePrefix: '/dist' } ,
            { path: Path.join(__dirname, 'ui', 'static', 'fonts'), routePrefix: '/fonts' },
            { path: Path.join(__dirname, 'ui', 'static', 'img'), routePrefix: '/img' },
            { path: Path.join(__dirname, 'ui', 'static', 'js'), routePrefix: '/js' },
        ],
        staticNpmModules: [ // Array of module names and paths to expose as static paths (will be prefixed with /vendor in the url)
            // { moduleName: 'async', path: 'dist' }, // GET /vendor/async/async.min.js
            // { moduleName: 'nunjucks', path: 'browser' }, // GET /vendor/nunjucks/nunjucks.min.js
            // { moduleName: 'moment', path: 'min' } // GET /vendor/moment/moment.min.js
        ],

        forceHttps: false,
        autoReload: true, // Whether to recycle the workers when server-side changes are made (good for development)
        build: true,      // Whether to build the app from scratch on startup (goof for development)
        disableHapiEtag: true
    },

    // Session plugin config
    sessionAuth: {
        cookie: {
            name: "okbp-sid", // this is the name of the session cookie
            options: {
                ttl: TWO_WEEKS,
                encoding: 'none',
                isSecure: false,
                path: '/' // <-- without this, you might end up with setting cookies on each page of the site. DERP DERP
            } // override default cookie options (use HAPI cookie settings)
        },
        redirectOnTry: false, // Whether to redirect when auth fails
        redirectTo: '/login', // Where to redirect to when auth fails
        appendNext: false // Whether to include the former url as the `next` parameter to the login redirect (so you can point the client back to the starting page #ux)
    },

    // redis: {
    //     host: '127.0.0.1',
    //     port: 6379,
    //     retry_strategy: /* istanbul ignore next: edge case */ function(options) {
    //         return Math.min(options.attempt * 100, 5000);
    //     },
    //     // prefix: env?
    //
    //     redlock: {
    //         driftFactor: 0.01, // the expected clock drift; for more details, see http://redis.io/topics/distlock
    //         retryCount:  50, // the max number of times Redlock will attempt to lock a resource before erroring
    //         retryDelay:  100 // the time in ms between attempts
    //     }
    // },


    // Error reporting: Where to send raven app reports
    reportToSentry: false,
    ravenReportUri: null,
    ravenUIReportUri: null,

    //endregion

    //region Development Environment Overrides
    dev: {
        webServer: {
            autoReload: false,
            build: false
        },

        reportToSentry: true
    }
    //endregion

};