import React from 'react'
import { Link } from "gatsby"
import image from "../logo (2).png"
import Splash from '../splashscreen/Splash'

const Login = () => {
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
        Welcome Please provide your Log In details.{" "}
      </div>
      <div className="loginform">
        <form method="post" action="">
          <div className="loginform">
            <div className="logincontent">
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
              <div className="forgot">
                <p>
                  <a href="withdraw.html"> Forgot Password </a>
                </p>
                <p>|</p>
                <p>
                  <a href="">Forgot User ID</a>
                </p>
              </div>
              <div className="loginflex">
                <button type="submit">LOGIN</button>
              </div>
              <div className="logintitle">
                Don’t have an account?{" "}
                <Link to="/Registrer">Create An Account</Link>{" "}
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

export default Login