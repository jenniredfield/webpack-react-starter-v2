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
          {
            loader: 'css-loader',
            options: {
              modules: true,
            },
          },
        ],
      },
      {
        test: /\.(jpe?g|png|ttf)$/,
        use: {
          loader: 'url-loader',
        },
      },
    ],
  },
  plugins: [
    new DefinePlugin({
      SOME_GLOBAL: JSON.stringify('yes'),
    }),
    new Dotenv({
      path: './.env.development',
    }),
  ],
  devServer: {
    contentBase: './dist',
    publicPath: '/'
  },
};
