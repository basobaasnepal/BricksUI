import React from "react";
import MainLayout from "../../layouts/mainLayout";
import Basic from "../../pagesComponents/radio/basic";
import Animation from "../../pagesComponents/radio/animation";
import Group from "../../pagesComponents/radio/group";
import Vertical from "../../pagesComponents/radio/vertical";
import Disabled from "../../pagesComponents/radio/disabled";
import Button from "../../pagesComponents/radio/button";
import Table from "../../pagesComponents/radio/table";

const Radio = () => {
  return (
    <MainLayout>
      <div className="page-title">Radio</div>
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
              <Group />
              <Disabled />
            </div>
            <div className="code-display-example-right">
              <Animation />
              <Vertical />
              <Button />
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

export default Radio;
