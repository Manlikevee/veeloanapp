import React from "react";
import LoggedUserLogger from "./src/service/LoggedUserLogger"; // Adjust the import path

export const wrapRootElement = ({ element }) => {
  return <LoggedUserLogger>{element}</LoggedUserLogger>;
};
