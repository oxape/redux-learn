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

var isProduction = function () {
    return process.env.NODE_ENV === 'production';
};
//publicPath 像图片，css等会被加入这个url 例如<img src="/static/a.png" />，指的是路径输出而不是文件输出
//presets:['react-hmre'],服务器才能跑通,应该是babel-register使用了这个配置、好像babel-regist没有使用这个，而是使用了.babelrc
module.exports = {
    entry: ['./client/index.js'],
    output:{
        path:path.join(__dirname, 'dist'),
        filename:'bundle.js',
        publicPath: '/static/'
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