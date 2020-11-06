const path = require('path');

module.exports = {
  entry: {
    yagym: './src/index.js',
  },
  output: {
      filename: '[name]' + '_bundled.js',
      path: path.resolve(__dirname,'dist'),
      libraryTarget: 'commonjs2',
  },
  resolve: {
    fallback: {
      'fs': 'empty' 
    }
  },
  target: 'node'
};
