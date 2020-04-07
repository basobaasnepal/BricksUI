import React, { useState } from "react";
import "../../sass/sourceCode/_types.scss";
import Checkbox from "../../components/checkbox";

const Options = () => {
  const [displayCode, setDisplayCode] = useState(false as boolean);
  const handleCodeClick = () => {
    if (displayCode) {
      setDisplayCode(false);
    } else setDisplayCode(true);
  };
  const fruits = [
    { value: "apple", label: "Apple" },
    { value: "mango", label: "Mango" },
    { value: "orange", label: "Orange" },
    { value: "pineapple", label: "Pineapple" },
  ];
  return (
    <div className="single-example-unit">
      <div className="display-example extra-margin">
        <div className="example-large align">
          <Checkbox options={fruits} />
        </div>
      </div>
      <div className="display-desc">
        <div className="display-desc-title">Disabled</div>
        <div className="desc-wrapper">The disabled checkbox</div>
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

export default Options;
