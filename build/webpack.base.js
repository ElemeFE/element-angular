const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const helpers = require('./helpers')

module.exports = {
  entry: {
    'polyfills': './ex/polyfills.ts',
    'vendor': './ex/vendor.ts',
    'app': './ex/main.ts',
  },
  
  resolve: {
    extensions: ['.ts', '.js'],
  },
  
  module: {
    rules: [
      {
        test: /\.ts$/,
        loaders: [
          {
            loader: 'awesome-typescript-loader',
            options: { configFileName: helpers.root('ex', 'tsconfig.json') },
          },
          'angular2-template-loader',
          'angular-router-loader',
        ],
      },
      {
        test: /\.html$/,
        loader: 'html-loader',
      },
      {
        test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
        loader: 'file-loader?name=assets/[name].[hash].[ext]',
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader',
        }),
      },
      {
        test: /\.css$/,
        include: helpers.root('src', 'app'),
        loader: 'raw-loader',
      },
    ],
  },
  
  plugins: [
    // Workaround for angular/angular#11580
    new webpack.ContextReplacementPlugin(
      // The (\\|\/) piece accounts for path separators in *nix and Windows
      /angular(\\|\/)core(\\|\/)@angular/,
      helpers.root('./ex'), // location of your src
      {} // a map of your routes
    ),
    
    new webpack.optimize.CommonsChunkPlugin({
      name: ['app', 'vendor', 'polyfills'],
    }),
    
    new HtmlWebpackPlugin({
      template: 'ex/index.html',
    }),
  ],
}