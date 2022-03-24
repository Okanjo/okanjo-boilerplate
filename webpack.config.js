"use strict";

const Path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const isProduction = process.env.NODE_ENV === "production";

module.exports = {

    // Environment
    mode: isProduction ? "production" : 'development',

    // devtool: "eval", // fast!
    // devtool: "eval-source-map", // average, but good!
    // devtool: "source-map", // dvd quality!
    devtool: isProduction ? "source-map" : "eval-source-map",

    // Entry points
    entry: {
        main: [
            // App
            './ui/src/index.js',
            './ui/styles/main.scss',
        ],
        // vendor: [
        //     'node_modules/whatwg-fetch/dist/fetch.umd.js'
        //     'node_modules/socket.io-client/socket.io.js'
        //     'node_modules/es6-promise/dist/es6-promise.min.js'
        //     'node_modules/html5shiv/dist/html5shiv.min.js'
        // ]
    },

    // Convert JSX and JS to ES5, and SCSS too
    module: {
        rules: [
            // JSX
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            },

            // SCSS
            {
                test: /\.s[ac]ss$/i,
                use: [
                    // Creates `style` nodes from JS strings
                    // "style-loader",
                    MiniCssExtractPlugin.loader,

                    // Translates CSS into CommonJS
                    { loader: "css-loader", options: { sourceMap: true } },

                    // Compiles Sass to CSS
                    { loader: "sass-loader", options: { sourceMap: true } },
                ]
            }
        ]
    },
    resolve: {
        extensions: ['*', '.js', '.jsx']
    },

    // Plugin to drop css in to static files
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'css-bundle-[name].css',
            chunkFilename: 'css-bundle-[id].css'
        })
    ],

    // Separate node_modules vendor libs to separate bundle file
    optimization: {
        splitChunks: {
            chunks: "all",
            maxInitialRequests: Infinity,
            minSize: 0,
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: "vendor",
                },
                cssVendor: {
                    test: /[\\/]vendor.scss]/,
                    name: "vendor",
                }
            }
        }
    },

    // Output
    output: {
        path: Path.resolve(__dirname, 'ui/static/dist'),
        filename: 'app-bundle-[name].js',
    },
};