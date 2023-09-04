import React from 'react'
import Dashboardlayout from '../components/Dashboard/Dashboardlayout'
import Profile from '../components/Dashboard/Profile/Profile'
import axiosInstance from '../service/axiosinterceptor'
import { toast } from 'react-toastify';




const Userprofile = () => {
  return (
    <Dashboardlayout>
    <div>
      <Profile/>
    </div>
    </Dashboardlayout>
  )
}

export default Userprofile