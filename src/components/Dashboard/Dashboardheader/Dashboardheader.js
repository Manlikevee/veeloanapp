import React, { useState } from 'react';
import logo from "../../Landingpage/logo (2).png"
import { Link } from "gatsby"


const Dashboardheader = () => {


  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {

    setIsActive(!isActive);
  };

  return (
    <>
    <div id="navlinkovalay" className={`target-div ${isActive ? 'navlinkactiveovalay' : ''}`} />
    <header id="navbar" className='mynav'>
    <div className="container" data-aos="fade-left">
    <Link to='/' className="logo" >
        <img src={logo} alt="" />
      </Link>
      <div  className={`target-div ${isActive ? 'navlinkactive' : 'links'}`} id="middlelinks">
        <Link to='/Userdashboard'  className="activated">
        <span class="material-symbols-outlined">
grid_view
</span>     Dashboard
        </Link>
        <Link  to='/Loan'><span class="material-symbols-outlined">
credit_score
</span> Loan</Link>
        <Link  to='/Loandetail'><span class="material-symbols-outlined">
manage_accounts
</span> Self Service </Link>
        <Link  to='/'><span class="material-symbols-outlined">
contacts
</span> Contact Us </Link>
        <div className="hideme">
        <Link  to='/' className="blackboton">
            {" "}
            John Doe
            </Link>
        </div>
      </div>
     <Link to='/Userlogin'
        className="login getstarteds"
        style={{ width: "fit-content" }}
        
      >
        John Doe
      </Link>
      <div className="navtoggle" onClick={handleClick}>
        <span className="material-symbols-outlined">menu</span>
      </div>
    </div>
  </header>
  </>
  )
}

export default Dashboardheader