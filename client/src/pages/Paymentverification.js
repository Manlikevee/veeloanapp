import React, { useState, useEffect } from 'react';
import Dashboardlayout from '../components/Dashboard/Dashboardlayout'
import axiosInstance from '../service/axiosinterceptor';
import { toast } from 'react-toastify';
import { getUser } from '../service/auth';
import Spinner from '../components/Forms/Accountnumform/Spinner';
import { navigate } from "gatsby";
import Popups from '../components/Utility/Popups';




const Paymentverification = () => {
    const [isloading, setisloading] = useState(false);
    const [putloading, setputloading] = useState(false);   
    const [paymentStatus, setpaymentststus] = useState('')
    const [loanreference, setLoanReference] = useState('');
    const [transactionref, settransactionref] = useState('')


    useEffect(() => {
        const param = typeof window !== 'undefined' && window.location.search;
        // Get the loanReference query parameter from the URL
        const queryParams = new URLSearchParams(param);
        
        // Get the loanReference query parameter from the URL
        const loanReferenceValue = queryParams.get('trxref');
        setLoanReference(loanReferenceValue);
        
    
        if (loanReferenceValue) {
          axiosInstance
            .post('/paymentverify/', {
                trxref: loanreference,
            })
            .then(response => {
              // Handle the response as needed
              toast.success('Data Gotten');
              setpaymentststus(response.data);
              console.log(response.data);
              setisloading(false);
            })
            .catch(error => {
              // Handle errors
              console.error('POST request error', error);
              if (error.response.data.message) {
                toast.error(error.response.data.message);
              } else {
                toast.error('An error occurred while sending the request.');
              }
              setisloading(false);
            });
        } else {
            setisloading(false);
        }
      }, []);
    


    let message;
    if (paymentStatus === 'successful') {
        message = (
          <p>
            Congratulations! Your payment has been successfully processed, and your account is now active. You can now enjoy uninterrupted access to all the premium features and services we offer. We value your trust in our platform and are committed to providing you with the best experience possible.
          </p>
        );
      } else if (paymentStatus === 'failed') {
        message = (
          <p>
            We apologize for the inconvenience, but it seems that your payment was not successful. Rest assured, our team is working diligently to resolve this issue and ensure a smooth payment process for you. In the meantime, please double-check your payment information and ensure that you have sufficient funds in your account. If you continue to encounter problems, please do not hesitate to reach out to our dedicated support team, who will be happy to assist you.
          </p>
        );
      } else {
        message = (
          <p>
            After clicking 'Proceed,' you can expect to see a small test deposit in your linked bank account within minutes. This one-time payment is crucial to verify your account and ensure secure transactions. We are proud to support major bank cards, including American Express, MasterCard, and Visa, to make your experience even more convenient. Your security and satisfaction are our top priorities, and we appreciate your cooperation in this verification process.
          </p>
        );
      }
  return (
    <Dashboardlayout>
 

 {!isloading ? (

<div className="dashboardform">
   
  <div className="loanrequesttitles" data-aos="fade-up">
    <h4> Link Your AtmCard  </h4>
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

  <form className="dbform" >
  <div className="dbform" data-aos="fade-down">


<div className='dbcolumn'>
<p className="info-text" data-aos="fade-up">
{message}
  </p>

</div>



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

export default Paymentverification