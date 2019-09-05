const entry  = require('./entry');
const optimization = require('./optimization');
const externals = require('./externals');
const plugins = require('./plugins');

console.log(externals);

const webpackConfig = {
  mode: 'development',
  entry,
  // optimization,
  externals,
  plugins
};

console.log(webpackConfig);

module.exports = webpackConfig;
