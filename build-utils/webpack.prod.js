const path = require('path');
const Dotenv = require('dotenv-webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'production',
  devtool: 'eval-source-map',
  plugins: [
    new Dotenv({
      path: './.env.production',
    })
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        exclude: /node_modules/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader'
        ],
      },
      {
        test: /\.(jpe?g|png|ttf)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 1000,
              name: "assets/[hash].[ext]"
            },
          },
        ],
      },
    ],
  },
  output: {
      path: path.resolve(__dirname, '../', 'dist'),
      publicPath: '/dist/',
      filename: 'bundle.js',
    }
};