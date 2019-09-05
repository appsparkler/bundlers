const entry  = require('./entry');
const optimization = require('./optimization');
const externals = require('./externals');

console.log(externals);

const webpackConfig = {
  mode: 'development',
  entry,
  // optimization,
  externals
};

console.log(webpackConfig);

module.exports = webpackConfig;
