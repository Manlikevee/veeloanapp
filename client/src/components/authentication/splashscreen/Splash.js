import React from 'react'
import image from "../logo (2).png"
import { Link } from "gatsby"
const Splash = () => {
  return (
  
          <div className="mpawa" data-aos="fade-up">
      <div
        className="logo"
        style={{
          display: "flex",
          alignItems: "self-start",
          justifyContent: "flex-start"
        }}
      >
         <Link to="/" 
          style={{
            color: "inherit",
            textDecoration: "none",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <div
            className="logo"
            style={{
              display: "flex",
              width: "100%",
              alignItems: "flex-start",
              justifyContent: "flex-start"
            }}
          >
            <img src={image} alt="" />
          </div>
        </Link>
      </div>
      <div className="mpawatext">
        Flexible options, competitive rates, exceptional service – Empowering
        your dreams. Apply now for a seamless borrowing experience and secure a
        brighter future.
      </div>
    </div>
 
  )
}

export default Splash