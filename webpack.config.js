const webpack = require('webpack');
const path = require('path');

const APP_DIR = path.resolve(__dirname, 'src');
const BUILD_DIR = path.resolve(__dirname, 'public');
const NODE_ENV = process.env.NODE_ENV;


const config = {
    entry: `${APP_DIR}/main.ts`,
    output: {
        path: BUILD_DIR,
        filename: 'assets/js/bundle.js',
    },
    resolve: {
        extensions: ['.ts', '.js', '.json'],
        modules: [APP_DIR, 'node_modules'],
        alias: {
            phaser: path.join(__dirname, '/node_modules/phaser'),
        },
    },
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.ts?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
                include: APP_DIR,
            }
        ],
    },
    plugins: NODE_ENV === 'production' ? [new webpack.optimize.UglifyJsPlugin()] : [],
    devServer: {
        contentBase: BUILD_DIR,
        port: 8080,
        stats: 'minimal',
    },
};

module.exports = config;
