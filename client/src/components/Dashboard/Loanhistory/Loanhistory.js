import React from 'react'
import blank from '../blank.png'
import ButtonComponent from '../ButtonComponent';
const activityDataList = [
  {
    logo: 'account_balance_wallet',
    status: 'Status Awaiting Payment ( 224423153 )',
    date: '23-June-2021',
    viewDetails: 'View Details'
  },
  {
    logo: 'account_balance_wallet',
    status: 'Status Awaiting Payment ( 224423153 )',
    date: '23-June-2021',
    viewDetails: 'View Details'
  },

  {
    logo: 'account_balance_wallet',
    status: 'Status Awaiting Payment ( 224423153 )',
    date: '23-June-2021',
    viewDetails: 'View Details'
  },



];

const Loanhistory = ({ openModal }) => {
  return (
    <div>
        <article>
  <div className="loanrequests" id="step2Target">
    <div className="loanrequestheader">
      <div className="loanrequesttitle">
        <h4> Loan Requests </h4>
      </div>
      <div className="loanrequestbutton">
      <ButtonComponent openModal={openModal} />
      </div>
    </div>
    <br />
  </div>
  <p>
    This shows the most recent activities across your crystal finance account.
  </p>
  <br />
  <div className="loantablediv" id="step3Target">
    <div className="mustscroll activityscroll">
      
    
    {activityDataList.length > 0 ? (
    activityDataList.map((activityData, index) => (
      <div className="activitybox" key={index}>
        <div className="activitydemo">
          <div className="activitylogo">
            <div className="svs">
              <span className="material-symbols-outlined">
                {activityData.logo}
              </span>
            </div>
          </div>
          <div className="activitytext">
            <div className="activitytoptext">
              {activityData.status}
            </div>
            <div className="activitybottomtext">
              <small>{activityData.date}</small>
            </div>
          </div>
        </div>
        <div className="activityview card-subtitle">
          {activityData.viewDetails}
        </div>
      </div>
    ))
  ) : (
    <div className="empty-data-message">
      <img src={blank} alt="" />

      you don’t have any pending request</div>
  )}


      
    </div>
  </div>
</article>

    </div>
  )
}

export default Loanhistory