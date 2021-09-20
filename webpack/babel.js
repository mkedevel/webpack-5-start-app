module.exports = () => ({
  test: /\.m?js$/,
  exclude: /(node_modules|bower_components)/,
  use: {
    loader: 'babel-loader',
    options: {
      presets: ['@babel/preset-env'],
      plugins: [
        [
          '@babel/plugin-transform-runtime',
          {
            helpers: false
          }
        ],
        [
          '@babel/plugin-proposal-class-properties',
          {
            loose: true
          }
        ]
      ]
    }
  }
});
