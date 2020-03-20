import React from "react";
import "../select/index.scss";
import { MultipleSelect } from "../../Interfaces";

const OptionMultipleSelect = (props: MultipleSelect) => {
  const { clickHandler } = props;
  if (props.disappear) {
    return (
      <>
        {props.list.map((object, i) => (
          <div
            className={`${
              props.value.find(value => value === object.label)
                ? "disappear"
                : ""
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
            props.value.find(value => value === object.label) ? "active" : ""
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
export default OptionMultipleSelect;
