const ngtools = require('@ngtools/webpack');
const webpack = require('webpack');
const path = require('path');

module.exports = {
    devtool: 'source-map',
    // It will pull in the Angular libraries used by the app,
    // but it will not pull in the Angular compiler, since it's
    // not needed in an AOT-compiled app.
    entry: {
        main: './src/main-aot.ts',
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    target: 'node',
    // Tell Webpack where to put the bundles
    output: {
        path: path.join(__dirname, 'src/dist'),
        filename: 'build.js'
    },
    plugins: [
        // The tsConfigPath tells the plugin where to find the
        // TypeScript configuration file to use when compiling
        new ngtools.AotPlugin({
            tsConfigPath: './tsconfig-aot.json'
        }),
        new webpack.optimize.UglifyJsPlugin({ sourceMap: true })
    ],
    module: {
        rules: [
            { test: /\.css$/, loader: 'raw-loader' },
            { test: /\.html$/, loader: 'raw-loader' },
            { test: /\.ts$/, loader: '@ngtools/webpack' },
            // {
            //     test: /\.scss$/,
            //     exclude: /node_modules/,
            //     loader: 'style-loader!css-loader!sass-loader'
            // },
        ]
    }
};
