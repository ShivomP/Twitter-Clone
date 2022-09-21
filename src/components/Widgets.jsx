import React from 'react'
import './css/widgets.css'
import SearchIcon from '@mui/icons-material/Search';
import {
    TwitterTimelineEmbed,
    TwitterShareButton,
    TwitterTweetEmbed,
  } from 'react-twitter-embed'

function Widgets() {
  return (
    <div className='widgets'>
      <div className="widgets__input">
        <SearchIcon className='widgets__search'/>
        <input 
            type="text" 
            placeholder='Search Twitter' 
        />
      </div>
      <div className="widgets__container">
        <h2>What's Happening?</h2>
        
        <TwitterTweetEmbed tweetId={1572553155724058629}/>
        <TwitterTimelineEmbed 
            sourceType="profile"
            screenName="BillGates"
            options={{ height: 600 }}
        />
         <TwitterShareButton
            url={"https://twitter.com/BillGates"}
            options={{text: "Bill Gates is awesome!", via: "BillGates"}}
          />
      </div>
    </div>
  )
}

export default Widgets
