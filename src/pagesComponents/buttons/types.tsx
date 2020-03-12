import React, { useState } from "react";
import { Button } from "../../components/buttons/index";
import "../../sass/sourceCode/_types.scss";

const Types = () => {
  const [displayCode, setDisplayCode] = useState(false as boolean);
  const handleCodeClick = () => {
    if (displayCode) {
      setDisplayCode(false);
    } else setDisplayCode(true);
  };
  return (
    <div className="single-example-unit">
      <div className="display-example ">
        <Button type="primary" shape="round">
          Primary
        </Button>
        <Button type="danger" shape="round">
          Danger
        </Button>
        <Button type="warning" shape="round">
          Warning
        </Button>
        <Button type="success" shape="round">
          Success
        </Button>
        <Button type="dashed" shape="round">
          Dashed
        </Button>
        <Button type="default" shape="round">
          Default
        </Button>
      </div>
      <div className="display-desc">
        <div className="display-desc-title">Type</div>
        <div className="desc-wrapper">
          There are <code>primary</code> button, <code>default</code> button,
          <code> success</code> button, <code>warning</code> button in bricks
          UI.
        </div>
      </div>
      <div className="source">
        <span onClick={handleCodeClick}>code</span>
      </div>
      {displayCode ? (
        <>
          <div className="source-code"></div>
        </>
      ) : (
        <></>
      )}
    </div>
  );
};
export default Types;
