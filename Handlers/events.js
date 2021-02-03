const path = require('path');
const getFiles = require('../Structures/Utils/getFiles.js');

module.exports = (client) => {
  const items = getFiles(`./Events`);
  items.forEach((filepath) => {
    // try{
    const eName = path.basename(filepath).replace('.js', '');
    const evt = require(`.${filepath}`);
    client.on(eName, evt.bind(null, client));
    // }catch(e){}
  });
};
