exports.printDescription = function() {
  try {
    const chalk = require('chalk');
    console.log(chalk.blue.bgBlack(this));
  } catch (e) {
    showError.call(e)
  }
}

exports.setupEnvVariables = function() {
  try {
    process.env.NODE_ENV = process.env.NODE_ENV || 'development';
    const path = require('path');
    const {
      NODE_ENV
    } = process.env;
    require('dotenv').config({
      path: path.resolve(`.env.${NODE_ENV}`)
    });
  } catch (e) {
    showError.call(e);
  }
}

function showError() {
  console.error(this);
}
