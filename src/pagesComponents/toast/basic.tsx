import React, { useState } from "react";
import "../../sass/sourceCode/_types.scss";
import { Button } from "../../components/buttons";
import Toast from "../../components/toast";

const Basic = () => {
  const [displayCode, setDisplayCode] = useState(false as boolean);
  const handleCodeClick = () => {
    if (displayCode) {
      setDisplayCode(false);
    } else setDisplayCode(true);
  };
  const [display, setDisplay] = useState(false as boolean);
  const handleClick = () => {
    setDisplay(true);
  };
  return (
    <div className="single-example-unit">
      <div className="display-example extra-margin">
        <div className="example-large align">
          <Button type="primary" onClick={handleClick}>
            Open the notification box
          </Button>
          {display && (
            <Toast
              title="Notification Title"
              content="I will never close automatically. This is a purposely very very long description that has many many characters and words."
            />
          )}
        </div>
      </div>
      <div className="display-desc">
        <div className="display-desc-title">Basic</div>
        <div className="desc-wrapper">The most basic Notification Box.</div>
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
