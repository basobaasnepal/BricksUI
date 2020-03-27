import React from "react";
import "../../sass/pages/_button.scss";
import MainLayout from "../../layouts/mainLayout";
import Basic from "../../pagesComponents/tables/basic";
import Dynamic from "../../pagesComponents/tables/dynamic";
import SingleAction from "../../pagesComponents/tables/singleAction";
import MultiAction from "../../pagesComponents/tables/multiAction";
import DocTable from "../../pagesComponents/tables/docTable";

const Table = () => {
  return (
    <MainLayout>
      <div className="page-title">Table</div>
      <div className="code-display-area">
        <div className="code-display-when">
          <div className="when-title">When to Use</div>
          <div className="when-desc"></div>
        </div>
        <div className="code-display-example">
          <div className="code-display-title">Examples</div>
          <div className="code-display-example-left">
            <Basic />
            <Dynamic />
            <SingleAction />
            <MultiAction />
          </div>
        </div>
      </div>
      <div className="code-api-area">
        <div className="api-table-wrapper">
          <DocTable />
        </div>
      </div>
    </MainLayout>
  );
};
export default Table;
