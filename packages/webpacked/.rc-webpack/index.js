const path = require('path');
const init = require('./init');
const { NODE_ENV, WEBPACK_OUTPUT_PATH } = require('./env-vars');

init.call({
  startMessage: 'Compiling project bundles now'
});

module.exports = {
  mode: process.env.NODE_ENV,
  entry: {
    index: './src/index.js',
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(WEBPACK_OUTPUT_PATH)
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all'
        }
      }
    }
  }
};
