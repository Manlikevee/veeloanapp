import React, { useState, useEffect } from 'react'
import cutage from './cuate.svg'
import { getUser } from '../../service/auth'
import jwtDecode from 'jwt-decode';
import { logout } from '../../service/auth';
import { Link } from 'gatsby';
import { navigate } from 'gatsby';
import Spinner from '../Forms/Accountnumform/Spinner';
import axiosInstance from '../../service/axiosinterceptor';
import { toast } from 'react-toastify';

const Profileupdatepopup = () => {


  const [isverified, setisverified] = useState(true)
  const [Responsedata, setResponseData] = useState([])
  const [loading, setLoading] = useState(true)
  const [loggedinuser, setloggedinuser] = useState('')

  useEffect(() => {
    const user = getUser(); // Get user information

    if (user) {
      setloggedinuser(user)
      if (user?.profileupdate) {
        setisverified(user.profileupdate);
      } else {
        setisverified(false);
      }
    } else {
      setisverified(false);
    }
  }, []);


  useEffect(() => {
    axiosInstance
      .get('/getstatus/')
      .then(response => {
        // Handle the response as needed
        setResponseData(response.data);
        console.log(response.data)
        setLoading(false);
      })
      .catch(error => {
        // Handle errors
        console.error('GET request error', error);
      
      });
  }, []);

  let mylink;

  if (Responsedata?.stagelink){



  if (Responsedata.stagelink === 'userprofile') {
    mylink = '/app/profile'
  }
  else if(Responsedata.stagelink === 'kyc') {
    mylink = '/Kyc'
  }
  else if(Responsedata.stagelink === 'Atmsetup') {
    mylink = '/Nairacard'
  }
  else if(Responsedata.stagelink === 'Accountnumber') {
    mylink = '/AccountNumberVerification'
  }
  else if(Responsedata.stagelink === 'nextofkin') {
    mylink = '/Nextofkin'
  }
  else{
    mylink = '/Profileupdate'
  }
}

  return (

    <>
    {!isverified && loggedinuser ? (
      <div className="loading-over " style={{ display: "block" }}>
  <div className="popup">
    <br />
    <div className="secoact"  data-aos="zoom-in">
      <div className="logoac">
        <img src={cutage} alt="" />
      </div>
      <div className="logomen"> Welcome to your dashboard! </div>
      <div className="logobod">
       Please take a moment to update your profile in order to continue.
      </div>
      <div className="logobtn">
        <div className='fbs'>
        {loading ? (
          <Link to={mylink}  className="arwbtn"><Spinner/>  Proceed </Link>
        ) : (
          <Link to='/Profileupdate' className="arwbtn">Proceed</Link>
        )}
  

          <a href=''  className="arwbtn logout" 
           onClick={event => {
            event.preventDefault()
            logout(() => navigate(`/app/login`))
          }}
          >
                  <button >
        
   
    
        
        </button>
       
            Logout{" "}
          </a>
        </div>
      </div>
    </div>
  </div>
</div>
    ) : ''  }
        
</>
  )
}

export default Profileupdatepopup