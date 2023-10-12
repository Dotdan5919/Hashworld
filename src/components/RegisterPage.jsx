import React from 'react';
import Logo from '../assets/logo.png';
import Google from '../assets/goggle.png';
import '../css/login.css';
import ButtonLogin from './buttons/ButtonLogin';
import RegisterImage from '../images/Frame 6.png';
import { Outlet, Link } from "react-router-dom";




const LoginPage = () => {
  return (
    
    <div className='container loginContainerHolder '>


    <div className="reg-image-holder " width="">
    
    <img src={RegisterImage} alt="" />
    </div>

    <div className="container loginHolder ">
    <div className="logo-group ">
    <img src={Logo} alt="" />
    <h1>Signup Hash world</h1>
    </div>


<div className="group-signin"><hr  /><h3>or sign up with email</h3>
<hr />
</div>


<div className="input-2group">
<div className="input-group">  
<h3 className=''>Name</h3>
<input type="text" className=' ' />
</div>
<div className="input-group">  
<h3 className=''>Username</h3>
<input type="text" className=' ' />

</div>
</div>
<div className="input-group">
<div>  
<h3>Email</h3>
<p>Forgot?</p></div>
<input type="text" />

</div>

<div className="input-group">
<div>  
<h3>Password</h3>
<p></p></div>
<input type="text" />

</div>
<div className="input-group">
<div>  
<h3>Re-Password</h3>
<p></p></div>
<input type="text" />

</div>
<ButtonLogin name="Create Account" link="/home" />




<div className="btn btn-white">
<img src={Google} alt="" />
Sign up with Google

</div>
<div className='footer-text'>  
<h3> <Link to="/">Already Registered, Sign in</Link></h3>
</div>



    </div>



    </div>
  )
}

export default LoginPage
