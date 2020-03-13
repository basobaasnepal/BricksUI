import React, { useState } from "react";
import "./index.scss";
import { InputProps } from "../../Interfaces";
import { eye, eyeOff } from "ionicons/icons";
import { IonIcon } from "@ionic/react";

const Input = (props: InputProps) => {
  const [inputType, setInputType] = useState(props.type);
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
          className={`${props.className} bu-input input-disabled`}
          placeholder={props.placeholder}
          value={props.value}
          id={props.id}
          defaultValue={props.defaultValue}
          name={props.name}
          onChange={props.onChange}
          minLength={props.minLength}
          maxLength={props.maxLength}
          disabled
        />
      </div>
    );
  }
  switch (props.type) {
    case "password":
      if (props.prefix || props.suffix || props.preTab || props.postTab) {
        return (
          <div
            className={`input-${
              props.size ? props.size : "default"
            } input-wrapper`}
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
                    <>
                      <span className="icon-wrapper">{props.suffix}</span>
                    </>
                  )}

                  <span className="input-outer-tab">
                    <span className="icon-wrapper">{props.prefix}</span>
                    <input
                      type={inputType}
                      className={`${props.className} bordered`}
                      placeholder={props.placeholder}
                      value={props.value}
                      id={props.id}
                      defaultValue={props.defaultValue}
                      name={props.name}
                      onChange={props.onChange}
                      minLength={props.minLength}
                      maxLength={props.maxLength}
                    />
                    {props.visibilityToggle ? (
                      <>
                        <span
                          className="search-icon-wrapper eye"
                          onClick={inputTypeHandler}
                        >
                          <IonIcon icon={iconImage} />
                        </span>
                      </>
                    ) : (
                      <>
                        <span className="icon-wrapper">{props.suffix}</span>
                      </>
                    )}
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
                    type={inputType}
                    className={`${props.className} bu-input`}
                    placeholder={props.placeholder}
                    value={props.value}
                    id={props.id}
                    defaultValue={props.defaultValue}
                    name={props.name}
                    onChange={props.onChange}
                    minLength={props.minLength}
                    maxLength={props.maxLength}
                  />
                  {props.visibilityToggle ? (
                    <>
                      <span
                        className="search-icon-wrapper eye"
                        onClick={inputTypeHandler}
                      >
                        <IonIcon icon={iconImage} />
                      </span>
                    </>
                  ) : (
                    <>
                      <span className="icon-wrapper">{props.suffix}</span>
                    </>
                  )}
                </div>
              </>
            )}
          </div>
        );
      } else {
        return (
          <div
            className={`input-${
              props.size ? props.size : "default"
            } input-wrapper`}
          >
            <div className="input-outer push">
              <input
                type={inputType}
                className="bu-input"
                placeholder={props.placeholder}
                value={props.value}
                id={props.id}
                defaultValue={props.defaultValue}
                name={props.name}
                onChange={props.onChange}
                minLength={props.minLength}
                maxLength={props.maxLength}
              />
              {props.visibilityToggle ? (
                <>
                  <span
                    className="search-icon-wrapper eye"
                    onClick={inputTypeHandler}
                  >
                    <IonIcon icon={iconImage} />
                  </span>
                </>
              ) : (
                <>
                  <span className="icon-wrapper">{props.suffix}</span>
                </>
              )}
            </div>
          </div>
        );
      }
    default:
      if (props.prefix || props.suffix || props.preTab || props.postTab) {
        return (
          <div
            className={`input-${
              props.size ? props.size : "default"
            } input-wrapper`}
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
                      type={inputType}
                      className="bordered"
                      placeholder={props.placeholder}
                      value={props.value}
                      id={props.id}
                      defaultValue={props.defaultValue}
                      name={props.name}
                      onChange={props.onChange}
                      minLength={props.minLength}
                      maxLength={props.maxLength}
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
                    type={inputType}
                    className="bu-input"
                    placeholder={props.placeholder}
                    value={props.value}
                    id={props.id}
                    defaultValue={props.defaultValue}
                    name={props.name}
                    onChange={props.onChange}
                    minLength={props.minLength}
                    maxLength={props.maxLength}
                  />
                  <span className="icon-wrapper">{props.suffix}</span>
                </div>
              </>
            )}
          </div>
        );
      } else {
        return (
          <div
            className={`input-${
              props.size ? props.size : "default"
            } input-wrapper`}
          >
            <input
              type={inputType}
              className="bu-input"
              placeholder={props.placeholder}
              value={props.value}
              id={props.id}
              defaultValue={props.defaultValue}
              name={props.name}
              onChange={props.onChange}
              minLength={props.minLength}
              maxLength={props.maxLength}
            />
          </div>
        );
      }
  }
};
export default Input;
