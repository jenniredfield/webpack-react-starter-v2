# Webpack React Starter pack

- Webpack project ready to start a React application. It contains:
- Eslint configured with prettier;
- Environment variables loaded with dotenv-webpack;
- React loader, html and css loader;
- Image and fonts loaders;
- Development and production builds.

## To use environment variables

- Create .env.development and .env.production on top level folder and populate accordingly

## Instructions

- Install webpack
  npm install --save-dev webpack webpack-dev-server webpack-cli

- Create webpack config
  touch webpack.config.js

- Install Babel & loader
  npm install --save-dev @babel/core @babel/preset-env
  npm install --save-dev babel-loader

- Install plugins
  npm install --save-dev html-webpack-plugin
  npm install --save-dev clean-webpack-plugin

- Install webpack-merge
  npm install --save-dev webpack-merge

- Install dotenv webpack package
  npm install dotenv-webpack --save-dev

- Install babel react preset
  npm install --save-dev @babel/preset-react

- Install React
  npm install --save react react-dom

- Install Airbnb Eslint

- Install Prettier Eslint plugins
  npm install --save-dev eslint-config-prettier eslint-plugin-prettier

- Install CSS loader
  npm install css-loader style-loader --save-dev

- Add Images with url-loader
  npm install url-loader --save-dev
