import React from "react";
import "./index.scss";
import { BreadcrumProps } from "../../Interfaces";

const Breadcrum = (props: BreadcrumProps) => {
  return (
    <div className="breadcrum-wrapper" style={{ background: props.bgColor }}>
      <ul className="breadcrum-list" style={{ color: props.color }}>
        {props.children}
      </ul>
    </div>
  );
};
export default Breadcrum;
