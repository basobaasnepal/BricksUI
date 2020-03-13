import React from "react";
import "../input/index.scss";
import { TextAreaProps } from "../../Interfaces";

const TextArea = (props: TextAreaProps) => {
  return (
    <div className="input-wrapper">
      <textarea
        rows={props.row}
        className={`${props.className} text-area`}
        placeholder={props.placeholder}
        cols={props.cols}
      ></textarea>
    </div>
  );
};

export default TextArea;
