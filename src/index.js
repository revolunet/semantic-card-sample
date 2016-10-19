import React from 'react'

import { Card, Icon, Image } from 'semantic-ui-react'

import YouTube from 'react-youtube'
import getYouTubeID from 'get-youtube-id'

const youtubeOptions = {
  width: '100%',
  height: '100%'
}

const SampleCard = ({ cover, title, subtitle, html, images, videos }) => (
  <Card style={ { width: '100%' } }>
    <Image src={ cover }/>
    <Card.Content>
      <Card.Header>
        { title }
      </Card.Header>
      <Card.Meta>
        <span className='date'>
          { subtitle }
        </span>
      </Card.Meta>
      <Card.Description>
        <div dangerouslySetInnerHTML={ { __html: html } }></div>
      </Card.Description>
    </Card.Content>
    <Card.Content>
      <Card.Group itemsPerRow={ 2 }>
        { images.map(img => <Card key={ img.url } raised image={ img.url } />) }
      </Card.Group>
    </Card.Content>
    <Card.Content>
      <Card.Group itemsPerRow={ 1 }>
        { videos.map(vid => <Card key={ vid.url }><YouTube opts={ youtubeOptions } videoId={ getYouTubeID(vid.url) } raised /></Card>) }
      </Card.Group>
    </Card.Content>
  </Card>
)

SampleCard.propTypes = {
  images: React.PropTypes.array,
  videos: React.PropTypes.array
}

SampleCard.defaultProps = {
  images: [],
  videos: []
}

export default SampleCard
