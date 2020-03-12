import React, { useState } from "react";
import { Button } from "../../components/buttons/index";
import "../../sass/sourceCode/_types.scss";

const Sizes = () => {
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
          <Button type="primary" shape="round" size="small">
            Small
          </Button>
          <Button type="danger" shape="round" size="small">
            Small
          </Button>
        </div>
        <div className="example-medium align">
          <Button type="primary" shape="round" size="medium">
            Medium
          </Button>
          <Button type="danger" shape="round" size="medium">
            Medium
          </Button>
        </div>
        <div className="example-large align">
          <Button type="primary" shape="round" size="large">
            Large
          </Button>
          <Button type="danger" shape="round" size="large">
            Large
          </Button>
        </div>
      </div>
      <div className="display-desc">
        <div className="display-desc-title">Sizes</div>
        <div className="desc-wrapper">
          There are four sizes for buttons in our Bricks-UI. They are{" "}
          <code>small</code> | <code>medium</code>(default) | <code>large</code>{" "}
          | <code>block</code>
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

export default Sizes;
