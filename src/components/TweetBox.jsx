import { Avatar, Button } from '@mui/material'
import React, { useState } from 'react'
import './css/tweetbox.css'
import db from './firebase'
import firebase from 'firebase/compat/app'

function TweetBox() {
    const [tweetMessage, setTweetMessage] = useState('')
    const [tweetImage, setTweetImage] = useState('')

    const sendTweet = event => {
        event.preventDefault()

        db.collection('posts').add({
            displayName: 'Shivom Paudel',
            username: 'Sh1v0m',
            verified: true,
            text: tweetMessage, 
            image: tweetImage,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            avatar: "https://shivomruns.weebly.com/uploads/1/2/1/4/121457582/img-1481_orig.jpg"
        })

        setTweetMessage("")
        setTweetImage("")
    }

  return (
    <div className='tweetbox'>
        <form>
            <div className="tweet__input">
                <Avatar src="https://shivomruns.weebly.com/uploads/1/2/1/4/121457582/img-1481_orig.jpg" />
                <input 
                    required
                    onChange={event => setTweetMessage(event.target.value)}
                    value={tweetMessage}
                    type="text" 
                    placeholder="What's Happening" 
                />
                <input 
                    className='tweet__input-img'
                    type="text" 
                    placeholder="Optional: Add Image" 
                    onChange={event => setTweetImage(event.target.value)}
                    value={tweetImage}
                />
                <Button onClick={sendTweet} type="submit" className='tweet__btn' >Tweet</Button>
            </div>
        </form>
      
    </div>
  )
}

export default TweetBox
