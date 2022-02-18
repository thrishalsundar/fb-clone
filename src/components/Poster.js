import { Avatar } from '@mui/material'
import React, { useState } from 'react'
import './Poster.css'
import VideocamIcon from '@mui/icons-material/Videocam';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import { useStateValue } from '../StateProvider';
import db from '../firebase'
import firebase from 'firebase';



const Poster = () => {

    const [{user}, dispatch] = useStateValue();

    const [input, setinput] = useState('')
    const [imageURL, setimageURL] = useState("")

    var handleSubmit=(e)=>{
        e.preventDefault();
        
        db.collection('posts').add({
            txt:input,
            tstamp:firebase.firestore.FieldValue.serverTimestamp(),
            av:user.photoURL,
            uname:user.displayName,
            imgu:imageURL
        })

        setimageURL('')
        setinput('')
    }
    return (
        <div className="poster">
            <div className="poster-top">
                <Avatar src={user.photoURL} />
                <form>
                    <input
                        value={input}
                        onChange={e=> setinput(e.target.value)}
                        className='poster-input' 
                        type="text" 
                        placeholder={`What's on your mind ${user.displayName}?`}
                    />
                    <input className='imgurl'
                        value={imageURL}
                        onChange={e=> setimageURL(e.target.value)}
                        type="text" 
                        placeholder="Image URL(Optional)"
                    />
                </form>
                <button onClick={handleSubmit} type='submit'>Post</button>
            </div>

            <div className="poster-bottom">
                <div className="poster-option">
                    <VideocamIcon style={{color:'red'}}/>
                    <h3>Live video</h3>
                </div>
                <div className="poster-option">
                    <PhotoLibraryIcon style={{color:'green'}}/>
                    <h3>Photo/Video</h3>
                </div>
                <div className="poster-option">
                    <EmojiEmotionsIcon style={{color:'yellow'}}/>
                    <h3>Feeling/Activity</h3>
                </div>
            </div>
        </div>
    )
}

export default Poster