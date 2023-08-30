import axios from 'axios';
import jwtDecode from 'jwt-decode';
import dayjs from 'dayjs';
import { toast } from 'react-toastify';
import { setUser, logout } from './auth'; // Assuming authUtils has setUser and logout functions
import { getUser } from './auth'; // Assuming utils has getUser function

const baseURL = 'https://isslblog.vercel.app'; // Your baseURL

const axiosInstance = axios.create({
  baseURL: baseURL,
});
axiosInstance.interceptors.request.use(async (req) => {
  const user = getUser(); // Get user information

  if (user && user.accesstoken) {
    console.log(user.accesstoken)
    const decodedAccessToken = jwtDecode(user.accesstoken);
    const isExpired = dayjs.unix(decodedAccessToken.exp).diff(dayjs()) < 1;


    if (!isExpired) {
      req.headers.Authorization = `Bearer ${user.accesstoken}`;
      console.log('not expired')
      return req;
    }

    try {
      const response = await axios.post(`${baseURL}/api/token/refresh/`, {
        refresh: user.refreshtoken,
        
      });
      console.log('expired')
      const { access, refresh } = response.data;
      const decodedAccessToken = jwtDecode(access);

    
      setUser({
        id: decodedAccessToken.user_id,
        username: decodedAccessToken.username,
        email: decodedAccessToken.email,
        accesstoken: access,
        refreshtoken: refresh,
      });
    
      req.headers.Authorization = `Bearer ${access}`;
      return req;
    } catch (error) {
      console.error('Failed to refresh access token:', error);
      toast.success('Session Expired', {
        position: toast.POSITION.BOTTOM_CENTER,
      });
      logout(); // Call the logout function if token refresh fails
      throw error;
    }
  }

  return req;
});

export default axiosInstance;
