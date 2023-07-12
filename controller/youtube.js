var fs = require('fs');
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });
const api = process.env.API_KEY;
let channelIdHkrAgriTechs = "UCSjSmjY9cEI_ib-NrBElVXw";
let channelIdBestAppsIntamil = "UCdrrGvlDqvXo4H0aH8Rh8wQ";
let apiKey =api;
let maxResult = 10;
const hkragritechs = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=${channelIdHkrAgriTechs}&maxResults=${maxResult}&order=date&key=${apiKey}`;
const bestappsintamil = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=${channelIdBestAppsIntamil}&maxResults=${maxResult}&order=date&key=${apiKey}`;

async function getContentFromYoutubeHkragritechs() {
    const response = await fetch(hkragritechs);
    const data = await response.json();
    fs.writeFile('./controller/data/hkragritechs.json', JSON.stringify(data), (err) => {
      if (err) throw err;
      console.log('Data saved!');
    });
}
async function getContentFromYoutubeBestappsintamil() {
    const response = await fetch(bestappsintamil);
    const data = await response.json();
    fs.writeFile('./controller/data/bestappsintamil.json', JSON.stringify(data), (err) => {
      if (err) throw err;
      console.log('Data saved!');
    });
}
  module.exports ={
    getContentFromYoutubeHkragritechs,
    getContentFromYoutubeBestappsintamil
  };