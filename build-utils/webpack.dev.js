const Dotenv = require('dotenv-webpack');
const { DefinePlugin } = require('webpack');

module.exports = {
  mode: 'development',
  devtool: 'eval-source-map',
  plugins: [
    new DefinePlugin({
        SOME_GLOBAL:  JSON.stringify('yes'),
    }),
    new Dotenv({
      path: './.env.development',
    })
  ],
};