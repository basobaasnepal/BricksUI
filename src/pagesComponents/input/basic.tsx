import React, { useState } from "react";
import "../../sass/sourceCode/_types.scss";
import Input from "../../components/input";

const Basic = () => {
  const [displayCode, setDisplayCode] = useState(false as boolean);
  const handleCodeClick = () => {
    if (displayCode) {
      setDisplayCode(false);
    } else setDisplayCode(true);
  };
  const changeHandler = (event: any) => {
    console.log(event.target.name);
    console.log(event.target.value);
  };
  return (
    <div className="single-example-unit">
      <div className="display-example extra-margin">
        <div className="example-large align">
          <Input name="full_name" placeholder="Basic usage" />
        </div>
      </div>
      <div className="display-desc">
        <div className="display-desc-title">Basic</div>
        <div className="desc-wrapper">The most basic dropdown menu.</div>
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

export default Basic;
