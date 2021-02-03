const Guild = require('../../Models/Guild.js');

/**
 * Manage message
 */
class ManageMessage {
  /**
   * assign discord.js message instance
   * @param {message} msg  - discord.js message instance
   */
  constructor(msg) {
    this.msg = msg;
  }

  /**
   * Checks if channel is sticker channel
   */
  async isStickerChannel() {
    // eslint-disable-next-line max-len
    const {disableStickerUsage = []} = await Guild.findOne({guildID: this.msg.guild.id}) ?? {disableStickerUsage: []};

    if (disableStickerUsage.length == 0) return false;
    if (disableStickerUsage.includes(this.msg.channel.id)) return true;
    else return false;
  }

  /**
   * delete message if sticker
   */
  async deleteSticker() {
    // eslint-disable-next-line max-len
    if (this.msg.content.length == 0 && this.msg.attachments.size == 0 && this.msg.embeds.length == 0) {
      this.msg.delete();
    }
  }
}

module.exports = ManageMessage;
