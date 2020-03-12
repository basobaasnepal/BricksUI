import React from "react";
import "./index.scss";
import { TooltipProps } from "../../Interfaces";

const Tooltip = (props: TooltipProps) => {
  return (
    <span className="tool-tip-wrapper">
      {props.children}
      <span className={`${props.placement ? props.placement : ""}`}>
        {props.text}
      </span>
    </span>
  );
};
export default Tooltip;
