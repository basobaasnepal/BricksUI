import React from "react";
import { RadioProps } from "../../Interfaces";
import "./index.scss";

const Radio = (props: RadioProps) => {
  if (props.options) {
    return (
      <div
        className={`${
          props.vertical
            ? "radio-options-wrapper-vertical"
            : `${
                props.button
                  ? "radio-button-options-wrapper"
                  : "radio-options-wrapper"
              }`
        }`}
      >
        {props.options.map((object, i) => (
          <div className="radio-label-wrapper" key={i}>
            <div
              className={
                props.disabled
                  ? `${
                      props.button
                        ? "radio bu-radio-wrapper-disabled radio-button-block"
                        : "radio bu-radio-wrapper-disabled"
                    }`
                  : `${props.button ? "radio  radio-button-block" : "radio"}`
              }
              style={{ marginRight: props.radioItemMargin }}
            >
              <input
                type="radio"
                className={props.disabled ? "bu-input-radio-disabled" : ""}
                onChange={props.onChange}
                name={props.name}
                value={object.value}
                id={props.value}
              />
              {props.button ? (
                <>
                  <div
                    className={
                      props.disabled
                        ? "radio-button radio-button-disabled"
                        : "radio-button"
                    }
                  >
                    {object.label}
                  </div>
                </>
              ) : (
                <>
                  <span
                    className={`${
                      props.animation
                        ? "radio-checkmark animation"
                        : "radio-checkmark"
                    } ${props.disabled ? "bu-radio-disabled" : ""}`}
                  ></span>
                </>
              )}
            </div>
            {props.button ? (
              <></>
            ) : (
              <>
                <span
                  className={
                    props.disabled
                      ? "radio-label radio-label-disabled"
                      : `${
                          props.labelClassName
                            ? `${props.labelClassName} radio-label`
                            : "radio-label"
                        }`
                  }
                  style={{ marginLeft: props.labelMargin }}
                >
                  {object.label}
                </span>
              </>
            )}
          </div>
        ))}
      </div>
    );
  }
  if (props.defaultChecker) {
    return (
      <>
        <div
          className={
            props.disabled ? "radio bu-radio-wrapper-disabled" : "radio"
          }
        >
          <input
            type="radio"
            className={props.disabled ? "bu-input-radio-disabled" : ""}
            name={props.name}
            id={props.id}
            value={props.value}
            onChange={props.onChange}
            defaultChecked
          />
          <span
            className={`${
              props.animation ? "radio-checkmark animation" : "radio-checkmark"
            } ${props.disabled ? "bu-radio-disabled" : ""}`}
          ></span>
        </div>
        <span
          className={
            props.disabled
              ? "radio-label radio-label-disabled"
              : `${
                  props.labelClassName
                    ? `${props.labelClassName} radio-label`
                    : "radio-label"
                }`
          }
          style={{ marginLeft: props.labelMargin }}
        >
          {props.label}
        </span>
      </>
    );
  }
  return (
    <>
      <div
        className={props.disabled ? "radio bu-radio-wrapper-disabled" : "radio"}
      >
        <input
          type="radio"
          className={props.disabled ? "bu-input-radio-disabled" : ""}
          name={props.name}
          id={props.id}
          value={props.value}
          onChange={props.onChange}
        />
        <span
          className={`${
            props.animation ? "radio-checkmark animation" : "radio-checkmark"
          } ${props.disabled ? "bu-radio-disabled" : ""}`}
        ></span>
      </div>
      <span
        className={
          props.disabled
            ? "radio-label radio-label-disabled"
            : `${
                props.labelClassName
                  ? `${props.labelClassName} radio-label`
                  : "radio-label"
              }`
        }
        style={{ marginLeft: props.labelMargin }}
      >
        {props.label}
      </span>
    </>
  );
};

export default Radio;
