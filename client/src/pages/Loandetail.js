import React, { useEffect, useState } from 'react';
import axiosInstance from '../service/axiosinterceptor'; // Import your custom axios instance
import Dashboardlayout from '../components/Dashboard/Dashboardlayout';
import Loanplandetail from '../components/Dashboard/Loanexpand/Loanplandetail/Loanplandetail';
import Loanstatus from '../components/Dashboard/Loanexpand/Loanstatus/Loanstatus';
import { toast } from 'react-toastify';

const Loandetail = () => {
  const [loanReference, setLoanReference] = useState(null);
  const [loading, setLoading] = useState(true);
  const [responseData, setResponseData] = useState(null);

  useEffect(() => {
    // Get the loanReference query parameter from the URL
    const queryParams = new URLSearchParams(window.location.search);
    const loanReferenceValue = queryParams.get('loanReference');

    setLoanReference(loanReferenceValue);

    if (loanReferenceValue) {
      axiosInstance
        .get('/mlv', {
          reference: loanReferenceValue,
        })
        .then(response => {
          // Handle the response as needed
          toast.success('This Loan Is Now Being Processed');
          setResponseData(response.data);
          console.log(response.data)
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
          {responseData.reference}
          <Loanplandetail  responsed={responseData} />
          <Loanstatus responsed={responseData} />
        </div>
      ) : (
        <h1>NOT FOUND</h1>
      )}
    </Dashboardlayout>
  );
};

export default Loandetail;
