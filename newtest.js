const fbvid = require('./');

const video = 'https://www.facebook.com/1946677218730515/videos/1961592127239024/UzpfSTE1ODM4Njk3Mjg1NTE3OTU6MjExNTM5ODEwMjA2NTYxOQ/';

fbvid.high(video).then(vid => {
    console.log(vid)
});

fbvid.low(video).then(vid => {
	console.log(vid)
});
