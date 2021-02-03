const fs = require('fs');
const path = require('path');

module.exports = (client) => {

    let items = getFiles(`./Events`);
    items.forEach((filepath) => {
        // try{
            let eName = path.basename(filepath).replace(".js","");
            let evt = require(`.${filepath}`);
            client.on(eName, evt.bind(null, client));
        // }catch(e){}
    });

}

function getFiles(filepath){

    let items = [];
    let files = fs.readdirSync(filepath);
    files.forEach((file) => {
        let stats = fs.statSync(`${filepath}/${file}`);
        if(stats.isDirectory()) return items.push(getFiles(`${filepath}/${file}`));
        items.push(`${filepath}/${file}`);
    });
    return items.flat();

}