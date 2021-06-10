/**
 * Invite command
 */
class inviteCommand {
  /**
   * Assign the command properties
   */
  constructor() {
    this.name = 'invite';
  }

  /**
   * The link for inviting the bot
   * @param {client} client discord.js client instance
   * @param {message} message discord.js message instance
   * @param {Array<string>} args message arguments
   * @returns {void}
   */
  async main(client, message, args) {
    return message.channel.send(`https://discord.com/oauth2/authorize?client_id=${client.user.id}&scope=bot&permissions=-9`);
  }
}

module.exports = inviteCommand;
