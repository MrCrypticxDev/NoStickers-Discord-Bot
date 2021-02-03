const fs = require('fs');
const path = require('path');

module.exports = (client) => {

    getFiles('./Commands').filter((str) => str.endsWith(".js")).forEach((fp) => {
        try{
            let prop = require(`.${fp}`);
            let cmd = new prop();
            cmd.category = path.dirname(fp).split(path.sep).reverse()[0];
            if(!cmd.name) throw new ReferenceError(`${path.basename(fp)} does not have a name property!`);
            client.commands.set(cmd.name, cmd);
            if(!cmd.aliases) return;
            if(!Array.isArray(cmd.aliases)) throw new TypeError(`${path.basename(fp)} aliases aren't array datatype`);
            cmd.aliases.forEach((alias) => {
                client.aliases.set(alias, cmd);
            });
        }catch(e){
            if(e.message == "prop is not a constructor") return console.log(`${fp} cannot create a instaniated class`);
            console.log(e);
        }
    });

}

function getFiles(filepath){

    let items = [];
    let files = fs.readdirSync(filepath);
    let sep = path.sep;
    files.forEach((file) => {
        let stats = fs.statSync(`${filepath}${sep}${file}`);
        if(stats.isDirectory()) return items.push(getFiles(`${filepath}${sep}${file}`));
        items.push(`${filepath}${sep}${file}`);
    });
    return items.flat();

}