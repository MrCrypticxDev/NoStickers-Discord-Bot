const chalk = require('chalk');

module.exports = (client) => {
  client.user.setActivity(`Deleting Stickers | ${client.config.prefix} help`, { type: 'PLAYING' }).catch((e) => console.log(chalk.red(e)));

  console.log(chalk.yellow(`${client.user.username} is online!`));
};
