const { resolve } = require('path');

module.exports = {
  entry: './src/app.js',
  output: {
    publicPath: "/dist/",
    path: resolve(__dirname, '../dist'),
    // path: 'C:\\Users\\Patryk\\Infoprojekt Sp. z o.o\\SPDevPWisniewski - testLibrary',
    filename: 'app.bundle.js'
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
        use: [{
          loader: "style-loader"
        }, {
          loader: "css-loader"
        }, {
          loader: "sass-loader"
        }]
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
              limit: 10,
              name: '[name].[ext]'
            }
          }
        ]
      }
    ]
  }
};