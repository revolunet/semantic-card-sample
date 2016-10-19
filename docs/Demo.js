import React from 'react'

import SampleCard from '../src'

const data = {
  title: 'Nikola Tesla',
  subtitle: 'Born in 1856 in Croatia',
  cover: 'https://upload.wikimedia.org/wikipedia/commons/d/d4/N.Tesla.JPG',
  html: '<p>Nikola Tesla was a Serbian-American inventor, electrical engineer, mechanical engineer, physicist, and futurist best known for his contributions to the design of the modern alternating current (AC) electricity supply system.</p><p>Tesla gained experience in telephony and electrical engineering before emigrating to the United States in 1884 to work for Thomas Edison in New York City. He soon struck out on his own with financial backers, setting up laboratories and companies to develop a range of electrical devices. His patented AC induction motor and transformer were licensed by George Westinghouse, who also hired Tesla for a short time as a consultant. His work in the formative years of electric-power development was involved in a corporate alternating current/direct current "War of Currents" as well as various patent battles. He became a naturalized US citizen in 1891.</p><p>Tesla went on to pursue his ideas of wireless lighting and electricity distribution in his high-voltage, high-frequency power experiments in New York and Colorado Springs and made early (1893) pronouncements on the possibility of wireless communication with his devices. He tried to put these ideas to practical use in an ill-fated attempt at intercontinental wireless transmission, his unfinished Wardenclyffe Tower project. In his lab, he also conducted a range of experiments with mechanical oscillators/generators, electrical discharge tubes, and early X-ray imaging. He also built a wireless controlled boat, one of the first ever exhibited.</p>',
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


const Demo = () => {
  return (<div>
            <SampleCard { ...data } />
          </div>)
}


export default Demo
