import React from 'react'
import { Link } from "gatsby"
import Splash from '../splashscreen/Splash'
import image from "../logo (2).png"
import login from '../components/authentication/register/register.css'
const Register = () => {

  return (
    <div>
<div className="getstartedsection">
  <div className="getstartedimage">
  <Splash/>
  </div>
  <div className="getstartedlogin">
    <div className="loginbox2" data-aos="fade-right">
      <br />
      <div className="logo">
        <img src={image} alt="" style={{ width: "fit-content" }} />
      </div>
      <div className="logintitle">
        Welcome Onboard.{" "}
      </div>
      <div className="loginform">
        <form method="post" action="">
          <div className="loginform">
            <div className="logincontent">
            <div className="loginflex">
                <label htmlFor="">Username</label>
                <input
                  type="email"
                  name="username"
                  id="id_username"
                  placeholder="Enter Your Email Address"
                />
              </div>

              <div className="loginflex">
                <label htmlFor="">Email Address</label>
                <input
                  type="email"
                  name="username"
                  id="id_username"
                  placeholder="Enter Your Email Address"
                />
              </div>
              <div className="loginflex">
                <label htmlFor="">Password</label>
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
                {" "}
                <Link to="/Userlogin">Already Have An Account</Link>{" "}
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>

    </div>
  )

}

export default Register