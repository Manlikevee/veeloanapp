import React, { useEffect, useState } from 'react';
import Dashboarddata from '../components/Dashboard/Dashboarddata/Dashboarddata'
import Dashboardlayout from '../components/Dashboard/Dashboardlayout'
import Loanhistory from '../components/Dashboard/Loanhistory/Loanhistory';
import Loanplans from '../components/Loanplanpopup/Loanplans';
import axiosInstance from '../service/axiosinterceptor';
import { toast } from 'react-toastify';


function Userdashboard() {
  const [loading, setLoading] = useState(true);
  const [loanReference, setLoanReference] = useState('');
  const [responseData, setResponseData] = useState(null);
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    console.log('clickedd')
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };
  const loanReferenceValue = '123'
  useEffect(() => {
    setLoanReference(loanReferenceValue);


    
    if (loanReferenceValue) {
      const myref = loanReferenceValue
     
      axiosInstance
        .get('/Dashboarddata', {
        })

        .then(response => {
          // Handle the response as needed
          toast.success('successfully fetched');
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
            toast.error('An error occurred while Loading Your Data');
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

   <Dashboarddata responseData={responseData} />

   <Loanhistory openModal={openModal}  responseData={responseData} />

<Loanplans isOpen={isModalOpen} closeModal={closeModal} />
   </div>
         ) : (
          <h1>NOT FOUND</h1>
        )}
   
   <br />


    
    
    </Dashboardlayout>
  )
}

export default Userdashboard