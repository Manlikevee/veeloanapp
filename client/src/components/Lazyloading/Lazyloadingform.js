import React from 'react'

const Lazyloadingform = () => {
  return (
    <div>


      
<div className="container dashcontainer">
  <div className="dashboardform skelenton">
    <div className="loanrequesttitles">
      <h4> Profile Update </h4>
    </div>
    <br />
    <p className="info-text"></p>
    <br />
    <div className="dashboardformflex">
      <div className="dashboardformtitle"></div>
      <div className="updcanc">
        <div className="circle done" /> <div className="lint" />{" "}
        <div className="circle done" /> <div className="lint" />
        <div className="circle" />
      </div>
    </div>
    <div className="dbform">
      <div className="dbcolumn">
        <div className="loginflex ">
          <label htmlFor="">Account Number</label>
          <input
            type="text"
            name="firstname"
            id="id_username"
            placeholder="Enter Your First Name"
          />
        </div>
        <div className="loginflex">
          <label htmlFor="">Account Name</label>
          <input
            type="text"
            name="lastname"
            id="id_username"
            placeholder="Enter Your Last Name"
          />
        </div>
      </div>
      <div className="dbcolumn">
        <div className="loginflex">
          <label htmlFor="">Account Number</label>
          <input
            type="text"
            name="firstname"
            id="id_username"
            placeholder="Enter Your First Name"
          />
        </div>
        <div className="loginflex">
          <label htmlFor="">Account Name</label>
          <input
            type="text"
            name="lastname"
            id="id_username"
            placeholder="Enter Your Last Name"
          />
        </div>
      </div>
      <div className="dbcolumn">
        <div className="loanrequestbutton">
          <button>Submit</button>
        </div>
      </div>
    </div>
  </div>
</div>


    </div>
  )
}

export default Lazyloadingform