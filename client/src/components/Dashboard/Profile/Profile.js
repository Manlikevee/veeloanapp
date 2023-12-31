import React, { useState } from 'react';
import { handleLogin, isLoggedIn, getUser , logout} from "../../../service/auth"
import Atm from './Atm'



const Profile = ({responseData}) => {
  const [atmloading, setatmloading] = useState(false);
  
  
  const toggleshowcard= () => {

    if (atmloading) {
      setatmloading(false)
    } else {
      setatmloading(true)
    }
  } 
  

  return (
    <div>




<div className="userprofileflexboxcontent">
  <div className="userflexboxside1"  data-aos="fade-up">
    <div className="userintoruc" data-aos="fade-right">
      <div className="introcuploadimg">
        <div className="imagecop">
          <img
            src="https://unsplash.com/photos/eLbOPPiDehA/download?ixid=M3wxMjA3fDF8MXxhbGx8Nnx8fHx8fDJ8fDE2OTIyMDE2NDV8&force=true&w=640"
            alt=""
            srcSet=""
          />
        </div>
      </div>
      <br />
      <div className="introccontent" style={{ textAlign: "center" }}>
        <div
          className="introctitle"
          style={{ textAlign: "center", textTransform: "capitalize" }}
        >
        {getUser().email}
        </div>
        <div className="introcbody" style={{ textAlign: "center" }}>
          Front end development
        </div>
      </div>
      <hr />
      <div className="introccontent">
        <div className="introctitle">Email</div>
        <div className="introcbody">{getUser().email}</div>
      </div>
      <div className="introccontent">
        <div className="introctitle">Phone Number</div>
        <div className="introcbody">+{responseData.userprofile.phonenumber}</div>
      </div>
      <div className="introccontent">
        <div className="introctitle">Address</div>
        <div className="introcbody">{responseData.userprofile.residential_address}</div>
      </div>
    </div>
    <div className="userintoruc modalBtn" toggle-modal={4}>
      <div className="introctitle">₦ Naira Card</div>
      <div className="total" onClick={toggleshowcard}>
        <div className="banklogo">
          <img src="https://raw.githubusercontent.com/Manlikevee/repoNameHere/main/images/logo.png" />{" "}
        </div>
        <div className="banknumber">
          <div className="tobbankname" style={{ textTransform: "capitalize" }}>
            TEST BANK(visa )
          </div>
          <div className="bottombankpin" style={{ letterSpacing: 2 }}>
            408408*******4081
          </div>
          <small className="bottombankpin">12 / 2030</small>
        </div>
        <div className="editbtn">
          <i className="bx bx-edit" />
        </div>
      </div>
    </div>
  </div>
  <div className="userflexboxside2">
    <div className="nxtops" data-aos="fade-right">
      <div className="nx nx1">
        <div className="inthead">
          <div className="inttitle">Account Information</div>
          <div className="inticon">
            <i className="bx bx-edit-alt modalBtn" toggle-modal={1} />
          </div>
        </div>
        <div className="introccontent">
          <div className="introctitle">Marital Status</div>
          <div className="introcbody">Married</div>
        </div>
        <div className="introccontent">
          <div className="introctitle">Identification Number</div>
          <div className="introcbody">{responseData.userprofile.accountnumber}</div>
        </div>
        <div className="introccontent">
          <div className="introctitle">Identification Details</div>
          <div className="introcbody">
            NiN <i>{responseData.userprofile.ssn} </i>
          </div>
        </div>
      </div>
      <div className="nx ">
        <div className="inthead">
          <div className="inttitle">Account Information</div>
          <div className="inticon">
            <i className="bx bx-edit-alt modalBtn" toggle-modal={2} />
          </div>
        </div>
        <div className="minimi max2">
          <div className="introccontent">
            <div className="introctitle">Bank Name</div>
            <div className="introcbody">
              <i>{responseData.accountdetails.bank_name}</i>
            </div>
          </div>
          <div className="introccontent">
            <div className="introctitle">BVN</div>
            <div className="introcbody">{responseData.userprofile.ssn}</div>
          </div>
        </div>
        <div className="minimi max2">
          <div className="introccontent">
            <div className="introctitle">Account Number</div>
            <div className="introcbody">{responseData.accountdetails.account_number}</div>
          </div>
          <div className="introccontent">
            <div className="introctitle">Account Name</div>
            <div className="introcbody">{responseData.accountdetails.account_name}</div>
          </div>
        </div>
        <div className="minimi max2">
          <div className="introccontent">
            <div className="introctitle">BanK Code</div>
            <div className="introcbody">{responseData.accountdetails.bank_code}</div>
          </div>
          <div className="introccontent">
            <div className="introctitle">Bank Location</div>
            <div className="introcbody">Nigeria</div>
          </div>
        </div>
      </div>
    </div>
    <div className="nx nx3" data-aos="fade-down">
      <div className="inthead">
        <div className="inttitle">Next of Kin</div>
        <div className="inticon">
          <i className="bx bx-edit-alt modalBtn" toggle-modal={3} />
        </div>
      </div>
      <div className="minimi max2">
        <div className="introccontent">
          <div className="introctitle">Full Name</div>
          <div className="introcbody">{responseData.nextofkin.first_name + ' ' + responseData.nextofkin.middle_name} </div>
        </div>
        <div className="introccontent">
          <div className="introctitle">Phone Number</div>
          <div className="introcbody">+{responseData.nextofkin.phonenumber}</div>
        </div>
        <div className="introccontent">
          <div className="introctitle">Residential Address</div>
          <div className="introcbody">{responseData.nextofkin.residential_address}</div>
        </div>
      </div>
      <div className="minimi max2">
        <div className="introccontent">
          <div className="introctitle">Email</div>
          <div className="introcbody">{responseData.nextofkin.email}</div>
        </div>
        <div className="introccontent">
          <div className="introctitle">Gender</div>
          <div className="introcbody">{responseData.nextofkin.gender}</div>
        </div>
        <div className="introccontent"></div>
      </div>
    </div>
    <div className="nx nx3" data-aos="fade-up">
      <div className="inthead">
        <div className="inttitle">Next of Kin</div>
        <div className="inticon">
          <i className="bx bx-edit-alt modalBtn" toggle-modal={3} />
        </div>
      </div>
      <div className="minimi max2">
        <div className="introccontent">
          <div className="introctitle">Full Name</div>
          <div className="introcbody">Victor</div>
        </div>
        <div className="introccontent">
          <div className="introctitle">Phone Number</div>
          <div className="introcbody">+234234</div>
        </div>
        <div className="introccontent">
          <div className="introctitle">Residential Address</div>
          <div className="introcbody">16 Jimoh Farombi drive</div>
        </div>
      </div>
      <div className="minimi max2">
        <div className="introccontent">
          <div className="introctitle">Email</div>
          <div className="introcbody">Odahviktor@gmail.com</div>
        </div>
        <div className="introccontent">
          <div className="introctitle">Gender</div>
          <div className="introcbody">Male</div>
        </div>
        <div className="introccontent"></div>
      </div>
    </div>
    <section id="content">
      <main className="mai">
        <ul className="box-info">
          <li>
            <i className="bx bx-check-square" />
            <a href="#">
              <span className="text">
                <h3>0</h3>
                <p>Accepted</p>
              </span>
            </a>
          </li>
          <li>
            <i className="bx bx-no-entry" />
            <a href="">
              <span className="text">
                <h3>0</h3>
                <p>Pending</p>
              </span>
            </a>
          </li>
          <li>
            <i className="bx bx-bell-off" />
            <a href="">
              <span className="text">
                <h3>0</h3>
                <p>Rejected</p>
              </span>
            </a>
          </li>
 
        </ul>
      </main>
    </section>
  </div>
</div>
{atmloading ? (
       <Atm toggleshowcard={toggleshowcard} responseData={responseData}/>
      ) : '' 
 }
    </div>
  )
}

export default Profile