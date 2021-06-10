const { MessageEmbed } = require('discord.js');

/**
 * User help command
 */
class helpCommand {
  /**
   * Assign the command properties
   */
  constructor() {
    this.name = 'help';
  }

  /**
   * Shows the help embed
   * @param {client} client Discord.js client instance
   * @param {message} message Discord.js message instance
   * @param {Array<string>} args The message arguments
   * @returns {void}
   */
  async main(client, message, args) {
    const helpEmbed = new MessageEmbed()
        .setAuthor('NoStickers\'s Help Menu', client.user.avatarURL())
        .setColor('#f04747')
        .setDescription(`
        \`help\` - Shows the list of commands.
        \`invite\` - Invite me to your server.
        \`nostickers\` - Disables stickers for the specific channels.
        \`stickers\` - Enables stickers for the specific channels.
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
