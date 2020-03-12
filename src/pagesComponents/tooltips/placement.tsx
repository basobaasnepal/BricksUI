import React, { useState } from "react";
import { Button } from "../../components/buttons/index";
import "../../sass/sourceCode/_types.scss";
import Tooltip from "../../components/tooltip";

const Placement = () => {
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
          <Tooltip text="prompt text" placement="topLeft">
            <Button type="default" shape="round">
              TL
            </Button>
          </Tooltip>
          <Tooltip text="prompt text" placement="top">
            <Button type="default" shape="round">
              top
            </Button>
          </Tooltip>
          <Tooltip text="prompt text" placement="topRight">
            <Button type="default" shape="round">
              TR
            </Button>
          </Tooltip>
        </div>
        <div className="example-large align">
          <Tooltip text="prompt text" placement="leftTop">
            <Button type="default" shape="round">
              LT
            </Button>
          </Tooltip>
          <Tooltip text="prompt text" placement="rightTop">
            <Button type="default" shape="round">
              RT
            </Button>
          </Tooltip>
        </div>
        <div className="example-large align">
          <Tooltip text="prompt text" placement="left">
            <Button type="default" shape="round">
              LT
            </Button>
          </Tooltip>
          <Tooltip text="prompt text" placement="right">
            <Button type="default" shape="round">
              Right
            </Button>
          </Tooltip>
        </div>
        <div className="example-large align">
          <Tooltip text="prompt text" placement="leftBottom">
            <Button type="default" shape="round">
              LB
            </Button>
          </Tooltip>
          <Tooltip text="prompt text" placement="rightBottom">
            <Button type="default" shape="round">
              RB
            </Button>
          </Tooltip>
        </div>
        <div className="example-large align">
          <Tooltip text="prompt text" placement="bottomLeft">
            <Button type="default" shape="round">
              BL
            </Button>
          </Tooltip>
          <Tooltip text="prompt text" placement="bottom">
            <Button type="default" shape="round">
              Bottom
            </Button>
          </Tooltip>
          <Tooltip text="prompt text" placement="bottomRight">
            <Button type="default" shape="round">
              BR
            </Button>
          </Tooltip>
        </div>
      </div>
      <div className="display-desc">
        <div className="display-desc-title">Placement</div>
        <div className="desc-wrapper">
          Bricks-Ui provide 12 placements options:
          <code>top</code> | <code>topRight</code> | <code>topLeft</code> |
          <code>left</code> | <code>leftTop</code> | <code>leftBottom</code> |
          <code>right</code> | <code>rightTop</code> | <code>rightBottom</code>{" "}
          |<code>bottom</code> | <code>bottomRight</code> |{" "}
          <code>bottomLeft</code>
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

export default Placement;
