import React, { useState } from "react";
import "../../sass/sourceCode/_types.scss";
import Spinner from "../../components/spinner";

const Size = () => {
  const [displayCode, setDisplayCode] = useState(false as boolean);
  const handleCodeClick = () => {
    if (displayCode) {
      setDisplayCode(false);
    } else setDisplayCode(true);
  };
  return (
    <div className="single-example-unit">
      <div className="display-example extra-margin">
        <div className="example-large size">
          <Spinner size="small" />
          <Spinner size="default" />
          <Spinner size="large" />
        </div>
      </div>
      <div className="display-desc">
        <div className="display-desc-title">Size</div>
        <div className="desc-wrapper">
          Use <code>size</code> props for sizes of spinner. Bricks UI supports
          three sizes of Spinner. <code>small</code> | <code>default</code> |{" "}
          <code>large</code>
        </div>
      </div>
      <div className="source">
        <span onClick={handleCodeClick}>code</span>
      </div>
      {displayCode ? (
        <>
          <div className="source-code">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
            iusto facere maxime facilis vero fugit ratione rerum eaque, sapiente
            ipsam voluptas velit quod dolores eos, fuga est? Omnis, magni
            ratione?
          </div>
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Size;
