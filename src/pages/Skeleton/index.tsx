import React from "react";
import "../../sass/pages/_button.scss";
import MainLayout from "../../layouts/mainLayout";
import Basic from "../../pagesComponents/Skeleton/basic";
import Rows from "../../pagesComponents/Skeleton/rows";
import Avatar from "../../pagesComponents/Skeleton/avatar";
import Active from "../../pagesComponents/Skeleton/active";
import Complete from "../../pagesComponents/Skeleton/complete";
const Skeleton = () => {
  return (
    <MainLayout>
      <div className="page-title">Skeleton</div>
      <div className="code-display-area">
        <div className="code-display-when">
          <div className="when-title">When to Use</div>
          <div className="when-desc"></div>
        </div>
        <div className="code-display-example">
          <div className="code-display-title">Examples</div>
          <div className="code-display-example-left">
            <Basic />
            <Rows />
            <Avatar />
            <Active />
            <Complete />
          </div>
        </div>
      </div>
      <div className="code-api-area">
        <div className="api-table-wrapper"></div>
      </div>
    </MainLayout>
  );
};
export default Skeleton;
