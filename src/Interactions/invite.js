/**
 * The link for inviting the bot
 * @param {client} client Discord.js client instance
 * @param {Object} request Express.js request payload
 * @param {response} response The response to send back
 * @returns {void}
 */
module.exports = (client, request, response) => {
  response.send({
    type: 4,
    data: {
      content: `https://discord.com/oauth2/authorize?client_id=${client.user.id}&scope=bot+applications.commands&permissions=338944`
    }
  });
};
