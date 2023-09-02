import React from 'react'
import { Link } from "gatsby"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Helmet } from 'react-helmet';
import image from "../logo (2).png"
import Splash from '../splashscreen/Splash'



function Login({ children, typeofpage }) {
  <Helmet>
<link rel="stylesheet"
    href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />

<meta name="description" content="This is a description of my page." />
{/* Add more head tags here */}
</Helmet>  
  return (
    <div>
          <ToastContainer/>
<div className="getstartedsection">
    <div className={`getstartedimage ${typeofpage ? typeofpage : ''}`} >
     <Splash/>
  </div>
  <div className="getstartedlogin">
    <div className="loginbox2" data-aos="fade-right">
      <br />
      <div className="logo">
        <img src={image} alt="" style={{ width: "fit-content" }} />
      </div>

      {children}
    </div>
  </div>
</div>


    </div>
  )
}

export default Login