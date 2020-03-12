import React from "react";
import "./index.scss";
import { Paragraph, Hyperlink } from "../../Interfaces";

export const Text = (props: Paragraph) => {
  return (
    <p
      className={`${props.type} ${props.align} ${props.className}`}
      style={{ color: props.color, fontSize: props.size, fontStyle: props.textstyle, fontWeight: props.weight }}
    >
      {props.children}
    </p>
  );
};

export const Code = (props: Paragraph) => {
  return <p className="code">{props.children}</p>;
};

export const Bold = (props: Paragraph) => {
  return <b>{props.children}</b>;
};

export const Em = (props: Paragraph) => {
  return <em>{props.children}</em>;
};

export const Subtle = (props: Paragraph) => {
  return <p className="subtle">{props.children}</p>;
};

export const Href = (props: Hyperlink) => {
  return <a href={props.url}>{props.children}</a>;
};

export const OL = (props: Paragraph) => {
  return <ul>{props.children}</ul>;
};

export const UL = (props: Paragraph) => {
  return <ul>{props.children}</ul>;
};

export const LI = (props: Paragraph) => {
  return <li>{props.children}</li>;
};
