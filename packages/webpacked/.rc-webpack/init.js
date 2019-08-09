module.exports = function() {
  const { printDescription, setupEnvVariables } = require('./utils');
  // 
  printDescription.call(this.startMessage);
  setupEnvVariables.call(null);
};
