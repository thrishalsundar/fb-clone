import { Avatar } from '@mui/material'
import React from 'react'
import './Post.css'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ModeCommentIcon from '@mui/icons-material/ModeComment';
import ShareIcon from '@mui/icons-material/Share';


const Post = ({ av,imgu,uname,tstamp,txt}) => {
  return (
    <div className="post">
        <div className="post-top">
            <Avatar src={av} className='post-av'/>
            <div className="post-topInfo">
                <h3>{uname}</h3>
                <p>{new Date(tstamp?.toDate()).toUTCString()}</p>
            </div>
        </div>
        <div className="post-bottom">
            <p>{txt}</p>
        </div>
        <div className="post-image">
            <img src={imgu} alt="" />
        </div>
        <div className="post-options">
            <div className="post-option">
                <FavoriteBorderIcon />
                <p>Like</p>
            </div>
            <div className="post-option">
                <ModeCommentIcon />
                <p>Comment</p>
            </div>
            <div className="post-option">
                <ShareIcon />
                <p>Share</p>
            </div>
        </div>
    </div>
  )
}

export default Post