const { HotModuleReplacementPlugin, DefinePlugin } = require('webpack');

module.exports = {
  mode: 'development',
  devServer: {
    hot: true,
  },
  devtool: 'eval-source-map',
  plugins: [
    new HotModuleReplacementPlugin(),
    new DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development'),
      },
    }),
  ],
};
