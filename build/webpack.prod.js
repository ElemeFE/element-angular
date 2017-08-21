const webpack = require('webpack')
const webpackMerge = require('webpack-merge')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const baseConfig = require('./webpack.base')
const helpers = require('./helpers')

const ENV = process.env.NODE_ENV = process.env.ENV = 'production'

module.exports = webpackMerge(baseConfig, {
  devtool: 'source-map',
  
  output: {
    path: helpers.root('dist'),
    publicPath: '/element-angular/',
    filename: '[name].[hash].js',
    chunkFilename: '[id].[hash].chunk.js',
  },
  
  plugins: [
    new webpack.NoEmitOnErrorsPlugin(),
    // https://github.com/angular/angular/issues/10618
    new webpack.optimize.UglifyJsPlugin({
      mangle: { keep_fnames: true },
    }),
    new ExtractTextPlugin('[name].[hash].css'),
    new webpack.DefinePlugin({
      'process.env': {
        'ENV': JSON.stringify(ENV),
      },
    }),
    new webpack.LoaderOptionsPlugin({
      htmlLoader: { minimize: true },
    }),
  ],
})
