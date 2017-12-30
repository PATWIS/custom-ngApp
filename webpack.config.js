const { resolve } = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack')
module.exports = function (env) {

  let prod = env !== undefined && env.prod === true;
  let dev = env !== undefined && env.dev === true;
  

  return {
    // entry: './src/app.js',
    entry: {
      app: './src/app.js'
      // vendors: ['angular']
    },
    output: {
      publicPath: dev ? '/dist/' : '',
      path: resolve(__dirname, 'dist'),
      // path: 'C:\\Users\\Patryk\\Infoprojekt Sp. z o.o\\SPDevPWisniewski - testLibrary',
      filename: prod ? '[name].[chunkhash].js' : '[name].js'
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /(node_modules)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['es2015']
            }
          }
        },
        {
          test: /\.scss$/,
          // use: [{loader: "style-loader"}, {loader: "css-loader"}, {loader: "sass-loader" }]
          use: ExtractTextPlugin.extract({
            fallback: "style-loader",
            use: "css-loader!sass-loader"
          })
        },
        // {
        //   test: /\.(png|jpg|gif|svg)$/,
        //   use: [
        //     {
        //       loader: 'file-loader',
        //       options: {}
        //     }
        //   ]
        // }
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
        title: 'My App',
        template: 'src/index.html'
      }),
      new webpack.optimize.CommonsChunkPlugin({
        name: 'vendors'
      })
    ]
  }
};