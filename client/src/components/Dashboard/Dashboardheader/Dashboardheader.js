import React, { useState } from 'react';
import logo from "../../Landingpage/logo (2).png"
import { Link } from "gatsby"
import { handleLogin, isLoggedIn , getUser, logout} from "../../../service/auth"
import { navigate } from "gatsby";

const Dashboardheader = () => {
  const [isFullScreen, setIsFullScreen] = useState(false);

  const toggleFullScreen = () => {
    if (!isFullScreen) {
      // Enter full-screen mode
      if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen();
      } else if (document.documentElement.mozRequestFullScreen) {
        document.documentElement.mozRequestFullScreen();
      } else if (document.documentElement.webkitRequestFullscreen) {
        document.documentElement.webkitRequestFullscreen();
      } else if (document.documentElement.msRequestFullscreen) {
        document.documentElement.msRequestFullscreen();
      }
    } else {
      // Exit full-screen mode
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      }
    }

    // Toggle the full-screen state
    setIsFullScreen(!isFullScreen);
  };

  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {

    setIsActive(!isActive);
  };

  return (
    <>
    <div id="navlinkovalay" className={`target-div ${isActive ? 'navlinkactiveovalay' : ''}`} />
    <header id="navbar" className='mynav navactive'>
    <div className="container" data-aos="fade-left">
    <Link to='/' className="logo"  >
        <img src={logo} alt="" />
      </Link>
      <div  className={`target-div ${isActive ? 'navlinkactive' : 'links'}`} id="middlelinks">
        <Link to='/app/dashboard'  className="" activeClassName="activated">
        <span class="material-symbols-outlined">
grid_view
</span>     Dashboard
        </Link>
        <Link  to='/app/Userloans' className="" activeClassName="activated"><span class="material-symbols-outlined" >
credit_score
</span> Loan</Link>
        <Link  to='/Loandetail' className="" activeClassName="activated"><span class="material-symbols-outlined">
manage_accounts
</span> Self Service </Link>
        <Link  to='/Profileupdate' className="" activeClassName="activated"><span class="material-symbols-outlined">
contacts
</span> Contact Us </Link>

<Link  to='/app/profile' className="" activeClassName="activated"><span class="material-symbols-outlined">
account_box
</span> User Profile </Link>


<Link   className="" activeClassName="activated" >
<span class="material-symbols-outlined" >
expand_content
</span> </Link>
        <div className="hideme">
        {isLoggedIn() ? (
          <a
            href="/"
            onClick={event => {
              event.preventDefault()
              logout(() => navigate(`/app/login`))
            }}
          >
            Logout
          </a>
        ) : null}
        </div>
      </div>
     {/* <Link to='/Userprofile'
        className="login getstarteds"
        style={{ width: "fit-content" }}
        
      >
        John Doe
      </Link> */}
{isLoggedIn() ? (
  <a
    href="/" className='login getstarteds sasx'
    onClick={event => {
      event.preventDefault();
      logout(() => navigate(`/app/login`));
    }}
  >
    Logout
  </a>
) : (
  <div>
    <Link
      to="/app/profile"
      className="login getstarteds"
      style={{ width: "fit-content" }}
    >
      John Doe
    </Link>
  </div>
)}


      <div className="navtoggle" onClick={handleClick}>
        <span className="material-symbols-outlined">menu</span>
      </div>
    </div>
  </header>
  </>
  )
}

export default Dashboardheader