/**
 * Created by oxape on 2017/3/14.
 */
const webpack = require('webpack')

module.exports = {
    devtool: 'inline-source-map',
    entry: [
        './client/index.js'
    ],
    output: {
        path: `${__dirname}/dist`,
        filename: 'bundle.js',
        publicPath: '/static/'
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
                presets: ['es2015', 'react', 'react-hmre'],
            },
        }],
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
};