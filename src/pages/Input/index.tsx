import React from "react";
import "../../sass/pages/_button.scss";
import MainLayout from "../../layouts/mainLayout";
import Basic from "../../pagesComponents/input/basic";
import Sizes from "../../pagesComponents/input/sizes";
import Tabs from "../../pagesComponents/input/tabs";
import SearchBox from "../../pagesComponents/input/search";
import Prefix from "../../pagesComponents/input/prefix";
import Password from "../../pagesComponents/input/password";
import TextArea from "../../pagesComponents/input/textarea";
import Table from "../../pagesComponents/input/table";
import SearchAttribute from "../../pagesComponents/input/searchAttribute";
import SearchTable from "../../pagesComponents/input/searchTable";

const Input = () => {
  return (
    <MainLayout>
      <div className="page-title">Input</div>
      <div className="code-display-area">
        <div className="code-display-when">
          <div className="when-title">When to Use</div>
          <div className="when-desc">
            In Bricks-ui we provide 5 types of button.
            <ul>
              <li>
                Primary button: indicate main action, one primary button at most
                in one section
              </li>
              <li>
                Default button: indicate a series of actions without priority.
              </li>
              <li>Dashed button: used for adding action commonly.</li>
              <li>Warning button: indicate warning</li>
              <li>Success button: indicate success schenario</li>
              <li>danger button: indicate danger schenario</li>
            </ul>
            <p>And 4 other properties additionally.</p>
            <ul>
              <li>
                <code>types</code>:used to determine the size of the button.
              </li>
              <li>
                <code>disabled</code>:when action is not available.
              </li>
              <li>
                <code>block</code>:when we need button to fit on parent width.
              </li>
              <li>
                <code>shapes</code>:used to determine the shape of the button.
              </li>
            </ul>
          </div>
        </div>
        <div className="code-display-example">
          <div className="code-display-title">Examples</div>
          <div className="code-display-example-wrapper">
            <div className="code-display-example-left">
              <Basic />
              <Tabs />
              <Prefix />
              <TextArea />
            </div>
            <div className="code-display-example-right">
              <Sizes />
              <SearchBox />
              <Password />
              <SearchAttribute />
            </div>
          </div>
        </div>
      </div>
      <div className="code-api-area">
        <div className="api-table-wrapper">
          <Table />
          <SearchTable />
        </div>
      </div>
    </MainLayout>
  );
};
export default Input;
