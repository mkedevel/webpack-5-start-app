const {merge} = require('webpack-merge');
const common = require('./webpack.common.js');

const css = require('./webpack/css');
const sass = require('./webpack/sass');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './build',
    hot: true,
    host: 'localhost',
    port: 3000
  },
  module: {
    rules: [css(), sass()]
  }
});
