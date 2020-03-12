import React from "react";
import { MenuItemsProps } from "../../Interfaces";
import "./index.scss";

const MenuItem = (props: MenuItemsProps) => {
  return (
    <li
      className={`${props.menuClass ? props.menuClass : ""} bu-${
        props.disabled ? "disabled" : ""
      } menu-items`}
    >
      {props.children}
    </li>
  );
};
export default MenuItem;
