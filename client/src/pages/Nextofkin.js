import React, { useState, useEffect } from 'react';
import Dashboardlayout from '../components/Dashboard/Dashboardlayout'
import axiosInstance from '../service/axiosinterceptor';
import { toast } from 'react-toastify';
import Spinner from '../components/Forms/Accountnumform/Spinner';
import { navigate } from "gatsby";


const Nextofkin = () => {
  const [isloading, setisloading] = useState(true);
  const [responsedata, setresponsedata] = useState('');
  const [responseprofiledata, setresponseprofiledata] = useState('');
  const [firstname, setfirstname] = useState('');
  const [lastname, setlastname] = useState('');
  const [email, setemail] = useState('');
  const [middlename, setmiddlename] = useState('');
  const [phonenumber, setphonenumber] = useState('');
  const [gender, setgender] = useState('');
  const [residential_address, setresidential_address] = useState('');
  const [putloading, setputloading] = useState(false);    

  useEffect(() => {
    axiosInstance.get('/NextOfKinlview/')
      .then(response => {
        setresponsedata(response.data);
        console.log(response.data)
        setfirstname(response.data.first_name);
        setlastname(response.data.last_name)
        setmiddlename(response.data.middle_name)
        setemail(response.data.email)
        setphonenumber(response.data.phonenumber)
        setgender(response.data.gender)
        setresidential_address(response.data.residential_address)
        setisloading(false);
      
      })
      .catch(error => {
        toast.error('Error fetching profile data')
        console.error("Error fetching profile data:", error);
        setisloading(false);
      });


  }, []);


  const handleSubmit = async (e) => {
    e.preventDefault();
    // Perform form submission logic here

    if (!firstname || !lastname || !email || !phonenumber || !gender || !middlename || !residential_address ) {
      toast.error('Please fill in all required fields.');
      return;
    }

    toast.info('Processing.......')

if(!putloading) {
  try {
    setputloading(true)
    const response = await axiosInstance.put('/NextOfKinlview/', {
     

        nextofkin: {
        first_name: firstname,
        last_name: lastname,
        email: email,
        phonenumber: phonenumber,
        gender: gender,
        middle_name: middlename,
        residential_address: residential_address,
   
      }
      
    })
    .then(response => {
     
      // Handle the response as needed
      toast.success('Next Of kin Details Successfully Updated');
      setresponseprofiledata(response.data);
      console.log(response.data);
      setputloading(false)
      setTimeout(() => {
        navigate('/AccountNumberVerification');
      }, 3000); 

      
    });
    
    // Do something with the response if needed
  } catch (error) {
    setputloading(false)
    // Handle any errors that occur during the request
    console.error('Error updating profile:', error);
console.log(error)
    // Display validation errors with toast if they exist
    if (error.response && error.response.data && error.response.data.errors) {
      const errors = error.response.data.errors;
       const errorcontainer = error.response.data.errors
       if (errors) {
        // Display profile errors
        const profileErrors = errors.profile_errors;
        for (const field in profileErrors) {
          const fieldErrors = profileErrors[field];
          fieldErrors.forEach((errorMessage) => {
            toast.error(`${field}: ${errorMessage}`, {
              position: toast.POSITION.TOP_RIGHT,
            });
          });
        }

}
    } else {
      setputloading(false)
      alert('An error occurred while updating the profile.');
    }
  }
};

if(putloading){
  toast.error('The System is still processing a request Please Wait')
}

}


  return (
    <Dashboardlayout>
 <br/>

 {!isloading ? (

<div className="dashboardform">
   
  <div className="loanrequesttitles" data-aos="fade-left">
    <h4> Next Ok Kin Update </h4>
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
      name="lastname"
      id="id_username"
      value={firstname}
      onChange={e => setfirstname(e.target.value)}
      placeholder="Enter First Name"
    />
  </div>
  <div className="loginflex">
    <label htmlFor="">Last Name</label>
    <input
      type="text"
      name="idnumber"
      value={lastname}
      onChange={e => setlastname(e.target.value)}
      id="id_username"
      placeholder="Enter Last Name"
    />
  </div>

</div>


    <div className="dbcolumn">
    <div className="loginflex">
    <label htmlFor="">Middle Name</label>
    <input
      type="text"
      name="lastname"
      id="id_username"
      value={middlename}
      onChange={e => setmiddlename(e.target.value)}
      placeholder="Enter Middle Name"
    />
  </div>
    <div className="loginflex">
        <label htmlFor="">Email</label>
        <input
          type="email"
          name="lastname"
          id="id_username"
          value={email}
          onChange={e => setemail(e.target.value)}
          placeholder="Enter Email"
        />
      </div>
   

    </div>

    <div className="dbcolumn">

    <div className="loginflex">
        <label htmlFor="">Gender</label>
        <select
  name="gender"
  id="id_gender"
  value={gender}
  onChange={e => setgender(e.target.value)}
>

{ gender ? (<option value={gender} selected>{gender} </option>) :
  <option value="">Select Gender</option>
 }


  <option value="Male">Male</option>
  <option value="Female">Female</option>
</select>

      </div>
      <div className="loginflex">
        <label htmlFor="">Phone Number </label>
        <input
          type="number"
          name="idnumber"
          value={phonenumber}
          onChange={e => setphonenumber(e.target.value)}
        
          id="id_username"
          placeholder="Enter Your Phone Number"
        />
      </div>

    </div>

    <div className="dbcolumn">
      <div className="loginflex">
        <label htmlFor="">Residential Address</label>
        <textarea name="" id="" cols={30} rows={10} defaultValue={""} value={residential_address}   onChange={e => setresidential_address(e.target.value)}/>
      </div>
  
    </div>
    <div className="dbcolumn">
      <div className="loanrequestbutton">
      <button  disabled={putloading}>
  
        { putloading ? (<> <Spinner/> Processing..</>) : 'Submit' }
        
        </button>
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

export default Nextofkin

