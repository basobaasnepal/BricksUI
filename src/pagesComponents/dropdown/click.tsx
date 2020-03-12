import React, { useState } from "react";
import "../../sass/sourceCode/_types.scss";
import Menu from "../../components/menu";
import MenuItem from "../../components/menuItem";
import Dropdown from "../../components/dropdown";

const Click = () => {
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
        <div className="example-large align">
          <Dropdown overlay={menu} placement="bottom" trigger="click">
            <span className="side-icon">Click me</span>
          </Dropdown>
        </div>
      </div>
      <div className="display-desc">
        <div className="display-desc-title">Tigger mode</div>
        <div className="desc-wrapper">
          The default trigger mode is <code>hover</code>, you can change it to{" "}
          <code>click</code>.
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

export default Click;
