# semantic-card-sample

A sample content card using semantic-ui and ReactJS

## Usage

See demo at [http://revolunet.github.io/semantic-card-sample/#/demo](http:/:revolunet.github.io/semantic-card-sample/

```js
const data = {
  title: 'Nikola Tesla',
  subtitle: 'Born in 1856 in Croatia',
  cover: 'https://upload.wikimedia.org/wikipedia/commons/d/d4/N.Tesla.JPG',
  html: '<p>some html</p>',
  images: [{
    url: 'http://newshour-tc.pbs.org/newshour/wp-content/uploads/2013/07/Tesla_colorado.jpg'
  },{
    url: 'https://freewiseman.files.wordpress.com/2015/08/nikola-tesla-1.jpg'
  },{
    url: 'https://upload.wikimedia.org/wikipedia/en/1/16/Teslathoughtcamera.jpeg'
  },{
    url: 'https://upload.wikimedia.org/wikipedia/commons/9/9e/Twain_in_Tesla%27s_Lab.jpg'
  }],
  videos: [{
    url: 'https://www.youtube.com/watch?v=4QPRhTfUhPQ'
  },{
    url: 'https://www.youtube.com/watch?v=77LEblQNI94'
  }]
}

const Demo = () => <SampleCard { ...data }/>

```

