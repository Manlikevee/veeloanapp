import React from 'react'
import pics from '../Accountnumform/pic.svg'
const Loanoffer = () => {
  return (
    <div>

        <div className="dashboardform">
  <div className="loanrequesttitles">
    <div className="steppercontainer">
      <div className="stepper">
        <div className="numb">1</div>
        <div className="title">Loan Request</div>
      </div>
      <div className="stepper ends">
        <div className="numb">2</div>
        <div className="title">Loan Overview</div>
      </div>
    </div>
  </div>
  <br />
  <div className="investment_product_type">
    <div className="investment_product_type_text">
      Product Type:{" "}
      <span className="investment_product_span">Fixed Deposit</span>{" "}
    </div>
  </div>
  <div className="investment_text">
    Lörem ipsum lanangen pöras suprarade, blåkort Cecilia Isaksson. Sylyrat
    bäplak. Ajäbel nyhetsbok utom mir inklusive antikror om bägen. Mikrootrohet
    Fredrik Nilsson Inga Gunnarsson.
  </div>
  <div className="tansaction_details">
    <div className="transaction_container">
      <div className="transaction_header">Transaction Details</div>
      <div className="transaction_flex" id="principal">
        <div className="transaction_flex_column">Principal</div>
        <div className="transaction_flex_column_content">N40,000</div>
      </div>
      <div className="transaction_flex">
        <div className="transaction_flex_column" id="tenor">
          Tenor
        </div>
        <div className="transaction_flex_column_content">90 days</div>
      </div>
      <div className="transaction_flex">
        <div className="transaction_flex_column">Interest (5%)</div>
        <div className="transaction_flex_column_content">N2,000</div>
      </div>
      <div className="transaction_flex">
        <div className="transaction_flex_column">Maturity Amount</div>
        <div className="transaction_flex_column_content">N42,000</div>
      </div>
      <div className="transaction_flex_btn" id="acceptordeny">
        <div className="transaction_flex_column_btn1">
          <button>I agree</button>
        </div>
        <div className="transaction_flex_column_btn2">
          <button>I don’t agree</button>
        </div>
      </div>
    </div>
    <div
      className="transaction_container"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      {/* <span class="stamp is-approved">Approveds</span> */}

      <img src={pics} 
            style={{
                width: "100%",
                height: "100%",
                justifyContent: "center"
              }}/>

    </div>
  </div>
</div>

    </div>
  )
}

export default Loanoffer