import React from 'react'
import logo from "../logo (2).png"
import { Link } from "gatsby"
const Landingpageheader = () => {
  const handleLogoClick = () => {
    // Handle logo click if needed
    // For example, scroll to top of page
    window.scrollTo(0, 0);
  };
  
  return (
    <header id="navbar">
      <div className="container" data-aos="fade-left">
        <div className="logo" onClick={handleLogoClick}>
          <img src={logo} alt="" />
        </div>
        <div className="links" id="middlelinks">
          <Link to="/" activeClassName="activated">
            Home
          </Link>
          <Link to="/">About</Link>
          <Link to="/">What We Do</Link>
          <Link to="/">Contact Us</Link>
          <div className="hideme">
            <Link to="/Userlogin" className="blackboton">
              Get Started
            </Link>
          </div>
        </div>
        <div
          className="login getstarteds"
          style={{ width: "fit-content" }}
          onClick={() => {
            // Handle the Get Started click using Gatsby's Link
            // You can navigate to the login page or another appropriate route
            // For example: <Link to="/login">Get Started</Link>
          }}
        >
          Get Started
        </div>
        <div className="navtoggle" onClick={() => {
            // Implement your navtoggler function
            // For example, toggle a mobile navigation menu
          }}>
          <span className="material-symbols-outlined">menu</span>
        </div>
      </div>
    </header>
  
  )
}

export default Landingpageheader