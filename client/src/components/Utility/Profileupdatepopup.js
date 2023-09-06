import React, { useState, useEffect } from 'react'
import cutage from './cuate.svg'
import { getUser } from '../../service/auth'
import jwtDecode from 'jwt-decode';
import { logout } from '../../service/auth';
import { Link } from 'gatsby';
import { navigate } from 'gatsby';
const Profileupdatepopup = () => {


  const [isverified, setisverified] = useState(true)

  useEffect(() => {
    const user = getUser(); // Get user information

    if (user) {
      if (user?.profileupdate) {
        setisverified(user.profileupdate);
      } else {
        setisverified(false);
      }
    } else {
      setisverified(false);
    }
  }, []);

  return (

    <>
    {!isverified ? (
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
          <Link to='/' className="arwbtn" 
          >
            {" "}
            Proceed{" "}
          </Link>

          <a href=''  className="arwbtn logout" 
           onClick={event => {
            event.preventDefault()
            logout(() => navigate(`/app/login`))
          }}
          >
       
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