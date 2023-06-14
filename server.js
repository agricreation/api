const express = require('express');
const app = express();
const hkrAgriTechs = require('./controller/hkragritechs');

app.get('/', (req, res) => {
    res.send("welcome to agricreations api");
})
app.use(hkrAgriTechs);

app.listen('1000',()=>{
    console.log("Server listening on port 1000");
})

