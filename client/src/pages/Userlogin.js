import React, { useEffect, useState  } from 'react'
import Login from '../components/authentication/login/Login'
import AOS from 'aos'; // Import AOS library
import 'aos/dist/aos.css'; // Import AOS styles
import { Link } from "gatsby"
import { navigate } from "gatsby";
import { handleLogin, isLoggedIn } from "../service/auth";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useLocation } from "@reach/router";


const Userlogin = () => {


  
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

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const location = useLocation(); // Get the current location

  const handleUpdate = event => {
    const { name, value } = event.target;
    if (name === 'username') {
      setUsername(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  };

  const handleSubmit = async event => {
    event.preventDefault();

    const loginSuccessful = await handleLogin({
      username,
      password,
    });

    if (loginSuccessful) {
      // Redirect to the previous location or profile page
      if (location.state?.from) {
        navigate(location.state.from);
      } else {
        navigate(`/app/profile`);
      }
    }
  };

  if (isLoggedIn()) {
    navigate(`/app/profile`);
  }


  
  return (


    <div>
<Login typeofpage={'logins'}>
<div className="logintitle">
        Welcome Please provide your Log In details.{" "}
      </div>
      <div className="loginform">
      <form
        method="post"
        onSubmit={handleSubmit}
      >
          <div className="loginform">
            <div className="logincontent">
              <div className="loginflex">
                <label htmlFor="Email">Username</label>
                <input type="text" name="username" value={username} onChange={handleUpdate} />
              </div>
              <div className="loginflex">
                <label htmlFor="Password">Password</label>
                <div className="ini">
                <input
            type="password"
            name="password"
            value={password}
            onChange={handleUpdate}
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
                  <a> Forgot Password </a>
                </p>
             
               
              </div>
              <div className="loginflex">
              <button  type='submit'>Log In</button>
              </div>
              <div className="logintitle">
                Don’t have an account?{" "}
                <Link to="/Userregistration">Create An Account</Link>{" "}
              </div>
            </div>
          </div>
        </form>
      </div>
</Login>


    </div>
 
  )
}

export default Userlogin