const {merge} = require('webpack-merge');
const common = require('./webpack.common.js');

const css = require('./webpack/css.prod');

module.exports = merge(common, {
  mode: 'production',
  devtool: 'source-map',
  module: {
    rules: [css()]
  }
});
