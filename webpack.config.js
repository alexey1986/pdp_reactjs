const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'index_bundle.js'
    },
    mode: 'development',
    // devServer: {
    //     contentBase: path.join(__dirname, "dist"),
    //     compress: true,
    //     port: 9000,
    //     watchContentBase: true,
    //     progress: true
    // },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: ["file-loader"]
            },
            {
                test: /\.scss$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ]
            }
        ]
    },    
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ]
}