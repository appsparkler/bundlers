exports.printDescription = function() {
  try {
    const chalk = require('chalk');
    console.log(chalk.blue.bgBlack(this));
  } catch (e) {
    showError.call(e)
  }
}

function showError() {
  console.error(this);
}
