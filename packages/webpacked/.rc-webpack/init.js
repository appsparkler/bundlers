module.exports = function() {
  const { printDescription } = require('./utils');
  const setupEnvVariables = require('./env-vars');
  //
  setupEnvVariables.call(null);
  printDescription.call(this.startMessage);
};
