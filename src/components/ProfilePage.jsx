import React from 'react';
import NavBar from './NavBar';
import ProfileImage from '../images/sample_profile.jpg';
import Logo from '../assets/logo.png';
import Body from './Body';
import FooterX from './FooterX';
import { DarkThemeToggle, Flowbite } from 'flowbite-react';
import { Card, Dropdown,Avatar,Badge,Button } from 'flowbite-react';
import {  faSearch,faNavicon,faMessage,faThumbsUp,faUser,faCamera,faBriefcase,faGraduationCap,faLocation,faHeart,faHouse} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PostComponent from './PostComponent';
import PostComponentTwo from './PostComponentTwo';





const HomePage = () => {
  return (
    
    <div className='overflow-x-hidden overflow-y-hidden' >

    


   
    <NavBar/>  
   
    <Card className=' w-full h-full mx-auto shadow-none border-none'>
<div className=" w-full   relative ">

<div className="img-container w-full   md:h-96 sm:h-full  overflow-hidden  ">

<img src="https://images.unsplash.com/photo-1696986291642-54225330b8d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" className='w-full h-full' srcset=""  />



</div>
<div className='flex justify-between mt-4 max-[417px]:flex-wrap gap-2'>
<div className='absolute md:top-80 sm:top-80 flex justify-end sm:top-100'>
<div className=" w-40 h-40 rounded-full bg-slate-100 ring-8 ring-white overflow-hidden object-cover  ">

<img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"  alt=""  
className='hover:opacity-80'/>

</div>
<div className="w-9  h-9 bg-yellow-100 rounded-full  absolute  bottom-0 p-2 ">
<FontAwesomeIcon icon={faCamera} className='text-lg  ' />
</div>

</div>
<div  className='ml-44 flex flex-col gap-2'>  
<h1 className=' font-bold text-2xl'>Ighodaro Osakpolo daniel</h1>
<div>  
<p   className='text-sm'>2.k friends . 645 following</p>
</div>
</div>

<Button color='gray' className='h-full max-[417px]:ml-40  '> Edit Profile</Button>
</div>











</div>

<hr className='mt-5'/>

<div>

<ul className='flex flex-row gap-10 mt-2'>
  <li className='flex flex-col'>Posts<span className='w-full h-1 bg-yellow-300'></span></li>
  <li>About</li>
  <li>Friends</li>
  <li>Photos</li>
</ul>


/


<div className="flex gap-8  max-[900px]:flex-wrap md:flex-nowrap mt-5">  
<div className='flex flex-col gap-2 w-full'>  
<Card className='w-full sm:w-full '>
<h1 className="font-bold text-2xl">Intro</h1>
<p className="text-sm">i amd a God chaser</p>
<Button color='gray' className='bg-yellow-100 border-gray-100 shadow-lg hover:text-yellow-100'>  Edit Bio</Button>


<ul className='flex flex-col gap-4'>
  <li className='flex items-center justify-start text-xl font-light'><FontAwesomeIcon icon={faBriefcase} className=''/>Works at KDI</li>
  <li className='flex items-center justify-start text-xl font-light'><FontAwesomeIcon icon={faGraduationCap} className=''/>Studied at GBCC</li>
  <li className='flex items-center justify-start text-xl font-light'><FontAwesomeIcon icon={faHouse} className=''/>Lives at Abuja</li>
  <li className='flex items-center justify-start text-xl font-light'><FontAwesomeIcon icon={faLocation} className=''/>From Benin City</li>
  <li className='flex items-center justify-start text-xl font-light'><FontAwesomeIcon icon={faHeart} className=''/>Single</li>
  <li className='flex items-center justify-start text-xl font-light'><FontAwesomeIcon icon={faUser} className=''/>30 friends</li>
  <Button color='gray' className='bg-yellow-100 border-gray-100 shadow-lg hover:text-yellow-100'>  Edit Details</Button>
</ul>


</Card>


<Card className=''>
<div className='flex justify-between'> 
<h1 className="font-bold">Photos</h1>

<a>See all Photos</a>
</div>

<div className="flex flex-wrap gap-1 items-center justify-center w-full">
  <div className='w-32 h-32 overflow-hidden'><img src="https://images.unsplash.com/photo-1579273168832-1c6639363dad?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGljdHVyZXxlbnwwfHwwfHx8MA%3D%3D" alt="" className=''  srcset="" /></div>
  <div className='w-32 h-32 overflow-hidden'><img src="https://images.unsplash.com/photo-1579273168832-1c6639363dad?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGljdHVyZXxlbnwwfHwwfHx8MA%3D%3D" alt="" className='' srcset="" /></div>
  <div className='w-32 h-32 overflow-hidden'><img src="https://images.unsplash.com/photo-1579273168832-1c6639363dad?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGljdHVyZXxlbnwwfHwwfHx8MA%3D%3D" alt="" className='' srcset="" /></div>
  <div className='w-32 h-32 overflow-hidden'><img src="https://images.unsplash.com/photo-1579273168832-1c6639363dad?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGljdHVyZXxlbnwwfHwwfHx8MA%3D%3D" alt="" className='' srcset="" /></div>
  <div className='w-32 h-32 overflow-hidden'><img src="https://images.unsplash.com/photo-1579273168832-1c6639363dad?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGljdHVyZXxlbnwwfHwwfHx8MA%3D%3D" alt="" className='' srcset="" /></div>
  <div className='w-32 h-32 overflow-hidden'><img src="https://images.unsplash.com/photo-1579273168832-1c6639363dad?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGljdHVyZXxlbnwwfHwwfHx8MA%3D%3D" alt="" className='' srcset="" /></div>
  <div className='w-32 h-32 overflow-hidden'><img src="https://images.unsplash.com/photo-1579273168832-1c6639363dad?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGljdHVyZXxlbnwwfHwwfHx8MA%3D%3D" alt="" className='' srcset="" /></div>
  <div className='w-32 h-32 overflow-hidden'><img src="https://images.unsplash.com/photo-1579273168832-1c6639363dad?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGljdHVyZXxlbnwwfHwwfHx8MA%3D%3D" alt="" className='' srcset="" /></div>
  <div className='w-32 h-32 overflow-hidden'><img src="https://images.unsplash.com/photo-1579273168832-1c6639363dad?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGljdHVyZXxlbnwwfHwwfHx8MA%3D%3D" alt="" className='' srcset="" /></div>
</div>




</Card>


</div>
<div className='w-full flex flex-col gap-2  '>

<PostComponent/>

<PostComponentTwo img="https://plus.unsplash.com/premium_photo-1690552679182-dc23afba3c82?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3Mnx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" ProfilePic="https://images.unsplash.com/photo-1695567034270-3f30aaf05df7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzOXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" Name="john jax" />

<PostComponentTwo img="https://images.unsplash.com/photo-1695607379409-bfa72abf6afa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" ProfilePic="https://images.unsplash.com/photo-1682686581220-689c34afb6ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2Nnx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" Name="tope Love"  />
<PostComponentTwo img="https://images.unsplash.com/photo-1695414414330-f1d2fa383d76?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1M3x8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" ProfilePic="https://images.unsplash.com/photo-1695642579133-d41f36bcca61?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0OXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" Name="Ighodaro Stephen"  />



</div>
</div>



</div>





</Card>







 <FooterX/>


    

   
   
 
  


    </div>
  )
}

export default HomePage
