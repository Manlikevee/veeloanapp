import React from "react"
import { Router } from "@reach/router"
import Userprofile from "../privateroute/Userprofile"
import PrivateRoute from "../components/privateRoute"
import Userlogin from "./Userlogin"

const App = () => (

    <Router>
      <PrivateRoute path="/app/profile" component={Userprofile} />
      <Userlogin path="/app/login" />
    </Router>

)

export default App