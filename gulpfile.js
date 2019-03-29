
//region Imports
const { src, dest, parallel, series, watch } = require('gulp');
const Browserify = require('browserify');
const VinylSource = require('vinyl-source-stream');
const Concat = require('gulp-concat');
const Rename = require('gulp-rename');
const Babelify = require('babelify');
const Watchify = require('watchify');
const Combiner = require('stream-combiner2');
const Del = require('del');
const Ignore = require('gulp-ignore');
const SourceMaps = require('gulp-sourcemaps');
const LessPluginAutoPrefix = require('less-plugin-autoprefix');
const cssAutoPrefix = new LessPluginAutoPrefix({ browsers: ["> 5%"] });
const CleanCSS = require('gulp-clean-css');
const Less = require('gulp-less');
const Uglify = require('gulp-uglify');
const Path = require('path');

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

// Core less files
const appStyles = [
    'ui/styles/main.less'
];

// Rebuild styles when one of these files are touched
const watchStyles = [
    'ui/styles/*.less'
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
            console.log('Blew up!', args);
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
    //noinspection UnnecessaryLocalVariableJS
    const combined = Combiner.obj([
        src(vendorCssSources),
        SourceMaps.init({loadMaps: true}),
        Concat('vendor.css'),
        dest('ui/static/dist/css'),
        CleanCSS({inline: ['!fonts.googleapis.com']}),
        Rename('vendor.min.css'),
        SourceMaps.write('.'),
        dest('ui/static/dist/css')
    ]);

    return combined;
};

//endregion

//region CSS Tasks


/**
 * Compile the Less files into css, glue them together and minify them into a monolith
 */
exports.compileCss = function compileCss() {
    //noinspection UnnecessaryLocalVariableJS
    const combined = Combiner.obj([
        src(appStyles),
        SourceMaps.init({loadMaps: true}),
        Less({
            plugins: [cssAutoPrefix],
            paths: [Path.join(__dirname, 'styles')]
        }),
        dest('ui/static/dist/css/tmp'),

        // This part just joins all the less files together and dumps it to dist.css (except ui-guide)
        Ignore.exclude('ui-guide.css'),
        Concat('app.css'),
        dest('ui/static/dist/css'),

        // This part minifies dist.css to dist.min.css
        CleanCSS({compatibility: 'ie8,-units.pt'}),
        Rename('app.min.css'),
        SourceMaps.write('.'),
        dest('ui/static/dist/css')
    ]);

    // any errors in the above streams will get caught
    // by this listener, instead of being thrown:
    //combined.on('error', console.error.bind(console));

    return combined;
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

// Initialize watchify instances to to partial rebuilds on the huge monolith source files w/ browserify
const bundler = Watchify(appBrowserify);
const vendorBundler = Watchify(vendorBrowserify);

// Convert our fancy ES7 + JSX magic into something an old browser can parse
bundler.transform(Babelify);
vendorBundler.transform(Babelify);

/**
 * Glues all the app sources together into a monolith
 */
exports.bundleApp = function bundleApp() {
    return bundler
        .bundle()
        .on('error', (err) => { console.error('Browserify Error:', err.message, err.stack); })
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
        .on('error', (err) => { console.error('Browserify Vendor Error:', err.message, err.stack, err); })
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
bundler.on('log', function(summary) { console.log(' > Updated app bundle:', summary); });

vendorBundler.on('update', exports.bundleVendor);
vendorBundler.on('log', function(summary) { console.log(' > Updated vendor bundle:', summary); });

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
exports.build = parallel([
    // Acquire and build vendor stuff
    exports.vendorJs,
    exports.vendorCss,

    // Build the css stuff
    exports.css,

    // Build the app stuff
    exports.bundleVendor,
    exports.bundleApp
]);

// Default, like dev mode
exports.default = parallel([
    // Build everything
    exports.build,

    // Watch for changes #devmode
    exports.watchEverything
]);
//endregion