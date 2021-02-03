const Discord = require('discord.js');

/**
 * Github command
 */
class githubCommand {
  /**
   * Assign command properties
   */
  constructor() {
    (this.name = 'github'),
    (this.aliases = ['repo', 'repository', 'source', 'src']);
  }

  /**
   * source code link for discord bot
   * @param {client} client discord.js client instance
   * @param {message} message discord.js message instance
   * @param {Array.<string>} args message arguments
   * @return {void}
   */
  async main(client, message, args) {
    const repoEmbed = new Discord.MessageEmbed()
        .setColor('#fffbfb')
        .setDescription(
            'My Source Code: https://github.com/MrCrypticXDev/NoStickers-Discord-Bot',
        )
        .setFooter(
            `Requested by ${message.author.tag}`,
            message.author.displayAvatarURL({
              dynamic: true,
              size: 1024,
              format: 'png',
            }),
        )
        .setTimestamp();
    message.channel.send(repoEmbed);
  }
}
module.exports = githubCommand;
