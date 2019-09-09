const entry  = require('./entry');
const optimization = require('./optimization');
const externals = require('./externals');
const plugins = require('./plugins');
const output = require('./output');
const moduleConfig = require('./module');
const devServer = require('./devServer');
//
require('./setup_dotenv');
//
const webpackConfig = {
  mode: process.env.NODE_ENV,
  devtool: 'inline-source-map',
  entry,
  optimization,
  externals,
  plugins,
  output,
  devServer,
  module: moduleConfig
};

module.exports = webpackConfig;
