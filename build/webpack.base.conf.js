'use strict';

const path = require('path');
const prodConfig = require('./config').build;
function resolve(track) {
  return path.join(__dirname, '..', track);
}
//资源路径
function assetsPath(_path) {
  return path.join(prodConfig.staticPath, _path);
}
module.exports = {
  entry: path.resolve(__dirname, '../app/app.js'),
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
    alias: {}
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader'
        },
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 8192,
          name: assetsPath('img/[name].[hash:8].[ext]')
        }
      }
    ]
  }
};