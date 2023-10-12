import React from 'react'
import { Link } from 'react-router-dom';

const buttonLogin = (props) => {

    let name=props.name;
    let link=props.link;

  const Linker=()=>
  {

document.querySelector("#link").click();


  }
  return (
    
      
     <button className="btn btn-yellow" onClick={Linker} >  <Link to={link} id='link'> </Link>   {name}   </button> 
     

   
  )
}

export default buttonLogin
