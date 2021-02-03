const chalk = require('chalk');
const MngMsg = require('../Structures/Entities/MngMsg.js');

module.exports = async (client, message) => {
  const mngMsg = new MngMsg(message);

  if (await mngMsg.isStickerChannel()) mngMsg.deleteSticker();

  // eslint-disable-next-line max-len
  if (!message.content.startsWith(client.config.prefix) || message.author.bot) return;
  const args = message.content.slice(client.config.prefix.length).split(/ +/);
  const command = args.shift().toLowerCase();
  // eslint-disable-next-line max-len
  const commandfile = client.commands.get(command) || client.aliases.get(command);

  if (!commandfile) return;

  try {
    await commandfile.main(client, message, args);
  } catch (error) {
    console.log(chalk.red(error.stack));
  }
};
