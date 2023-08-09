import React from 'react'
import logo from "../../Landingpage/logo (2).png"
import { Link } from "gatsby"

const Dashboardheader = () => {
  return (
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
        <Link  to='/' className="blackboton">
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
  
  )
}

export default Dashboardheader