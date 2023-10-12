import React from 'react';
import Logo from '../assets/logo.png';
import Google from '../assets/goggle.png';

import '../css/login.css';
import ButtonLogin from './buttons/ButtonLogin';
import LoginImage from '../images/Frame 1.jpg';
import { Outlet, Link } from "react-router-dom";




const LoginPage = () => {
  return (
    
    <div className='container loginContainerHolder '>


    <div className="image-holder  " width="">
    
    <img src={LoginImage} alt="" />
    </div>

    <div className="container loginHolder ">
    <div className="logo-group ">
    <img src={Logo} alt="" />
    <h1>Sign in Hash world</h1>
    </div>
<div className="btn btn-white ">
<img src={Google} alt="" />
Sign in with Google

</div>

<div className="group-signin"><hr  /><h3>or sign in with email</h3>
<hr />
</div>


<div className="input-group">
<h3 className=''>Username or Email</h3>
<input type="text" className=' ' />
</div>

<div className="input-group">
<div>  
<h3>Password</h3>
<p>Forgot?</p></div>
<input type="text" />

</div>

<ButtonLogin name="Sign in" link="/home"/>

<div className='footer-text'>  
<h3> <Link to="/register">Don't have an account?Sign up</Link></h3>
</div>






    </div>



    </div>
  )
}

export default LoginPage
