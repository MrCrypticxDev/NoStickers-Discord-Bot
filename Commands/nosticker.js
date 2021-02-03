const Guild = require("../Models/Guild.js");
const Discord = require('discord.js')
class nostickerCommand {

	constructor(){
		this.name = "nostickers";
	}

	async main(client, message, args){

		//delete stickers in specified channel

		if(!message.member.hasPermission(["MANAGE_CHANNEL", "MANAGE_MESSAGE"])) return message.channel.send('<:xtempl:726203462781501481> You do not have the \`MANAGE_CHANNELS\` permission.');

		let channels = message.mentions.channels.array().length == 0 ? [message.channel.id] : message.mentions.channels.array().map((c) => c.id);

		// $addToSet - adds elements to array only if they do not already exist in set
		// https://docs.mongodb.com/manual/reference/operator/update/addToSet/#addtoset-modifiers
		await Guild.findOneAndUpdate({
			guildID: message.guild.id
		},{
			$addToSet: {
				disableStickerUsage: {
					$each: channels
				}
			}
		},{
			upsert: true
		});

		return message.channel.send({ embed: new Discord.MessageEmbed().setDescription("<:white_check_mark:726203404799442965> Stickers will be deleted in the given channel\s.").setColor('#fefbfb')});

	}

}

module.exports = nostickerCommand;
