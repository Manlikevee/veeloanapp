import React, { useEffect } from 'react'
import Login from '../components/authentication/login/Login'
import layout from '../components/Landingpage/layout.css'
import Register from '../components/authentication/register/register.css'
import AOS from 'aos'; // Import AOS library
import 'aos/dist/aos.css'; // Import AOS styles


const Userlogin = () => {
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
    <div>

<Login/>

    </div>
  )
}

export default Userlogin