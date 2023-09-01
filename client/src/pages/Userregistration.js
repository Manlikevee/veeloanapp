import React, { useEffect, useState } from 'react';
import AOS from 'aos'; // Import AOS library
import 'aos/dist/aos.css'; // Import AOS styles
import { Link } from "gatsby"
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import Login from '../components/authentication/login/Login';
import { navigate } from 'gatsby';

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

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({}); // Added errors state

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.username.trim()) {

      toast.error('Username is required');
    }
    if (!formData.email.trim()) {
   
      toast.error('Email is required');
    }
    if (!formData.password.trim()) {
      toast.error('Password is required');
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (loading) return;
  
    if (!validateForm()) {
      return; // Prevent submission if there are validation errors
    }
  
    try {
      setLoading(true);
  
      const response = await axios.post('https://isslblog.vercel.app/trafalgarregister/', formData);
  
      console.log('Registration successful', response.data);

      if (response.data.message && response.data.accountnumber){
        toast.success(response.data.message);
        const re = response.data.accountnumber;
      
        // Add a delay before navigating
        await new Promise((resolve) => setTimeout(resolve, 2000)); // 1000 milliseconds = 1 second
      
        navigate(`/Emailverification/?UserAccountid=${re}`);
      } else{
        toast.success('Registration successful you can now login');
      }
      
    
      
      setFormData({
        username: '',
        email: '',
        password: '',
      });
    } catch (error) {
      console.error('Registration error', error);
      if (error.response.data.username) {
        toast.error(error.response.data.username[0]);
      }
      else if (error.response.data.email) {
        toast.error(error.response.data.email[0]);
      }
      else if (error.response.data.message) {
        toast.error(error.response.data.message);
      } else {
        toast.error('Registration failed. Please try again.');
      }
    } finally {
      // Add a 3-second delay before setting setLoading(false)
      setTimeout(() => {
        setLoading(false);
      }, 3000); // 3000 milliseconds = 3 seconds
    }
  };
  

  return (
    <Login typeofpage={'registration'}> 
    <div className="logintitle">
    Kindly provide the required information. Once completed, you'll receive a verification link in your email. Thank you for choosing us as your preferred Lending Partners.
      </div>
      <div className="loginform">
        <div className="logincontent">
          <div className="loginflex">
            <label htmlFor="Username">Username</label>
            <input
              type="text"
              name="username"
              id="id_username"
              placeholder="Enter Your Email Username"
              value={formData.username}
              onChange={handleInputChange}
            />
            {errors.username && <p className="error-text">{errors.username}</p>}
          </div>

          <div className="loginflex">
            <label htmlFor="Email">Email Address</label>
            <input
              type="email"
              name="email"
              id="id_email"
              placeholder="Enter Your Email Address"
              value={formData.email}
              onChange={handleInputChange}
            />
            {errors.email && <p className="error-text">{errors.email}</p>}
          </div>
          <div className="loginflex">
            <label htmlFor="Password">Password</label>
            <div className="ini">
              <input
                type="password"
                name="password"
                id="loginpass"
                placeholder="*****"
                value={formData.password}
                onChange={handleInputChange}
              />
              {errors.password && <p className="error-text">{errors.password}</p>}
              <i
                id="eyes"
                className="fas fa-solid fa-eye fa-eye-slash"
                style={{ color: "#0c3730" }}
              />
            </div>
          </div>

          <div className="loginflex">
            <button type="submit" onClick={handleSubmit} disabled={loading}>
              {loading ? 'Registering...' : 'Register'}
            </button>
          </div>
          <div className="logintitle">
            Already Have An Account?{" "}
            <Link to="/Userlogin">Login</Link>{" "}
          </div>
        </div>
      </div>
    </Login>
  );
};

export default Userregistration;
