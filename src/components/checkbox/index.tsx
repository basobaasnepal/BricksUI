import React from "react";
import "./index.scss";
import { CheckboxProps } from "../../Interfaces";
const Checkbox = (props: CheckboxProps) => {
  if (props.options) {
    return (
      <div className="checkbox-options-wrapper">
        {props.options.map((object, i) => (
          <div className="checkbox-label-wrapper" key={i}>
            <div
              className={
                props.disabled
                  ? "checkbox bu-checkbox-wrapper-disabled"
                  : "checkbox"
              }
            >
              <input
                type="checkbox"
                className={props.disabled ? "bu-input-checkbox-disabled" : ""}
                onChange={props.onChange}
                name={props.name}
                value={object.value}
                id={props.value}
              />
              <span
                className={`${
                  props.animation ? "checkmark animation" : "checkmark"
                } ${props.disabled ? "bu-checkbox-disabled" : ""}`}
              ></span>
            </div>
            <span className="checkbox-label">{object.label}</span>
          </div>
        ))}
      </div>
    );
  }
  if (props.defaultChecker) {
    return (
      <div
        className={
          props.disabled ? "checkbox bu-checkbox-wrapper-disabled" : "checkbox"
        }
      >
        <input
          type="checkbox"
          className={props.disabled ? "bu-input-checkbox-disabled" : ""}
          onChange={props.onChange}
          name={props.name}
          value={props.value}
          id={props.value}
          defaultChecked
        />
        <span
          className={`${
            props.animation ? "checkmark animation" : "checkmark"
          } ${props.disabled ? "bu-checkbox-disabled" : ""}`}
        ></span>
      </div>
    );
  }
  return (
    <div
      className={
        props.disabled ? "checkbox bu-checkbox-wrapper-disabled" : "checkbox"
      }
    >
      <input
        type="checkbox"
        className={props.disabled ? "bu-input-checkbox-disabled" : ""}
        onChange={props.onChange}
        name={props.name}
        value={props.value}
        id={props.value}
      />
      <span
        className={`${props.animation ? "checkmark animation" : "checkmark"} ${
          props.disabled ? "bu-checkbox-disabled" : ""
        }`}
      ></span>
    </div>
  );
};
export default Checkbox;
