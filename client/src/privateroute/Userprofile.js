import React, { useState, useEffect } from 'react';
import Dashboardlayout from '../components/Dashboard/Dashboardlayout'
import Profile from '../components/Dashboard/Profile/Profile'
import axiosInstance from '../service/axiosinterceptor'
import { toast } from 'react-toastify';
import Profileupdatepopup from '../components/Utility/Profileupdatepopup';




const Userprofile = () => {
  const [loading, setLoading] = useState(true);
  const [loanReference, setLoanReference] = useState('');
  const [responseData, setResponseData] = useState(null);
  const [initialFetchCompleted, setInitialFetchCompleted] = useState(false);

  
  // useEffect(() => {
  //   axiosInstance
  //     .get('/Profiledata')
  //     .then(response => {
  //       // Handle the response as needed
  //       toast.success('successfully fetched');
  //       setResponseData(response.data);
  //       console.log(response.data);
  //       setLoading(false);
  //     })
  //     .catch(error => {
  //       // Handle errors
  //       console.error('GET request error', error);
  //       if (error.response && error.response.data && error.response.data.error) {
  //         toast.error(error.response.data.error);
  //       } else {
  //         toast.error('An error occurred while Loading Your Data');
  //       }
  //       setLoading(false);
  //     });
  // }, []);


  
  // useEffect(() => {

  //   if(responseData){
  //     const fetchData = async () => {
  //       try {
  //         const response = await axiosInstance.get('/Profiledata');
  //         // Handle the response as needed
  
  //         setResponseData(response.data);
  //         console.log(response.data);
  //       } catch (error) {
  //         // Fail silently without showing errors
  //         console.error('Fetch error (silently ignored)', error);
  //       }
  //     };
    
  //     // Fetch data initially
  //     fetchData();
    
  //     // Fetch data every 10 seconds
  //     const intervalId = setInterval(fetchData, 60000);
    
  //     // Cleanup the interval when the component unmounts
  //     return () => clearInterval(intervalId);
  //   }
  //   else{
  //     console.log('jelo')
  //   }
  
  // }, []);



  
  useEffect(() => {
    let initialFetchCompleted = false;
  
    const fetchData = async () => {
      try {
        const response = await axiosInstance.get('/Profiledata');
        // Handle the response as needed
       

        if (!initialFetchCompleted) {
          toast.success('successfully fetched');
        } 
        
      
  
        setInitialFetchCompleted(true)
        setResponseData(response.data);
        console.log(response.data);
        setLoading(false);
  
        // Set initialFetchCompleted to true once the initial fetch is successful
        if (!initialFetchCompleted) {
          initialFetchCompleted = true;
        }
      } catch (error) {
        // Handle errors
        console.error('GET request error', error);
        if (error.response && error.response.data && error.response.data.error) {
          toast.error(error.response.data.error);
        } else {
          toast.error('An error occurred while Loading Your Data');
        }
        setLoading(false);
      }
    };
  
    const intervalId = setInterval(() => {
      if (initialFetchCompleted) {
        fetchData();
      } else {
        console.log('Waiting');
      }
    }, 20000);
  
    // Fetch data initially
    fetchData();
  
    // Cleanup the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);

  return (
    <Dashboardlayout>


{loading ? (
        <h4>Loading.............</h4>
      ) : responseData ? (

    <div>
        <Profileupdatepopup/>
      <Profile responseData={responseData}/>
    </div> ) : (
          <h1>NOT FOUND</h1>
        )}
    </Dashboardlayout>
  )
}

export default Userprofile