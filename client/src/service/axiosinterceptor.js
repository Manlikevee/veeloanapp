import axios from 'axios';
import jwtDecode from 'jwt-decode';
import dayjs from 'dayjs';
import { toast } from 'react-toastify';
import { setUser, logout } from './auth';
import { getUser } from './auth';
import { navigate } from 'gatsby';


const baseURL = 'https://isslblog.vercel.app';


const axiosInstance = axios.create({
  baseURL: baseURL,
});

axiosInstance.interceptors.request.use(async (req) => {
  const user = getUser();

  if (user && user.accesstoken) {
    console.log(user.accesstoken);
    console.log(user.refreshtoken);
    const decodedAccessToken = jwtDecode(user.accesstoken);
    const isExpired = dayjs.unix(decodedAccessToken.exp).diff(dayjs()) < 1;

    if (!isExpired) {
      req.headers.Authorization = `Bearer ${user.accesstoken}`;
      console.log('not expired');
      console.log(user.refreshtoken);
    } else {
      let retryCount = 0;
      while (retryCount < 2) { // Try up to 2 times

        try {
          const response = await axios.post(`${baseURL}/api/token/refresh/`, {
            refresh: user.refreshtoken,
          });

          console.log('expired');
          const { access, refresh } = response.data;
          const decodedAccessToken = jwtDecode(access);
          user.id = decodedAccessToken.user_id;
          user.username = decodedAccessToken.username;
          user.email = decodedAccessToken.email;
          user.accesstoken = access;
          user.refreshtoken = refresh;
          window.localStorage.setItem('gatsbyUser', JSON.stringify(user));
          req.headers.Authorization = `Bearer ${access}`;
          break; // Break out of the retry loop if successful
        } catch (error) {
          console.error('Failed to refresh access token:', error);
          retryCount++;
          if (retryCount >= 2) {
            toast.success('Error Fetching Data Kindly Refresh', {
              position: toast.POSITION.BOTTOM_CENTER,
            });
            throw error;
          }
        }
      }
    }
  }

  return req;
});

export default axiosInstance;
