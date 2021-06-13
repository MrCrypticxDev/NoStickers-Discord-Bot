# NoStickers-Discord-Bot
[![Discord Bots](https://socialify.git.ci/MrCrypticXDev/NoStickers-Discord-Bot/image?description=1&descriptionEditable=The%20source%20code%20for%20the%20NoStickers%20bot%20that%20uses%20Discord.js.%20It%20also%20has%20an%20added-on%20customizable%20tweaks%2Fconfigs%20for%20server%20admins.%20%F0%9F%91%80&forks=1&language=1&owner=1&pattern=Plus&stargazers=1&theme=Light)](![NoStickers-Discord-Bot](![NoStickers-Discord-Bot](https://socialify.git.ci/MrCrypticXDev/NoStickers-Discord-Bot/image?description=1&descriptionEditable=The%20source%20code%20for%20the%20NoStickers%20bot%20that%20uses%20Discord.js.%20It%20also%20has%20an%20added-on%20customizable%20tweaks%2Fconfigs%20for%20server%20admins.%20%F0%9F%91%80&forks=1&language=1&owner=1&pattern=Plus&stargazers=1&theme=Light)))
[![ESLint](https://github.com/MrCrypticXDev/NoStickers-Discord-Bot/actions/workflows/lint.yml/badge.svg)](https://github.com/MrCrypticXDev/NoStickers-Discord-Bot/actions/workflows/lint.yml) [![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-2.0-4baaaa.svg)](.github/CODE_OF_CONDUCT.md)
## About
The source code for the NoStickers bot that uses Discord.js. It also has an added-on customizable tweaks/configs for server admins. 👀

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
4. Run `node src/index.js` to start the bot. Don't forget to invite it!
5. And lastly, **enjoy Stickers while you can.** 🌺

## Additional information
* You may run `npm run lint` to find errors in your code. There's also `npm run lint:fix` that has the ability to correct certain types of mistakes.
* Written in the JavaScript language, runs on the Node.js runtime environment, and uses Discord.js as the core library.
* Chalk is used for logging, whilst mongoose is for using MongoDB. ESLint is for code linting.

## License
The NoStickers Discord bot is released under the GNU General Public License 3.0. See [LICENSE](LICENSE) for more details.

## Author
Originally developed by [MrCrypticXDev](https://github.com/MrCrypticXDev) and maintained by its [contributors](https://github.com/MrCrypticXDev/NoStickers-Discord-Bot/graphs/contributors).
