import React from 'react'
import { Link } from "gatsby"

const Hero = () => {
  return (
    <div className="herosection" id="hero">
    <div className="container">
      <div className="twosides">
        <div className="sidea" data-aos="fade-right">
          <div className="tbr">
            <br />
            <br />
            <br />
          </div>
          <div className="topsection" data-aos="slide-up">
            <h1>
              Secure, <span>Fast</span>, Reliable and <span>Effective.</span>
            </h1>
          </div>
          <div className="bottomsection" data-aos="flip-up">
            Fuel business growth with our accessible loans and expert guidance.
            Partner with us to unlock opportunities for unprecedented success.
            Empower your business with flexible terms and competitive rates. Let's
            thrive together!
          </div>
          <Link to='/app/dashboard'
            className="getstarted login"
            style={{ width: "fit-content" }}
    
          >
            Request for Loan
          </Link>
        </div>
        <div className="sideb" data-aos="fade-right">
          <img
            src="https://images.unsplash.com/photo-1589156259690-0ecd9aebdc43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=386&q=80"
            alt=""
            data-aos="fade-up"
            data-aos-anchor-placement="top-center"
          />
        </div>
      </div>
    </div>
  </div>
  
  )
}

export default Hero