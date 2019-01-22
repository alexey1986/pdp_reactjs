const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'index_bundle.js'
    },
    mode: 'development',
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
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.svg$/,
                use: [
                    "babel-loader",
                    {
                        loader: "react-svg-loader",
                        options: {
                            svgo: {
                            plugins: [
                                { removeTitle: false }
                            ],
                            floatPrecision: 2
                            }
                        }
                    }
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