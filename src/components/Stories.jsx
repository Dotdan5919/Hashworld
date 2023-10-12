import React from 'react'
import '../css/stories.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faPlusSquare,faArrowCircleLeft,faArrowCircleRight } from '@fortawesome/free-solid-svg-icons'
const Stories = () => {


const MoveLeft=()=>
{
  let storyContainer=document.querySelector('.story-container');
  storyContainer.scrollLeft-=240;



}
const MoveRight=()=>
{

  let storyContainer=document.querySelector('.story-container');

  storyContainer.scrollLeft+=240
  console.log(storyContainer.scrollWidth);

}


  return (
    <div className='story-container-parent'>
    <FontAwesomeIcon icon={faArrowCircleLeft} onClick={MoveLeft} className='leftArrow'/>
    <FontAwesomeIcon icon={faArrowCircleRight} onClick={MoveRight} className='rightArrow' />
    <div className='story-container'>
     
<div className="story">
<div className="image-container">
<img src="https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg?size=626&ext=jpg&uid=R9889535&ga=GA1.1.527719488.1685277690&semt=sph" alt="" srcset="" className='story-image' />

</div>
<div className="story-footer">
<div className="icon">
<FontAwesomeIcon icon={faPlusSquare} /></div>
<h1 className='Story-title'>Create Story</h1>
</div>

</div>
<div className="story">
<div className="profile-img-container">
<img src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?size=626&ext=jpg&uid=R9889535&ga=GA1.2.527719488.1685277690&semt=ais" alt="" />

</div>
<div className="image-container contained">
<img src="https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg?size=626&ext=jpg&uid=R9889535&ga=GA1.1.527719488.1685277690&semt=sph" alt="" srcset="" className='story-image' />



</div>
<div className="contained-footer ">
<div className="name"> Iroha Jenny</div>

</div>



</div>

<div className="story">
<div className="profile-img-container">
<img src="https://img.freepik.com/free-photo/young-woman-with-round-glasses-yellow-sweater_273609-7091.jpg?size=626&ext=jpg&uid=R9889535&ga=GA1.2.527719488.1685277690&semt=ais" alt="" />

</div>
<div className="image-container contained">
<img src="https://images.unsplash.com/photo-1695516516189-47a458340676?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60" alt="" srcset="" className='story-image' />



</div>
<div className="contained-footer ">
<div className="name"> Osakps kola</div>

</div>



</div>
<div className="story">
<div className="profile-img-container">
<img src="https://img.freepik.com/free-photo/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair_285396-896.jpg?size=626&ext=jpg&uid=R9889535&ga=GA1.2.527719488.1685277690&semt=ais" alt="" />

</div>
<div className="image-container contained">
<img src="https://images.unsplash.com/photo-1695349092545-b958d22f9d7c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzOXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" srcset="" className='story-image' />



</div>
<div className="contained-footer ">
<div className="name"> Love john</div>

</div>



</div>
<div className="story">
<div className="profile-img-container">
<img src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?size=626&ext=jpg&uid=R9889535&ga=GA1.2.https://www.freepik.com/free-photo/casual-young-african-man-smiling-isolated-white_20988342.htm#query=profile%20image&position=9&from_view=search&track=ais.1685277690&semt=ais" alt="" />

</div>
<div className="image-container contained">
<img src="https://images.unsplash.com/photo-1695504236952-37306fc71896?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" srcset="" className='story-image' />



</div>
<div className="contained-footer ">
<div className="name"> Paul Obadare</div>

</div>



</div>





    </div>
    </div>
  )
}

export default Stories
