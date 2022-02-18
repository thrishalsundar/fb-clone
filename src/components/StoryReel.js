import React from 'react'
import './StoryReel.css'
import Story from './Story'

const StoryReel = () => {
  return (
    <div className="storyReel">
        <Story 
            imgu='https://cdns-images.dzcdn.net/images/artist/f87913efc405d0aded5c668784bdcbe5/500x500.jpg' av='https://upload.wikimedia.org/wikipedia/en/4/48/Vaudevillevillain.jpg' txt='Vik Vaughn'
        />
        <Story 
            imgu='https://m.media-amazon.com/images/I/81WtNgpXA8L._SL1200_.jpg' avi='https://i.scdn.co/image/ab6761610000e5eb6eb6199d9cfa297bfe590e3f' txt='CZARFACE'
        />
    </div>
  )
}

export default StoryReel