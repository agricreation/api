const express = require('express');
const app = express();
const cors = require('cors');
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

