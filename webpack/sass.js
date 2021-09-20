const autoprefixer = require('autoprefixer');

module.exports = () => ({
  test: /\.s[ac]ss$/i,
  use: [
    'style-loader',
    'css-loader',
    {
      loader: 'postcss-loader',
      options: {
        postcssOptions: {
          plugins: [autoprefixer]
        }
      }
    },
    'sass-loader'
  ]
});
