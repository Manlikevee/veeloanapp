import React from 'react'
import accounting from 'accounting';
import { format } from 'date-fns';



const Loanstatus = ({ responsed }) => {

  const maturityDate = new Date(responsed.maturity_date);
  const effectiveDate = new Date(responsed.effective_date);
  const formattedMaturityDate = format(maturityDate, 'MMMM d, yyyy');
  const formattedeffectiveDate = format(effectiveDate, 'MMMM d, yyyy');
  const currentDate = new Date()

  const totaldaysgone = currentDate - effectiveDate;
  var totaldaysDifferences = Math.floor(totaldaysgone / (1000 * 60 * 60 * 24));

  const timeDifference = maturityDate - currentDate;
  const daysDifferences = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  var totaldays = daysDifferences
    if (currentDate > maturityDate) {
            var daysDifference = 'Elapsed'
    } else {
    
        var daysDifference = `${daysDifferences} days`
    }

  

  return (
    <>
    <div className="planboxs" data-aos="fade-up">
    <div className="plangrid">
      <div className="planbox">
        <div className="plantitle gridloantitle card-title">Account Number</div>
        <div className="plandetail gridloancontent card-subtitle">{ responsed.reference }</div>
      </div>

      <div className="planbox">
        <div className="plantitle gridloantitle card-title">Status</div>
        <div className="plandetail gridloancontent card-subtitle">{ responsed.status }</div>
      </div>
    </div>
    <div className="planlines" />
    <div className="plangrid">
      <div className="planbox">
        <div className="plantitle gridloantitle card-title">
          Total Loan Repayment
        </div>
        <div className="plandetail gridloancontent card-subtitle">
        {accounting.formatMoney(responsed.total_repayment, '$', 2)}
        </div>
      </div>
      <div className="planbox">
        <div className="plantitle gridloantitle card-title">Loan Amount</div>
        <div className="plandetail gridloancontent card-subtitle">
         {accounting.formatMoney(responsed.principal, '$', 2)}
        </div>
      </div>
      <div className="planbox">
        <div className="plantitle gridloantitle card-title">Interest</div>
        <div className="plandetail gridloancontent card-subtitle">
             {accounting.formatMoney(responsed.principal, '$', 2)}  
        </div>
      </div>
      <div className="planbox">
        <div className="plantitle gridloantitle card-title">Tenor</div>
        <div className="plandetail gridloancontent card-subtitle">{accounting.formatMoney(responsed.tenor, '', 0)} Months</div>
      </div>
      <div className="planbox">
        <div className="plantitle gridloantitle card-title">Effectivate Date</div>
        <div className="plandetail gridloancontent card-subtitle">{formattedeffectiveDate}</div>
      </div>
      <div className="planbox">
        <div className="plantitle gridloantitle card-title">Maturity Date</div>
        <div className="plandetail gridloancontent card-subtitle">{formattedMaturityDate}</div>
      </div>
    </div>
  </div>
  <div className="daysleft" data-aos="fade-right">
  <div className="daysflex">
    <div className="left">Days Left</div>
    <div className="right">{daysDifference}</div>
  </div>
  <div className="progress-container">
    <progress id="progress" value={totaldaysDifferences} max={totaldays} />
  </div>
</div>
</>
  )
}

export default Loanstatus