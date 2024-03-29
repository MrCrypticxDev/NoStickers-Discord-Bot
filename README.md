# NoStickers-Discord-Bot
![NoStickers-Discord-Bot](https://socialify.git.ci/MrCrypticXDev/NoStickers-Discord-Bot/image?description=1&forks=1&issues=1&language=1&logo=https%3A%2F%2Fim-an.explorer.workers.dev%2FPgaUZal.png&owner=1&pattern=Circuit%20Board&pulls=1&stargazers=1&theme=Light)
[![ESLint](https://github.com/MrCrypticXDev/NoStickers-Discord-Bot/actions/workflows/lint.yml/badge.svg)](https://github.com/MrCrypticXDev/NoStickers-Discord-Bot/actions/workflows/lint.yml) [![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-2.0-4baaaa.svg)](.github/CODE_OF_CONDUCT.md)

## About

NoStickers is a Discord bot that allows you to prevent or enable the usage of Discord's [sticker feature](https://support.discord.com/hc/en-us/articles/1500008542422-Sticker-Updates-FAQ-Android-and-Desktop). Assuming your prefix is `!`, getting a list of commands can be done by running `!help`.

## Installation
**Prerequisites**
* [Node.js](https://nodejs.org) v14 or higher
* [NPM](https://npmjs.com)
* (Optional) A [MongoDB](https://mongodb.com) account
* (Optional) [Git](https://git-scm.org)

**Setup**

Firstly, you need to have a local copy of this repository on your code editor, you may either:
1. Clone this repository via `git clone https://github.com/MrCrypticXDev/NoStickers-Discord-Bot.git`. Note that if needed, you'll have to `cd` to the directory the files are in.
2. Copy the contents of this repository.

So now you have a copy, follow the steps below:
1. You may optionally configure the [package](package.json) file to your needs. Or create your own by running `npm init`.
2. Run `npm install` to get the dependencies and devDependencies.
3. In the [config](src/config.json) file, set the following variables with the necessary values:
* `YOUR_BOT_TOKEN` refers to the token retrieved from the bot page of your app in the [Discord developer portal](https://discord.com/developers/applications). Need [help](https://www.writebots.com/discord-bot-token)? Note that it's recommended to use [`.env`](https://stackoverflow.com/a/41501273) files instead of hard coding the token.
* `YOUR_USER_ID` refers to your user ID on Discord. There's an [article](https://support.discord.com/hc/en-us/articles/206346498-Where-can-I-find-my-User-Server-Message-ID-) for that.
* `YOUR_BOT_PREFIX` refers to the character your bot will detect for, so that it knows when to respond to a command. For example, `!`.
* `YOUR_MONGODB_URL` refers to the URL of your MongoDB cluster.
* `YOUR_APP_PUBLIC_KEY` refers to the public key retrieved from your app in the developer portal. This appears in the general page, just below the app ID.

4. You'll have to register the slash commands. Don't worry, we got your back, so just follow the next bullet points:
* Feel free to create a file (perhaps `create-slash-commands.js`). 
* Stick this following piece of code:

```js
const fetch = require('node-fetch');

const token = '';
const id = '';

const json = [{ name: 'eval', description: 'Executes the given code', options: [{ name: 'code', description: 'The code to evaluate', type: 3, required: true }] }, { name: 'help', description: 'Shows the help embed' }, { name: 'invite', description: 'The link for inviting the bot' }, { name: 'stickers', description: 'Allows stickers in the given channel', options: [{ name: 'channel', description: 'The channel to allow sending of stickers from', type: 7, required: true }] }, { name: 'nosticker', description: 'Deletes stickers in the given channel', options: [{ name: 'channel', description: 'The channel to disable usage of stickers from', type: 7, required: true }] }];

for (const i of json) {
    fetch(`https://discord.com/api/applications/${id}/commands`, {
        method: 'POST',
        headers: {
            'Authorization': `Bot ${token}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(i)
    })
        .then(res => res.json())
        .then(data => console.log(data));
}
```
* Run `node create-slash-commands.js`. Make sure to have node-fetch installed, as well as the details placed in the variables. If you see an output of JSON in your console without any error messages, you're good to go!
* Now you'll actually have to allow your bot to receive interactions. To do that, go to your app's homepage, navigate to the interactions endpoint URL field and place the link + the `/interactions` endpoint (e.g. `https://bot.site/interactions`). Keep in mind you'll need the server running.

5. Run `node src/index.js` to start the bot. Don't forget to invite it!
6. And lastly, **enjoy Stickers while you can.** 🌺

## Additional information
* You may run `npm run lint` to find errors in your code. There's also `npm run lint:fix` that has the ability to correct certain types of mistakes.
* Written in the JavaScript language, runs on the Node.js runtime environment, and uses Discord.js as the core library.
* Chalk is used for logging, whilst mongoose is for using MongoDB. ESLint is for code linting. There are also other libraries used such as discord-interactions and node-fetch for creating and replying to slash commands and interactions.

## License
The NoStickers Discord bot is released under the GNU General Public License 3.0. See [LICENSE](LICENSE) for more details.

## Author
Originally developed by [MrCrypticXDev](https://github.com/MrCrypticXDev) and maintained by its [contributors](https://github.com/MrCrypticXDev/NoStickers-Discord-Bot/graphs/contributors).
