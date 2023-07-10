
const hkrAgriTechs = ('/hkragritechs', (req,res)=>{
    const jsonData = {
        latestVideos : [
            {id:1, title: "Latest", url:"https://youtube.com/hkragritechsYT"},
            {id:1, title: "Latest", url:"https://youtube.com/hkragritechsYT"},
            {id:1, title: "Latest", url:"https://youtube.com/hkragritechsYT"},
            {id:1, title: "Latest", url:"https://youtube.com/hkragritechsYT"},
            {id:1, title: "Latest", url:"https://youtube.com/hkragritechsYT"},
        ]
    }
    res.json(jsonData);
})

module.exports = hkrAgriTechs;
