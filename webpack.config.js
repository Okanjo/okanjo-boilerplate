"use strict";

const Path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const isProduction = process.env.env === "production";

module.exports = [

    //region Main app
    {
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
                        {loader: "css-loader", options: {sourceMap: true}},

                        // Compiles Sass to CSS
                        {loader: "sass-loader", options: {sourceMap: true}},
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
                        name: "main-vendor",
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
    }
    //endregion
];