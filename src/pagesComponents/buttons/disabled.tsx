import React, { useState } from "react";
import { Button } from "../../components/buttons/index";
import "../../sass/sourceCode/_types.scss";

const Disabled = () => {
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
          <Button type="warning" shape="round" disabled>
            Primary Disabled
          </Button>
        </div>
        <div className="example-medium align">
          <Button type="dashed" shape="circle">
            Dashed
          </Button>
          <Button type="dashed" shape="circle" disabled>
            Dashed Disabled
          </Button>
        </div>
        <Button type="primary" shape="round" block>
          Primary Block
        </Button>
        <Button disabled shape="round" block>
          Disabled Block
        </Button>
      </div>
      <div className="display-desc">
        <div className="display-desc-title">Disabled</div>
        <div className="desc-wrapper">
          To make a button disabled, add a <code>disabled</code> property to the{" "}
          <code>Button</code>
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

export default Disabled;
