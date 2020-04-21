import React, { useState } from "react";
import "../../sass/sourceCode/_types.scss";
import Breadcrum from "../../components/breadcrum";
import BreadcrumItems from "../../components/breadcrumItems";

const Background = () => {
  const [displayCode, setDisplayCode] = useState(false as boolean);
  const handleCodeClick = () => {
    if (displayCode) {
      setDisplayCode(false);
    } else setDisplayCode(true);
  };
  return (
    <div className="single-example-unit">
      <div className="display-example">
        <div className="example-large">
          <Breadcrum bgColor="#f8f8f8" color="#1890ff">
            <BreadcrumItems>Bricks-UI</BreadcrumItems>
            <BreadcrumItems>
              <a href="/home">Components</a>
            </BreadcrumItems>
            <BreadcrumItems>
              <a href="/home">General</a>
            </BreadcrumItems>
            <BreadcrumItems>Table</BreadcrumItems>
          </Breadcrum>
        </div>
      </div>
      <div className="display-desc">
        <div className="display-desc-title">Background</div>
        <div className="desc-wrapper">
          Give your custom background and color for the breadcrum using{" "}
          <code>bgColor</code> and <code>color</code> props.
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

export default Background;
