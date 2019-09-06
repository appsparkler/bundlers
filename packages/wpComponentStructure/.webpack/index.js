const entry  = require('./entry');
const optimization = require('./optimization');
const externals = require('./externals');
const plugins = require('./plugins');
const output = require('./output');
const moduleConfig = require('./module');
//
require('./setup_dotenv');
// 
const webpackConfig = {
  mode: process.env.NODE_ENV,
  entry,
  optimization,
  externals,
  plugins,
  output,
  module: moduleConfig
};

module.exports = webpackConfig;
