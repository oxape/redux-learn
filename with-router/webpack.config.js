/**
 * Created by oxape on 2017/3/14.
 */
const path = require('path');
const HtmlWebpackPlugin =  require('html-webpack-plugin')

const htmlWebPackPlugin = new HtmlWebpackPlugin({
    template: path.join(__dirname, 'public/index.html'),
    filename: 'index.html',
    inject: 'body'
})

module.exports = {
    entry: ['./src/index.js'],
    output:{
        path:path.join(__dirname, 'dist'),
        filename:'index_bundle.js'
    },
    module:{
        loaders:[{
            loader:'babel-loader',
            test:/\.js$/,
            exclude:/(node_modules)/,
            query:{
                presets:['es2015', 'react'],
            }
        }]
    },
    devServer: {
        historyApiFallback: true,
    },
    plugins:[htmlWebPackPlugin]
}