import React, { useState } from 'react';
import logo from "../logo (2).png"
import { Link } from "gatsby"
import { Helmet } from 'react-helmet';
const Landingpageheader = () => {

  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {

    setIsActive(!isActive);
  };

  
  return (

    <>      
    <Helmet>
    <link rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
  
    <meta name="description" content="This is a description of my page." />
    {/* Add more head tags here */}
  </Helmet>   
  <div id="navlinkovalay" className={`target-div ${isActive ? 'navlinkactiveovalay' : ''}`} />
   <header id="navbar" className='mynav navactive'>
    <div className="container" data-aos="fade-left">
    <Link to='' className="logo" >
        <img src={logo} alt="" />
      </Link>
      <div  className={`target-div ${isActive ? 'navlinkactive' : 'links'}`} id="middlelinks">
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
      <div className="navtoggle" onClick={handleClick}>
        <span className="material-symbols-outlined">menu</span>
      </div>
    </div>
  </header>
  </>

  )
}

export default Landingpageheader