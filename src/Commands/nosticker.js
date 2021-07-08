const Discord = require('discord.js');
const Guild = require('../Models/Guild.js');

/**
 * No sticker command
 */
class nostickerCommand {
  /**
   * Assign the command properties
   */
  constructor() {
    this.name = 'nostickers';
    this.aliases = [];
    this.description = 'Disables usage of stickers in the given channels.';
    this.category = 'General';
    this.usage = 'nosticker <channel>';
  }

  /**
   * Delete stickers in the specified channel(s)
   * @param {client} client Discord.js client instance
   * @param {message} message Discord.js message instance
   * @param {Array<string>} args The message arguments
   * @returns {void}
   */
  // eslint-disable-next-line no-unused-vars
  async main(client, message, args) {
    if (!message.member.hasPermission(['MANAGE_CHANNEL', 'MANAGE_MESSAGE'])) {
      return message.channel.send({ content: '<:xtempl:726203462781501481> You do not have the `MANAGE_CHANNELS` permission.' });
    }

    const channels =
      message.mentions.channels.array().length == 0 ?
        [message.channel.id] :
        message.mentions.channels.array().map((c) => c.id);

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
      embeds: [new Discord.MessageEmbed()
        .setDescription('<:white_check_mark:726203404799442965> Stickers will be deleted in the given channel(s).')
        .setColor('#fefbfb')]
    });
  }
}

module.exports = nostickerCommand;
