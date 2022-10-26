import React from "react";
import { Outlet } from "react-router-dom";
import Menu from "../components/Menu/Menu";
import NavBar from "../components/NavBar/NavBar";

const Main = () => {
  return (
    <div>
      {/* <NavBar></NavBar> */}
      <Menu></Menu>
      <Outlet></Outlet>
    </div>
  );
};

export default Main;
