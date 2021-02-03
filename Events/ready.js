const chalk = require('chalk');

module.exports = (client) => {
  // eslint-disable-next-line max-len
  client.user.setActivity(`Deleting Stickers | !help`, {type: 'PLAYING'}).catch(console.error);

  console.log(chalk.yellow(`${client.user.username} is online!`));
};
