"use strict";

/**
 * Recycles the workers running in the web brokerage
 * @param broker - The web broker
 * @param path - The path that caused the reload
 * @param eslint – Whether to rerun eslint or not
 */
function reloadBroker(broker, path, eslint) {
    console.log(' > Reloading' + broker.type + ' broker due to change in file', path);
    broker.recycleWorkers();

    // Since code changed, re-lint!
    if (eslint) digForLint();
}


/**
 * Check the app for quality issues and report them to standard out / console
 */
function digForLint() {

    const Spawn = require('child_process').spawn;
    const Path = require('path');
    const OS = require('os');
    const lint = Spawn(
            Path.join(__dirname, '..', '..', 'node_modules', '.bin', 'eslint' + (OS.type() === 'Windows_NT' ? '.cmd' : '')),
            ['.'],
            {
                stdio: 'inherit'
            }
        );

    lint.on('close', function(code) {
        if (code !== 0) {
            console.error(' ** Please fix the above errors before committing ** ');
        }
    });

    /* if jshint blows up, it won't take everything else with it. */
    lint.on('error', function(err) {
        console.error("I am Error.", err);
    });

}

/**
 * Launches the web server brokerage
 * @param app
 * @param options
 */
function launchBroker(app, options) {

    // Broker module
    const OkanjoBroker = require('okanjo-app-broker');

    // Start linting while we're booting up for something to do
    if (app.config.webServer.build && !options.nobuild) digForLint();

    //
    // Start the web servers!
    //

    //noinspection JSUnusedLocalSymbols
    const webBroker = new OkanjoBroker(app, 'web', {
        workerCount: app.config.webServer.workers, // Make use of all cores
        recycleRate: 0  // Recycle never (for now)
    });

    webBroker.on('worker_message', (msg) => {
        if (msg === 'maintenance-shutdown') {

            // Drain brokers
            let isWebDrained = false;

            const checkForShutdownState = () => {
                if (isWebDrained) {
                    // Kill ourselves
                    console.log('Graceful shutdown complete. Ending...');
                    process.kill(process.pid, 'SIGTERM');
                }
            };

            webBroker.on('worker_ended', () => {
                isWebDrained = webBroker._workerIds[webBroker.type].length === 0;
                checkForShutdownState();
            });

            webBroker.drainWorkers();

            // Emergency shutdown in 10 seconds regardless of state
            setTimeout(checkForShutdownState, 10000);
        }
    });

    // If auto-reload is enabled, auto recycle the web server workers when a change to a file happens
    if (app.config.webServer.autoReload) {
        const Chokidar = require('chokidar');
        const Path = require('path');

        const watcher = Chokidar.watch([
            Path.join(__dirname, '..', '..', 'app', 'routes', '*.js'),
            Path.join(__dirname, '..', '..', 'app', '*.js'),
            Path.join(__dirname, '..', '..', 'app', 'services', '*.js')
            //path.join(__dirname,'..','..','ui','components','*.js'),
            //path.join(__dirname,'..','..','ui','extensions','*.js'),
            //path.join(__dirname,'..','..','ui','lib','*.js'),
            //path.join(__dirname,'..','..','ui','styles','*.less'),
            //path.join(__dirname,'..','..','ui','routes','**/*.js')
        ], {usePolling: true});

        watcher
            .on('change', () => {
                reloadBroker(webBroker, app.config.webServer.build && !options.nobuild);
            })
            .on('unlink', () => {
                reloadBroker(webBroker, app.config.webServer.build && !options.nobuild);
            })
            .on('error', function(err) {
                app.report('Blew up watching for web server changes', err);
            });

        console.log('');
        console.log('*******************************************************');
        console.log('**** WATCHING FOR CHANGES - WILL RELOAD WEB SERVER ****');
        console.log('*******************************************************');
        console.log('');
    }

}

/**
 * Builds the app and starts the server brokers
 * @param app
 * @param options
 */
function startServer(app, options) {
    if (app.config.webServer.build && !options.nobuild) {

        // Fire off the build process, which will start the server on complete
        setImmediate(() => {

            // Build website assets prior to launching
            const gulp = require('../../gulpfile')
                .on('task_start', function(e) {
                    console.error(' >> Starting task ' + e.task + '...');
                })
                .on('task_stop', function(e) {
                    console.error(' >> Finished task ' + e.task + ' in ' + e.duration.toPrecision(2) + 's');
                })
                .on('task_err', function(e) {
                    app.report('Gulp task blew up!', e);
                })
                .on('start', function(e) {
                    console.error(' >> Starting build [' + e.message + ']');
                })
                .on('stop', function() {
                    console.error(' >> Build successful.');
                })
                .on('err', function(err) {
                    app.report('Gulp build blew up!', err);
                    console.error(' >> Build failed!', err);
                })
                .once('stop', launchBroker.bind(null, app, options));

            gulp.start('default');
        });
    } else {
        // Skipping build, just start up
        launchBroker(app, options);
    }
}


/**
 * Web server command module
 * @param program
 */
module.exports = function(program) {

    const app = require('../');

    //noinspection JSUnusedLocalSymbols
    program
        .command('web')
        .option('-b, --nobuild', "Don't build on start", false)
        .description('Run a web server instance')
        .action(function(options) {

            startServer(app, options);

        })
    ;

};