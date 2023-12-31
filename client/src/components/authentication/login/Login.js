import React from 'react'
import { Link } from "gatsby"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Helmet } from 'react-helmet';
import image from "../logo (2).png"
import Splash from '../splashscreen/Splash'



function Login({ children, typeofpage }) {
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