import React from "react";
import "../../sass/pages/_button.scss";
import MainLayout from "../../layouts/mainLayout";
import Basic from "../../pagesComponents/dropdown/basic";
import Placement from "../../pagesComponents/dropdown/placement";
import Disabled from "../../pagesComponents/dropdown/disabled";
import Click from "../../pagesComponents/dropdown/click";
import Table from "../../pagesComponents/dropdown/table";

const Dropdown = () => {
  return (
    <MainLayout>
      <div className="page-title">Dropdown</div>
      <div className="code-display-area">
        <div className="code-display-when">
          <div className="when-title">When to Use</div>
          <div className="when-desc">
            In Bricks-ui we provide 5 types of placements in dropdown.
            <ul>
              <li>
                <code>placement</code>: indicate the position of the propdown
                items.
              </li>
              <li>
                <code>trigger</code>: indicate the action to display dropdown
                items.
              </li>
              <li>
                <code>overlay</code>: list of dropdown items.
              </li>

              <li>
                <code>overlayClass</code>: manual class for each item in the
                dropdown.
              </li>
              <li>
                <code>disabled</code>: provides disabled item in the dropdown
                menu.
              </li>
            </ul>
            <p>And placement props provides 6 types of positions</p>
            <ul>
              <li>
                <code>topLeft</code> | <code>top</code> | <code>topRight</code>
              </li>
              <li>
                <code>bottomLeft</code> | <code>bottom</code> |{" "}
                <code>bottomRight</code>
              </li>
            </ul>
          </div>
        </div>
        <div className="code-display-example">
          <div className="code-display-title">Examples</div>
          <div className="code-display-example-wrapper">
            <div className="code-display-example-left">
              <Basic />
              <Disabled />
            </div>
            <div className="code-display-example-right">
              <Placement />
              <Click />
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
export default Dropdown;
