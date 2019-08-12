const path = require('path');
const init = require('./init');
// ENV Variables
const { NODE_ENV } = process.env;
const { OUTPUT_PATH } = require('./vars').default;
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
    path: path.resolve(OUTPUT_PATH)
  },
  plugins,
  optimization
};
