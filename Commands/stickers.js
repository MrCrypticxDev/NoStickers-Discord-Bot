const Discord = require('discord.js');
const Guild = require('../Models/Guild.js');

/**
 * Stickers command
 */
class stickersCommand {
  /**
   * Assign the command properties
   */
  constructor() {
    this.name = 'stickers';
  }

  /**
   * Allows stickers in the specified channel(s)
   * @param {client} client Discord.js client instance
   * @param {message} message Discord.js message instance
   * @param {Array.<string>} args The message arguments
   * @return {void}
   */
  async main(client, message, args) {
    // Allows sending of stickers in the specified channel(s)

    if (!message.member.hasPermission(['MANAGE_CHANNEL', 'MANAGE_MESSAGE'])) {
      // eslint-disable-next-line max-len
      return message.channel.send('<:xtempl:726203462781501481> You do not have the `MANAGE_CHANNELS` permission.');
    }

    const channels =
      message.mentions.channels.array().length == 0 ?
        [message.channel.id] :
        message.mentions.channels.array().map((c) => c.id);

    // $pullAll - removes values from existing array
    // https://docs.mongodb.com/manual/reference/operator/update/pullAll/
    await Guild.findOneAndUpdate(
        {
          guildID: message.guild.id,
        },
        {
          $pullAll: {
            disableStickerUsage: channels,
          },
        },
        {
          upsert: true,
        },
    );

    const msg = await message.channel.send({
      embed: new Discord.MessageEmbed()
          // eslint-disable-next-line max-len
          .setDescription(`<:white_check_mark:726203404799442965> Stickers will be allowed in the given channel\s.`)
          .setColor('#fefbfb'),
    });
    return msg.delete({ timeout: 10000 }).catch(console.error);
  }
}

module.exports = stickersCommand;
