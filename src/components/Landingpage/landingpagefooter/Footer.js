import React from 'react'
import logo from "../logo (2).png"
import { IonIcon } from '@ionic/react';



const Footer = () => {
  return (
    <div>
        <footer>
  <div className="container">
    <div className="logosecion">
      <div className="mylogosec">
        <div className="logo" onclick="window.location.href = 'index.html'">
          <img src={logo} alt="" />
        </div>
      </div>
      <div className="mylogotext">
        Flexible options, competitive rates, exceptional service – Empowering
        your dreams. Apply now for a seamless borrowing experience and secure a
        brighter future.
      </div>
    </div>
    <div className="linkssection">
      <h3>About Us</h3>
      <ul>
        <li onclick="window.location.href = '#hero'">Home</li>
        <li>About Us</li>
        <li>Our Services</li>
        <li>Contact Us</li>
      </ul>
    </div>
    <div className="contactsection">
      <h3>Contact us</h3>
      <ul>
        <li>
          (903) 822-4082 16193 County Rd #3167 S Mount Enterprise, Texas(TX),
          75681
        </li>
        <li>+908 89097 890</li>
      </ul>
    </div>
    <div className="socialmedia">
      <div className="social">
        <IonIcon name="logo-google" />
      </div>
      <div className="social">
        <IonIcon name="logo-facebook" />
      </div>
      <div className="social">
        <IonIcon name="logo-whatsapp" />
      </div>
    </div>
  </div>
  <br />
  <br />
  <div className="line" />
  <div className="container ">
    <p className="ctxt">Copyright ® 2021 Lorem All rights Rcerved</p>
  </div>
</footer>

    </div>
  )
}

export default Footer