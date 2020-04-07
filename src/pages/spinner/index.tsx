import React from "react";
import "../../sass/pages/_button.scss";
import Table from "../../pagesComponents/buttons/table";
import MainLayout from "../../layouts/mainLayout";
import Basic from "../../pagesComponents/spinner/basic";
import Size from "../../pagesComponents/spinner/size";
import Text from "../../pagesComponents/spinner/text";
import Container from "../../pagesComponents/spinner/container";

const Spinner = () => {
  return (
    <MainLayout>
      <div className="page-title">Spinner</div>
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
              <Text />
            </div>
            <div className="code-display-example-right">
              <Size />
              <Container />
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
export default Spinner;
