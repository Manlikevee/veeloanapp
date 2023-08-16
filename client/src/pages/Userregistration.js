import React, { useEffect } from 'react'
import Login from '../components/authentication/login/Login'
import layout from '../components/Landingpage/layout.css'
import AOS from 'aos'; // Import AOS library
import 'aos/dist/aos.css'; // Import AOS styles
import { Link } from "gatsby"


const Userregistration = () => {
  useEffect(() => {
    // Initialize AOS with your desired options
    AOS.init({
      duration: 1200,
      offset: 120,
      easing: 'ease-in-out',
      delay: 100,
      once: true,
      anchorPlacement: 'center',
    });
  }, []); 
  return (
  
<Login>

<div className="logintitle">
        Welcome Please provide your Log In details.{" "}
      </div>
      <div className="loginform">
        <form method="post" action="">
          <div className="loginform">
            <div className="logincontent">
            <div className="loginflex">
                <label htmlFor="Username">Username</label>
                <input
                  type="email"
                  name="username"
                  id="id_username"
                  placeholder="Enter Your Email Username"
                />
              </div>

              <div className="loginflex">
                <label htmlFor="Email">Email Address</label>
                <input
                  type="email"
                  name="username"
                  id="id_username"
                  placeholder="Enter Your Email Address"
                />
              </div>
              <div className="loginflex">
                <label htmlFor="Password">Password</label>
                <div className="ini">
                  <input
                    type="password"
                    name="password"
                    id="loginpass"
                    placeholder="*****"
                  />{" "}
                  <i
                    id="eyes"
                
                    className="fas fa-solid fa-eye fa-eye-slash"
                    style={{ color: "#0c3730" }}
                  />
                </div>
              </div>
         
              <div className="loginflex">
                <button type="submit">Register</button>
              </div>
              <div className="logintitle">
                Already Have An Account?{" "}
                <Link to="/Userlogin">Login</Link>{" "}
              </div>
            </div>
          </div>
        </form>
      </div>

</Login>

  
  )
}

export default Userregistration