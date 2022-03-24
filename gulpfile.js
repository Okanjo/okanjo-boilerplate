"use strict";

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!! DEPRECATED !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// THIS FILE ONLY EXISTS TO SERVE AS A REFERENCE TO THE PREVIOUS BUILD PIPELINE

//region Imports
const { src, dest, parallel, series, watch } = require('gulp');
const Browserify = require('browserify');
const VinylSource = require('vinyl-source-stream');
const Concat = require('gulp-concat');
const Rename = require('gulp-rename');
const Babelify = require('babelify');
const Watchify = require('watchify');
const Del = require('del');
const Ignore = require('gulp-ignore');
const SourceMaps = require('gulp-sourcemaps');
const AutoPrefixer = require('autoprefixer');
const PostCSS = require('gulp-postcss');
const CleanCSS = require('clean-css');
const Sass = require('gulp-sass')(require('sass'));
const Uglify = require('gulp-uglify');

// Ensure we're at the app root so relative paths work fine
process.chdir(__dirname);
//endregion

//region Source Groups

// Browserify vendor build libraries
// These libraries are bundled but not watched for changes
const vendorBrowserLibs = [
    'async',
    'classnames',
    'events',
    'moment',
    'querystring',
    'prop-types',
    'react',
    'react-bootstrap',
    'react-dom',
    'react-redux',
    'react-router',
    'react-router-bootstrap',
    'react-router-dom',
    'react-router-redux',
    'redux',
    'redux-localstorage',
    'redux-thunk',
    'timers',
    'title-case',
];

// Main browserify entrypoint(s)
const appEntries = [
    './ui/src/index.js'
];

// Stuff watchify should not care about in the app build
const watchifyIgnoreList = [
    '**/node_modules/**',
    'ui/static/dist/**'
];

// Stuff watchify should not care about in the vendor build
const watchifyVendorIgnoreList = [
    'ui/**'
];

// Core Sass files
const appStyles = [
    'ui/styles/main.scss'
];

// Rebuild styles when one of these files are touched
const watchStyles = [
    'ui/styles/*.scss'
];

// Core app sources (what to watch for changes to trigger a rebuild)
const appSources = [
    'ui/src/**/*.js',
];

// External css sources (bundle these things together as vendor.css)
const vendorCssSources = [
    'node_modules/normalize.css/normalize.css',
];

// Font files
const fontSources = [
    'ui/fonts/*'
];

// Un-minified vendor sources that should get minified and rolled into the main vendor js
const unminifiedVendorSources = [
    'node_modules/whatwg-fetch/dist/fetch.umd.js',
    // 'node_modules/socket.io-client/socket.io.js',    // Enable socket.io in the build
];

// External libraries and stuff
const vendorSources = [
    'node_modules/es6-promise/dist/es6-promise.min.js',
    'ui/static/dist/js/tmp/*.min.js'
];

// Conditionally loaded scripts (e.g. IE 8)
const unbundledVendorSources = [
    'node_modules/html5shiv/dist/html5shiv.min.js'
];

//endregion

//region Maintenance Tasks

/**
 * Clean vendor and generated files
 */
exports.clean = function clean() {
    return Del([
        'ui/static/dist/**/*'
    ]);
};

//endregion

//region Vendor tasks

/**
 * Minify vendor files
 */
exports.preVendorJs = function preVendorJs() {
    return src(unminifiedVendorSources)
        .pipe(SourceMaps.init({ loadMaps: true }))
        .pipe(Uglify({ output: { comments: 'some' } }).on('error', (...args) => {
            console.error('Blew up!', args); // eslint-disable-line no-console
        }))
        .pipe(Rename({ suffix: '.min' }))
        .pipe(SourceMaps.write('.'))
        .pipe(dest('ui/static/dist/js/tmp'))
        ;
};


/**
 * Just copy unbundled sources to the dist directory
 */
exports.nonBundleVendorJs = function nonBundleVendorJs() {
    return src(unbundledVendorSources)
        .pipe(dest('ui/static/dist/js'));
};


/**
 * Glue all our minified vendor files together into a single monolith
 */
exports.makeVendorJs = function makeVendorJs() {
    return src(vendorSources)
        .pipe(SourceMaps.init({ loadMaps: true }))
        .pipe(Concat('vendor.min.js'))
        .pipe(SourceMaps.write('.'))
        .pipe(dest('ui/static/dist/js'));
};

exports.vendorJs = series([
    parallel([
        exports.preVendorJs,
        exports.nonBundleVendorJs
    ]),
    exports.makeVendorJs
]);


/**
 * Glue all the vendor css files into a single monolith
 */
exports.vendorCss = function vendorCss() {
    return src(vendorCssSources)
        .pipe(SourceMaps.init({loadMaps: true}))
        .pipe(Concat('vendor.css'))
        .pipe(dest('ui/static/dist/css'))
        // .pipe(CleanCSS({inline: ['!fonts.googleapis.com']}))
        .on('data', function(file) {
            const payload = (new CleanCSS({
                // compatibility: 'ie9',
                // units: { point: true }
                // level: 2,
                inline: ['!fonts.googleapis.com']
            })).minify(file.contents.toString());
            const bufferFile = Buffer.from(payload.styles);
            return file.contents = bufferFile;
        })
        .pipe(Rename('vendor.min.css'))
        .pipe(SourceMaps.write('.'))
        .pipe(dest('ui/static/dist/css'))
    ;
};

//endregion

//region CSS Tasks


/**
 * Compile the Sass files into css, glue them together and minify them into a monolith
 */
exports.compileCss = function compileCss() {
    return src(appStyles)
        .pipe(SourceMaps.init({loadMaps: true}))
        .pipe(Sass().on("error", Sass.logError))
        .pipe(PostCSS([AutoPrefixer()]))
        .pipe(dest('ui/static/dist/css/tmp'))

        // This part just joins all the scss files together and dumps it to app.css (except ui-guide)
        .pipe(Ignore.exclude('ui-guide.css'))
        .pipe(Concat('app.css'))
        .pipe(dest('ui/static/dist/css'))

        // This part minifies dist.css to dist.min.css
        .on('data', function(file) {
            const payload = (new CleanCSS({
                compatibility: 'ie9',
                // units: { point: true }
                level: 2
            })).minify(file.contents.toString());
            const bufferFile = Buffer.from(payload.styles);
            return file.contents = bufferFile;
        })
        .pipe(Rename('app.min.css'))
        .pipe(SourceMaps.write('.'))
        .pipe(dest('ui/static/dist/css'))
    ;
};

// Copy font files to dist
exports.fonts = function fonts() {
    return src(fontSources)
        .pipe(dest('ui/static/dist/fonts'));
};

exports.css = series([
    exports.fonts,
    exports.compileCss
]);

//endregion

//region App Tasks

/**
 * Copies keys from defaults to dest and keys from custom on top of that
 * @param dest
 * @param defaults
 * @param custom
 * @return {*}
 */
const copy = (dest, defaults, custom) => {
    Object.keys(defaults).forEach((key) => {
        dest[key] = defaults[key];
    });
    Object.keys(custom).forEach((key) => {
        dest[key] = custom[key];
    });
    return dest;
};

/**
 * Browerify options
 * @type {{debug: boolean, entries: [*], ignoreWatch: [*]}}
 */
const browserifyOptions = {
    debug: true,                                     // TODO <--------- make this false for prod environments
    entries: appEntries,
    ignoreWatch: watchifyIgnoreList
};

/**
 * Browserify options (For vendor stuff)
 * @type {{debug: boolean, require: [*], ignoreWatch: [*]}}
 */
const vendorBrowserifyOptions = {
    debug: true,
    require: vendorBrowserLibs,
    ignoreWatch: watchifyVendorIgnoreList
};

// Initialize the browserify instances for app and vendor
const appBrowserify = Browserify(copy({}, Watchify.args, browserifyOptions));
const vendorBrowserify = Browserify(copy({}, Watchify.args, vendorBrowserifyOptions));

// Set vendor external libraries
vendorBrowserLibs.forEach((lib) => {
    appBrowserify.external(lib);
});

// Initialize watchify instances to partial rebuilds on the huge monolith source files w/ browserify
const bundler = Watchify(appBrowserify);
const vendorBundler = Watchify(vendorBrowserify);

exports.stopWatchers = async function stopWatchers() {
    bundler.close();
    vendorBundler.close();
};

// Convert our fancy ES7 + JSX magic into something an old browser can parse
bundler.transform(Babelify);
vendorBundler.transform(Babelify);

/**
 * Glues all the app sources together into a monolith
 */
exports.bundleApp = function bundleApp() {
    return bundler
        .bundle()
        .on('error', (err) => { console.error('Browserify Error:', err.message, err.stack); }) // eslint-disable-line no-console
        .pipe(VinylSource('app-bundle.js'))
        //.pipe(VinylBuffer())
        .pipe(dest('ui/static/dist/js'));
    // TODO - minifiy before production (unnecessary slow down for dev)
    //.pipe(SourceMaps.init())
    //.pipe(Rename('bundle.min.js'))
    //.pipe(Uglify())
    //.pipe(SourceMaps.write('./'))
    //.pipe(dest('ui/static/dist'));
};

/**
 * Glues all the vendor sources together into a monolith
 */
exports.bundleVendor = function bundleVendor() {
    return vendorBundler
        .bundle()
        .on('error', (err) => { console.error('Browserify Vendor Error:', err.message, err.stack, err); }) // eslint-disable-line no-console
        .pipe(VinylSource('bundle-vendor.js'))
        //.pipe(VinylBuffer())
        .pipe(dest('ui/static/dist/js'));
    // TODO - minifiy before production (unnecessary slow down for dev)
    //.pipe(SourceMaps.init())
    //.pipe(Rename('bundle.min.js'))
    //.pipe(Uglify())
    //.pipe(SourceMaps.write('./'))
    //.pipe(dest('ui/static/dist'));
};


bundler.on('update', exports.bundleApp);
bundler.on('log', function(summary) { console.log(' > Updated app bundle:', summary); }); // eslint-disable-line no-console

vendorBundler.on('update', exports.bundleVendor);
vendorBundler.on('log', function(summary) { console.log(' > Updated vendor bundle:', summary); }); // eslint-disable-line no-console

//endregion

//region Watch Tasks


// Watches for changes to the CSS and forces a rebuild if there's a change
exports.watchJs = function watchJs() {
    watch(appSources, exports.bundleApp);
};

// Watches for changes to the CSS and forces a rebuild if there's a change
exports.watchCss = function watchJs() {
    watch(watchStyles, exports.css);
};

// Watches for changes to client templates
exports.watchEverything = parallel([
    exports.watchJs,
    exports.watchCss,
]);

//endregion

//region Main tasks
exports.build = series(
    parallel([
        // Acquire and build vendor stuff
        exports.vendorJs,
        exports.vendorCss,

        // Build the css stuff
        exports.css,

        // Build the app stuff
        exports.bundleVendor,
        exports.bundleApp
    ]),
    exports.stopWatchers
);

// Default, like dev mode
exports.default = parallel([
    // Build everything
    exports.build,

    // Watch for changes #devmode
    exports.watchEverything
]);
//endregion