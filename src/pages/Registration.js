import React, { useEffect } from 'react'
import Register from '../components/authentication/register/register.css'
import AOS from 'aos'; // Import AOS library
import 'aos/dist/aos.css'; // Import AOS styles

const Registration = () => {
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
        
        <Register/>
    
    </div>

  )
}

export default Registration