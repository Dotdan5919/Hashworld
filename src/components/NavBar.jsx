import React from 'react'
import ProfileImage from '../images/sample_profile.jpg';
import Logo from '../assets/logo.png';
import '../css/NavBar.css';
import NavigationList from './buttons/NavigationList';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faSearch,faNavicon } from '@fortawesome/free-solid-svg-icons';


import { Dropdown } from 'flowbite-react';



const NavBar = () => {


const ShowNav=()=>
{

  let Nav=document.querySelector('.NavList-container');
  if(Nav.style.right=="-500px")
  {
    Nav.style.right="0";
    // Nav.style.display="flex";
    
   


  }
  else{

    // Nav.style.display="none";
    Nav.style.right="-500px";

  }


}


  return (

    <div className='Navbar-parent'>
    
    <div className='Navbar-container '>
    


    <div className="logo-searchbar ">
    <img src={Logo} alt="" srcset="" />
    <div className="input-group searchbar"> 
    <div className='search'> 
    <FontAwesomeIcon icon={faSearch} /></div>
    
    <input type="text" name="" id=""  className=''/>
    </div>
</div>

   

<NavigationList/>



    <div className="profile-container">
    <h1>Daniel</h1>
    <div className='profile-image-container'>  

<Dropdown dismissOnClick={false} className='w-100' renderTrigger={() => <img src={ProfileImage} alt="" />}>
      <Dropdown.Item>Profile</Dropdown.Item>
      
      <Dropdown.Item>Sign out</Dropdown.Item>
    </Dropdown>


</div>
<FontAwesomeIcon onClick={ShowNav} icon={faNavicon}  className='nav'/>


    </div>

    </div>
    </div>
   
  )
}

export default NavBar
