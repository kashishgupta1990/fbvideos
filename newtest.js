const fbvid = require('./');

const video = 'https://www.facebook.com/akshbaghla/videos/510025649412958/';

fbvid.low(video).then(vid => {
    console.log(vid)
    // => { url: 'https://video.fpat1-1.fna.fbcdn.net/...mp4?934&oe=5972F363' }

});
