import React from "react";
import MainLayout from "../../layouts/mainLayout";
import Basic from "../../pagesComponents/tags/basic";
import Closeable from "../../pagesComponents/tags/closeable";
import Colorful from "../../pagesComponents/tags/colourful";
import Icon from "../../pagesComponents/tags/icon";
import Type from "../../pagesComponents/tags/type";
import Table from "../../pagesComponents/tags/table";

const Tag = () => {
  return (
    <MainLayout>
      <div className="page-title">Tag</div>
      <div className="code-display-area">
        <div className="code-display-when">
          <div className="when-title">When to Use</div>
          <div className="when-desc">
            <p className="when-desc-height"></p>
          </div>
        </div>
        <div className="code-display-example">
          <div className="code-display-title">Examples</div>
          <div className="code-display-example-wrapper">
            <div className="code-display-example-left">
              <Basic />
              <Colorful />
              <Type />
            </div>
            <div className="code-display-example-right">
              <Closeable />
              <Icon />
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

export default Tag;
