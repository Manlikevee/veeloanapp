import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'gatsby';

const Loanplans = ({ isOpen, closeModal }) => {
  const [loanData, setLoanData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('https://isslblog.vercel.app/loanplans/')
      .then(response => {
        setLoanData(response.data);
        setIsLoading(false);
      })
      .catch(error => {
        setError(error);
        setIsLoading(false);
      });
  }, []);

  let content;

  if (isLoading) {
    content = <div>Loading...</div>;
  } else if (error) {
    content = <div>Error fetching data: {error.message}</div>;
  } else {
    content = loanData.map(loan => (
      <div key={loan.id} className="loantypes">
        <div className="loantitle">{loan.Loan_name}</div>
        <div className="loanbody">
          <p>{loan.Loan_description}</p>
          <p>Interest Rate: {loan.Loan_rate}%</p>
          {/* Add more fields as needed */}
        </div>
        <div className="proceed">
          <div className="loanrequestbuttons">
          <Link to={`/private-loan-details/${loan.id}`}>      <button>
          
              Request Loan
              
            </button> </Link>
          </div>
        </div>
      </div>
    ));
  }

  return (
  
<div className="modal" id="myModal" style={{ display: isOpen ? 'flex' : 'none' }}>
  <div className="modal-content">
    <span className="close" onClick={closeModal}>
    &times;
    </span>
    <div className="investmentwrappe">
    
 

    {content}

    </div>
  </div>
</div>


   
  )
}

export default Loanplans