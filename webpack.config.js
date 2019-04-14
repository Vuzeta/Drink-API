const {
    resolve
} = require("path");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserJSPlugin = require('terser-webpack-plugin');

module.exports = function (env) {

    var prod = env !== undefined && env.production === true;
    var dev = env !== undefined && env.production === true;

    return {
        entry: {
            app: "./src/js/app.js",
        },
        output: {
            path: resolve(__dirname, "dist"),
            filename: prod ? "[name].[chunkhash].js" : "[name].js",
        },
        watch: dev ? false : true,
        optimization: {
            minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})],
        },
        module: {
            rules: [{
                    test: /\.js$/,
                    exclude: /(node_modules|bower_components)/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env']
                        }
                    }
                },
                {
                    test: /\.css$/,
                    use: [{
                            loader: MiniCssExtractPlugin.loader,
                            options: {
                                publicPath: '../',
                                hmr: process.env.NODE_ENV === 'development',
                            },
                        },
                        'css-loader'
                    ],
                },
                {
                    test: /\.(png|jpg|gif)$/,
                    use: [{
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'assets',
                            publicPath: 'assets'
                        },
                    }, ],
                },
            ]
        },
        plugins: [
            new MiniCssExtractPlugin({
                filename: prod ? "style.[chunkhash].css" : "style.css",
                chunkFilename: '[id].css',
            }),
            new HtmlWebpackPlugin({
                template: "./src/index.html"
            })
        ]
    }
}