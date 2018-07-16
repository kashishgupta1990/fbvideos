import test from 'ava';
import m from '.';

test('fbdl.low()', async t => {
	const video = await m.low('https://www.facebook.com/akshbaghla/videos/510025649412958/');
	t.is(video.url.split('?')[0], video.url.split('?')[0]);
});

test('fbdl.high()', async t => {
	const video = await m.high('https://www.facebook.com/akshbaghla/videos/510025649412958/');

	t.is(video.url.split('?')[0], video.url.split('?')[0]);
});

