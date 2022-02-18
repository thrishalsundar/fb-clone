import React, { useEffect, useState } from 'react'
import './Feed.css'
import Post from './Post'
import Poster from './Poster'
import StoryReel from './StoryReel'
import db from '../firebase'

const Feed = () => {
  const [posts, setposts] = useState([]);

  useEffect(() => {
    db.collection('posts')
      .orderBy('tstamp','desc')
      .onSnapshot(snapshot=>(
      setposts(snapshot.docs.map(doc=>({ id: doc.id, data:doc.data()})))
    ))
  }, [])
  

  return (
    <div className="feed">
        {/* StoryReel */}
        <StoryReel />
        {/* Poster */}
        <Poster />

        {posts.map((post)=>(
          <Post 
            key={post.data.id}
            av={post.data.av}
            txt={post.data.txt}
            tstamp={post.data.tstamp}
            uname={post.data.uname}
            imgu={post.data.imgu}
          />
        ))}
    </div>
    
  )
}

export default Feed