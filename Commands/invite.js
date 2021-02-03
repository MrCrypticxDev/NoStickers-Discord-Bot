class inviteCommand {

	constructor(){
		this.name = "invite";
	}

	async main(client, message, args){

		return message.channel.send(`https://discord.com/oauth2/authorize?client_id=${client.user.id}&scope=bot&permissions=-9`)

	}

}

module.exports = inviteCommand;