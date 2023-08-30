import React from 'react'

const Loanplandetail = ({responsed}) => {
  return (
    <div>
<>
<br />
  <div className="usersname">
    <h4> {responsed.plan.Loan_name} </h4>
  </div>
  <div className="plandetail">
  {responsed.plan.Loan_description}
  </div>
  <br />
</>


    </div>
  )
}

export default Loanplandetail