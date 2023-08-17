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

  
const Loantable = () => {
  return (
<>


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