var fs = require('fs');
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });
const api = process.env.API_KEY;
let channelId = "UCdrrGvlDqvXo4H0aH8Rh8wQ";
let apiKey =api;
let maxResult = 10;
const apiUrl = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=${channelId}&maxResults=${maxResult}&order=date&key=${apiKey}`;
async function getContentFromYoutubeHkragritechs() {
    const response = await fetch(apiUrl);
    const data = await response.json();
    fs.writeFile('./controller/data/hkragritechs.json', JSON.stringify(data), (err) => {
      if (err) throw err;
      console.log('Data saved!');
    });
}
  module.exports ={
    getContentFromYoutubeHkragritechs,
  };