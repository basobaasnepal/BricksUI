import React, { useState } from "react";
import "./index.scss";
import { DropdownProps } from "../../Interfaces";

export const Dropdown = (props: DropdownProps) => {
  const [display, setDisplay] = useState(false as boolean);
  const handleClick = () => {
    setDisplay(!display);
  };
  if (props.trigger === "click") {
    return (
      <div className="dropdown-wrapper" onClick={handleClick}>
        <span>{props.children}</span>
        <div
          className={`${props.overlayClass ? props.overlayClass : ""} dd-${
            props.placement ? props.placement : ""
          } dropdown-content`}
          style={display ? { display: "block" } : {}}
        >
          {props.overlay}
        </div>
      </div>
    );
  } else {
    return (
      <div className="dropdown-wrapper trigger-hover">
        {props.children}
        <div
          className={`${props.overlayClass ? props.overlayClass : ""} dd-${
            props.placement ? props.placement : ""
          } dropdown-content `}
        >
          {props.overlay}
        </div>
      </div>
    );
  }
};
export default Dropdown;
