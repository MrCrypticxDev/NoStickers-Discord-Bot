const util = require('util');

/**
  * Execute the given code
  * @param {client} client Discord.js client instance
  * @param {Object} request Express.js request payload
  * @param {response} response The response to send back
  * @returns {void}
*/
module.exports = (client, request, response) => {
  const interaction = request.body;
  const args = interaction.data.options;
  
  if (!client.config.ownerIDs.includes(interaction.member.user.id || interaction.member.user.id)) return;
  
  try {
    const code = args.find(option => option.name === 'code').value == '-a' ? args.find(option => option.name === 'code').value.slice(1).join(' ') : args.find(option => option.name === 'code').value.join(' ');
    
    const fullCode = args[0].toLowerCase() == '-a' ? '(async () => {\n{code}\n})()': '{code}';
    const str = fullCode.replace('{code}', code);
    const evaluation = util.inspect(eval(str), {
      depth: 0,
    });
    
    return response.send({
      type: 4,
      data: {
        content: `\`\`\`js\n${evaluation}\`\`\``
      }
    }).catch(console.error);
  } catch (e) {
    return response.send({
      type: 4,
      data: {
        content: `\`\`\`js\n${e.message}\`\`\``
      }
    }).catch(console.error);
  }
};