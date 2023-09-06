import React, { useEffect } from 'react'
import AOS from 'aos'; // Import AOS library
import 'aos/dist/aos.css'; // Import AOS styles
import Dashboardheader from './Dashboardheader/Dashboardheader'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import { Helmet } from 'react-helmet';
import Profileupdatepopup from '../Utility/Profileupdatepopup';
function Dashboardlayout({ children }) {
    useEffect(() => {
      document.body.classList.add('veehome');
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
    <>
        <Helmet>
    <link rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
  
    <meta name="description" content="This is a description of my page." />
    {/* Add more head tags here */}
  </Helmet>   
  <ToastContainer/>
  <Dashboardheader/>

  <div>
  <br />
  <br />
  </div>
  <div className="container dashcontainer">
   
{children}

</div>
</>
  )
}

export default Dashboardlayout