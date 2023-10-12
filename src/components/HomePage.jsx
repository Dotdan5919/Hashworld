import React from 'react';
import NavBar from './NavBar';
import ProfileImage from '../images/sample_profile.jpg';
import Logo from '../assets/logo.png';
import Body from './Body';
import FooterX from './FooterX';
import { DarkThemeToggle, Flowbite } from 'flowbite-react';




const HomePage = () => {
  return (
    
    <div  className='overflow-x-hidden overflow-y-hidden'>

    <div>   


   
    <NavBar/>  
   
    
 <Body/>
 <FooterX/>


    </div>

   
   
 
  


    </div>
  )
}

export default HomePage
