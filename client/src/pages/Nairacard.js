import React, { useState, useEffect } from 'react';
import Dashboardlayout from '../components/Dashboard/Dashboardlayout'
import axiosInstance from '../service/axiosinterceptor';
import { toast } from 'react-toastify';
import { getUser } from '../service/auth';
import Spinner from '../components/Forms/Accountnumform/Spinner';
import { navigate } from "gatsby";
import Popups from '../components/Utility/Popups';

const Kyc = () => {
  const [atmloading, setatmloading] = useState(false);
  const hostname = window.location.href;
  const rootURL = hostname.split('/').slice(0, 3).join('/');
  const [isloading, setisloading] = useState(false);
  const [responsedata, setresponsedata] = useState('');
  const [redirecturl, setredirecturl] = useState('')
  const [myemeail, setmyemail] = useState(() => getUser().email);
  const [hosturl, sethosturl] = useState(rootURL);
  const [putloading, setputloading] = useState(false);    

  const toggleshowcard= () => {

    if (atmloading) {
      setatmloading(false)
    } else {
      setatmloading(true)
    }
  } 
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Perform form submission logic here
   
    if (!myemeail || !hosturl  ) {
      toast.error('An Error Occured Kindly Contact Support');
      return;
    }

    toast.info('Processing.......')

if(!putloading) {
  try {
    setputloading(true)
    const response = await axiosInstance.post('/startpayment/', {
        email: myemeail,
        hosturl: hosturl,
    })
    .then(response => {
      setresponsedata(response.data);
      console.log(response.data)
      if(response.data.data.message){
        toast.success(response.data.data.message);
        setredirecturl(response.data.data.data.authorization_url)
        const redirectUrl = response.data.data.data.authorization_url;

        setTimeout(() => {
          window.open(redirectUrl, '_blank');
        }, 3000);
        // Open the URL in a new tab
      

      } else {
        toast.success('You Would Be Redirected Soon ');
      }
  
    
      toggleshowcard()
      console.log(response.data);
      setputloading(false)
      
    });
    
    // Do something with the response if needed
  } catch (error) {
    setputloading(false)
    console.log(error)
    toast.error('an error occured While Processing Your Request')
  }
};

if(putloading){
  toast.error('The System is still processing a request Please Wait')
}

}


  return (
    <Dashboardlayout>
      {atmloading ? (
    
       <Popups toggleshowcard={toggleshowcard} mytitle={'Success'} mybody={'Please stand by. You will be redirected to the payment page shortly'} />
      ) : '' 
 }
     
 <br/>

 {!isloading ? (

<div className="dashboardform">
   
  <div className="loanrequesttitles" data-aos="fade-up">
    <h4 onClick={toggleshowcard}> Link Your AtmCard  </h4>
  </div>

  <p className="info-text" data-aos="fade-up">
  Secure your loan application and supercharge convenience by linking your ATM to your profile. Keep your info up-to-date for a smooth journey to financial success.
  </p>
  <div className="dashboardformflex">
    <div className="dashboardformtitle">Complete Your Profile Update</div>
    <div className="updcanc" data-aos="fade-down">
      <div className="circle done" /> <div className="lint" />
      <div className="circle done" /> <div className="lint" />
      <div className="circle" />
    </div>
  </div>

  <form className="dbform" onSubmit={handleSubmit}>
  <div className="dbform" data-aos="fade-down">


<div className='dbcolumn'>
<p className="info-text" data-aos="fade-up">
After clicking 'Proceed,' you can expect to see a small test deposit in your linked bank account within minutes. This one-time payment is crucial to verify your account and ensure secure transactions. We proudly support major bank cards, including American Express, MasterCard, and Visa, to make your experience even more convenient.
  </p>

</div>

<p>
    {
      redirecturl ? (
       <> Payment Url : <a href='{redirecturl}'>Click Here</a> </>
      ) : '' }
    
  </p>

    <div className="dbcolumn">
      <div className="loanrequestbutton">
      <button  disabled={putloading}>
        
   
        { putloading ? (<> <Spinner/> Processing..</>) : 'Proceed' }
        
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

