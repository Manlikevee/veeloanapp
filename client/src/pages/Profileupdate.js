import React, { useState, useEffect } from 'react';
import Dashboardlayout from '../components/Dashboard/Dashboardlayout'
import axiosInstance from '../service/axiosinterceptor';
import { toast } from 'react-toastify';


const Profileupdate = () => {
  const [isloading, setisloading] = useState(true);
  const [responsedata, setresponsedata] = useState('');
  const [responseprofiledata, setresponseprofiledata] = useState('');
  const [firstname, setfirstname] = useState('');
  const [lastname, setlastname] = useState('');
  const [email, setemail] = useState('');
  const [username, setusername] = useState('');
  const [middlename, setmiddlename] = useState('');
  const [phonenumber, setphonenumber] = useState('');
  const [gender, setgender] = useState('');
  const [ssn, setssn] = useState('');
    
  useEffect(() => {
    axiosInstance.get('/getprofileobj')
      .then(response => {
        setresponsedata(response.data);
        console.log('response.data')
        setfirstname(response.data.user.first_name)
        setlastname(response.data.user.last_name)
        setusername(response.data.user.username)
        setemail(response.data.user.email)
        setmiddlename(response.data.middle_name)
        setphonenumber(response.data.phonenumber)
        setisloading(false);
      })
      .catch(error => {
        console.error("Error fetching profile data:", error);
        setisloading(false);
      });


  }, []);


  const handleSubmit = async (e) => {
    e.preventDefault();
    // Perform form submission logic here

    if (!firstname || !lastname || !email || !username || !middlename || !phonenumber || !gender || !ssn  ) {
      alert('Please fill in all required fields.');
      return;
    }

    alert('all good')


    try {
      const response = await axiosInstance.put('/update-profile/', {
       
        user: {
          first_name: firstname,
          last_name: lastname,
          email: email,
          username: username
        },

        profile: {
          middle_name: middlename,
          phonenumber: phonenumber,
          gender: gender,
          ssn: ssn
        }
        
      })
      .then(response => {
        // Handle the response as needed
        toast.success('successfully fetched');
        setresponseprofiledata(response.data);
        console.log(response.data);
   
      });
      
      // Do something with the response if needed
    } catch (error) {
      alert(error)
      console.error('Error creating loan:', error);
      // Handle the error if needed
    }
  };



  return (
    <Dashboardlayout>
 <br/>

 {!isloading ? (

<div className="dashboardform">
   
  <div className="loanrequesttitles" data-aos="fade-left">
    <h4> Profile Update </h4>
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
  <form className="dbform" onSubmit={handleSubmit}>
  <div className="dbform" data-aos="fade-down">
    <div className="dbcolumn">
      <div className="loginflex">
        <label htmlFor="">First Name</label>
        <input
          type="text"
          name="firstname"
          id="id_username"
          value={firstname}
          onChange={e => setfirstname(e.target.value)}
          placeholder="Enter Your First Name"
        />
      </div>
      <div className="loginflex">
        <label htmlFor="">Last Name</label>
        <input
          type="text"
          name="lastname"
          id="id_username"
          value={lastname}
          onChange={e => setlastname(e.target.value)}
          placeholder="Enter Your Last Name"
        />
      </div>
    </div>
    <div className="dbcolumn">
    <div className="loginflex">
        <label htmlFor="">Middlename</label>
        <input
          type="text"
          name="username"
          value={middlename}
          id="id_username"
          onChange={e => setmiddlename(e.target.value)}
          placeholder="Enter Your Email Address"
        />
      </div>
      <div className="loginflex">
        <label htmlFor="">Email Address</label>
        <input
          type="email"
          name="email"
          value={email}
          onChange={e => setemail(e.target.value)}
          readOnly
          id="id_username"
          placeholder="Enter Your Email Address"
        />
      </div>

    </div>
    <div className="dbcolumn">
    <div className="loginflex">
        <label htmlFor="">Phone Number</label>
        <input
          type="tel"
          name="username"
          id="id_username"
          value={phonenumber}
          onChange={e => setphonenumber(e.target.value)}
          placeholder="Enter Your Email Address"
        />
      </div>
      <div className="loginflex">
        <label htmlFor="">Username</label>
        <input
          type="text"
          name="username"
          id="id_username"
          value={username}
          onChange={e => setusername(e.target.value)}
          readOnly
          placeholder="Enter Your Email Address"
        />
      </div>
    </div>
    <div className="dbcolumn">
      {/* <div className="loginflex">
        <label htmlFor="">Email Address</label>
        <textarea name="" id="" cols={30} rows={10} defaultValue={""} />
      </div> */}
        <div className="loginflex">
        <label htmlFor="">BVN/NIN</label>
        <input
          type="text"
          name="username"
          id="id_username"
          value={ssn}
          onChange={e => setssn(e.target.value)}
          placeholder="Enter Your Email Address"
        />
      </div>

      <div className="loginflex">
        <label htmlFor="">Gender</label>
        <input
          type="text"
          name="username"
          id="id_username"
          value={gender}
          onChange={e => setgender(e.target.value)}
          placeholder="Enter Your Email Address"
        />
      </div>
    </div>
    <div className="dbcolumn">
      <div className="loanrequestbutton">
      <button>Submit</button>
      </div>
    </div>
  </div>
  </form>
</div>
 ) : 'loading.......'

}


        </Dashboardlayout>
  )
}

export default Profileupdate

