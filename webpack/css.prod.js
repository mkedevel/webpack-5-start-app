const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const autoprefixer = require('autoprefixer');

module.exports = () => ({
  test: /\.(sa|sc|c)ss$/,
  use: [
    MiniCssExtractPlugin.loader,
    'css-loader', // Translates CSS into CommonJS
    {
      loader: 'postcss-loader',
      options: {
        postcssOptions: {
          plugins: [autoprefixer]
        }
      }
    },
    'sass-loader' // Compiles Sass to CSS
  ]
});
