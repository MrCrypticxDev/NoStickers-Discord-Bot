const Discord = require('discord.js');

class githubCommand{
    constructor(){
        this.name = 'github',
        this.aliases = ['repo', 'repository', 'source', 'src']
    }

    
	async main(client, message, args){
		let repoEmbed = new Discord.MessageEmbed()
		.setColor('#fffbfb')
		.setDescription('My Source Code: https://github.com/MrCrypticXDev/NoStickers-Discord-Bot')
		.setFooter(`Requested by ${message.author.tag}`, message.author.displayAvatarURL({
			dynamic: true,
			size: 1024,
			format: 'png'
		}))
		.setTimestamp()
		message.channel.send(repoEmbed)
}
}
module.exports = githubCommand;
