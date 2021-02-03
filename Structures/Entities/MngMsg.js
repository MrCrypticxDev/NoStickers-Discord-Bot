const Guild = require('../../Models/Guild.js');

class ManageMessage {

	constructor(msg){
		this.msg = msg;
	}

	async isStickerChannel(){

		let { disableStickerUsage = [] } = await Guild.findOne({ guildID: this.msg.guild.id }) ?? { disableStickerUsage: [] };

		if(disableStickerUsage.length == 0) return false;
		if(disableStickerUsage.includes(this.msg.channel.id)) return true;
		else return false;

	}

	async deleteSticker(){

		if(this.msg.content.length == 0 && this.msg.attachments.size == 0 && this.msg.embeds.length == 0){
			this.msg.delete();
		}

	}

}

module.exports = ManageMessage;