import axios from 'axios';
import { toast } from 'react-toastify';
import jwtDecode from 'jwt-decode';
import { navigate } from 'gatsby';
import { createContext, useState, useEffect } from 'react'
// utils.js


export const isBrowser = () => typeof window !== "undefined";

export const getUser = () =>
  isBrowser() && window.localStorage.getItem("gatsbyUser")
    ? JSON.parse(window.localStorage.getItem("gatsbyUser"))
    : {};

const setUser = user =>
  window.localStorage.setItem("gatsbyUser", JSON.stringify(user))


  // export const handleLogin = async ({ username, password }) => {
  //   try {
  //     // Call the authentication API here
  //     const response = await axios.post('https://isslblog.vercel.app/token/', {
  //       username,
  //       password,
  //     });
  

  //     const { access, refresh } = response.data;
  //     const decodedAccessToken = jwtDecode(access);

      
  //     toast.success('You Are Now Logged In', {
  //       position: toast.POSITION.BOTTOM_CENTER,
  //     });

  //     // Assuming setUser is available in the function's arguments
  //     setUser({
  //       id: decodedAccessToken.user_id,
  //       username: decodedAccessToken.username,
  //       email: decodedAccessToken.email,
  //       accesstoken: access,
  //       refreshtoken: refresh
  //     });

  //     toast.success('You Are Now Logged In', {
  //       position: toast.POSITION.BOTTOM_CENTER,
  //     });
      
  //     return true;
  //   } catch (error) {
  //     console.error('Login failed:', error);
  //     console.log('errorrrrrrrrrrrrrrrrrrrr')
  //     toast.error('Login failed. Please check your credentials.', {
  //       position: toast.POSITION.TOP_RIGHT,
  //     });
  
  //     return false;
  //   }
  // };
  export const handleLogin = async ({ username, password }) => {
    try {
      const response = await axios.post('https://isslblog.vercel.app/token/', {
        username,
        password,
      });
  
      const { error, accountnumber } = response.data;
  
      if (error === 'Profile not verified') {
        // Redirect to email verification page with accountnumber
        window.location.href = `/Emailverification/?UserAccountid=${accountnumber}`;
        return false;
      }
  
      const decodedAccessToken = jwtDecode(response.data.access_token);
  
      if (decodedAccessToken && decodedAccessToken.user_id) {
        toast.success('You Are Now Logged In', {
          position: toast.POSITION.BOTTOM_CENTER,
        });
  
        // Assuming setUser is available in the function's arguments
        setUser({
          id: decodedAccessToken.user_id,
          username: decodedAccessToken.username,
          email: decodedAccessToken.email,
        });
  
        return true;
      } else {
        toast.error('Invalid access token', {
          position: toast.POSITION.TOP_RIGHT,
        });
        return false;
      }
    } catch (error) {
      console.error('Login failed:', error);
      console.log('errorrrrrrrrrrrrrrrrrrrr');
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
  navigate('/Userlogin/');
}