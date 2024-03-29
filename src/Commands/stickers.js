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
    this.aliases = [];
    this.description = 'Allows sending of stickers in the given channels.';
    this.category = 'General';
    this.usage = 'stickers <channel>';
  }

  /**
   * Allows stickers in the specified channel(s)
   * @param {client} client Discord.js client instance
   * @param {message} message Discord.js message instance
   * @param {Array<string>} args The message arguments
   * @returns {void}
   */
  // eslint-disable-next-line no-unused-vars
  async main(client, message, args) {
    // Allows sending of stickers in the specified channel(s)

    if (!message.member.hasPermission(['MANAGE_CHANNEL', 'MANAGE_MESSAGE'])) {
      return message.channel.send({ content: '<:xtempl:726203462781501481> You do not have the `MANAGE_CHANNELS` permission.' });
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
      embeds: [new Discord.MessageEmbed()
        .setDescription('<:white_check_mark:726203404799442965> Stickers will be allowed in the given channel(s).')
        .setColor('#fefbfb')]
    });   
    setTimeout(async () => {
      await msg.delete().catch(console.error);
    }, 10000);
  }
}

module.exports = stickersCommand;
