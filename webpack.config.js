const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, '/docs'),
        publicPath: '/',
        filename: 'index_bundle.js'
    },
    mode: 'development',
    devServer: {
        contentBase: path.join(__dirname, 'docs'),
        compress: false,
        port: 3000,
        historyApiFallback: true
    },
    resolve: {
        alias: {
            components: path.resolve(__dirname, 'src/app/components/'),
            articles: path.resolve(__dirname, 'src/app/components/articles/'),
            treeview: path.resolve(__dirname, 'src/app/components/treeview/'),
            assets: path.resolve(__dirname, 'src/app/components/assets/')
        },
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: ["source-map-loader"],
                enforce: "pre"
            },
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
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    devtool: false,
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        new webpack.SourceMapDevToolPlugin({            
            filename: 'index.js.map',
            exclude: ['vendor.js']
        })
    ]
}