const path = require('path');
const init = require('./init');
// ENV Variables
const { NODE_ENV, WEBPACK_OUTPUT_PATH } = require('./env-vars');
// Webpack Configurations
const plugins = require('./plugins');
const optimization = require('./optimization');

init.call({
  startMessage: 'Compiling project bundles now'
});

module.exports = {
  mode: NODE_ENV,
  entry: {
    index: './src/index.js',
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(WEBPACK_OUTPUT_PATH)
  },
  plugins,
  optimization
};
