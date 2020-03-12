import React from "react";
import Placement from "../../pagesComponents/tooltips/placement";
import Basic from "../../pagesComponents/tooltips/basic";
import MainLayout from "../../layouts/mainLayout";
import Table from "../../pagesComponents/tooltips/table";

const Tooltips = () => {
  return (
    <MainLayout>
      <div className="page-title">Tooltip</div>
      <div className="code-display-area">
        <div className="code-display-when">
          <div className="when-title">When to Use</div>
          <div className="when-desc">
            In Bricks-ui we provide two properties of Tooltip.
            <ul>
              <li>Placement: indicates the position of the tooltip.</li>
              <li>Text: text to be shown as the tooltip content.</li>
            </ul>
            <p className="when-desc-height">
              {" "}
              12 types of <code>placement</code> are: <code>top</code> |{" "}
              <code>topRight</code> | <code>topLeft</code> |<code>left</code> |{" "}
              <code>leftTop</code> | <code>leftBottom</code> |<code>right</code>{" "}
              | <code>rightTop</code> | <code>rightBottom</code> |
              <code>bottom</code> | <code>bottomRight</code> |{" "}
              <code>bottomLeft</code>
            </p>
            <p className="when-desc-height">
              <code>Text</code> property provides text for the content of
              tooltip. It takes string as the input{" "}
            </p>
          </div>
        </div>
        <div className="code-display-example">
          <div className="code-display-title">Examples</div>
          <div className="code-display-example-wrapper">
            <div className="code-display-example-left">
              <Basic />
            </div>
            <div className="code-display-example-right">
              <Placement />
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

export default Tooltips;
