import axios from 'axios';
import { toast } from 'react-toastify';
// utils.js


export const isBrowser = () => typeof window !== "undefined";

export const getUser = () =>
  isBrowser() && window.localStorage.getItem("gatsbyUser")
    ? JSON.parse(window.localStorage.getItem("gatsbyUser"))
    : {};

const setUser = user =>
  window.localStorage.setItem("gatsbyUser", JSON.stringify(user))


  export const handleLogin = async ({ username, password }) => {
    try {
      // Call the authentication API here
      const response = await axios.post('https://isslblog.vercel.app/login/', {
        username,
        password,
      });
  
      const { token, user_id, username: userEmail } = response.data;
      toast.success('You Are Now Logged In', {
        position: toast.POSITION.BOTTOM_CENTER,
      });
      // Assuming setUser is available in the function's arguments
      setUser({
        id: user_id,
        username: username,
        email: userEmail,
        token: token,
      });

      toast.success('You Are Now Logged In', {
        position: toast.POSITION.BOTTOM_CENTER,
      });
      
      return true;
    } catch (error) {
      console.error('Login failed:', error);
      console.log('errorrrrrrrrrrrrrrrrrrrr')
      toast.error('Login failed. Please check your credentials.', {
        position: toast.POSITION.TOP_RIGHT,
      });
  
      return false;
    }
  };
  


export const isLoggedIn = () => {
  const user = getUser()

  return !!user.username
}

export const logout = callback => {
  setUser({})
  callback()
}