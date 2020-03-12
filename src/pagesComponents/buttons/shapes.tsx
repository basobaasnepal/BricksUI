import React, { useState } from "react";
import { Button } from "../../components/buttons/index";
import "../../sass/sourceCode/_types.scss";

const Shapes = () => {
  const [displayCode, setDisplayCode] = useState(false as boolean);
  const handleCodeClick = () => {
    if (displayCode) {
      setDisplayCode(false);
    } else setDisplayCode(true);
  };
  return (
    <div className="single-example-unit">
      <div className="display-example">
        <div className="example-large align">
          <Button type="primary" shape="round">
            Round
          </Button>
          <Button type="success" shape="round">
            Round
          </Button>
        </div>
        <div className="example-medium align">
          <Button type="primary" shape="circle">
            Circle
          </Button>
          <Button type="success" shape="circle">
            Circle
          </Button>
        </div>
        <div className="example-large align">
          <Button type="primary">Default</Button>
          <Button type="success">Default</Button>
        </div>
      </div>
      <div className="display-desc">
        <div className="display-desc-title">Shapes</div>
        <div className="desc-wrapper">
          There are three shapes for buttons in our Bricks-UI. They are{" "}
          <code>round</code> | <code>rectangle</code>(default) |{" "}
          <code>circle</code>
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

export default Shapes;
