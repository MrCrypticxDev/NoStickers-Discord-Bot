/**
 * Shows the help embed
 * @param {client} client Discord.js client instance
 * @param {Object} request Express.js request payload
 * @param {response} response The response to send back
 * @returns {void}
 */
module.exports = (client, request, response) => {
  const interaction = request.body;
  
  response.send({
    type: 4,
    data: {
      embeds: [{
        author: {
          name: 'NoStickers\' Help Menu',
          icon_url: client.user.avatarURL()
        },
        color: [240, 71, 71],
        description: `
        \`help\` - Shows the list of commands.
        \`invite\` - Invite me to your server.
        \`nostickers\` - Disables stickers for the specific channels.
        \`stickers\` - Enables stickers for the specific channels.
        `,
        footer: {
          text: `Requested by ${interaction.member.user.username + '#' + interaction.member.user.discriminator || interaction.user.username + '#' + interaction.user.discriminator}`,
          icon_url: `https://cdn.discordapp.com/avatars/${interaction.member.user.id || interaction.user.id}/${interaction.member.user.avatar || interaction.user.avatar}.gif`,
          timestamp: Date.now()
        }
      }]
    }
  });
};
