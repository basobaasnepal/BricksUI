import React from "react";
import "./index.scss";
import { ButtonProps } from "../../Interfaces";

export const Button = (props: ButtonProps) => {
  if (props.href)
    return (
      <a
        href={props.href}
        className={`${props.type ? props.type : "default"} ${
          props.shape ? props.shape : ""
        } ${props.size ? props.size : ""} ${
          props.className ? props.className : ""
        }btn ${props.disabled ? " disabled" : ""} ${
          props.block ? " block" : ""
        }`}
        style={props.style}
      >
        {props.children}
      </a>
    );
  return (
    <button
      type="button"
      className={`${props.type ? props.type : "default"} ${
        props.shape ? props.shape : ""
      } ${props.size ? props.size : ""} ${
        props.className ? props.className : ""
      } btn ${props.disabled ? " disabled" : ""} ${
        props.block ? " block" : ""
      }`}
      onClick={props.onClick}
      style={props.style}
    >
      {props.children}
    </button>
  );
};
