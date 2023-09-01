import React, { useEffect, useState } from 'react';
import AOS from 'aos'; // Import AOS library
import 'aos/dist/aos.css'; // Import AOS styles
import { toast, ToastContainer } from 'react-toastify';
import axios from 'axios';
import Login from '../components/authentication/login/Login';
import { Link } from 'gatsby';

const Emailverification = () => {
  const [Verificationtoken, SetVerificationtoken] = useState('');
  const [loading, setLoading] = useState(true);
  const [responseData, setResponseData] = useState(null);
  const [userrefefence, setUserrefefence] = useState('');

  useEffect(() => {
    // Get the loanReference query parameter from the URL
    const queryParams = new URLSearchParams(window.location.search);
    const loanReferenceValue = queryParams.get('UserAccountid');

    SetVerificationtoken(loanReferenceValue);
  }, []);
 
  useEffect(() => {
    // Send a POST request when Verificationtoken changes
    if (Verificationtoken) {
      axios
        .get(`https://isslblog.vercel.app/emailverification/verify/${Verificationtoken}/${userrefefence}`)
        .then(response => {
          // Handle the response as needed
          console.log('Verification successful', response.data);
          setResponseData(response.data);
          setLoading(false);
        })
        .catch(error => {
          // Handle errors
          console.error('Verification error', error);
          setResponseData({ error: 'Verification failed. Please try again.' });
          setLoading(false);
        });
    }
  }, [Verificationtoken]);

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
    <Login typeofpage={'verification'}> 
    <div>
    <div className="logintitle">
    
    To complete your registration and access our services, please click the verification link we've sent to your email address or type below. 
      </div>
    <div className="loginform">
        <div className="logincontent">
          <div className="loginflex">
            <label htmlFor="verificationcode">Verification Code</label>
            <input
              type="text"
              name="verificationcode"
              id="id_username"
              placeholder="Enter Your verification code"
            />
     
          </div>

          <div className="loginflex">
            <button type="submit">
                Verify Email
            </button>
          </div>

    


          <div className="logintitle">
           Resend Verification Code{" "}
            <Link to="/Userlogin">Login</Link>{" "}
          </div>
        </div>
      </div>

    </div>

    </Login>
  )
}

export default Emailverification