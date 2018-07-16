'use strict';

const got = require('got');

const msg = 'Either the video is deleted or it\'s not shared publicly!';
const clearLink = (link)=>{
	if(link.match(',')){
		link = link.split(',')[0];
	}
	link = link.replace(/"/g,'');
	return link;
};

const lowResolution = link => {
	return got(link).then(res => {
		let link = res.body.split('sd_src_no_ratelimit:"')[1].split('",aspect_ratio:1,')[0];
		link = clearLink(link);
		return {
			url: link,
			status: true,
			message: 'link successfully fetched'
		};
	}).catch(err => {
		if (err) {
			err.message = msg;
		}
		return {
			url: '',
			status: false,
			message: msg
		};
	});
};

const highResolution = link => {
	return got(link).then(res => {
		const link = res.body.split('hd_src:"')[1].split('",sd_src:"')[0];
		return {
			url: link,
			status: true,
			message: 'link successfully fetched'
		};
	}).catch(err => {
		if (err) {
			err.message = msg;
		}
		return {
			url: '',
			status: false,
			message: msg
		};
	});
};

exports.low = lowResolution;
exports.high = highResolution;
