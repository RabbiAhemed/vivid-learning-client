import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Menu from "../components/Menu/Menu";

const Main = () => {
  return (
    <div>
      <Menu></Menu>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;
