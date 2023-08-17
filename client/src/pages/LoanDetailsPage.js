import React from 'react';
import { graphql } from 'gatsby';
import LoanDetails from '../components/LoanDetails';
const loanDataList = [
    {
      type: 'Term Loan',
      code: 'dnnxnu373hnsasas',
      amount: 'N900,000',
      status: 'Pending Approval',
      action: 'View'
    },
    {
      type: 'Term Loan',
      code: 'dnnxnu373hnssxasa',
      amount: 'N900,000',
      status: 'Pending Approval',
      action: 'View'
    },
    {
      type: 'Term Loan',
      code: 'dnnxnu373hnccasass',
      amount: 'N900,000',
      status: 'Pending Approval',
      action: 'View'
    },
    // Add more items as needed
  ];
const LoanDetailsPage = ({ pageContext }) => {
  return (
 
      <LoanDetails pageContext={pageContext} />
 
  );
};

export default LoanDetailsPage;
