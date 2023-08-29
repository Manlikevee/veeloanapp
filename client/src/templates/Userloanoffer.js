import React from 'react'
import Dashboardlayout from '../components/Dashboard/Dashboardlayout'
import Loanoffer from '../components/Forms/Accountnumform/Loanoffer'
const Userloanoffer = ({ pageContext }) => {
  const { myid } = pageContext;
  return (
    <Dashboardlayout>
<h1>{myid}</h1>

    <Loanoffer loanid={myid}/>


   
    </Dashboardlayout>
  )
}

export default Userloanoffer