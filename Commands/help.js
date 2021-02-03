const {MessageEmbed} = require('discord.js');

/**
 * User help command
 */
class helpCommand {
  /**
   * Assign command properties
   */
  constructor() {
    this.name = 'help';
  }

  /**
   * shows help embed
   * @param {client} client discord.js client instance
   * @param {message} message discord.js message instance
   * @param {Array.<string>} args message arguments
   * @return {void}
   */
  async main(client, message, args) {
    const helpEmbed = new MessageEmbed()
        .setAuthor('NoStickers\'s Help Menu', client.user.avatarURL())
        .setColor('#f04747')
        .setDescription(`
\`stickers\` - Enables stickers for the specific channels
\`nostickers\` - Disables stickers for the specific channels
\`invite\` - Invite me to your server.
\`github\` - The link to my repository.
`)
        .setFooter(
            `Requested by ${message.author.tag}`,
            message.author.displayAvatarURL({
              dynamic: true,
              size: 1024,
              format: 'png',
            }),
        )
        .setTimestamp();
    message.channel.send(helpEmbed);
  }
}

module.exports = helpCommand;
