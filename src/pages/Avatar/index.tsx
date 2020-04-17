import React from "react";
import "../../sass/pages/_button.scss";
import MainLayout from "../../layouts/mainLayout";
import Basic from "../../pagesComponents/avatar/basic";
import Types from "../../pagesComponents/avatar/types";
import Badge from "../../pagesComponents/avatar/badge";
import Table from "../../pagesComponents/avatar/table";

const Avatar = () => {
  return (
    <MainLayout>
      <div className="page-title">Avatar</div>
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
              <Badge />
            </div>
            <div className="code-display-example-right">
              <Types />
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
export default Avatar;
