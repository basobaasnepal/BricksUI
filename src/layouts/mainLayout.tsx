import React from "react";
import Header from "./header";
import { MainLayouts } from "../Interfaces";
import Sidebar from "./sidebar";
import "../sass/layouts/mainLayout.scss"

const MainLayout = (props: MainLayouts) => {
  return (
    <div>
      <Header />
      <div className="page-wrapper">
        <div className="left-sidebar">
          <Sidebar />
        </div>
        <div className="right-sidebar">{props.children}</div>
      </div>
    </div>
  );
};
export default MainLayout;
