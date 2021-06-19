/**
 * Invite command
 */
class inviteCommand {
  /**
   * Assign the command properties
   */
  constructor() {
    this.name = 'invite';
    this.aliases = [];
    this.description = 'Shows the link for inviting the bot to your server.';
    this.category = 'General';
    this.usage = 'invite';
  }

  /**
   * The link for inviting the bot
   * @param {client} client discord.js client instance
   * @param {message} message discord.js message instance
   * @param {Array<string>} args message arguments
   * @returns {void}
   */
  // eslint-disable-next-line no-unused-vars
  async main(client, message, args) {
    return message.channel.send({ content: `https://discord.com/oauth2/authorize?client_id=${client.user.id}&scope=bot+applications.commands&permissions=338944` });
  }
}

module.exports = inviteCommand;
