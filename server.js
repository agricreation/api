const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');
const {getContentFromYoutubeHkragritechs, getContentFromYoutubeBestappsintamil} = require('./controller/youtube');
app.use(cors());



//Importing controllers
const hkrAgriTechs = require('./controller/hkragritechs');
const GalleryImages = require('./controller/images');
const bestappsintamil = require('./controller/bestappsintamil');
const admin = require('./controller/admin');
app.use('/hkragritechs',hkrAgriTechs);
app.use('/gallery',GalleryImages);
app.use('/bestappsintamil',bestappsintamil);
app.use("/admin", admin)

app.get('/', (req, res) => {
    const filePath = path.resolve(__dirname, './index.html')
    res.sendFile(filePath)
})
app.listen('1000',()=>{
    console.log("Server listening on port 1000");
})

//Refreshing api for hkragritechs
setInterval(()=>{
      getContentFromYoutubeHkragritechs();
      getContentFromYoutubeBestappsintamil();
      console.log("Updating content");
}, 3600000);