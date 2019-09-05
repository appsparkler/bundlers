const entry  = require('./entry');
const optimization = require('./optimization');
const externals = require('./externals');
const plugins = require('./plugins');
const output = require('./output');
const moduleConfig = require('./module')

const webpackConfig = {
  mode: 'production',
  entry,
  optimization,
  externals,
  plugins,
  output,
  module: moduleConfig
};

module.exports = webpackConfig;
