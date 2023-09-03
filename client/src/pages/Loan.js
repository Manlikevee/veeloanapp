import React, { useState, useEffect } from 'react';
import Dashboardlayout from '../components/Dashboard/Dashboardlayout'
import Loancard from '../components/Dashboard/Loancard/Loancard';
import Loantable from '../components/Dashboard/Loantable/Loantable';
import Loanplans from '../components/Loanplanpopup/Loanplans';
import Loanpopup from '../components/Dashboard/Loanpopup/Loanpopup';
import axiosInstance from '../service/axiosinterceptor';
import { toast } from 'react-toastify';


const Loan = () => {
  const [loading, setLoading] = useState(true);
  const [loanReference, setLoanReference] = useState('');
  const [responseData, setResponseData] = useState(null);

  useEffect(() => {
    axiosInstance
      .get('/Loanpage')
      .then(response => {
        // Handle the response as needed
        toast.success('successfully fetched');
        setResponseData(response.data);
        console.table(response.data)
        setLoading(false);
      })
      .catch(error => {
        // Handle errors
        console.error('GET request error', error);
        if (error.response && error.response.data && error.response.data.error) {
          toast.error(error.response.data.error);
        } else {
          toast.error('An error occurred while Loading Your Data');
        }
        setLoading(false);
      });
  }, []);
  



  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    console.log('clickedd')
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };
  return (
    <Dashboardlayout>

{loading ? (
      // Loading component while fetching data
     <div> Loading </div>
    ) : responseData ? (
      // Error message component if there's an error
      <div>
      <br/>
      <Loancard responseData={responseData} />

      <Loanpopup openModal={openModal}/>
      <Loantable  responseData={responseData} />
      <Loanplans isOpen={isModalOpen} closeModal={closeModal} />
      </div>
    ) : (
      // Render the data when fetched successfully
      <h1>An Error Occured</h1>
    )}




    </Dashboardlayout>
  )
}

export default Loan