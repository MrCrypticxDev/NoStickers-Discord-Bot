const chalk = require('chalk');
const getFiles = require('../Structures/Utils/getFiles.js');
const path = require('path');

module.exports = (client) => {
  getFiles('./Commands').filter((str) => str.endsWith('.js')).forEach((fp) => {
    try {
      const Prop = require(`.${fp}`);
      const cmd = new Prop();
      cmd.category = path.dirname(fp).split(path.sep).reverse()[0];
      if (!cmd.name) throw new Error(`${path.basename(fp)} does not have a name property!`);
      client.commands.set(cmd.name, cmd);
      if (!cmd.aliases) return;
      if (!Array.isArray(cmd.aliases)) throw new TypeError(`${path.basename(fp)} aliases provided aren't arrays.`);
      cmd.aliases.forEach((alias) => {
        client.aliases.set(alias, cmd);
      });
    } catch (e) {
      if (e.message == 'prop is not a constructor') return console.log(`${fp} cannot create a new class instance.`);
      console.log(chalk.red(e));
    }
  });
};
