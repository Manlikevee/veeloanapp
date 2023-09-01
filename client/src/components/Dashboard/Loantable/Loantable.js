import React from 'react'
import Loanpopup from '../Loanpopup/Loanpopup';
import blank from '../blank.png'
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

  const investmentData = [
    {
      accountNumber: '250542118',
      type: 'Fixed Deposit',
      principal: '₦ 130,000.0',
      maturityDate: 'April 14, 2023',
      interestRate: '12%',
      status: 'Pending',
    },
    // Add more data objects as needed
  ];


const Loantable = () => {
  return (
<>



{investmentData.length > 0 ? (
  <ul id="myUL" className="investment_contents">
    {investmentData.map((item, index) => (
 
 <li className="investment_card" data-aos="fade-right" key={index}>
 <div className="card-header">
   <div className="account_number">
     <span className="acc_title">Account Number</span>
     <span className="card_number">
       <a>{item.accountNumber}</a>
     </span>
   </div>
   <div className="hearder_tooltip">
     <span style={{ marginLeft: "auto" }}>....</span>
     <div className="dropdown-content">
       <p>Extra Options</p>
       <a href={`/investmentoverview/${item.accountNumber}`}>
         <small>Details</small>
       </a>
     </div>
   </div>
 </div>
 <div className="investmentcard_type">
   <h6>{item.type}</h6>
 </div>
 <div className="card_rule_bottom" />
 <div className="investment_card_row">
   <div className="investment_card_column">
     <div className="investment_card_brown_text">Principal</div>
   </div>
   <div className="investment_card_column">
     <div className="investment_card_orange_text">{item.principal}</div>
   </div>
 </div>
 <div className="investment_card_row">
   <div className="investment_card_column">
     <div className="investment_card_brown_text">Maturity Date</div>
   </div>
   <div className="investment_card_column">
     <div className="investment_card_orange_text">{item.maturityDate}</div>
   </div>
 </div>
 <div className="investment_card_row">
   <div className="investment_card_column">
     <div className="investment_card_brown_text">Interest Rate</div>
   </div>
   <div className="investment_card_column">
     <div className="investment_card_orange_text">{item.interestRate}</div>
   </div>
 </div>
 <div className="investment_card_row">
   <div className="investment_card_column">
     <div className="investment_card_orange_text">Status</div>
   </div>
   <div className="investment_card_column">
     <div className="investment_card_orange_text">{item.status}</div>
   </div>
 </div>
</li>


    ))}
  </ul>
) : (
  <div className="empty-data-message">
  <img src={blank} alt="" />

  you don’t have any pending request</div>
)}


    <div className="loantablediv" id="step3Target" data-aos="fade-right">
  <div className="loandiv">
    <div className="loantype loandef">Loan Type</div>
    <div className="loantype loandef def2">Reference</div>
    <div className="loanamount loandef def3">Amount</div>
    <div className="loanstatus loandef def4">Status</div>
    <div className="loanaction loandef loanend">Action</div>
  </div>
  <div className="mustscroll">

  {loanDataList.length > 0 ? (
    loanDataList.map((loanData, index) => (
      <div className="loandiv loandivdata" key={index}>
        <div className="loantype loandef">{loanData.type}</div>
        <div className="loantype loandef def2">{loanData.code}</div>
        <div className="loanamount loandef def3">{loanData.amount}</div>
        <div className="loanstatus loandef def4">
          <div className="spa" /> {loanData.status}
        </div>
        <div className="loanaction loandef loanend">{loanData.action}</div>
      </div>
    ))
  ) : (
    <div className="empty-data-message">
    <img src={blank} alt="" />

    you don’t have any pending request</div>
  )}
  </div>
</div>
</>

  )
}

export default Loantable