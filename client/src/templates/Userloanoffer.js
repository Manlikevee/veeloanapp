import React from 'react'
import Dashboardlayout from '../components/Dashboard/Dashboardlayout'
import Loanoffer from '../components/Forms/Accountnumform/Loanoffer'
const userloanoffer = ({ pageContext }) => {
  const { myid } = pageContext.loanId;
  return (
    <Dashboardlayout>
<h1>{myid}</h1>

    <Loanoffer loanid={myid}/>


   
    </Dashboardlayout>
  )
}

export default userloanoffer