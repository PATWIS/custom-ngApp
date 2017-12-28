const {resolve} = require('path');

module.exports = {
  entry: './src/app.js',
  output: {
    // path: resolve(__dirname, '../dist'),
    path: 'C:\\Users\\Patryk\\Infoprojekt Sp. z o.o\\SPDevPWisniewski - testLibrary',
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
      }
    ]
  }
};