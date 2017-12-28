const {resolve} = require('path');

module.exports = {
  entry: './src/app.js',
  output: {
    path: resolve(__dirname, '../dist'),
    // path: 'C:\\Users\\Patryk\\Infoprojekt Sp. z o.o\\SPDevPWisniewski - testLibrary',
    filename: 'app.bundle.js'
  }
};