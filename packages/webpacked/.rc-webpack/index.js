const path = require('path');
const init = require('./init');
init.call({
  startMessage: 'Compiling project bundles now'
});
const { NODE_ENV, WEBPACK_OUTPUT_PATH } = process.env;

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
