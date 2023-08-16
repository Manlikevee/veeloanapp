import React from 'react'
import ButtonComponent from '../ButtonComponent'

const Loanpopup = ({ openModal }) => {
  return (
  
        <div className="loanrequests" id="step2Target" data-aos="fade-down">
  <div className="loanrequestheader">
    <div className="loanrequesttitle">
      <h4> Loan Requests </h4>
    </div>
    <div className="loanrequestbutton">
    <ButtonComponent openModal={openModal}/>
    </div>
  </div>
</div>

 
  )
}

export default Loanpopup