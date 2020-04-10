import React, { useState } from "react";
import "../../sass/sourceCode/_types.scss";
import Radio from "../../components/radio";

const Vertical = () => {
  const [displayCode, setDisplayCode] = useState(false as boolean);
  const handleCodeClick = () => {
    if (displayCode) {
      setDisplayCode(false);
    } else setDisplayCode(true);
  };
  const colors = [
    { label: "Blue", value: "blue" },
    { label: "Red", value: "red" },
    { label: "Orange", value: "orange" },
    { label: "Yellow", value: "yellow" },
  ];
  return (
    <div className="single-example-unit">
      <div className="display-example extra-margin">
        <div className="example-large">
          <Radio label="Radio" options={colors} name="colors" vertical />
        </div>
      </div>
      <div className="display-desc">
        <div className="display-desc-title">Vertical</div>
        <div className="desc-wrapper">
          Just set <code>vertical</code> props for vertical group of radio.
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

export default Vertical;
