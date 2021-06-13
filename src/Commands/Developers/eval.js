const path = require('path');
const util = require('util');

/**
 * Eval command
 */
class evalCommand {
  /**
   * Assign the command properties
   */
  constructor() {
    this.name = 'eval';
    this.aliases = ['elevate'];
    this.description = 'Elevated eval cmd';
    // eslint-disable-next-line no-undef
    this.category = path.basename(__dirname); 
    this.usage = 'eval <query>';
  }

  /**
   * Execute the given code
   * @param {client} client Discord.js client instance
   * @param {message} message Discord.js message instance
   * @param {Array<string>} args The message arguments
   * @returns {void}
   */
  async main(client, message, args) {
    if (!client.config.ownerIDs.includes(message.author.id)) return;

    try {
      const code = args[0].toLowerCase() == '-a' ? args.slice(1).join(' ') : args.join(' ');
      const fullCode = args[0].toLowerCase() == '-a' ? '(async () => {\n{code}\n})()': '{code}';
      const str = fullCode.replace('{code}', code);
      const evaluation = util.inspect(await eval(str), {
        depth: 0,
      });
      return message.channel.send(`\`\`\`js\n${evaluation}\`\`\``).catch(console.error);
    } catch (e) {
      return message.channel.send(`\`\`\`js\n${e.message}\`\`\``).catch(console.error);
    }
  }
}

module.exports = evalCommand;