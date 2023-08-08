import React from 'react'
import { Link } from "gatsby"
import image from "../logo (2).png"
const Register = () => {
  return (
    <div>
        <div className="getstartedsection">
  <div className="getstartedimage">
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
            onclick="window.location.href = 'index.html'"
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
  </div>
  <div className="getstartedlogin">
    <div className="loginbox2" data-aos="fade-right">
      <br />
      <div className="logo" onclick="window.location.href = 'index.html'">
        <img src="media/logo (2).png" alt="" style={{ width: "fit-content" }} />
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
                    onclick="eyefunclogin()"
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