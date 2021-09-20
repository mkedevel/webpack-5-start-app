const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

const font = require('./webpack/font');
const image = require('./webpack/image');
const babel = require('./webpack/babel');

const Path = {
  SOURCE: path.join(__dirname, 'src'),
  BUILD: path.join(__dirname, 'build')
};

module.exports = {
  entry: `${Path.SOURCE}/index.js`,
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'Webpack Start App',
      filename: 'index.html',
      template: Path.SOURCE + '/index.html'
    }),
    new MiniCssExtractPlugin({
      ignoreOrder: true,
      filename: 'assets/css/[name].[contenthash].min.css',
      chunkFilename: 'assets/css/[id].[contenthash].min.css'
    })
  ],
  output: {
    filename: 'assets/js/[name].[contenthash].min.js',
    path: path.resolve(__dirname, Path.BUILD),
    publicPath: '/',
    assetModuleFilename: 'assets/[name][ext]'
  },
  module: {
    rules: [font(), image(), babel()]
  },
  target: 'web', // for HMR
  optimization: {
    moduleIds: 'deterministic',
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all'
        }
      }
    },
    minimizer: [new CssMinimizerPlugin(), '...']
  }
};
