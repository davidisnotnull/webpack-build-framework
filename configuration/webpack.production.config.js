const { merge } = require('webpack-merge');
const webpackConfiguration = require('../webpack.config');

module.exports = merge(webpackConfiguration, {
  mode: 'production',
  devtool: "source-map",
  performance: {
    maxEntrypointSize: 512000,
    maxAssetSize: 512000,
  }
});