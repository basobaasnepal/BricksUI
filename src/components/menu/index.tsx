import React from "react";
import { MenuProps } from "../../Interfaces";
import "./index.scss";

const Menu = (props: MenuProps) => {
  return <ul className="menu-u-list">{props.children}</ul>;
};
export default Menu;
