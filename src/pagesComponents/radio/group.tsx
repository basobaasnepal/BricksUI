import React, { useState } from "react";
import "../../sass/sourceCode/_types.scss";
import Radio from "../../components/radio";

const Group = () => {
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
        <div className="example-large align">
          <Radio label="Radio" options={colors} name="colors" />
        </div>
      </div>
      <div className="display-desc">
        <div className="display-desc-title">Group</div>
        <div className="desc-wrapper">
          Just set an array of object with label and value attribute and pass it
          to <code>options</code> props
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

export default Group;
