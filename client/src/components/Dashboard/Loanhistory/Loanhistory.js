import React, { useState, useEffect } from 'react';
import blank from '../blank.png'
import ButtonComponent from '../ButtonComponent';
import axios from 'axios';
import { Link } from 'gatsby'; // Import Link component
import axiosInstance from '../../../service/axiosinterceptor';
import { differenceInMinutes, differenceInHours, differenceInDays } from 'date-fns';

function getTimeAgo(dateString) {
  const currentDate = new Date();
  const date = new Date(dateString);

  const minutesDiff = differenceInMinutes(currentDate, date);
  const hoursDiff = differenceInHours(currentDate, date);
  const daysDiff = differenceInDays(currentDate, date);

  if (minutesDiff < 60) {
    return `${minutesDiff} minute${minutesDiff !== 1 ? 's' : ''}`;
  } else if (hoursDiff < 24) {
    return `${hoursDiff} hour${hoursDiff !== 1 ? 's' : ''}`;
  } else {
    return `${daysDiff} day${daysDiff !== 1 ? 's' : ''}`;
  }
}


const Loanhistory = ({ openModal , responseData }) => {

  const [activityDataList, setActivityDataList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);




  useEffect(() => {
    setActivityDataList(responseData.myloans);
    setLoading(false);
  });


  return (
    <div>
        <article>
  <div className="loanrequests" id="step2Target" data-aos="fade-down">
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

  <div className="loantablediv" id="step3Target" data-aos="fade-right">
      <div className="mustscroll activityscroll">
        {loading ? (
          <p>Loading...</p>
        ) : (
          <>
            {error ? (
              <div className="empty-data-message">
                <img src={blank} alt="" />
                Error loading data.
              </div>
            ) : (
              <>
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
                            <small>
                            {getTimeAgo(activityData.updated_at)} ago
                            </small>
                          </div>
                        </div>
                      </div>
                      {activityData.status === 'pending confirmation'  ? (
              <Link to={`/Userloanoffer/?loanReference=${activityData.reference}`} className="activityview card-subtitle">Detail</Link>
            ) : activityData.status === 'submitted for review' || activityData.status === 'confirmed' || activityData.status === 'Processing Payment' ? (
              <Link to={`/Loandetail/?loanreferences=${activityData.reference}`} className="activityview card-subtitle"> Detail</Link>
            ) : (
              <Link to={`/Userloanoffer/?loanReference=${activityData.reference}`} className="activityview card-subtitle">Detail</Link>
            )}
                   
                    </div>
                  ))
                ) : (
                  <div className="empty-data-message">
                    <img src={blank} alt="" />
                    You don’t have any pending request
                  </div>
                )}
              </>
            )}
          </>
        )}
      </div>
    </div>

</article>

    </div>
  )
}

export default Loanhistory