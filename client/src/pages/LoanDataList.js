import React from 'react';
import { Link } from 'gatsby';
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
const LoanDataList = () => {
  return (
    <div>
      {loanDataList.map((loan) => (
        <div key={loan.code}>
          <p>Loan Type: {loan.type}</p>
          <p>Loan Amount: {loan.amount}</p>
          <p>Status: {loan.status}</p>
          <Link to={`/loan-details/${loan.code}`}>View</Link>
        </div>
      ))}
    </div>
  );
};

export default LoanDataList;