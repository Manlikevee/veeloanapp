import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { toast, ToastContainer } from 'react-toastify';
import axios from 'axios';
import Login from '../components/authentication/login/Login';
import { Link, navigate } from 'gatsby';

const Emailverification = () => {
  const [verificationToken, setVerificationToken] = useState('');
  const [loading, setLoading] = useState(false);
  const [responseData, setResponseData] = useState(null);
  const [userReference, setUserReference] = useState('');

  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    const loanReferenceValue = queryParams.get('UserAccountid');

    setVerificationToken(loanReferenceValue);
  }, []);

  const handleVerification = () => {
    if (!verificationToken || !userReference) {
      toast.error('Please fill in all fields');
      return;
    }

    setLoading(true);

    axios
      .get(`https://isslblog.vercel.app/newemailverification/verify/${verificationToken}/${userReference}`)
      .then(response => {
        // Handle the response as needed
        console.log('Verification successful', response.data);
        setResponseData(response.data);
        setLoading(false);
        toast.success(responseData.message); // Display success message
        navigate('/'); // Redirect to the homepage upon success
      })
      .catch(error => {
        // Handle errors
        console.error('Verification error', error);
        setResponseData({ error: 'Verification failed. Please try again.' });
        setLoading(false);
        toast.error(responseData.message || 'Verification failed. Please try again.');
      });
  };

  useEffect(() => {
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
          To complete your registration and access our services, please click the verification link we've sent to
          your email address or type below.
        </div>
        <div className="loginform">
          <div className="logincontent">
            <div className="loginflex">
              <label htmlFor="userreference">User Reference</label>
              <input
                type="text"
                name="userreference"
                id="id_userreference"
                placeholder="Enter Your User Reference"
                value={userReference}
                onChange={e => setUserReference(e.target.value)}
              />
            </div>

            <div className="loginflex">
              <button type="submit" onClick={handleVerification} disabled={loading}>
                {loading ? 'Processing...' : 'Verify Email'}
              </button>
            </div>

            <div className="logintitle">
              Resend Verification Code <Link to="/Userlogin">Login</Link>
            </div>
          </div>
        </div>
      </div>
    </Login>
  );
};

export default Emailverification;
