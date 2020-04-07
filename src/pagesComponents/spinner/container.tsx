import React, { useState } from "react";
import "../../sass/sourceCode/_types.scss";
import Spinner from "../../components/spinner";

const Container = () => {
  const [displayCode, setDisplayCode] = useState(false as boolean);
  const handleCodeClick = () => {
    if (displayCode) {
      setDisplayCode(false);
    } else setDisplayCode(true);
  };
  return (
    <div className="single-example-unit">
      <div className="display-example extra-margin">
        <div className="example-large container">
          <Spinner container />
        </div>
      </div>
      <div className="display-desc">
        <div className="display-desc-title">Container</div>
        <div className="desc-wrapper">
          The spinner inside the container. Set <code>container</code> props
          true to set the spinner inside the container.
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

export default Container;
