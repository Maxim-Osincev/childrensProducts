const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    entry: './src/index.jsx',
    module: {
        rules: [
            {
                test: /.jsx$/,
                use: ["babel-loader"]
            },
            {
              test: /.s?css$/,
              use: ["style-loader", "css-loader", "sass-loader"],
            },
            {
              test: /\.html$/,
              use: "html-loader",
            },
            {
              test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
              loader: "file-loader",
              options: {
                name: "[name].[ext]",
              },
            },
            {
              test: /\.(jpg|png|svg|jpeg|gif)$/,
              type: "asset/resource",
            },
        ]
    },
    output : { 
        clean : true,
        filename : "bundle.js"
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),

        new webpack.ProgressPlugin()
    ],
    devServer: {
        port: 8080,
    }
}