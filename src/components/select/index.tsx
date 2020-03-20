import React, { useState } from "react";
import "./index.scss";
import { SelectProps } from "../../Interfaces";
import Option from "../option";
import Input from "../input";
import MultiInput from "../input/selectInput";
import OptionMultipleSelect from "../option/OptionMultipleSelect";
import AutoComplete from "../autoComplete";

const Select = (props: SelectProps) => {
  const [inputLabel, setInputLabel] = useState("" as string);
  const [blockDisplay, setBlockDisplay] = useState(false as boolean);
  const [inputMultiLabel, setInputMultiLabel] = useState([] as Array<string>);
  const [displayPlaceholder, setDisplayPlaceholder] = useState(true as boolean);
  const displayHandler = () => {
    setBlockDisplay(!blockDisplay);
  };
  const closeHandler = (object: string) => {
    const index = inputMultiLabel.indexOf(object);
    inputMultiLabel.splice(index, 1);
    setBlockDisplay(false);
    if (inputMultiLabel.length === 0) {
      setDisplayPlaceholder(true);
    }
  };
  const clickHandler = (item: any) => {
    const label = item.label;
    setInputLabel(label);
    if (!inputMultiLabel.find(input => input === label)) {
      setInputMultiLabel([...inputMultiLabel, label]);
    }
    const event = {
      value: item.value,
      name: props.name
    };
    props.onChange(event);
    setDisplayPlaceholder(false);
  };
  const myOptions = props.options;
  if (props.search) {
    return (
      <div className="select-box-wrapper" onClick={displayHandler}>
        <div className="select-input-icon-wrapper">
          <span className="select-input-wrapper">
            <AutoComplete
              inputMultiLabel={inputMultiLabel}
              displayPlaceholder={displayPlaceholder}
              setDisplayPlaceholder={setDisplayPlaceholder}
              closeHandler={closeHandler}
              size={props.size}
              placeholder={props.placeholder}
              suffix={props.icon}
              onChange={props.onChange}
              suggestions={props.options}
            />
          </span>
        </div>
      </div>
    );
  }
  if (props.multiple) {
    return (
      <div className="select-box-wrapper" onClick={displayHandler}>
        <div className="select-input-icon-wrapper">
          <span className="select-input-wrapper">
            <MultiInput
              suffix={props.icon}
              onChange={props.onChange}
              value={inputMultiLabel}
              displayPlaceholder={displayPlaceholder}
              setDisplayPlaceholder={setDisplayPlaceholder}
              closeHandler={closeHandler}
              size={props.size}
              placeholder={props.placeholder}
              selectClassName={props.selectClassName}
            />
          </span>
        </div>
        <div
          className="select-input-dropdown-input"
          style={blockDisplay ? { display: "block" } : { display: "none" }}
        >
          <div className="select-dropdown-items-wrapper">
            <OptionMultipleSelect
              list={myOptions}
              clickHandler={clickHandler}
              value={inputMultiLabel}
              disappear={props.disapper}
            />
          </div>
        </div>
      </div>
    );
  } else
    return (
      <div className="select-box-wrapper" onClick={displayHandler}>
        <div className="select-input-icon-wrapper">
          <span className="select-input-wrapper">
            <Input
              suffix={props.icon}
              onChange={props.onChange}
              value={inputLabel}
              size={props.size}
              placeholder={props.placeholder}
              inputClassName={props.selectClassName}
            />
          </span>
        </div>
        <div
          className="select-input-dropdown-input"
          style={blockDisplay ? { display: "block" } : { display: "none" }}
        >
          <div className="select-dropdown-items-wrapper">
            <Option
              list={myOptions}
              clickHandler={clickHandler}
              value={inputLabel}
              disappear={props.disapper}
            />
          </div>
        </div>
      </div>
    );
};
export default Select;
