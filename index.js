"use strict";

const Cluster = require('cluster');
const app = require('./app');

if (Cluster.isMaster) {

    const FS = require('fs'),
        Path = require('path'),
        program = require('commander'),
        commandPath = Path.join(__dirname, 'app', 'commands');

    // Version
    program.version(require('./package.json').version);

    // Load commands
    FS.readdir(commandPath, function(err, files) {
        /* istanbul ignore if: i won't want to recreate file system errors */
        if (err) {
            app.report(err, 'Blew up trying to load commands!');
            process.exit(1);
        }

        const commandTest = /\.js$/;

        files
            .filter(function(file) {
                return commandTest.test(file);
            })
            .forEach(function(file) {
                require(Path.join(commandPath, file))(program);
            }, this);


        // Default help
        program
            .command('*')
            .usage('')
            .action(function(cmd) {
                console.error(''); // eslint-disable-line no-console
                console.error('Invalid command: ' + cmd); // eslint-disable-line no-console
                program.help();
            });

        // Help command
        program.on('--help', function() {
            console.log('  Examples:'); // eslint-disable-line no-console
            // TODO
            console.log(''); // eslint-disable-line no-console
        });

        // Run it
        program.parse(process.argv);

        // No command? HELP!
        if (!program.args.length) program.help();

    });

} else {

    // Let's decide what dance we're gonna do at this party
    let Worker = app.workers[process.env.worker_type];

    /* istanbul ignore else: There should always be a worker */
    // Start the worker
    if (Worker) {
        new Worker(app);
    } else {
        console.error(new Error('Child process work has no type given!')); // eslint-disable-line no-console
    }

}