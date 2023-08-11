import React from 'react'

const Loancard = () => {
  return (
    <div className="dashboardcard" >
    <div className="dashcard" id="step1Target" data-aos="fade-down">
      <div className="dashcardheader">
        <div className="dashamount">Loan Amount</div>
        <div className="dashtoggle">|</div>
      </div>
      <div className="dashvalue">
        <h3>200,000.00</h3>
      </div>
      <div className="dashfooter">
        <div className="numberofloans">Active Loans</div>
        <div className="totalnum">23</div>
      </div>
    </div>
  </div>
  
  )
}

export default Loancard