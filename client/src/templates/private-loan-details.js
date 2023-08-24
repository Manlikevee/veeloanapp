import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PrivateRoute from '../components/PrivateRoute'; // Import your PrivateRoute component
import { navigate } from "gatsby";
import { handleLogin, isLoggedIn } from "../service/auth";
const PrivateLoanDetailsTemplate = ({ pageContext }) => {
  const { loanId } = pageContext;
  const [loanData, setLoanData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  

  useEffect(() => {
    axios.get(`https://isslblog.vercel.app/loanplans/${loanId}`)
      .then(response => {
        setLoanData(response.data);
        setIsLoading(false);
      })
      .catch(error => {
        console.error('Error fetching loan data:', error);
        setIsLoading(false);
      });
  }, [loanId]);

  if (isLoading) {
    return <div>Loading...</div>;
  }




  return (

      <div>
        <h1>{loanData.Loan_name}</h1>
        <p>{loanData.Loan_description}</p>
        <p>Interest Rate: {loanData.Loan_rate}%</p>
        {/* Display other loan details as needed */}
      </div>

  );
};

export default PrivateLoanDetailsTemplate;
