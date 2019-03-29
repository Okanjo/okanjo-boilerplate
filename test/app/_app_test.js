"use strict";

const should = require('should');

describe('App', function () {

    it('should require', () => {
        const app = require('../../app');
        should(app).be.ok();
    });

    it('should start', async () => {
        const app = require('../../app');
        await app.connectToServices();
    });

});