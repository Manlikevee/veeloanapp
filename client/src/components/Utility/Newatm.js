import React from 'react'


const Newatm = (props) => {
  return (
  
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
          <span>{props.myauthdata.authorization.bin}  </span> <span> *** </span> <span>**** </span>{" "}
          <span>{props.myauthdata.authorization.last4}  </span>{" "}
        </div>
        <div className="name">{props.myauthdata.customer.email}</div>
        <div className="from">{props.myauthdata.authorization.bank}  </div>
        <div className="to">{props.myauthdata.authorization.exp_month}/{props.myauthdata.authorization.exp_year}</div>
        <div className="ring" />
      </div>
    </div>
  </div>
</div>

  )
}

export default Newatm