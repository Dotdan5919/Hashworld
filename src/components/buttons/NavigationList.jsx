import React from 'react';
import HomeIcon from '../icons/home.svg';
import GroupIcon from '../icons/group.svg';
import MessagesIcon from '../icons/message.svg';
import NotificationIcon from '../icons/notification.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faSearch,faNavicon,faMessage,faThumbsUp } from '@fortawesome/free-solid-svg-icons'

import { Link } from 'react-router-dom';

import { Card, Dropdown,Avatar,Badge,Button } from 'flowbite-react';

const NavigationList = () => {

  let NavList=[{Title:"Home",icon:HomeIcon},{Title:"Groups",icon:GroupIcon},{Title:"Messages",icon:MessagesIcon},
  {Title:"Notifications",icon:"NotificationIcon"}]
  
  
  return (

 <ul className='NavList-container' >  
 <div className="input-group searchbar2"> 
 <div className=''> 
 <FontAwesomeIcon icon={faSearch} /></div>
 
 <input type="text" name="" id="" placeholder='Search' className=''/>
 </div>
       <li> <svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_6_164)">
<path d="M16.1717 0.248068C15.9845 0.0879743 15.7463 0 15.5 0C15.2537 0 15.0155 0.0879743 14.8283 0.248068L0 12.9581V27.9001C0 28.7222 0.326606 29.5107 0.907969 30.0921C1.48933 30.6735 2.27783 31.0001 3.1 31.0001H11.3667C11.6407 31.0001 11.9036 30.8912 12.0973 30.6974C12.2911 30.5036 12.4 30.2408 12.4 29.9667V23.7667C12.4 22.9446 12.7266 22.1561 13.308 21.5747C13.8893 20.9933 14.6778 20.6667 15.5 20.6667C16.3222 20.6667 17.1107 20.9933 17.692 21.5747C18.2734 22.1561 18.6 22.9446 18.6 23.7667V29.9667C18.6 30.2408 18.7089 30.5036 18.9027 30.6974C19.0964 30.8912 19.3593 31.0001 19.6333 31.0001H27.9C28.7222 31.0001 29.5107 30.6735 30.092 30.0921C30.6734 29.5107 31 28.7222 31 27.9001V12.9581L16.1717 0.248068Z" fill="black"/>
</g>
<defs>
<clipPath id="clip0_6_164">
<rect width="31" height="31" fill="white"/>
</clipPath>
</defs>
</svg>
  Home </li> 
       <li> <svg width="51" height="27" viewBox="0 0 51 27" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M25.5 15.125C28.9638 15.125 32.0238 15.97 34.51 17.075C36.805 18.115 38.25 20.455 38.25 22.99V26.5H12.75V23.0117C12.75 20.455 14.195 18.115 16.49 17.0967C18.9763 15.97 22.0363 15.125 25.5 15.125ZM8.5 15.6667C10.8375 15.6667 12.75 13.7167 12.75 11.3333C12.75 8.95 10.8375 7 8.5 7C6.1625 7 4.25 8.95 4.25 11.3333C4.25 13.7167 6.1625 15.6667 8.5 15.6667ZM10.9013 18.05C10.115 17.92 9.32875 17.8333 8.5 17.8333C6.39625 17.8333 4.39875 18.2883 2.5925 19.09C1.82264 19.4255 1.16646 19.9843 0.705539 20.697C0.244614 21.4096 -0.000730333 22.2447 1.63305e-06 23.0983V26.5H9.5625V23.0117C9.5625 21.2133 10.0513 19.5233 10.9013 18.05ZM42.5 15.6667C44.8375 15.6667 46.75 13.7167 46.75 11.3333C46.75 8.95 44.8375 7 42.5 7C40.1625 7 38.25 8.95 38.25 11.3333C38.25 13.7167 40.1625 15.6667 42.5 15.6667ZM51 23.0983C51 21.3433 49.98 19.7833 48.4075 19.09C46.5442 18.261 44.533 17.8332 42.5 17.8333C41.6712 17.8333 40.885 17.92 40.0988 18.05C40.9488 19.5233 41.4375 21.2133 41.4375 23.0117V26.5H51V23.0983ZM25.5 0.5C29.0275 0.5 31.875 3.40333 31.875 7C31.875 10.5967 29.0275 13.5 25.5 13.5C21.9725 13.5 19.125 10.5967 19.125 7C19.125 3.40333 21.9725 0.5 25.5 0.5Z" fill="black"/>
</svg>
  Groups</li> 
       <li> <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M24.988 7.96252C24.3356 6.40869 23.3864 4.99636 22.1935 3.80426C21.0041 2.61009 19.5912 1.66065 18.0351 1.00985C16.4411 0.339917 14.7283 -0.00348896 12.9986 2.67235e-05H12.9405C11.1812 0.00873207 9.48006 0.356946 7.8778 1.04177C6.33507 1.69924 4.93548 2.65037 3.75728 3.84199C2.57589 5.03141 1.63762 6.4388 0.994765 7.98573C0.327442 9.59437 -0.0106933 11.32 0.000257733 13.061C0.00898148 15.0748 0.491695 17.0741 1.39315 18.8616V23.2723C1.39315 24.0094 1.99218 24.6071 2.72788 24.6071H7.1421C8.94173 25.5133 10.9276 25.9901 12.9434 26H13.0045C14.7434 26 16.4271 25.6634 18.0148 25.0047C19.563 24.3617 20.9706 23.4233 22.1586 22.2422C23.3566 21.0554 24.2988 19.6683 24.9589 18.1217C25.6423 16.5199 25.9912 14.8165 25.9999 13.058C26.0057 11.2909 25.6626 9.57591 24.988 7.96252ZM7.19444 14.3929C6.42675 14.3929 5.80155 13.769 5.80155 13C5.80155 12.231 6.42675 11.6072 7.19444 11.6072C7.96213 11.6072 8.58733 12.231 8.58733 13C8.58733 13.769 7.96504 14.3929 7.19444 14.3929ZM12.9986 14.3929C12.2309 14.3929 11.6057 13.769 11.6057 13C11.6057 12.231 12.2309 11.6072 12.9986 11.6072C13.7663 11.6072 14.3915 12.231 14.3915 13C14.3915 13.769 13.7663 14.3929 12.9986 14.3929ZM18.8028 14.3929C18.0351 14.3929 17.4099 13.769 17.4099 13C17.4099 12.231 18.0351 11.6072 18.8028 11.6072C19.5705 11.6072 20.1957 12.231 20.1957 13C20.1957 13.769 19.5705 14.3929 18.8028 14.3929Z" fill="black"/>
</svg>
<Dropdown dismissOnClick={false} className='w-90  ' renderTrigger={() => <h1 className=''> Messages </h1> }>


<h1 className='m-5 font-bold'>Messages</h1>

<Badge color="gray" className='w-10 m-5'> New </Badge>
<Dropdown.Item className='relative  '> 
<Avatar
alt="avatar of Jese"
img="https://images.unsplash.com/photo-1695033023233-6aae57417ddb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDF8SnBnNktpZGwtSGt8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
rounded
className='m-2'
/>
<div className="w-5  h-5 bg-yellow-100 rounded-full  absolute left-14 bottom-5 ">
<FontAwesomeIcon icon={faMessage} className='text-xs' />
</div>
<div className='flex flex-wrap gap-10 font  justify-between w-80 ml-2'>
<div className="text-group align-start gap-1  ml-2 flex flex-col  w-70 ">  
    <h1 className="font-bold text-left"> James Akande </h1>
    
    <div className="text-left flex flex-col">   
    <h3 className=''>hi </h3>
    <small>1day</small>
    
    </div>
    
    
    </div>


<Button color='yellow' className='block'> View </Button>
</div>
</Dropdown.Item>
</Dropdown>
   </li> 
       <li> <svg width="18" height="22" viewBox="0 0 18 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.645 19.4437C5.86103 20.1824 6.30417 20.8302 6.90858 21.2907C7.513 21.7513 8.24645 22 9 22C9.75355 22 10.487 21.7513 11.0914 21.2907C11.6958 20.8302 12.139 20.1824 12.355 19.4437H5.645ZM0 18.4203H18V15.3503L16 12.2802V7.16345C16 6.22273 15.8189 5.29123 15.4672 4.42212C15.1154 3.55301 14.5998 2.76331 13.9497 2.09813C13.2997 1.43294 12.5281 0.905282 11.6788 0.545285C10.8295 0.185288 9.91925 0 9 0C8.08075 0 7.17049 0.185288 6.32122 0.545285C5.47194 0.905282 4.70026 1.43294 4.05025 2.09813C3.40024 2.76331 2.88463 3.55301 2.53284 4.42212C2.18106 5.29123 2 6.22273 2 7.16345V12.2802L0 15.3503V18.4203Z" fill="black"/>
</svg>
<Dropdown dismissOnClick={false} className='w-90  ' renderTrigger={() => <h1 className=''> Notifications </h1> }>
<h1 className='m-5 font-bold'>Notifications</h1>
  
<Badge color="gray" className='w-10 m-5'> New </Badge>
<Dropdown.Item className='relative  '> 
<Avatar
alt="avatar of Jese"
img="https://images.unsplash.com/photo-1695033023233-6aae57417ddb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDF8SnBnNktpZGwtSGt8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
rounded
className='m-2'
/>
<div className="w-5  h-5 bg-yellow-100 rounded-full  absolute left-14 bottom-5 ">
<FontAwesomeIcon icon={faThumbsUp} className='text-xs' />
</div>
<div className='flex flex-wrap gap-10 justify-between w-80 ml-2'>
Tope Alabi Liked Your Post

<Button color='yellow' className='block'> View </Button>
</div>
</Dropdown.Item>

<Dropdown.Item className='relative flex align-start'> 
<Avatar
alt="avatar of Jese"
img=""
rounded
className='m-2 '
/>
<div className="w-5  h-5 bg-yellow-100 rounded-full  absolute left-14 bottom-5 ">
<FontAwesomeIcon icon={faMessage} className='text-xs' />
</div>
<div className='flex text-left flex-wrap gap-10 justify-between w-80 ml-2'>
<h4 className='w-50'> John Commented on  Your Status </h4>
 

<Button color='yellow' className='block h-10'> View </Button>
</div>
</Dropdown.Item>


<h1 className='m-5 font-bold'>Friend Request</h1>
<Dropdown.Item className='relative flex align-start'>
<Avatar
alt="avatar of Jese"
img=""
rounded
className='m-2 '
/>
<div className="w-5  h-5 bg-yellow-100 rounded-full  absolute left-14 bottom-5 ">
<FontAwesomeIcon icon={faMessage} className='text-xs' />
</div>
<div className='flex text-left flex-wrap gap-2 justify-between w-80 ml-2'>
<h4 className='w-80'>Tolu tope sent you a friend request </h4>
 
<div className="flex gap-2">  
<Button color='yellow' className='block h-10'>Accept</Button>
<Button color='gray ' className='block h-10   ' >Decline</Button>
</div>
</div>




</Dropdown.Item>

</Dropdown>
 </li> 

 

       </ul>
      
   
   

   
  )
}

export default NavigationList
