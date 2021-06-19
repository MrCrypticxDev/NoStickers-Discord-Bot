const chalk = require('chalk');
const { Client, Collection } = require('discord.js');
const { connect } = require('mongoose');
const client = new Client({ intents: 4609 });

client.config = require('./config.js');
client.commands = new Collection();
client.aliases = new Collection();

connect(client.config.mongoURL, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useFindAndModify: false,
}).then(() => {
  client.login(client.config.token).then(() => {
    ['events', 'commands'].forEach((s) => {
      require(`./Handlers/${s}.js`)(client);
    });
  });
}).catch((e) => console.log(chalk.red(e)));

require('./server.js')(client);
