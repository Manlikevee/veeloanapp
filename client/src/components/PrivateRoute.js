import React, { useEffect } from "react";
import { navigate } from "gatsby";
import { handleLogin, isLoggedIn } from "../service/auth";

const PrivateRoute = ({ component: Component, location, ...rest }) => {
  useEffect(() => {
    if (!isLoggedIn() && location.pathname !== `/app/login`) {
      navigate("/app/login", {
        state: { from: location.href } // Pass the current location to the login page
      });
    }
  }, [location]);

  if (isLoggedIn() || location.pathname === `/app/login`) {
    return <Component {...rest} />;
  }

  return null;
};

export default PrivateRoute;
