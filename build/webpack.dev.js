const webpackMerge = require('webpack-merge');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const baseConfig = require('./webpack.base');
const helpers = require('./helpers');

module.exports = webpackMerge(baseConfig, {
  devtool: 'cheap-module-eval-source-map',
  
  output: {
    path: helpers.root('ex/dist'),
    publicPath: 'http://localhost:8080/',
    filename: '[name].js',
    chunkFilename: '[id].chunk.js'
  },
  
  plugins: [
    new ExtractTextPlugin('[name].css')
  ],
  
  devServer: {
    historyApiFallback: true,
    stats: 'minimal'
  }
});