"use strict";

// quiet req logging on unit tests
// process.env.SILENCE_REPORTS = 1;

process.env.env = 'unittest';

process.on('unhandledRejection', error => {
    console.log('unhandledRejection', error);
});