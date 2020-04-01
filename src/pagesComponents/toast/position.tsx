import React, { useState } from "react";
import "../../sass/sourceCode/_types.scss";
import { Button } from "../../components/buttons";
import Toast from "../../components/toast";

const Position = () => {
  const [displayCode, setDisplayCode] = useState(false as boolean);
  const handleCodeClick = () => {
    if (displayCode) {
      setDisplayCode(false);
    } else setDisplayCode(true);
  };
  const [display, setDisplay] = useState(false as boolean);
  const [display2, setDisplay2] = useState(false as boolean);
  const handleDisplayClick = () => {
    setDisplay(true);
  };
  const handleDisplay2Click = () => {
    setDisplay2(true);
  };
  return (
    <div className="single-example-unit">
      <div className="display-example extra-margin">
        <div className="example-large align">
          <Button type="primary" onClick={handleDisplayClick}>
            Top Left
          </Button>
          {display && (
            <Toast
              title="Notification topLeft"
              content="Hello Bricks UI Design !"
              position="topLeft"
            />
          )}
        </div>
        <div className="example-large align">
          <Button type="primary" onClick={handleDisplay2Click}>
            Bottom right
          </Button>
          {display2 && (
            <Toast
              title="Notification topRight"
              content="Hello Bricks UI Design !"
              position="bottomRight"
            />
          )}
        </div>
      </div>
      <div className="display-desc">
        <div className="display-desc-title">Position</div>
        <div className="desc-wrapper">
          Different Position of Notification. Bricks UI supports 4 types of
          position. <code>topLeft</code> | <code>topRight</code>|
          <code>bottomLeft</code> |<code>bottomRight</code>
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

export default Position;
