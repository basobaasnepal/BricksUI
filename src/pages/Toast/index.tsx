import React from "react";
import "../../sass/pages/_button.scss";
import MainLayout from "../../layouts/mainLayout";
import Basic from "../../pagesComponents/toast/basic";
import Position from "../../pagesComponents/toast/position";
import Icon from "../../pagesComponents/toast/icon";
import Btn from "../../pagesComponents/toast/btn";

const Toast = () => {
  return (
    <MainLayout>
      <div className="page-title">Toast</div>
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
              <Icon />
            </div>
            <div className="code-display-example-right">
              <Position />
              <Btn />
            </div>
          </div>
        </div>
      </div>
      <div className="code-api-area">
        <div className="api-table-wrapper"></div>
      </div>
    </MainLayout>
  );
};
export default Toast;
