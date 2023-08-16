import React from 'react'

const Loanplans = ({ isOpen, closeModal }) => {
  return (
  
<div className="modal" id="myModal" style={{ display: isOpen ? 'flex' : 'none' }}>
  <div className="modal-content">
    <span className="close" onClick={closeModal}>
    &times;
    </span>
    <div className="investmentwrappe">
      <div className="loantypes">
        <div className="loantitle">DreamHome Loan</div>
        <div className="loanbody">
          Turn your dreams into reality with our DreamHome Loan. Whether it's a
          cozy apartment or a spacious house, we provide flexible financing
          options to help you achieve your dream home.
        </div>
        <div className="proceed">
          <div className="loanrequestbuttons">
            <button>Reqeust Loan</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>


   
  )
}

export default Loanplans