import { Avatar } from '@mui/material'
import React, {forwardRef} from 'react'
import './css/post.css'
import VerifiedIcon from '@mui/icons-material/Verified';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import RepeatIcon from '@mui/icons-material/Repeat';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FileUploadOutlinedIcon from '@mui/icons-material/FileUpload';

const Post = forwardRef(({
    displayName, 
    username, 
    verified, 
    text, 
    image, 
    avatar
    }, ref) => {
  return (
    <div className='post' ref={ref} >
      <div className="post__avatar">
        <Avatar src={avatar}/>
      </div>
      <div className="post__body">
        <div className="post__header">
            <div className="post__header--text">
                <h3>
                    {displayName}
                    <span className="post__header--special">
                        {verified && <VerifiedIcon className="post__badge"/>} @{username}
                    </span>
                </h3>
            </div>
            <div className="post__header--para">
                <p>{text}</p>
            </div>
            <img src={image} alt="" />
            <div className="post__footer">
                <ChatBubbleOutlineIcon fontSize="small"/>
                <RepeatIcon fontSize="small"/>
                <FavoriteBorderIcon fontSize="small"/>
                <FileUploadOutlinedIcon fontSize="small"/>
            </div>
        </div>
      </div>
    </div>
  )
})

export default Post
