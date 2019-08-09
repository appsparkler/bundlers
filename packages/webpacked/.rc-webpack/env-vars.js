const { showError } = require('./utils');

setupEnvVariables.call(null);

module.exports = process.env;

// private functions
function setupEnvVariables() {
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
