const Guild = require('../Models/Guild.js');
const Discord = require('discord.js');
/**
 * no sticker
 */
class nostickerCommand {
  /**
   * Assign command properties
   */
  constructor() {
    this.name = 'nostickers';
  }

  /**
   * delete stickers in specified channel
   * @param {client} client discord.js client instance
   * @param {message} message discord.js message instance
   * @param {Array.<string>} args message arguments
   * @return {void}
   */
  async main(client, message, args) {
    if (!message.member.hasPermission(['MANAGE_CHANNEL', 'MANAGE_MESSAGE'])) {
      // eslint-disable-next-line max-len
      return message.channel.send('<:xtempl:726203462781501481> You do not have the `MANAGE_CHANNELS` permission.');
    }

    const channels =
      message.mentions.channels.array().length == 0 ?
        [message.channel.id] :
        message.mentions.channels.array().map((c) => c.id);

    // eslint-disable-next-line max-len
    // $addToSet - adds elements to array only if they do not already exist in set
    // https://docs.mongodb.com/manual/reference/operator/update/addToSet/#addtoset-modifiers
    await Guild.findOneAndUpdate(
        {
          guildID: message.guild.id,
        },
        {
          $addToSet: {
            disableStickerUsage: {
              $each: channels,
            },
          },
        },
        {
          upsert: true,
        },
    );

    return message.channel.send({
      embed: new Discord.MessageEmbed()
          // eslint-disable-next-line max-len
          .setDescription('<:white_check_mark:726203404799442965> Stickers will be deleted in the given channels.')
          .setColor('#fefbfb'),
    });
  }
}

module.exports = nostickerCommand;
