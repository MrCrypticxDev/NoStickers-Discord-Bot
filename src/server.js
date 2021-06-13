const { verifyKeyMiddleware } = require('discord-interactions');
const server = require('express')();

module.exports = (client) => {
  server.post('/interactions', verifyKeyMiddleware(client.config.publicKey), (request, response) => {
    const interaction = request.body;
    
    if (interaction.type == 1) {
      response.send({ type: 1 });
    }
    
    if (interaction.type == 2) {
      require(`./interactions/${interaction.data.name + '.js'}`)(client, request, response);
    }
  });
  
  server.listen(8000);
};