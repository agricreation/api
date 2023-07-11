const express = require('express');
const app = express();
const cors = require('cors');
const {getContentFromYoutubeHkragritechs} = require('./controller/youtube');
app.use(cors());

//Importing controllers
const hkrAgriTechs = require('./controller/hkragritechs');
const GalleryImages = require('./controller/images')
app.use('/hkragritechs',hkrAgriTechs);
app.use('/gallery',GalleryImages);

app.get('/', (req, res) => {
    res.send("welcome to agricreations api");
})
app.listen('1000',()=>{
    console.log("Server listening on port 1000");
})

  setInterval(()=>{
      getContentFromYoutubeHkragritechs();
      console.log("Updating content");
}, 3600000);