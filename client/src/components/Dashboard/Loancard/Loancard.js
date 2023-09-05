import React from 'react'
import accounting from 'accounting';
const Loancard = ({responseData}) => {
  return (
    <div className="dashboardcard"  >
    <div className="dashcard" id="step1Target" data-aos="fade-down">
      <div className="dashcardheader">
        <div className="dashamount">Loan Amount</div>
        <div className="dashtoggle"> </div>
      </div>
      <div className="dashvalue">
        <h3>{accounting.formatMoney(responseData.totalloanamount.principal__sum, '$', 2)}</h3>
      </div>
      <div className="dashfooter">
        <div className="numberofloans">Active Loans</div>
        <div className="totalnum">{responseData.loans}</div>
      </div>
    </div>
  </div>
  
  )
}

export default Loancard