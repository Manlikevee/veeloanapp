import React from "react"
import { Router } from "@reach/router"
import Userprofile from "../privateroute/Userprofile"
import Userdashboard from "../privateroute/Userdashboard"
import PrivateRoute from "../components/PrivateRoute"
import Userlogin from "./Userlogin"

const App = () => (

    <Router>
      <PrivateRoute path="/app/profile" component={Userprofile} />
      <PrivateRoute path="/app/dashboard" component={Userdashboard} />
      <Userlogin path="/app/login" />
    </Router>

)

export default App