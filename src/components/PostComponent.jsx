import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faVideoCamera,faPhotoFilm,faSmile } from '@fortawesome/free-solid-svg-icons'

import '../css/PostComponent.css';
import ProfileImage from '../images/sample_profile.jpg';

const PostComponent = () => {
  return (
  <div className='Post-holder w-full'>   
    <div className='Post w-full card'>
<div className="header">  
    <div className="profile-image-container">
    
    <img src={ProfileImage} alt="" />
    </div>


    <input type="text" placeholder="What's on your mind, Ighodaro ?" />

  
    </div>
<hr />
    <div className="footer">
    
        <div className="live-video">
        <FontAwesomeIcon icon={faVideoCamera} />
        Live Video</div>
        <div className="photo"> <FontAwesomeIcon icon={faPhotoFilm} />Photo</div>
        <div className="feelings">
        <FontAwesomeIcon icon={faSmile} />
         <h1>Feeling/Activity</h1></div>
    </div>




    </div>
    </div>
  )
}

export default PostComponent
