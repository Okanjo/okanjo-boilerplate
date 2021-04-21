"use strict";

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
        .option('-w, --watch', "Restart API on file changes", false)
        .description('Run a web server instance')
        .action(function(options) {

            startServer(app, options);

        })
    ;

};

/**
 * Recycles the workers running in the web brokerage
 * @param broker - The web broker
 * @param path - The path that caused the reload
 * @param eslint – Whether to rerun eslint or not
 */
function reloadBroker(broker, path, eslint) {
    console.log(' > Reloading' + broker.type + ' broker due to change in file', path); // eslint-disable-line no-console
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
            console.error(' ** Please fix the above errors before committing ** '); // eslint-disable-line no-console
        }
    });

    /* if jshint blows up, it won't take everything else with it. */
    lint.on('error', function(err) {
        console.error("ESLint blew up", err); // eslint-disable-line no-console
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
                    console.log('Graceful shutdown complete. Ending...'); // eslint-disable-line no-console
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
    if (app.config.webServer.autoReload || options.watch) {
        const Chokidar = require('chokidar');
        const Path = require('path');

        const watcher = Chokidar.watch([
            Path.join(__dirname, '..', '..', 'app', 'routes', '*.js'),
            Path.join(__dirname, '..', '..', 'app', '*.js'),
            Path.join(__dirname, '..', '..', 'app', 'services', '*.js')
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


        console.log(''); // eslint-disable-line no-console
        console.log('*******************************************************'); // eslint-disable-line no-console
        console.log('**** WATCHING FOR CHANGES - WILL RELOAD WEB SERVER ****'); // eslint-disable-line no-console
        console.log('*******************************************************'); // eslint-disable-line no-console
        console.log(''); // eslint-disable-line no-console
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
            const Gulp = require('gulp');
            const tasks = require('../../gulpfile');

            Gulp.on('start', (e) => {
                console.log(` >> Starting '${e.name}'...`); // eslint-disable-line no-console
            });

            Gulp.on('stop', (e) => {
                console.log(` >> Finished '${e.name}' in ${(e.duration[0] * 1e9 + e.duration[1])/1e9}s`); // eslint-disable-line no-console
                if (e.uid === 0) {
                    // BUILD DONE
                    launchBroker(app, options);
                }
            });

            Gulp.on('error', (err) => {
                // app.report('Gulp build blew up!', err);
                console.error(' >> Build failed!', err); // eslint-disable-line no-console
            });

            Object.keys(tasks).forEach((taskName) => {
                const task = tasks[taskName];
                if (typeof task !== 'function') return;

                Gulp.task(taskName, task);
            });

            tasks.default(/* () => { done } */); // won't complete cuz browserify will keep it rolling
        });
    } else {
        // Skipping build, just start up
        launchBroker(app, options);
    }
}