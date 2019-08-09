const chalk = require('chalk');

exports.printDescription = function() {
  try {
    console.log(chalk.blue.bgBlack(this));
  } catch (e) {
    showError.call(e)
  }
}

exports.showError = function showError() {
  console.log(chalk.red.bgBlack(this));
}
