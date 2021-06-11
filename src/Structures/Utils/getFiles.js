const fs = require('fs');
const path = require('path');

/**
 * @param {array} filepath to folder to tranverse files
 * @returns {array} all files in folder including subfolders
 */
function getFiles(filepath) {
  const items = [];
  const files = fs.readdirSync(filepath);
  const sep = path.sep;
  files.forEach((file) => {
    const stats = fs.statSync(`${filepath}${sep}${file}`);
    if (stats.isDirectory()) return items.push(getFiles(`${filepath}${sep}${file}`));
    items.push(`${filepath}${sep}${file}`);
  });
  return items.flat();
}

module.exports = getFiles;
