import React from "react";
import "./index.scss";
import { SpinnerProps } from "../../Interfaces";

const Spinner = (props: SpinnerProps) => {
  return (
    <div
      className={`spinner-wrapper spinner-wrapper-${
        props.size ? props.size : "default"
      } ${
        props.container
          ? `spinner-content-${props.size ? props.size : "default"}`
          : ""
      }`}
    >
      <div
        className={`spinner spinner-${props.size ? props.size : "default"}`}
      ></div>
      {props.text ? (
        <>
          <div className="spiner-text">Loading...</div>
        </>
      ) : (
        <></>
      )}
    </div>
  );
};
export default Spinner;
