const path = require('path');
const filePath = path.resolve(__dirname, './data/bestappsintamil.json');
console.log(filePath);
const bestappsintamil = (req, res) => {
    res.sendFile(filePath)
};
module.exports = bestappsintamil;

