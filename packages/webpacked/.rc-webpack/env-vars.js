const { showError } = require('./utils');

module.exports = setupEnvVariables;

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
    console.log(process.env.WEBPACK_HTML_PLUGIN);
  } catch (e) {
    showError.call(e);
  }
}
