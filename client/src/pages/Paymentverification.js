import React, { useState, useEffect } from 'react';
import Dashboardlayout from '../components/Dashboard/Dashboardlayout'
import axiosInstance from '../service/axiosinterceptor';
import { toast } from 'react-toastify';
import { getUser } from '../service/auth';
import Spinner from '../components/Forms/Accountnumform/Spinner';
import { navigate } from "gatsby";
import Popups from '../components/Utility/Popups';
import Newatm from '../components/Utility/Newatm';




const Paymentverification = () => {
    const [isloading, setisloading] = useState(true);
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
            const myref = loanReferenceValue
          axiosInstance
            .post('/paymentverify/', {
                trxref: loanReferenceValue,
            })
            .then(response => {
              // Handle the response as needed
              toast.success('Data Gotten');
              console.log(response.data);
              setpaymentststus(response.data);
              console.log(response.data);
              setisloading(false);
            })
            .catch(error => {
              // Handle errors
              console.error('POST request error', error);
              if (error.response.data.message) {
                toast.error(error.response.data.message);
                console.log(error);
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
    if (paymentStatus?.data?.data?.status === 'success') {
        message = (
          <p className='processing'>
            Congratulations! Your payment has been successfully processed, and your account is now active. You can now enjoy uninterrupted access to all the premium features and services we offer. We value your trust in our platform and are committed to providing you with the best experience possible.
          </p>
        );
      } else if (paymentStatus?.data?.data?.status === 'failed') {
        message = (
          <p className='pendingtalk'>
            We apologize for the inconvenience, but it seems that your payment was not successful. Rest assured, our team is working diligently to resolve this issue and ensure a smooth payment process for you. In the meantime, please double-check your payment information and ensure that you have sufficient funds in your account. If you continue to encounter problems, please do not hesitate to reach out to our dedicated support team, who will be happy to assist you.
          </p>
        );
      } else {
        message = (
          <p className='pendingtalk'>
    
We regret to inform you that we are currently unable to process your request. Please reach out to our dedicated support team for further assistance. Your satisfaction and security remain our highest priorities, and we appreciate your patience and understanding as we work to resolve this issue. Our support team is here to help you, so please don't hesitate to contact us for prompt assistance with your request
          </p>
        );
      }
  return (
    <Dashboardlayout>
 

 {!isloading ? (

<div className="dashboardform">
   
  <div className="loanrequesttitles" data-aos="fade-up">
    <h4> Connect Your ATM Card  </h4>
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

  { paymentStatus?.data?.data?.authorization? (
    <> <br/>
  <div className='dbcolumn movecent'>

  <Newatm myauthdata={paymentStatus.data.data}/>
</div>
</>
  ) : '' }


  <div className='dbcolumn'>
<p className="info-text" data-aos="fade-up">
{message}
  </p>

</div>


{ paymentStatus?.data?.data? (
 <table>
 <caption>Payment Summary</caption>
 <thead>
   <tr>
     <th scope="col">Payment Status</th>
     <th scope="col">reference</th>
     <th scope="col">Test Amount</th>
     <th scope="col">Valid</th>
   </tr>
 </thead>
 <tbody>

 <tr>
  <td data-label="Status">{paymentStatus.data.data.status}</td>
  <td data-label="Reference">{paymentStatus.data.data.reference}</td>
  <td data-label="Amount">
    {" "}
    <span id="fig"> {paymentStatus.data.data.amount}</span>{" "}
  </td>
  <td data-label="Valid">{ paymentStatus.data.data.authorization.reusable? ('True') : 
   'False'
  }

  </td>
</tr>


 </tbody>
</table>
  ) : '' }







{ paymentStatus?.data?.data? (
  
  <>
  <br/>
    <div className="dbcolumn">
      <div className="loanrequestbutton">
      <button  disabled={putloading}>
        
   
        { putloading ? (<> <Spinner/> Processing..</>) : 'Save' }
        
        </button>
      </div>
    </div>
    </>
) : ''}


  </div>
  </form>
</div>
 ) : 'loading.......'

}

    </Dashboardlayout>
  )
}

export default Paymentverification