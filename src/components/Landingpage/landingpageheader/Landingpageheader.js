import React from 'react'
import logo from "../logo (2).png"
import { Link } from "gatsby"
import { Helmet } from 'react-helmet';
const Landingpageheader = () => {
  return (

    <>      
    <Helmet>
    <link rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
  
    <meta name="description" content="This is a description of my page." />
    {/* Add more head tags here */}
  </Helmet>   
   <header id="navbar">
    <div className="container" data-aos="fade-left">
      <div className="logo" >
        <img src={logo} alt="" />
      </div>
      <div className="links" id="middlelinks">
        <Link to=''  className="activated">
          Home
        </Link>
        <Link  to='/'>About </Link>
        <Link  to='/'>What We Do </Link>
        <Link  to='/'>Contact Us </Link>
        <div className="hideme">
        <Link  to='/Userdashboard' className="blackboton">
            {" "}
            Get Started
            </Link>
        </div>
      </div>
     <Link to='/Userlogin'
        className="login getstarteds"
        style={{ width: "fit-content" }}
        
      >
        Get Started
      </Link>
      <div className="navtoggle" onclick="navtoggler()">
        <span className="material-symbols-outlined">menu</span>
      </div>
    </div>
  </header>
  </>

  )
}

export default Landingpageheader