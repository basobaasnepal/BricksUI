import React, { useState } from "react";
import "./index.scss";
import { InputProps } from "../../Interfaces";
import { eye, eyeOff } from "ionicons/icons";
import { IonIcon } from "@ionic/react";

const Input = (props: InputProps) => {
  const [inputType, setInputType] = useState("password" as string);
  const [iconImage, setIconImage] = useState(eyeOff);
  const inputTypeHandler = () => {
    if (inputType === "text") {
      setInputType("password");
      setIconImage(eyeOff);
    } else {
      setInputType("text");
      setIconImage(eye);
    }
  };
  if (props.disabled) {
    return (
      <div
        className={`input-${props.size ? props.size : "default"} input-wrapper`}
      >
        <input
          type="text"
          className="bu-input input-disabled"
          placeholder="eg.rijalbinaya2@gmail.com"
          disabled
        />
      </div>
    );
  }
  if (props.type === "password") {
    return (
      <div
        className={`input-${props.size ? props.size : "default"} input-wrapper`}
      >
        <div className="input-outer push">
          <input
            type={inputType}
            className="bu-input"
            placeholder="eg.rijalbinaya2@gmail.com"
          />
          <span className="search-icon-wrapper eye" onClick={inputTypeHandler}>
            <IonIcon icon={iconImage} />
          </span>
        </div>
      </div>
    );
  }
  if (props.prefix || props.suffix || props.preTab || props.postTab) {
    return (
      <div
        className={`input-${props.size ? props.size : "default"} input-wrapper`}
      >
        {props.preTab || props.postTab ? (
          <>
            <div className="input-tab-outer">
              {props.preTab ? (
                <>
                  <span className="input-tab-wrapper-left">
                    <span className="input-tab-left">
                      <span>{props.preTab}</span>
                    </span>
                  </span>
                </>
              ) : (
                <></>
              )}

              <span className="input-outer-tab">
                <span className="icon-wrapper">{props.prefix}</span>
                <input
                  type="text"
                  className="bordered"
                  placeholder="eg.rijalbinaya2@gmail.com"
                />
                <span className="icon-wrapper">{props.suffix}</span>
              </span>

              {props.postTab ? (
                <>
                  <span className="input-tab-wrapper-right">
                    <span className="input-tab-right">
                      <span>{props.postTab}</span>
                    </span>
                  </span>
                </>
              ) : (
                <></>
              )}
            </div>
          </>
        ) : (
          <>
            <div className="input-outer">
              <span className="icon-wrapper">
                <span>{props.prefix}</span>
              </span>
              <input
                type="text"
                className="bu-input"
                placeholder="eg.rijalbinaya2@gmail.com"
              />
              <span className="icon-wrapper">{props.suffix}</span>
            </div>
          </>
        )}
      </div>
    );
  }
  if (props.preTab || props.postTab) {
    return (
      <div
        className={`input-${props.size ? props.size : "default"} input-wrapper`}
      >
        <div className="input-tab-wrapper">
          <span className={`${props.preTab ? "input-tab-left" : ""}`}>
            <span>{props.preTab}</span>
          </span>
          <input
            type="text"
            className="bu-input"
            placeholder="eg.rijalbinaya2@gmail.com"
          />
          <span className={`${props.postTab ? "input-tab-right" : ""}`}>
            <span>{props.postTab}</span>
          </span>
        </div>
      </div>
    );
  } else {
    return (
      <div
        className={`input-${props.size ? props.size : "default"} input-wrapper`}
      >
        <input
          type="text"
          className="bu-input"
          placeholder="eg.rijalbinaya2@gmail.com"
        />
      </div>
    );
  }
};
export default Input;
