import React, { useState } from "react";
import "../../sass/sourceCode/_types.scss";
import Menu from "../../components/menu";
import MenuItem from "../../components/menuItem";
import Dropdown from "../../components/dropdown";
import { Button } from "../../components/buttons";

const Placement = () => {
  const menu = (
    <Menu>
      <MenuItem>
        <a href="https://basobaas.com">1st menu item</a>
      </MenuItem>
      <MenuItem>
        <a href="https://basobaas.com">2nd menu item</a>
      </MenuItem>
      <MenuItem>
        <a href="https://basobaas.com">3rd menu item</a>
      </MenuItem>
    </Menu>
  );
  const [displayCode, setDisplayCode] = useState(false as boolean);
  const handleCodeClick = () => {
    if (displayCode) {
      setDisplayCode(false);
    } else setDisplayCode(true);
  };
  return (
    <div className="single-example-unit">
      <div className="display-example extra-margin">
        <div className="example-large">
          <Dropdown overlay={menu} placement="bottomLeft">
            <Button>bottomLeft</Button>
          </Dropdown>
          <Dropdown overlay={menu} placement="bottom">
            <Button>bottom</Button>
          </Dropdown>
          <Dropdown overlay={menu} placement="bottomRight">
            <Button>bottomRight</Button>
          </Dropdown>
        </div>
        <div className="example-large ">
          <Dropdown overlay={menu} placement="topLeft">
            <Button>topLeft</Button>
          </Dropdown>
          <Dropdown overlay={menu} placement="top">
            <Button>top</Button>
          </Dropdown>
          <Dropdown overlay={menu} placement="topRight">
            <Button>topRight</Button>
          </Dropdown>
        </div>
      </div>
      <div className="display-desc">
        <div className="display-desc-title">Placement</div>
        <div className="desc-wrapper">Support 6 placement</div>
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
