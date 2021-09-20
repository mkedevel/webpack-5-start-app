module.exports = () => ({
  test: /\.(png|svg|jpg|jpeg|gif)$/i,
  type: 'asset/resource',
  generator: {
    filename: 'images/[name][ext]'
  }
});
