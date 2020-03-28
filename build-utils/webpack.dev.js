const Dotenv = require('dotenv-webpack');
const { DefinePlugin } = require('webpack');

module.exports = {
  mode: 'development',
  devtool: 'eval-source-map',
  module: {
    rules: [
      {
        test: /\.css$/i,
        exclude: /node_modules/,
        use: [
          'style-loader',
          'css-loader'
        ],
      },
      {
        test: /\.(jpe?g|png|ttf)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: false,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new Dotenv({
      path: './.env.development',
    }),
  ],
  devServer: {
    contentBase: './dist',
    publicPath: '/',
  },
};
