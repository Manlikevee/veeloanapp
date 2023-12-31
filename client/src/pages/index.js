import React, { useEffect } from 'react'
import Landingpage from '../components/Landingpage/Landingpage'
import AOS from 'aos'; // Import AOS library
import 'aos/dist/aos.css'; // Import AOS styles
import "../components/Landingpage/layout.css";
const IndexPage = () => {
  useEffect(() => {
    document.body.classList.add('myhome');
    document.body.classList.remove('veehome');
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
<Landingpage/>
)
};

export default IndexPage;