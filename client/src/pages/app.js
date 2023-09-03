import React from "react"
import { Router } from "@reach/router"
import Userprofile from "../privateroute/Userprofile"
import Userdashboard from "../privateroute/Userdashboard"
import PrivateRoute from "../components/PrivateRoute"
import Loan from "../privateroute/Loan"
import Userlogin from "./Userlogin"

const App = () => (

    <Router>
      <PrivateRoute path="/app/profile" component={Userprofile} />
      <PrivateRoute path="/app/dashboard" component={Userdashboard} />
      <PrivateRoute path="/app/Userloans" component={Loan} />
      <Userlogin path="/app/login" />
    </Router>

)

export default App