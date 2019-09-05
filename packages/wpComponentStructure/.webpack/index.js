const entry  = require('./entry');
const optimization = require('./optimization');
const externals = require('./externals');
const plugins = require('./plugins');
const output = require('./output');

console.log(output);

const webpackConfig = {
  mode: 'development',
  entry,
  optimization,
  externals,
  plugins,
  output
};

console.log(webpackConfig);

module.exports = webpackConfig;
