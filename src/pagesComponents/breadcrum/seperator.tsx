import React, { useState } from "react";
import "../../sass/sourceCode/_types.scss";
import Breadcrum from "../../components/breadcrum";
import BreadcrumItems from "../../components/breadcrumItems";

const Seperator = () => {
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
          <Breadcrum>
            <BreadcrumItems seperator=">">Bricks-UI</BreadcrumItems>
            <BreadcrumItems seperator=">">
              <a href="/home">Components</a>
            </BreadcrumItems>
            <BreadcrumItems seperator=">">
              <a href="/home">General</a>
            </BreadcrumItems>
            <BreadcrumItems>Table</BreadcrumItems>
          </Breadcrum>
        </div>
      </div>
      <div className="display-desc">
        <div className="display-desc-title">Seperator</div>
        <div className="desc-wrapper">
          Give custom seperator for the breadcrum using <code>seperator</code>{" "}
          props.
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

export default Seperator;
