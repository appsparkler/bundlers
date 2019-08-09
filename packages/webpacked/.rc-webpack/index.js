const path = require('path');
const chalk = require('chalk');

printDescription.call('Bundling your packages now');

module.exports = {
  // mode: 'development',
  entry: {
    index: './src/index.js',
    // another: './src/another-module.js'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  optimization:{
    splitChunks:{
      cacheGroups: {
        test: /[\\/]node_modules[\\/]/,
        name: 'vendors',
        chunks: 'all'
      }
    }
  }
};


function printDescription() {
  try {
      console.log(chalk.blue.bgBlack(this));
  } catch (e) {
    showError.call(e)
  }
}

function showError() {
  console.error(this);
}
