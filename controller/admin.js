const {getContentFromYoutubeHkragritechs, getContentFromYoutubeBestappsintamil} = require('./youtube');


const admin = ("/", (req,res)=>{
    try {
        getContentFromYoutubeBestappsintamil();
        getContentFromYoutubeHkragritechs();
    } catch (error) {
        console.log(error);
    }
    res.send("Updating api....");
    console.log("api updated");
})

module.exports = admin;