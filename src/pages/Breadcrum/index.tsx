import React from "react";
import "../../sass/pages/_button.scss";
import MainLayout from "../../layouts/mainLayout";
import Basic from "../../pagesComponents/breadcrum/basic";
import Icon from "../../pagesComponents/breadcrum/icon";
import DropDown from "../../pagesComponents/breadcrum/dropdown";
import Background from "../../pagesComponents/breadcrum/background";
import Seperator from "../../pagesComponents/breadcrum/seperator";
import BreadcrumTable from "../../pagesComponents/breadcrum/breadcrumTable";
import BreadcrumItemTable from "../../pagesComponents/breadcrum/breadcrumItemTable";

const Breadcrum = () => {
  return (
    <MainLayout>
      <div className="page-title">Breadcrum</div>
      <div className="code-display-area">
        <div className="code-display-when">
          <div className="when-title">When to Use</div>
          <div className="when-desc"></div>
        </div>
        <div className="code-display-example">
          <div className="code-display-title">Examples</div>
          <div className="code-display-example-wrapper">
            <div className="code-display-example-left">
              <Basic />
              <Background />
            </div>
            <div className="code-display-example-right">
              <Icon />
              <DropDown />
              <Seperator />
            </div>
          </div>
        </div>
      </div>
      <div className="code-api-area">
        <div className="api-table-wrapper">
          <BreadcrumTable />
          <BreadcrumItemTable />
        </div>
      </div>
    </MainLayout>
  );
};
export default Breadcrum;
