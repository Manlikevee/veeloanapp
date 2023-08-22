import React, { useEffect, useState  } from 'react'
import Login from '../components/authentication/login/Login'
import AOS from 'aos'; // Import AOS library
import 'aos/dist/aos.css'; // Import AOS styles
import { Link } from "gatsby"
import axios from 'axios';
import { navigate } from 'gatsby';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useUserContext} from '../components/UserContext'


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


    const {setUser} = useUserContext();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const handleLogin = async () => {
      try {
        const response = await axios.post('http://localhost:3000/auth/signin', {
          email,
          password,
        });
  
        const { id, email: userEmail, token } = response.data;
        setUser({ id, email: userEmail, token });
        navigate('/Userdashboard');
      } catch (error) {
        console.error('Login failed:', error);
        toast.error('Login failed. Please check your credentials.', {
          position: toast.POSITION.BOTTOM_CENTER,
        });
      }
    };
  
  return (
    <div>
<Login>
<div className="logintitle">
        Welcome Please provide your Log In details.{" "}
      </div>
      <div className="loginform">
        <div>
          <div className="loginform">
            <div className="logincontent">
              <div className="loginflex">
                <label htmlFor="Email">Email Address</label>
                <input
                  type="email"
                  name="username"
                  id="id_username"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
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
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
            
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
              <button onClick={handleLogin}>Log In</button>
              </div>
              <div className="logintitle">
                Don’t have an account?{" "}
                <Link to="/Userregistration">Create An Account</Link>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
</Login>


    </div>
  )
}

export default Userlogin