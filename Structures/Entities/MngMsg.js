const Guild = require('../../Models/Guild.js');

/**
 * Manage message
 */
class ManageMessage {
  /**
   * Assign the discord.js message instance
   * @param {message} msg  - The Discord.js message instance
   */
  constructor(msg) {
    this.msg = msg;
  }

  /**
   * Checks if the channel allows stickers
   */
  async isStickerChannel() {
    // eslint-disable-next-line max-len
    const {disableStickerUsage = []} = await Guild.findOne({guildID: this.msg.guild.id}) ?? {disableStickerUsage: []};

    if (disableStickerUsage.length == 0) return false;
    if (disableStickerUsage.includes(this.msg.channel.id)) return true;
    else return false;
  }

  /**
   * Delete the message if it contains a sticker
   */
  async deleteSticker() {
    // eslint-disable-next-line max-len
    if (this.msg.content.length == 0 && this.msg.attachments.size == 0 && this.msg.embeds.length == 0) {
      this.msg.delete();
    }
  }
}

module.exports = ManageMessage;
