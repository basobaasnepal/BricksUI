import React from "react";
import "../select/index.scss";
import { OptionProps } from "../../Interfaces";

const Option = (props: OptionProps) => {
  const { clickHandler } = props;
  if (props.disappear) {
    return (
      <>
        {props.list.map((object, i) => (
          <div
            className={`${
              props.value === object.label ? "disappear" : ""
            } select-dropdown-item`}
            onClick={() => clickHandler(object)}
            key={i}
          >
            {object.label}
          </div>
        ))}
      </>
    );
  }
  return (
    <>
      {props.list.map((object, i) => (
        <div
          className={`${
            props.value === object.label ? "active" : ""
          } select-dropdown-item`}
          onClick={() => clickHandler(object)}
          key={i}
        >
          {object.label}
        </div>
      ))}
    </>
  );
};
export default Option;
