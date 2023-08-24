import React, { useState, useEffect } from 'react';
import Dashboardlayout from '../components/Dashboard/Dashboardlayout'
import axios from 'axios';
import LoanForm from '../components/Forms/Accountnumform/LoanForm'; // Import the LoanForm component
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
    <Dashboardlayout>


    <div className="dashboardform">
            <div className="loanrequesttitles">
              <div className="steppercontainer">
                <div className="stepper">
                  <div className="numb">1</div>
                  <div className="title">Loan Request</div>
                </div>
                <div className="stepper ends">
                  <div className="numb">2</div>
                  <div className="title">Loan Overview</div>
                </div>
              </div>
            </div>
            <span className="info-title">{loanData.Loan_name}</span>
            <p className="info-text">
              {loanData.Loan_description}
            </p>
            <div className="dashboardformflex">
              <div className="dashboardformtitle">Quick Loan Application Form</div>
              <div className="updcanc">
                <div className="circle done" /> <div className="lint" />{" "}
                <div className="circle done" /> <div className="lint" />
                <div className="circle" />
              </div>
            </div>
      
      {/* Display other loan details as needed */}
      
      {/* Pass loanData to the LoanForm component */}
      <LoanForm loanData={loanData} />

    </div>

    </Dashboardlayout>
  );
};

export default PrivateLoanDetailsTemplate;
