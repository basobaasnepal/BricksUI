import React, { useState } from "react";
import { Button } from "../../components/buttons/index";
import "../../sass/sourceCode/_types.scss";

const Block = () => {
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
            Primary
          </Button>
          <Button type="primary" shape="round" block>
            Primary Block
          </Button>
        </div>
        <div className="example-medium align">
          <Button type="dashed" shape="round">
            Dashed
          </Button>
          <Button type="dashed" shape="round" block>
            Dashed Block
          </Button>
        </div>
      </div>
      <div className="display-desc">
        <div className="display-desc-title">Block</div>
        <div className="desc-wrapper">
          To make a button fit to its parent width, add <code>block</code>{" "}
          property to the <code>Button</code>
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

export default Block;
