import React from 'react'

const Atm = ({toggleshowcard}) => {
  return (
 
<div id={4} className="modal" style={{ display: "block" }}>
  <div
    className="modal-content mnas"
    style={{ backgroundColor: "transparent" }}
  >
    <span onClick={toggleshowcard}
      className="close"
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
    <div className="myimagecontainer" style={{ overflow: "revert" }}>
      <p></p>
      <h3 style={{ textAlign: "center", color: "white" }}>Naira Card</h3>
      <p />
      <br />
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
                    <h5>visa </h5>
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
                    <h5 className="number">408408 ******* 4081</h5>
                    <h5 className="name">veetech</h5>
                  </div>
                  <div className="valid-date">
                    <h6>Valid Thru</h6>
                    <h5>12 / 2030</h5>
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
                    <h5 className="number">************</h5>
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
    </div>
  </div>
</div>


  
  )
}

export default Atm