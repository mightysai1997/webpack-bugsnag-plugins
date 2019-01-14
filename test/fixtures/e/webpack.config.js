const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const BugsnagSourceMapUploaderPlugin = require('../../../').BugsnagSourceMapUploaderPlugin

module.exports = {
  entry: './src/index.js',
  devtool: 'source-map',
  plugins: [
    new MiniCssExtractPlugin(),
    new BugsnagSourceMapUploaderPlugin({
      apiKey: 'YOUR_API_KEY',
      endpoint: `http://localhost:${process.env.PORT}`,
      extensions: process.env.EXTENSIONS ? process.env.EXTENSIONS.split(',') : undefined
    })
  ],
  output: {
    publicPath: '*/dist'
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader'
        ],
      },
    ],
  },
};
