import React from 'react'

const Loanstatus = ({ responsed }) => {
  return (
    <>
    <div className="planboxs" data-aos="fade-up">
    <div className="plangrid">
      <div className="planbox">
        <div className="plantitle gridloantitle card-title">Account Number</div>
        <div className="plandetail gridloancontent card-subtitle">{ responsed.reference }</div>
      </div>
    </div>
    <div className="planlines" />
    <div className="plangrid">
      <div className="planbox">
        <div className="plantitle gridloantitle card-title">
          Total Loan Repayment
        </div>
        <div className="plandetail gridloancontent card-subtitle">
        { responsed.total_repayment }
        </div>
      </div>
      <div className="planbox">
        <div className="plantitle gridloantitle card-title">Loan Amount</div>
        <div className="plandetail gridloancontent card-subtitle">
         {responsed.principal}
        </div>
      </div>
      <div className="planbox">
        <div className="plantitle gridloantitle card-title">Interest</div>
        <div className="plandetail gridloancontent card-subtitle">
        {responsed.total_interest}
        </div>
      </div>
      <div className="planbox">
        <div className="plantitle gridloantitle card-title">Tenor</div>
        <div className="plandetail gridloancontent card-subtitle">{responsed.tenor} days</div>
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