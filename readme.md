

> :link: Easily extract downloadable link of publicly available videos on facebook.

## Install

```
$ npm install --save fbvideos-fast
```

## Usage

```js
const fbvid = require('fbvideos');

const video = 'https://www.facebook.com/9gag/videos/10155721204506840/';

fbvid.low(video).then(vid => {
  console.log(vid)
  // => { url: 'https://video.fpat1-1.fna.fbcdn.net/...mp4?934&oe=5972F363' }

});

fbvid.high(video).then(vid => {
  console.log(vid);
  // => { url: 'https://video.fpat1-1.fna.fbcdn.net/...mp4?934&OE=2kf2lf4g' }
});
```

## API

#### __`fbvid.low(link)`__

- `Returns a` __`url`__ `for` __`low`__ `resolution facebook video.`

__`link`__

`Type :` `string`

#### __`fbvid.high(link)`__

- `Returns a` __`url`__ `for` __`high`__ `resolution facebook video.`

__`link`__

`Type :` `string`

## Thanks to original other
> :link: https://github.com/CodeDotJS/fbvideos
