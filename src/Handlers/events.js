const chalk = require('chalk');
const getFiles = require('../Structures/Utils/getFiles.js');
const path = require('path');

module.exports = (client) => {
  const items = getFiles('./Events');
  items.forEach((filepath) => {
    try {
      const eName = path.basename(filepath).replace('.js', '');
      const evt = require(`.${filepath}`);
      client.on(eName, evt.bind(null, client));
    } catch(e) {
      console.log(chalk.red(e));
    }
  });
};
