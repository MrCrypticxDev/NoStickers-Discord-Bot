const Guild = require("../Models/Guild.js");
const Discord = require('discord.js')
class stickersCommand {

	constructor(){
		this.name = "stickers";
	}

	async main(client, message, args){
		// allows to send stickers in specified channel

		if(!message.member.hasPermission(["MANAGE_CHANNEL", "MANAGE_MESSAGE"])) return message.channel.send('<:xtempl:726203462781501481> You do not have the \`MANAGE_CHANNELS\` permission.');

		let channels = message.mentions.channels.array().length == 0 ? [message.channel.id] : message.mentions.channels.array().map((c) => c.id);
		
		// $pullAll - removes values from existing array
		// https://docs.mongodb.com/manual/reference/operator/update/pullAll/
		await Guild.findOneAndUpdate({
			guildID: message.guild.id
		},{
			$pullAll: {
				disableStickerUsage: channels
			}
		},{
			upsert: true
		});

		let msg = await message.channel.send({ embed: new Discord.MessageEmbed().setDescription(`<:white_check_mark:726203404799442965> Stickers will be allowed in the given channel\s.`).setColor('#fefbfb')})
		return msg.delete({ timeout: 10000 }).catch();

	}

}

module.exports = stickersCommand;
