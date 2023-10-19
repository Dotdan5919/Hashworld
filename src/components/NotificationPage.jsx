import React from 'react';
import NavBar from './NavBar';
import ProfileImage from '../images/sample_profile.jpg';
import Logo from '../assets/logo.png';
import Body from './Body';
import FooterX from './FooterX';
import { DarkThemeToggle, Flowbite } from 'flowbite-react';
import { Card, Dropdown,Avatar,Badge,Button } from 'flowbite-react';
import {  faSearch,faNavicon,faMessage,faThumbsUp,faUser} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';





const NotificationPage = () => {
  return (
    
    <div className='overflow-x-hidden overflow-y-hidden' >

    


   
    <NavBar/>  
   
    
 <Card className="xl:w-1/2 mx-auto">
 
<h1>Notifications</h1>
<div className="notification-status flex gap-2"> 
<Badge color="gray" className='w-10 '> All </Badge>
<Badge color="gray" className='w-15'> Unread </Badge>
</div>

 

<div className='flex hover:bg-gray-100 w-100 py-7' >  
<div className='relative'>
<Avatar
alt="avatar of Jese"
img="https://images.unsplash.com/photo-1695033023233-6aae57417ddb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDF8SnBnNktpZGwtSGt8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
rounded
className='m-2'
/>
<div className="w-5  h-6 bg-yellow-100 rounded-full  absolute left-10 bottom-0 pb-2 pl-1 ">
<FontAwesomeIcon icon={faMessage} className='text-xs  ' />
</div>


</div>
<div className="text m-2 ">
<h1 className='xl:text-2xl'>Tope wrote commented on your post</h1>
</div>
</div>






<h1>Friend requests</h1>


<div className='flex hover:bg-gray-100 w-100 py-7' >  
<div className='relative'>
<Avatar
alt="avatar of Jese"
img="https://images.unsplash.com/photo-1695033023233-6aae57417ddb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDF8SnBnNktpZGwtSGt8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
rounded
className='m-2'
/>
<div className="w-5  h-6 bg-yellow-100 rounded-full  absolute left-10 bottom-14 pb-2 pl-1 ">
<FontAwesomeIcon icon={faUser} className='text-xs  ' />
</div>


</div>
<div className="text m-2 ">
<h1 className='xl:text-2xl'>Paul sent you a friend request</h1>
<div className="flex gap-2 my-2">  
<Button color='yellow' className='text-dark-100 bg-dark-200 ' >Confirm</Button>
<Button color='gray' className='hover:border-black-200'>Delete</Button>
</div>
</div>
</div>













 
 </Card>







 <FooterX/>


    

   
   
 
  


    </div>
  )
}

export default NotificationPage
