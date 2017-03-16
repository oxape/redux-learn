/**
 * Created by oxape on 2017/3/14.
 */
module.exports = {
    entry: [
        './client/index.js',
    ],
    output: {
        path: `${__dirname}/dist`,
        filename: 'bundle.js',
        publicPath: '/static/'
    },
    module: {
        // 優化並使用 HotModuleReplacement
        // plugins: [
        //   new webpack.optimize.OccurrenceOrderPlugin(),
        //   new webpack.HotModuleReplacementPlugin()
        // ],
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
                presets: ['es2015', 'react', 'react-hmre'],
            },
        }],
    },
};