import React from 'react'
import pics from '../Accountnumform/pic.svg'
import axiosInstance from '../../../service/axiosinterceptor';
import { toast } from 'react-toastify';
import accounting from 'accounting';
import { navigate } from 'gatsby';


const Loanoffer = (props) => {



const re = props.refss

  const handlePostRequest = async () => {
    try {
      if (props.refss) {
        const response = await axiosInstance.post('/UserCreateLoanaccept', {
          reference: props.refss,
        });

        // Handle the response as needed
        toast.success('This Loan In Now Being Processed');
        
        
        console.log('POST request successful', response);

        navigate(`/Loandetail/?loanreferences=${re}`);
      } else {
        toast.error('Value to be sent is missing.');
      }
    } catch (error) {
      // Handle errors
      
      console.error('POST request error', error);
      if (error.response && error.response.data && error.response.data.error) {
        toast.error(error.response.data.error);
      } else {
        toast.error('An error occurred while sending the request.');
      }
    }
  };

  const handlePostrejectRequest = async () => {
    try {
      if (props.refss) {
        const response = await axiosInstance.post('/UserCreateLoandecline', {
          reference: props.refss,
        });

        // Handle the response as needed
        toast.success('This Loan Offer Has Been Declined');
        navigate(`/app/dashboard'`);
        console.log('POST request successful', response);
      } else {
        toast.error('Value to be sent is missing.');
      }
    } catch (error) {
      // Handle errors
      
      console.error('POST request error', error);
      if (error.response && error.response.data && error.response.data.error) {
        toast.error(error.response.data.error);
      } else {
        toast.error('An error occurred while sending the request.');
      }
    }
  };

  return (
    <div>

        <div className="dashboardform">
  <div className="loanrequesttitles">
    <div className="steppercontainer">
      <div className="stepper">
        <div className="numb">1</div>
        <div className="title">Loan Request</div>
      </div>
      <div className="stepper ends">
        <div className="numb">2</div>
        <div className="title">Loan Overview</div>
      </div>
    </div>
  </div>
  <br />
  <div className="investment_product_type">
    <div className="investment_product_type_text">
      Product Type:{" "}
      <span className="investment_product_span">{props.responsed.plan.Loan_name}</span>{" "}
    </div>
  </div>
  <div className="investment_text">
  {props.responsed.plan.Loan_description} Loan_rate
  </div>
  <div className="tansaction_details">
    <div className="transaction_container">
      <div className="transaction_header">Transaction Details</div>
      <div className="transaction_flex" id="principal">
        <div className="transaction_flex_column">Principal</div>
        <div className="transaction_flex_column_content"> {accounting.formatMoney(props.responsed.principal, '$', 2)} </div>
      </div>
      <div className="transaction_flex">
        <div className="transaction_flex_column" id="tenor">
          Tenor
        </div>
        <div className="transaction_flex_column_content">{accounting.formatMoney(props.responsed.tenor, '', 0)} Months</div>
      </div>
      <div className="transaction_flex">
        <div className="transaction_flex_column">Interest ({props.responsed.plan.Loan_rate} %)</div>
        <div className="transaction_flex_column_content">{accounting.formatMoney(props.responsed.total_interest, '$', 2)} </div>
      </div>
      <div className="transaction_flex">
        <div className="transaction_flex_column">Maturity Amount </div>
        <div className="transaction_flex_column_content">N {accounting.formatMoney(props.responsed.total_repayment, '$', 2)} </div>
      </div>
      <div className="transaction_flex_btn" id="acceptordeny">
        <div className="transaction_flex_column_btn1">
          <button onClick={handlePostRequest}>I agree</button>
        </div>
        <div className="transaction_flex_column_btn2">
          <button onClick={handlePostrejectRequest}>I don’t agree</button>
        </div>
      </div>
    </div>
    <div
      className="transaction_container"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      {/* <span class="stamp is-approved">Approveds</span> */}

      <img src={pics} 
            style={{
                width: "100%",
                height: "100%",
                justifyContent: "center"
              }}/>

    </div>
  </div>
</div>

    </div>
  )
}

export default Loanoffer