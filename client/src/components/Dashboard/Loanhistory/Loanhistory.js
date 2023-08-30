import React, { useState, useEffect } from 'react';
import blank from '../blank.png'
import ButtonComponent from '../ButtonComponent';
import axios from 'axios';



const Loanhistory = ({ openModal }) => {

const [activityDataList, setActivityDataList] = useState([]);

useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await axios.get('https://isslblog.vercel.app/loanhistory/');
      const data = response.data;
      setActivityDataList(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  fetchData();
}, []); 



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
              account_balance_wallet
              </span>
            </div>
          </div>
          <div className="activitytext">
            <div className="activitytoptext">
              {activityData.status}
            </div>
            <div className="activitybottomtext">
              <small>{activityData.reference}</small>
            </div>
          </div>
        </div>
        <div className="activityview card-subtitle">
          Detail
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