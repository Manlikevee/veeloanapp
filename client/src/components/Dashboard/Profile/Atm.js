import React from 'react'

const Atm = ({toggleshowcard ,  responseData}) => {
  return (
 


<div id={4} className="modal" style={{ display: "block" }} >
  <div
    className="modal-content mnas"
    style={{ backgroundColor: "transparent" }}>
    <span onClick={toggleshowcard}
      className="closes"
      style={{
        background: "white",
        width: 40,
        padding: 10,
        marginTop: "-20px",
        height: 40,
        textAlign: "center",
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer"
      }}
    >
      ×
    </span>
    <div className="myimagecontainer" style={{ overflow: "revert" }} data-aos="zoom-in">
      <p></p>
      <h3 style={{ textAlign: "center", color: "white" }} data-aos="fade-down">Naira Card</h3>
      <p />
      <br />

      {responseData?.paymentdata?.authorization_data?.data?.authorization?
    (
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <div className="osd">
              <div className="cardcontainer">
                <div className="cardheader">
                  <span className="logos">
                    <img
                      src="file:///C:/Users/HP/Desktop/swap-sticky-image-on-scroll/swap-sticky-image-on-scroll/dist/images/logo.png"
                      alt=""
                    />
                    <h5> {responseData.paymentdata.authorization_data.data.authorization.brand}  </h5>
                  </span>
                  <img
                    src="https://raw.githubusercontent.com/muhammederdem/credit-card-form/master/src/assets/images/chip.png"
                    alt=""
                    className="chip"
                  />
                </div>
                <div className="card-details">
                  <div className="name-number">
                    <h6>Card Number</h6>
                    <h5 className="number" data-aos="fade-down"> 
                    {responseData.paymentdata.authorization_data.data.authorization.bin} 
                     *******  {responseData.paymentdata.authorization_data.data.authorization.last4} </h5>
                    <h5 className="name"> {responseData.paymentdata.authorization_data.data.authorization.bank} </h5>
                  </div>
                  <div className="valid-date">
                    <h6>Valid Thru</h6>
                    <h5> {responseData.paymentdata.authorization_data.data.authorization.exp_month}  /  {responseData.paymentdata.authorization_data.data.authorization.exp_year} </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flip-card-back">
            <div className="osd">
              <div className="cardcontainer">
                <div className="cardheader">
                  <span className="logos">
                    <img
                      src="file:///C:/Users/HP/Desktop/swap-sticky-image-on-scroll/swap-sticky-image-on-scroll/dist/images/logo.png"
                      alt=""
                    />
                    <h5 />
                  </span>
                  <img
                    src="https://raw.githubusercontent.com/muhammederdem/credit-card-form/master/src/assets/images/chip.png"
                    alt=""
                    className="chip"
                  />
                </div>
                <div className="card-details">
                  <div className="name-number">
                    <h6>Cvv</h6>
                    <h5 className="number"> ############### </h5>
                    <h5 className="name" />
                  </div>
                  <div className="valid-date">
                    <h6 />
                    <h5 />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    ) : ''  
    }

    </div>
  </div>
</div>


  
  )
}

export default Atm