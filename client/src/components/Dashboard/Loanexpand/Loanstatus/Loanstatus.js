import React from 'react'

const Loanstatus = () => {
  return (
    <>
    <div className="planboxs" data-aos="fade-up">
    <div className="plangrid">
      <div className="planbox">
        <div className="plantitle gridloantitle card-title">Account Number</div>
        <div className="plandetail gridloancontent card-subtitle">346577782</div>
      </div>
    </div>
    <div className="planlines" />
    <div className="plangrid">
      <div className="planbox">
        <div className="plantitle gridloantitle card-title">
          Total Loan Repayment
        </div>
        <div className="plandetail gridloancontent card-subtitle">
          N 22,000,000.00
        </div>
      </div>
      <div className="planbox">
        <div className="plantitle gridloantitle card-title">Loan Amount</div>
        <div className="plandetail gridloancontent card-subtitle">
          N 2,000,000.00
        </div>
      </div>
      <div className="planbox">
        <div className="plantitle gridloantitle card-title">Interest</div>
        <div className="plandetail gridloancontent card-subtitle">
          N 2,000,000.00
        </div>
      </div>
      <div className="planbox">
        <div className="plantitle gridloantitle card-title">Tenor</div>
        <div className="plandetail gridloancontent card-subtitle">180 days</div>
      </div>
      <div className="planbox">
        <div className="plantitle gridloantitle card-title">Effectivate Date</div>
        <div className="plandetail gridloancontent card-subtitle">12/05/2022</div>
      </div>
      <div className="planbox">
        <div className="plantitle gridloantitle card-title">Due Date</div>
        <div className="plandetail gridloancontent card-subtitle">12/05/2023</div>
      </div>
    </div>
  </div>
  <div className="daysleft" data-aos="fade-right">
  <div className="daysflex">
    <div className="left">Days Left</div>
    <div className="right">40 days</div>
  </div>
  <div className="progress-container">
    <progress id="progress" value={120} max={150} />
  </div>
</div>
</>
  )
}

export default Loanstatus