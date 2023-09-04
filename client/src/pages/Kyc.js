import React, { useState, useEffect } from 'react';
import Dashboardlayout from '../components/Dashboard/Dashboardlayout'
import axiosInstance from '../service/axiosinterceptor';
import { toast } from 'react-toastify';
import Spinner from '../components/Forms/Accountnumform/Spinner';


const Kyc = () => {
  const [isloading, setisloading] = useState(true);
  const [responsedata, setresponsedata] = useState('');
  const [responseprofiledata, setresponseprofiledata] = useState('');
  const [residential_address, setresidential_address] = useState('');
  const [work_sector, setwork_sector] = useState('');
  const [form_of_id, setform_of_id] = useState('');
  const [id_number, setid_number] = useState('');
  const [job_title, setjob_title] = useState('');
  const [city, setcity] = useState('');
  const [region, setregion] = useState('');
  const [country, setcountry] = useState('');
  const [putloading, setputloading] = useState(false);    

  useEffect(() => {
    axiosInstance.get('/KYCView')
      .then(response => {
        setresponsedata(response.data);
        setform_of_id(response.data.form_of_id)
        setwork_sector(response.data.work_sector)
        setid_number(response.data.id_number)
        setjob_title(response.data.job_title)
        setcity(response.data.city)
        setregion(response.data.region)
        setcountry(response.data.country)
        console.log('response.data')
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

    if (!residential_address || !work_sector || !form_of_id || !id_number || !job_title || !country || !city || !region  ) {
      alert('Please fill in all required fields.');
      return;
    }

    alert('all good')

if(!putloading) {
  try {
    setputloading(true)
    const response = await axiosInstance.put('/KYCView/', {
     

      profile: {
        residential_address: residential_address,
        work_sector: work_sector,
        form_of_id: form_of_id,
        id_number: id_number,
        job_title: job_title,
        country: country,
        city: city,
        region: region
      }
      
    })
    .then(response => {
     
      // Handle the response as needed
      toast.success('successfully fetched');
      setresponseprofiledata(response.data);
      console.log(response.data);
      setputloading(false)
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
    <h4> KYC Update </h4>
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
          value={work_sector}
          onChange={e => setwork_sector(e.target.value)}
          placeholder="Enter Your First Name"
        />
      </div>

      <div className="loginflex">
        <label htmlFor="">Job Title</label>
        <input
          type="text"
          name="username"
          value={job_title}
          id="id_username"
          onChange={e => setjob_title(e.target.value)}
          placeholder="Enter Your Middle Name"
        />
      </div>
    </div>
    <div className="dbcolumn">

    <div className="loginflex">
        <label htmlFor="">Form Of Id</label>
        <input
          type="text"
          name="lastname"
          id="id_username"
          value={form_of_id}
          onChange={e => setform_of_id(e.target.value)}
          placeholder="Form Of Id"
        />
      </div>
      <div className="loginflex">
        <label htmlFor="">Id Number</label>
        <input
          type="number"
          name="idnumber"
          value={id_number}
          onChange={e => setid_number(e.target.value)}
          readOnly
          id="id_username"
          placeholder="Enter Your Identification Number"
        />
      </div>

    </div>

    <div className="dbcolumn">
    <div className="loginflex">
        <label htmlFor="">Country</label>
        <input
          type="text"
          name="username"
          id="id_username"
          value={country}
          onChange={e => setcountry(e.target.value)}
          placeholder="Enter Your Country"
        />
      </div>
    </div>


    <div className="dbcolumn">
    <div className="loginflex">
        <label htmlFor="">City</label>
        <input
          type="tel"
          name="username"
          id="id_username"
          value={city}
          onChange={e => setcity(e.target.value)}
          placeholder="Enter Your City"
        />
      </div>
      <div className="loginflex">
        <label htmlFor="">Region</label>
        <input
          type="text"
          name="username"
          id="id_username"
          value={region}
          onChange={e => setregion(e.target.value)}
          readOnly
          placeholder="Enter Your Region"
        />
      </div>
    </div>
    <div className="dbcolumn">
      <div className="loginflex">
        <label htmlFor="">Email Address</label>
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

export default Kyc

