const path = require("path");
const Discord = require('discord.js');
const util = require('util');

class evalCommand {

    constructor(){
        this.name = "eval";
        this.aliases = ['elevate']
        this.description = "Elevated eval cmd";
        this.category = path.basename(__dirname);
        this.usage = "elevate <query>";
    }

    async main(client, message, args){

        if (!client.config.ownerIDs.includes(message.author.id)) return;

        try {
            let code = args[0].toLowerCase() == "-a" ? args.slice(1).join(" ") : args.join(" ");
            let fullCode = args[0].toLowerCase() == "-a" ? `(async () => {\n{code}\n})()`: "{code}";
            let str = fullCode.replace(`{code}`, code);
            let evaluation = util.inspect(await eval(str), {
                depth: 0
            });
            return message.channel.send(`\`\`\`js\n${evaluation}\`\`\``).catch(console.error);
        } catch (e) {
            return message.channel.send(`\`\`\`js\n${e.message}\`\`\``).catch(console.error);
        }

    }

}

module.exports = evalCommand;