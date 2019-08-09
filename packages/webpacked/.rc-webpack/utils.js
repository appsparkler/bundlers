import chalk from 'chalk'

export function printDescription() {
  try {
    console.log(chalk.blue.bgBlack(this));
  } catch (e) {
    showError.call(e)
  }
}

function showError() {
  console.error(this);
}
