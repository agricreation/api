const path = require('path');
const filePath = path.resolve(__dirname, './data/hkragritechs.json');
console.log(filePath);
const hkrAgriTechs = (req, res) => {
    res.sendFile(filePath)
};
module.exports = hkrAgriTechs;

