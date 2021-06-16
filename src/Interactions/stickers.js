const fetch = require('node-fetch');
const Guild = require('../Models/Guild.js');

/**
 * Allows stickers in the specified channel(s)
 * @param {client} client Discord.js client instance
 * @param {Object} request Express.js request payload
 * @param {response} response The response to send back
 */
module.exports = async (client, request, response) => {
  const interaction = request.body;
  const args = interaction.data.options;
  
  if (!interaction.guild_id) {
    response.send({
      type: 4,
      data: {
        content: 'Unfortunately, this command cannot be used on direct messages. Try running `/invite` to invite me to your server.'
      }
    });
  }
  
  if ((interaction.member.permissions & 8208) == 0) {
    response.send({
      type: 4,
      data: {
        content: 'You do not have both the `MANAGE_CHANNELS` and the `MANAGE_MESSAGES` permissions.'
      }
    });
  }
  
  if (interaction.data.resolved.channels[interaction.data.options[0].value].type !== 0) {
    response.send({
      type: 4,
      data: {
        content: 'You need to input a valid server text channel.'
      }
    });
  }
  
  await Guild.findOneAndUpdate(
    {
      guildID: interaction.guild_id,
    },
    {
      $pullAll: {
        disableStickerUsage: args.find(option => option.name === 'channel').value,
      },
    },
    {
      upsert: true,
    },
  );
    
  response.send({
    type: 4,
    data: {
      embeds: [{
        description: 'Stickers will be allowed in the given channel(s).',
        color: [254, 251, 251]
      }]
    }
  });
    
  setTimeout(() => {
    fetch(`https://discord.com/api/webhooks/${client.user.id}/${interaction.token}/messages/@original`, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bot ${client.token ?? client.config.token}`,
      }
    });
  }, 10000);
};
