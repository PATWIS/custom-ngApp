const { resolve } = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
module.exports = function (env) {

  let prod = env !== undefined && env.prod === true;
  let dev = env !== undefined && env.dev === true;
  

  return {
    // entry: './src/app.js',
    entry: {
      app: './src/app.js',
      vendors: ['angular', '@uirouter/angularjs', 'angular-animate', 'angular-aria', 'angular-material'], 
    },
    output: {
      publicPath: dev ? '/dist/' : '',
      path: resolve(__dirname, 'dist'),
      // path: 'C:\\Users\\Patryk\\Infoprojekt Sp. z o.o\\SPDevPWisniewski - testLibrary',
      filename: prod ? '[name].[chunkhash].js' : '[name].js'
    },
    // devtool: prod ? "source-map" : "cheap-module-eval-source-map",
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /(node_modules)/,
          use: [
            {
              loader: 'ng-annotate-loader'
            },
            // 'ng-annotate-loader',
            {
            loader: 'babel-loader',
            options: {
              presets: ['es2015']
            }
          }]
        },
        {
          test: /\.scss$/,
          // use: [{loader: "style-loader"}, {loader: "css-loader"}, {loader: "sass-loader" }]
          use: ExtractTextPlugin.extract({
            fallback: "style-loader",
            use: "css-loader!sass-loader"
          })
        },
        {
          test: /\.html$/,
          use: 'raw-loader',        
          exclude: resolve(__dirname, './index.html')
        },
        {
          test: /\.(png|jpg|gif|svg)$/,
          use: [
            {
              loader: 'url-loader',
              options: {
                limit: 1000,
                name: '[name].[ext]'
              }
            }
          ]
        }
      ]
    },
    plugins: [
      new ExtractTextPlugin("styles.css"),
      new HtmlWebpackPlugin({
        template: 'src/index.html'
      }),
      new webpack.optimize.CommonsChunkPlugin({
        name: 'vendors'
      }),

      new webpack.DefinePlugin({
        PRODUCTION: JSON.stringify(prod),
        VERSION: JSON.stringify(require("./package.json").version),
      })
    ]
  }
};