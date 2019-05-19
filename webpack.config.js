const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    //entry: ['@babel/polyfill', './src/js/index.js'],
    entry:'./src/js/index.js',
    output:{
        path:path.resolve(__dirname, 'dist'),
        filename:'js/bundle.js'
    },
    // devServer:{
    //     contentBash: './dist',
    // }
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        //compress: true,
       // port: 9000
    },
    plugins:[
        new HtmlWebpackPlugin({
            filename:'index.html',
            template:'./src/index.html'
        })
    ]
    
};