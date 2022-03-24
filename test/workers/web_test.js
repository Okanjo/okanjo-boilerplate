"use strict";

const should = require('should');
const WebWorker = require('../../app/workers/WebWorker');
const Needle = require('needle');

describe('Web Command', function () {

    const app = require('../../app/index');

    async function sleep(duration) {
        return await new Promise(resolve => {
            setTimeout(resolve, duration);
        });
    }

    describe('basic usage', () => {
        let worker;

        before((done) => {
            worker = new WebWorker(app);
            done();
        });

        after((done) => {
            worker.shutdown = done;
            worker.prepareForShutdown(true).then(() => {
                // spin until done is called
            });
        });

        it('should start', async () => {
            // Retry until the server starts up
            let success = false;
            for (let statusCode, i = 0; i < 20 && !success; i++) {
                try {
                    ({statusCode} = await Needle('get', `http://localhost:${app.config.webServer.hapiServerOptions.port}/`));
                } finally {
                    if (statusCode === 200) {
                        success = true;
                    } else {
                        await sleep(250);
                    }
                }
            }
            should(success).be.exactly(true);
        });

    });

    describe('session cache', () => {

        let worker;
        const originalCache = app.config.webServer.hapiServerOptions.cache;

        before((done) => {

            app.config.webServer.hapiServerOptions.cache = [
                {
                    name: 'redisCache',
                    engine: new (require('@hapi/catbox-memory'))({ // sshh this isn't redis
                        partition: 'unit-test-cache'
                    }),
                }
            ];

            worker = new WebWorker(app);
            done();
        });

        after((done) => {
            app.config.webServer.hapiServerOptions.cache = originalCache;

            worker.shutdown = done;
            worker.prepareForShutdown(true).then(() => {});
        });


        it('should use redis session store if asked to do so', async () => {
            // Retry until the server starts up
            let success = false;
            for (let statusCode, i = 0; i < 20 && !success; i++) {
                try {
                    ({statusCode} = await Needle('get', `http://localhost:${app.config.webServer.hapiServerOptions.port}/`));
                } finally {
                    if (statusCode === 200) {
                        success = true;
                    } else {
                        await sleep(250);
                    }
                }
            }
            success.should.be.exactly(true);
        });

    });

    describe('force https', () => {

        let worker;
        const originalForce = app.config.webServer.forceHttps;

        before((done) => {
            app.config.webServer.forceHttps = true;

            worker = new WebWorker(app);
            done();
        });

        after((done) => {
            delete app.config.webServer.hapiServerOptions.cache;
            app.config.webServer.forceHttps = originalForce;

            worker.shutdown = done;
            worker.prepareForShutdown(true).then(() => {});
        });


        it('should force https if configured to do so', async () => {
            // Retry until the server starts up
            let success = false;
            for (let statusCode, i = 0; i < 20 && !success; i++) {
                try {
                    ({statusCode} = await Needle('get', `http://localhost:${app.config.webServer.hapiServerOptions.port}/`));
                } finally {
                    if (statusCode === 301) {
                        success = true;
                    } else {
                        await sleep(250);
                    }
                }
            }
            success.should.be.exactly(true);
        });

        it('should handle ssl offloading', async () => {
            // Retry until the server starts up
            let success = false;
            for (let statusCode, i = 0; i < 20 && !success; i++) {
                try {
                    ({ statusCode } = await Needle('get', `http://localhost:${app.config.webServer.hapiServerOptions.port}/`, {}, {
                        headers: {
                            'x-forwarded-proto': 'https'
                        }
                    }));
                } finally {
                    if (statusCode === 200) {
                        success = true;
                    } else {
                        await sleep(250);
                    }
                }
            }
            success.should.be.exactly(true);
        });

    });


});

