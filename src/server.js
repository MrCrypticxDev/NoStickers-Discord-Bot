const { verifyKeyMiddleware } = require('discord-interactions');
const server = require('express')();
const fs = require('fs');

const files = fs.readdirSync('./Interactions').filter(file => file.endsWith('.js'));

module.exports = (client) => {
  server.post('/interactions', verifyKeyMiddleware(client.config.publicKey), (request, response) => {
    const interaction = request.body;
    
    if (interaction.type == 1) {
      response.send({ type: 1 });
    }
    
    if (interaction.type == 2) {
      if (!files.has(interaction.data.name + '.js')) {
        response.send({
          type: 4,
          data: {
            content: 'The invoked slash command could not be found.',
            flags: 64
          }
        });
      }
      require(`./interactions/${interaction.data.name + '.js'}`)(client, request, response);
    }
  });
  
  server.listen(8000);
};