import axios from 'axios';
import axiosAuthRefresh from 'axios-auth-refresh';
import jwtDecode from 'jwt-decode';
import dayjs from 'dayjs';
import { toast } from 'react-toastify';
import { setUser, logout, getUser } from './auth'; // Replace with your auth functions
import { navigate } from 'gatsby';

const baseURL = 'https://isslblog.vercel.app'; // Your baseURL

const axiosInstance = axios.create({
  baseURL: baseURL,
});

// Function to refresh the token
const refreshAuthLogic = async (failedRequest) => {
  const user = getUser(); // Get user information

  if (user && user.refreshtoken) {
    try {
      const response = await axios.post(`${baseURL}/api/token/refresh/`, {
        refresh: user.refreshtoken,
      });
      const { access, refresh } = response.data;
      const decodedAccessToken = jwtDecode(access);
      user.id = decodedAccessToken.user_id;
      user.username = decodedAccessToken.username;
      user.email = decodedAccessToken.email;
      user.accesstoken = access;
      user.refreshtoken = refresh;
      window.localStorage.setItem('gatsbyUser', JSON.stringify(user));
      failedRequest.response.config.headers['Authorization'] = `Bearer ${access}`;
      return Promise.resolve();
    } catch (error) {
      console.error('Failed to refresh access token:', error);
      toast.error('Session has expired. Please log in again.', {
        position: toast.POSITION.BOTTOM_CENTER,
      });
      logout();
      navigate('/Userlogin/');
      // Call the logout function if token refresh fails
      return Promise.reject(error);
    }
  } else {
    return Promise.reject('No refresh token available');
  }
};

// Attach the token refresh logic to Axios instance
axiosAuthRefresh(axiosInstance, refreshAuthLogic, {
  statusCodes: [401], // Define the status code(s) that trigger token refresh
});

export default axiosInstance;
