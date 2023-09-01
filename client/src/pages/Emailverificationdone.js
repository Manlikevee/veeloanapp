import React, { useEffect, useState } from 'react';
import AOS from 'aos'; // Import AOS library
import 'aos/dist/aos.css'; // Import AOS styles
import { Link } from "gatsby"
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import Login from '../components/authentication/login/Login';
import { navigate } from 'gatsby';

const Emailverificationdone = () => {
  const [Verificationtoken, SetVerificationtoken] = useState('');
  const [loading, setLoading] = useState(true);
  const [responseData, setResponseData] = useState(null);

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

  useEffect(() => {
    // Get the loanReference query parameter from the URL
    const queryParams = new URLSearchParams(window.location.search);
    const loanReferenceValue = queryParams.get('Verification-token');

    SetVerificationtoken(loanReferenceValue);
  }, []);

  useEffect(() => {
    // Send a POST request when Verificationtoken changes
    if (Verificationtoken) {
      axios
        .post(`https://isslblog.vercel.app/emailverification/verify/${Verificationtoken}`)
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

  // Conditional rendering based on responseData
  let content;
  if (loading) {
    content = <p>Loading...</p>;
  } else if (responseData && responseData.success) {
    content = <p>Verification successful. {responseData.message}</p>;
  } else if (responseData && responseData.error) {
    content = <p>Verification failed. {responseData.error}</p>;
  } else {
    content = <p>Verification status unknown.</p>;
  }

  return (
    <div>
   <Login typeofpage={'registration'}> 
    <div className="logintitle">
   
{content}

      </div>
    </Login>
    </div>
  );
};

export default Emailverificationdone;
