const path = require('path');
const getFiles = require('../Structures/Utils/getFiles.js');

module.exports = (client) => {
  getFiles('./Commands').filter((str) => str.endsWith('.js')).forEach((fp) => {
    try {
      const Prop = require(`.${fp}`);
      const cmd = new Prop();
      cmd.category = path.dirname(fp).split(path.sep).reverse()[0];
      // eslint-disable-next-line max-len
      if (!cmd.name) throw new ReferenceError(`${path.basename(fp)} does not have a name property!`);
      client.commands.set(cmd.name, cmd);
      if (!cmd.aliases) return;
      // eslint-disable-next-line max-len
      if (!Array.isArray(cmd.aliases)) throw new TypeError(`${path.basename(fp)} aliases aren't array datatype`);
      cmd.aliases.forEach((alias) => {
        client.aliases.set(alias, cmd);
      });
    } catch (e) {
      // eslint-disable-next-line max-len
      if (e.message == 'prop is not a constructor') return console.log(`${fp} cannot create a instaniated class`);
      console.log(e);
    }
  });
};

