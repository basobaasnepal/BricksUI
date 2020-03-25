import React, { useState } from "react";
import "../../sass/sourceCode/_types.scss";
import Pagination from "../../components/pagination";

const TwoNeighbour = () => {
  const [displayCode, setDisplayCode] = useState(false as boolean);
  const handleCodeClick = () => {
    if (displayCode) {
      setDisplayCode(false);
    } else setDisplayCode(true);
  };
  const onPageChanged = () => {};
  return (
    <div className="single-example-unit">
      <div className="display-example extra-margin">
        <div className="example-large align">
          <Pagination
            totalRecords={200}
            pageLimit={10}
            pageNeighbours={2}
            onPageChanged={onPageChanged}
          />
        </div>
      </div>
      <div className="display-desc">
        <div className="display-desc-title">Two Neighbours</div>
        <div className="desc-wrapper">Two neighbours page on both side</div>
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

export default TwoNeighbour;
