import React, { useState, useEffect } from 'react';
import Dashboardlayout from '../components/Dashboard/Dashboardlayout'
import axiosInstance from '../service/axiosinterceptor';



const Profileupdate = () => {
  const [isloading, setisloading] = useState(false);
  const [responsedata, setresponsedata] = useState('');
  const [firstname, setfirstname] = useState('');
  const [lastname, setlastname] = useState('');
  const [email, setemail] = useState('');
  const [username, setusername] = useState('');
  const [middlename, setmiddlename] = useState('');
  const [phonenumber, setphonenumber] = useState('');
  const [gender, setgender] = useState('');
  const [ssn, setssn] = useState('');
    
  useEffect(() => {
    axiosInstance.get('/getprofileobj/')
      .then(response => {
        setresponsedata(response.data);
        setfirstname(response.data.user.first_name)
        setlastname(response.data.user.last_name)
        setusername(response.data.user.username)
        setemail(response.data.user.email)
        setmiddlename(response.data.middle_name)
        setphonenumber(response.data.phonenumber)
        setisloading(false);
      })
      .catch(error => {
       
        setisloading(false);
      });


  }, []);


  return (
    <Dashboardlayout>
 <br/>

 {isloading ? (

<div className="dashboardform">
   
  <div className="loanrequesttitles" data-aos="fade-left">
    <h4> Profile Update {username} </h4>
  </div>
  <p className="info-text" data-aos="fade-up">
    Kindly update your profile to ensure that your information is accurate and
    up-to-date. This will help us provide you with a better experience and keep
    you informed about relevant updates and opportunities.
  </p>
  <div className="dashboardformflex">
    <div className="dashboardformtitle">Complete Your Profile Update</div>
    <div className="updcanc" data-aos="fade-left">
      <div className="circle done" /> <div className="lint" />
      <div className="circle done" /> <div className="lint" />
      <div className="circle" />
    </div>
  </div>
  <div className="dbform" data-aos="fade-down">
    <div className="dbcolumn">
      <div className="loginflex">
        <label htmlFor="">First Name</label>
        <input
          type="text"
          name="firstname"
          id="id_username"
          placeholder="Enter Your First Name"
        />
      </div>
      <div className="loginflex">
        <label htmlFor="">Last Name</label>
        <input
          type="text"
          name="lastname"
          id="id_username"
          placeholder="Enter Your Last Name"
        />
      </div>
    </div>
    <div className="dbcolumn">
      <div className="loginflex">
        <label htmlFor="">Email Address</label>
        <input
          type="email"
          name="email"
          id="id_username"
          placeholder="Enter Your Email Address"
        />
      </div>
      <div className="loginflex">
        <label htmlFor="">Phone Number</label>
        <input
          type="tel"
          name="username"
          id="id_username"
          placeholder="Enter Your Email Address"
        />
      </div>
    </div>
    <div className="dbcolumn">
      <div className="loginflex">
        <label htmlFor="">Email Address</label>
        <input
          type="email"
          name="username"
          id="id_username"
          placeholder="Enter Your Email Address"
        />
      </div>
      <div className="loginflex">
        <label htmlFor="">Email Address</label>
        <input
          type="email"
          name="username"
          id="id_username"
          placeholder="Enter Your Email Address"
        />
      </div>
    </div>
    <div className="dbcolumn">
      <div className="loginflex">
        <label htmlFor="">Email Address</label>
        <textarea name="" id="" cols={30} rows={10} defaultValue={""} />
      </div>
    </div>
    <div className="dbcolumn">
      <div className="loanrequestbutton">
        <button>Submit</button>
      </div>
    </div>
  </div>
</div>
 ) : 'loading.......'

}


        </Dashboardlayout>
  )
}

export default Profileupdate