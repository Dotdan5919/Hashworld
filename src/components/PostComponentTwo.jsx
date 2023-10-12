import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faThumbsUp,faComment,faShare } from '@fortawesome/free-solid-svg-icons'

import '../css/PostComponent.css';
import ProfileImage from '../images/sample_profile.jpg';

const PostComponentTwo = (props) => {

   return (
  <div className='Post-holder'>   
    <div className='Post Post-2'>
<div className=" Post-Two-Header">  
<div className='img-text'>  
    <div className="profile-image-container">
    
    <img src={props.ProfilePic} alt="" />
    </div> 
    <div> 
    <h1>{props.Name}</h1>
    <p>Semptember 3rd 2024 at 11am</p>
    </div>
    </div>
   


  
    </div>
<div className="post-body">


<img src={props.img} alt="" width={"100%"} />
<div className="body-footer">   
<div className="likes"> 
<FontAwesomeIcon icon={faThumbsUp} />
<FontAwesomeIcon icon={faComment} />
<p>You,Tolu and 12 others</p>
</div>

<div className="comments">
<p>30 Comments</p>
<p>2 Shares</p>

</div>

</div>

</div>

<hr />
    <div className="footer">
    
        <div className="live-video">
        <FontAwesomeIcon icon={faThumbsUp} />
        Like</div>
        <div className="photo">
         <FontAwesomeIcon icon={faComment} />
         Comment</div>
        <div className="feelings">
        <FontAwesomeIcon icon={faShare} />
         <h1>Share</h1></div>
    </div>




    </div>
    </div>
  )
}

export default PostComponentTwo
