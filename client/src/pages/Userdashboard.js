import React from 'react'
import Dashboarddata from '../components/Dashboard/Dashboarddata/Dashboarddata'
import Dashboardlayout from '../components/Dashboard/Dashboardlayout'
import Loanhistory from '../components/Dashboard/Loanhistory/Loanhistory';


function Userdashboard() {
  return (
    <Dashboardlayout>
   
   <Dashboarddata />
   <br />

<Loanhistory/>

    
    
    </Dashboardlayout>
  )
}

export default Userdashboard