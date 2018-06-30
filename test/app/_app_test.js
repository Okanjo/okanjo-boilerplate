"use strict";

const should = require('should');

describe('App', function () {

    it('should require', () => {
        const app = require('../../app');
        should(app).be.ok();
    });

});