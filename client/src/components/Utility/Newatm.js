import React from 'react'


const Newatm = ({myauthdata}) => {
  return (
  <>
    { myauthdata?.data?.data?.authorization? (
        <div className="form_body_row">
  <div className="form_body_column">
    <div className="card-group">
      <div className="cardd">
        <div className="logoz">
          <img
            src="https://raw.githubusercontent.com/muhammederdem/credit-card-form/master/src/assets/images/visa.png"
            alt="Visa"
          />
        </div>
        <div className="chip">
          <img
            src="https://raw.githubusercontent.com/muhammederdem/credit-card-form/master/src/assets/images/chip.png"
            alt="chip"
          />
        </div>
        <div className="number">
          <span>{myauthdata.authorization.bin}  </span> <span> *** </span> <span>**** </span>{" "}
          <span>{myauthdata.authorization.last4}  </span>{" "}
        </div>
        <div className="name">{myauthdata.customer.email}</div>
        <div className="from">{myauthdata.authorization.bank}  </div>
        <div className="to">{myauthdata.authorization.exp_month}/{myauthdata.authorization.exp_year}</div>
        <div className="ring" />
      </div>
    </div>
  </div>
</div>
    ) : '' }
    
    </>

  )
}

export default Newatm