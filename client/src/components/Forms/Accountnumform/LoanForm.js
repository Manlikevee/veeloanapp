import React, { useState, useEffect } from 'react';
var curr = new Date();
curr.setDate(curr.getDate() + 3);
var date = curr.toISOString().substring(0,10);

const LoanForm = ({ loanData }) => {
  const [principal, setPrincipal] = useState('');
  const [startDate, setStartDate] = useState('');
  const [tenor, setTenor] = useState('');
  const [maturityDate, setMaturityDate] = useState('');
  const [interestRate, setInterestRate] = useState(loanData.Loan_rate);
  const [totalRepayment, setTotalRepayment] = useState('');

  useEffect(() => {
    if (startDate && tenor) {
      const calculatedMaturityDate = new Date(startDate);
      calculatedMaturityDate.setFullYear(calculatedMaturityDate.getFullYear() + parseInt(tenor));
      setMaturityDate(calculatedMaturityDate.toISOString().split('T')[0]);
    }
  }, [startDate, tenor]);

  const getFormattedDate = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  useEffect(() => {
    if (tenor) {
      const today = new Date();
      setStartDate(getFormattedDate(today)); // Set to today's date
  
      const calculatedMaturityDate = new Date(today);
      calculatedMaturityDate.setFullYear(calculatedMaturityDate.getFullYear() + parseInt(tenor));
      setMaturityDate(calculatedMaturityDate.toISOString().split('T')[0]);
    }
  }, [tenor]);
  

  useEffect(() => {
    if (principal && tenor && interestRate) {
      const interest = (principal * interestRate * tenor) / 100;
      setTotalRepayment(parseFloat(principal) + parseFloat(interest));
    }
  }, [principal, tenor, interestRate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form submission logic here
  };

  return (
    <div>
        <form className="dbform" onSubmit={handleSubmit}>
              <div className="dbcolumn">
                <div className="loginflex">
                  <label htmlFor="Principal">Principal</label>
                  <input type="number" value={principal} onChange={e => setPrincipal(e.target.value)} />
                </div>
                <div className="loginflex">
                  <label htmlFor="Tenor">Tenor</label>
                  <input type="number" value={tenor} onChange={e => setTenor(e.target.value)} />
                </div>
              </div>
              <div className="dbcolumn">
                <div className="loginflex">
                  <label htmlFor="startDate">Start Date</label>
                  <input type="date" value={startDate} onChange={e => setStartDate(e.target.value)} defaultValue={date} />
                </div>
                <div className="loginflex">
                  <label htmlFor="maturityDate">Maturity Date</label>
                  <input type="date" readOnly value={maturityDate}  />
                </div>
              </div>
              <div className="dbcolumn">
                <div className="loginflex">
                  <label htmlFor="interestRate">Interest Rate</label>
                  <input type="text" readOnly value={interestRate} />
                </div>
                <div className="loginflex">
                  <label htmlFor="totalRepayment">Total Repayment</label>
                  <input type="text" readOnly value={totalRepayment} />
                </div>
              </div>
              <div className="dbcolumn">
                <div className="loanrequestbutton">
                  <button>Submit</button>
                </div>
              </div>
            </form>
    </div>
  );
};

export default LoanForm;
