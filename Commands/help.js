const { MessageEmbed } = require("discord.js");

class helpCommand {

	constructor(){
		this.name = "help"
	}

	async main(client, message, args){
		let helpEmbed = new MessageEmbed()
		.setAuthor('NoSticker\'s Help Menu', client.user.avatarURL())
		.setColor('#f04747')
		.setDescription('`stickers` - Enables stickers for the specific channel(s)\n`nostickers` - Disables stickers for the specific channel(s)\n`invite` - Invite me to your server.')
		.setFooter(`Requested by ${message.author.tag}`, message.author.displayAvatarURL({
			dynamic: true,
			size: 1024,
			format: 'png'
		}))
		.setTimestamp()
		message.channel.send(helpEmbed)
	}

}

module.exports = helpCommand;