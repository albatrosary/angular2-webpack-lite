'use strict';
let path = require('path');
let webpack = require('webpack');
let ngtools = require('@ngtools/webpack');

module.exports = {
  entry: {
    'polyfills': './src/polyfills.ts',
    'vendor': './src/vendor.ts',
    'bootstrap': './src/bootstrap.aot.ts',
  },

  output: {
    path: './bin',
    filename: '[name].bundle.js'
  },

  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: '@ngtools/webpack',
      },
      {
        test: /\.html$/,
        use: 'raw'
      }
    ]
  },

  plugins: [
    new ngtools.AotPlugin({
      tsConfigPath: './',
      entryModule: './src/main#MainModule'
    }),
    // new webpack.ProgressPlugin(),
    new webpack.ContextReplacementPlugin(
      // The (\\|\/) piece accounts for path separators in *nix and Windows
      /angular(\\|\/)core(\\|\/)(esm(\\|\/)src|src)(\\|\/)linker/,
      path.join(process.cwd(), 'src')
    )
  ],

  resolve: {
    modules: [
      'node_modules',
      path.resolve(__dirname, 'src')
    ],
    extensions: ['.ts', '.js']
  },

  devtool: false
};