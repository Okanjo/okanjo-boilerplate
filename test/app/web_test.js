"use strict";

const should = require('should');
const Async = require('async');
const WebWorker = require('../../app/workers/web_worker');
const Needle = require('needle');

describe('Web Command', function () {

    const app = require('../../app');

    describe('basic usage', () => {
        let worker;

        before((done) => {
            worker = new WebWorker(app);
            done();
        });

        after((done) => {
            worker.shutdown = done;
            worker.prepareForShutdown(true);
        });

        it('should start', (done) => {
            // Retry until the server starts up
            Async.retry({times: 20, interval: 250}, (cb) => {
                Needle.get('http://localhost:' + app.config.webServer.port + '/', (err, res) => {

                    if (err) {
                        cb(err);
                    } else {
                        res.should.be.an.Object();

                        //console.log(err, res);
                        res.statusCode.should.be.equal(200);
                        cb();
                    }

                });
            }, (err) => {
                should(err).not.be.ok();
                done();
            });
        });
    });

    describe('session cache', () => {

        let worker;
        const originalCache = app.config.webServer.hapiServerOptions.cache;

        before((done) => {
            app.config.webServer.hapiServerOptions.cache = [
                {
                    name: 'redisCache',
                    engine: require('catbox-memory'), // sshh this isn't redis
                    partition: 'unit-test-cache'
                }
            ];

            worker = new WebWorker(app);
            done();
        });

        after((done) => {
            app.config.webServer.hapiServerOptions.cache = originalCache;

            worker.shutdown = done;
            worker.prepareForShutdown(true);
        });


        it('should use redis session store if asked to do so', (done) => {
            // Retry until the server starts up
            Async.retry({times: 20, interval: 250}, (cb) => {
                Needle.get('http://localhost:' + (app.config.webServer.port) + '/', (err, res) => {
                    if (err) {
                        cb(err);
                    } else {
                        res.should.be.an.Object();

                        //console.log(err, res);
                        res.statusCode.should.be.equal(200);
                        cb();
                    }

                });
            }, (err) => {
                should(err).not.be.ok();
                done();
            });
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
            worker.prepareForShutdown(true);
        });


        it('should force https if configured to do so', (done) => {
            // Retry until the server starts up
            Async.retry({times: 20, interval: 250}, (cb) => {
                Needle.get('http://localhost:' + (app.config.webServer.port) + '/', (err, res) => {
                    if (err) {
                        cb(err);
                    } else {
                        res.should.be.an.Object();

                        //console.log(err, res);
                        res.statusCode.should.be.equal(301);
                        cb();
                    }

                });
            }, (err) => {
                should(err).not.be.ok();
                done();
            });
        });

        it('should handle ssl offloading', (done) => {
            // Retry until the server starts up
            Async.retry({times: 20, interval: 250}, (cb) => {
                Needle.get('http://localhost:' + (app.config.webServer.port) + '/', {
                    headers: {
                        'x-forwarded-proto': 'https'
                    }
                }, (err, res) => {
                    if (err) {
                        cb(err);
                    } else {
                        res.should.be.an.Object();

                        //console.log(err, res);
                        res.statusCode.should.be.equal(200);
                        cb();
                    }

                });
            }, (err) => {
                should(err).not.be.ok();
                done();
            });
        });

    });


});

