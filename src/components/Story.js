import { Avatar } from '@mui/material'
import React from 'react'
import './Story.css'

const Story = ({imgu, av, txt}) => {
  return (
    <div style={{backgroundImage: `url(${imgu})`}} className="story">
        <Avatar className='story-avatar' src={av} />
        <h4>{txt}</h4>
    </div>
  )
}

export default Story