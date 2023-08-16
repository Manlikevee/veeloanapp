import React from 'react'
import Dashboardlayout from '../components/Dashboard/Dashboardlayout'
import Loanplandetail from '../components/Dashboard/Loanexpand/Loanplandetail/Loanplandetail';
import Loanstatus from '../components/Dashboard/Loanexpand/Loanstatus/Loanstatus';




const Loandetail = () => {
  return (
    <Dashboardlayout>
  <Loanplandetail/>

  <Loanstatus/>

    </Dashboardlayout>
  )
}

export default Loandetail