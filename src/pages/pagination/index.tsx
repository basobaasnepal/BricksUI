import React from "react";
import "../../sass/pages/_button.scss";
import MainLayout from "../../layouts/mainLayout";
import Basic from "../../pagesComponents/pagination/basic";
import TwoNeighbour from "../../pagesComponents/pagination/twoNeighbour";
import OneNeighbour from "../../pagesComponents/pagination/oneNeighbour";

const Pagination = () => {
  return (
    <MainLayout>
      <div className="page-title">Pagination</div>
      <div className="code-display-area">
        <div className="code-display-when">
          <div className="when-title">When to Use</div>
          <div className="when-desc"></div>
        </div>
        <div className="code-display-example">
          <div className="code-display-title">Examples</div>
          <div className="code-display-example-left">
            <Basic />
            <OneNeighbour />
            <TwoNeighbour />
          </div>
        </div>
      </div>
      <div className="code-api-area">
        <div className="api-table-wrapper"></div>
      </div>
    </MainLayout>
  );
};
export default Pagination;
