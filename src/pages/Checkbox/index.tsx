import React from "react";
import "../../sass/pages/_button.scss";
import MainLayout from "../../layouts/mainLayout";
import Basic from "../../pagesComponents/checkbox/basic";
import Animation from "../../pagesComponents/checkbox/animation";
import DefaultChecked from "../../pagesComponents/checkbox/defaultChecked";
import Disabled from "../../pagesComponents/checkbox/disabled";
import Options from "../../pagesComponents/checkbox/options";
import Table from "../../pagesComponents/checkbox/table";

const Checkbox = () => {
  return (
    <MainLayout>
      <div className="page-title">Checkbox</div>
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
              <DefaultChecked />
              <Options />
            </div>
            <div className="code-display-example-right">
              <Animation />
              <Disabled />
            </div>
          </div>
        </div>
      </div>
      <div className="code-api-area">
        <div className="api-table-wrapper">
          <Table />
        </div>
      </div>
    </MainLayout>
  );
};
export default Checkbox;
