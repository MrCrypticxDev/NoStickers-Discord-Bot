const { model, Schema } = require('mongoose');

const NoStickersGuildSchema = new Schema({
  guildID: String,
  disableStickerUsage: Array,
});

module.exports = model('NoStickersGuild', NoStickersGuildSchema);
