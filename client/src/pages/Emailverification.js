import React, { useEffect, useState } from 'react';
import AOS from 'aos'; // Import AOS library
import 'aos/dist/aos.css'; // Import AOS styles
import { toast, ToastContainer } from 'react-toastify';
import axios from 'axios';
import Login from '../components/authentication/login/Login';
import { Link } from 'gatsby';

const Emailverification = () => {
    useEffect(() => {
        // Initialize AOS with your desired options
        AOS.init({
          duration: 1200,
          offset: 120,
          easing: 'ease-in-out',
          delay: 100,
          once: true,
          anchorPlacement: 'center',
        });
      }, []);



  return (
    <Login typeofpage={'verification'}> 
    <div>
    <div className="logintitle">
    
    To complete your registration and access our services, please click the verification link we've sent to your email address. 
      </div>
    <div className="loginform">
        <div className="logincontent">
          <div className="loginflex">
            <label htmlFor="Username">Verification Code</label>
            <input
              type="text"
              name="username"
              id="id_username"
              placeholder="Enter Your Email Username"
            />
     
          </div>

          <div className="loginflex">
            <button type="submit">
                Verify Email
            </button>
          </div>

    


          <div className="logintitle">
           Resend Verification Code{" "}
            <Link to="/Userlogin">Login</Link>{" "}
          </div>
        </div>
      </div>

    </div>

    </Login>
  )
}

export default Emailverification