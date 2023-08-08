import React from 'react'
import logo from "../logo (2).png"
const Landingpageheader = () => {
  return (
    <header id="navbar">
    <div className="container" data-aos="fade-left">
      <div className="logo" onclick="window.location.href = 'index.html'">
        <img src={logo} alt="" />
      </div>
      <div className="links" id="middlelinks">
        <a href="dashboard.html" className="activated">
          Home
        </a>
        <a href="dashboard.html">About</a>
        <a href="">What We Do</a>
        <a href="">Contact Us</a>
        <div className="hideme">
          <a href="login.html" className="blackboton">
            {" "}
            Get Started
          </a>
        </div>
      </div>
      <div
        className="login getstarteds"
        style={{ width: "fit-content" }}
        onclick="window.location.href = 'login.html'"
      >
        Get Started
      </div>
      <div className="navtoggle" onclick="navtoggler()">
        <span className="material-symbols-outlined">menu</span>
      </div>
    </div>
  </header>
  
  )
}

export default Landingpageheader