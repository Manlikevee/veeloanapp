import React from 'react'


const Loanplandetail = ({responsed}) => {
  return (
    <div>
<>
<br />

{responsed.status === 'pending confirmation' ? (
 <div className="pendingtalk">
 <i className="fa-solid fa-circle-exclamation fa-beat" /> The status of this loan application is currently pending. We are pleased to inform you that you have received a loan offer from us. Before we can proceed further, we kindly request you to review the loan offer letter carefully. If you find the terms and conditions acceptable, please follow the instructions provided in the offer letter to formally accept the loan offer. Our team is dedicated to ensuring a seamless experience for you. If you have any questions or need assistance, please do not hesitate to contact us. Thank you for considering our finance application.

</div>

            ) : responsed.status === 'submitted for review' ? (
              <div className="pendingtalk">
              <i className="fa-solid fa-circle-exclamation fa-beat" /> Your loan application is currently under review. Our team is carefully evaluating the details you provided to ensure the best possible decision. We appreciate your patience during this process. Rest assured, we are actively working on it and will inform you as soon as a decision is reached. Thank you for choosing our finance application and for your understanding.

            </div>
            ) : 
            responsed.status === 'declined' ? (
              <div className="pendingtalk warning">
              <i className="fa-solid fa-circle-exclamation fa-beat" /> We regret to inform you that your loan application has been declined. Our team has carefully reviewed your application, and unfortunately, we are unable to proceed with the approval at this time. We understand this may be disappointing, and we're here to help if you have any questions or concerns. Thank you for considering our finance application.


            </div>
            ) :

            responsed.status === 'Processing Payment' ? (
              <div className="pendingtalk green">
              <i className="fa-solid fa-circle-exclamation fa-beat" /> 
              Your loan application is currently being processed for payment. Our team is working diligently to finalize the necessary steps and ensure a successful payment transfer. We understand the importance of a timely process and are committed to ensuring your transaction is handled smoothly. We appreciate your patience during this phase. Rest assured, we are actively monitoring the progress and will notify you as soon as the payment is successfully processed. Thank you for choosing our finance application and for your understanding.
            </div>
            ) :
            responsed.status === 'cancelled' ? (
              <div className="pendingtalk warning">
              <i className="fa-solid fa-circle-exclamation fa-beat" /> We acknowledge your decision to decline the loan offer that was extended to you. We understand that financial decisions are personal, and we respect your choice. If you have any questions or require further assistance, please do not hesitate to reach out to us. Our team is here to provide support and address any concerns you may have. We appreciate your interest in our finance application and thank you for considering our services.


            </div>
            ) : 

            responsed.status === 'overdue' ? (
              <div className="pendingtalk warning">
              <i className="fa-solid fa-circle-exclamation fa-beat" /> 
              We would like to bring to your attention that your loan payment is currently overdue. Timely payments are crucial to maintaining a smooth financial journey. We understand that unforeseen circumstances can arise, so if you're facing challenges in meeting your payment, please reach out to us as soon as possible. Our team is here to explore possible solutions and provide guidance. It's our priority to work together towards resolving this situation and ensuring your financial stability. We value your partnership and appreciate your prompt attention to this matter.



            </div>
            ) : 
            
            (
          <div>
           
          </div>
            )}




  <div className="usersname">
    <h4> {responsed.plan.Loan_name} </h4>
  </div>
  <div className="plandetail">
  {responsed.plan.Loan_description}
  </div>
  <br />
</>


    </div>
  )
}

export default Loanplandetail