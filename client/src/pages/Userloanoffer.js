import Dashboardlayout from '../components/Dashboard/Dashboardlayout';
import Loanoffer from '../components/Forms/Accountnumform/Loanoffer';
import React, { useEffect, useState } from 'react';
import axiosInstance from '../service/axiosinterceptor';
import { toast } from 'react-toastify';


const Userloanoffer = () => {
  const [loanReference, setLoanReference] = useState('');
  const [loading, setLoading] = useState(true);
  const [responseData, setResponseData] = useState(null);

  const param = typeof window !== 'undefined' && window.location.search;
  // Get the loanReference query parameter from the URL
  const queryParams = new URLSearchParams(param);
  const loanReferenceValue = queryParams.get('loanReference');

  useEffect(() => {
    setLoanReference(loanReferenceValue);


    
    if (loanReferenceValue) {
      const myref = loanReferenceValue
     
      axiosInstance
        .post('/mlv', {
          reference: myref,
        })

        .then(response => {
          // Handle the response as needed
          toast.success('Loan Details gotten');
          setResponseData(response.data);
          console.log(response.data);
          setLoading(false);
        })
        .catch(error => {
          // Handle errors
          console.error('POST request error', error);
          if (error.response && error.response.data && error.response.data.error) {
            toast.error(error.response.data.error);
          } else {
            toast.error('An error occurred while sending the request.');
          }
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  }, []);
  return (
    <Dashboardlayout>

{loading ? (
        <h1>Loading...</h1>
      ) : loanReference && responseData ? (
        <div>
     <Loanoffer refss={loanReference} responsed={responseData} />
      
        </div>
      ) : (
        <h1>NOT FOUND</h1>
      )}
 
    </Dashboardlayout>
  );
};

export default Userloanoffer