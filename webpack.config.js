'use strict';
let path = require('path');

module.exports = {
  entry: {
    'bootstrap': './src/scripts/main.ts',
    'bootstrap.aot': './src/scripts/main.aot.ts'
  },

  output: {
    path: './bin',
    filename: '[name].bundle.js'
  },

  module: {
    loaders: [
      {
        test: /\.ts$/,
        loader: 'ts',
        query: {
          configFileName: 'tsconfig.json'
        }
      }
    ]
  },

  resolve: {
    root: [ path.join(__dirname, 'src') ],
    extensions: ['', '.ts', '.js']
  },

  devtool: false
};
