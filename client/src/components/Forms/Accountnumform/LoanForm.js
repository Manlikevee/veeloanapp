import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { navigate } from 'gatsby';
import { getUser } from "../../../service/auth"
var curr = new Date();
curr.setDate(curr.getDate() + 3);
var date = curr.toISOString().substring(0,10);

const LoanForm = ({ loanData }) => {
  const [principal, setPrincipal] = useState('');
  const [startDate, setStartDate] = useState('');
  const [tenorMonths, setTenorMonths] = useState('');
  const [maturityDate, setMaturityDate] = useState('');
  const [interestRate, setInterestRate] = useState(loanData.Loan_rate);
  const [totalRepayment, setTotalRepayment] = useState('');
  const [loanid, setLoanid] = useState(loanData.id);

  const getFormattedDate = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };
  useEffect(() => {
    if (tenorMonths) {
      const today = new Date();
      setStartDate(getFormattedDate(today)); // Set to today's date
  
      const calculatedMaturityDate = new Date(today);
      calculatedMaturityDate.setMonth(calculatedMaturityDate.getMonth() + parseInt(tenorMonths));
      setMaturityDate(getFormattedDate(calculatedMaturityDate));
    }
  }, [tenorMonths]);
  useEffect(() => {
    if (startDate && tenorMonths) {
      const calculatedMaturityDate = new Date(startDate);
      calculatedMaturityDate.setMonth(calculatedMaturityDate.getMonth() + parseInt(tenorMonths));
      setMaturityDate(getFormattedDate(calculatedMaturityDate));
    }
  }, [startDate, tenorMonths]);
  
  useEffect(() => {
    if (principal && tenorMonths && interestRate) {
      const monthlyInterestRate = ( parseFloat(interestRate) / 100 ) / 12; // Convert annual rate to monthly
      const totalRepaymentAmounts = parseFloat(principal) * monthlyInterestRate / (1 - Math.pow(1 / (1 + monthlyInterestRate), tenorMonths));
      const totalRepaymentAmount = parseFloat(totalRepaymentAmounts) * tenorMonths
      setTotalRepayment(totalRepaymentAmount.toFixed(2));
    }

  }, [principal, tenorMonths, interestRate]);
  
  
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Perform form submission logic here

    if (!principal || !startDate || !tenorMonths || !interestRate || !totalRepayment) {
      alert('Please fill in all required fields.');
      return;
    }

    const selectedStartDate = new Date(startDate);
    const today = new Date();

    if (selectedStartDate < today) {
      alert('Please select a future start date.');
      return;
    }

    try {
      const response = await axios.post('https://isslblog.vercel.app/loanoverview/', {
        principal: principal,
        tenor: tenorMonths,
        monthly_repayment : principal,
        interest_rate: interestRate,
        total_repayment: totalRepayment,
        plan: loanid,
        requestuser: getUser().id,
        effective_date : startDate,
        maturity_date : maturityDate

        // Add other fields here if needed
      });
  
      console.log('Loan created:', response.data);
      navigate('/');
      // Do something with the response if needed
    } catch (error) {
      console.error('Error creating loan:', error);
      // Handle the error if needed
    }
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
                  <label htmlFor="Tenor">Tenor (Months)</label>
                  <input type="number"  value={tenorMonths}   onChange={(e) => setTenorMonths(e.target.value)} />
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
                <div className="loginflex">
                  <label htmlFor="interestRate">Loan Reason</label>
                  <select name="loanpurpose" id="id_loanpurpose">
  <option value="">---------</option>
  <option value="Business Loans">Business Loans</option>
  <option value="Individual Loans" selected="">
    Individual Loans
  </option>
</select>
                  
                </div>
                <div className="loginflex">
                  <label htmlFor="totalRepayment">Repayment Source </label>
                  <select name="loanpurpose" id="id_loanpurpose">
  <option value="">---------</option>
  <option value="Business Loans">Business Loans</option>
  <option value="Individual Loans" selected="">
    Individual Loans
  </option>
</select>
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
