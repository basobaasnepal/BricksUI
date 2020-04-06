import React, { useState } from "react";
import "../../sass/sourceCode/_types.scss";
import Skeleton from "../../components/skeleton";

const Rows = () => {
  const [displayCode, setDisplayCode] = useState(false as boolean);
  const handleCodeClick = () => {
    if (displayCode) {
      setDisplayCode(false);
    } else setDisplayCode(true);
  };
  return (
    <div className="single-example-unit">
      <div className="display-example extra-margin">
        <div className="example-large align">
          <Skeleton rows={3} />
        </div>
      </div>
      <div className="display-desc">
        <div className="display-desc-title">Rows</div>
        <div className="desc-wrapper">
          Use <code>rows</code> props to set the number of rows excluding header
          and footer.
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

export default Rows;
