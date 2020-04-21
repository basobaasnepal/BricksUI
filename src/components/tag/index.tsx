import React, { useState } from "react";
import "./index.scss";
import { IonIcon } from "@ionic/react";
import { closeOutline } from "ionicons/icons";
import { TagProps } from "../../Interfaces";

const Tag = (props: TagProps) => {
  const [display, setDisplay] = useState(true as boolean);
  const onClick = () => {
    setDisplay(false);
    if (props.onClose) {
      props.onClose();
    }
  };
  return (
    <>
      {display ? (
        <>
          <div
            className={`bu-tag-wrapper bu-status-${
              props.type ? props.type : "default"
            }`}
            style={{
              backgroundColor: props.bgColor,
              borderColor: props.borderColor,
            }}
          >
            <div className="bu-tag-item-wrapper">
              {props.icon ? (
                <>
                  <div className="bu-tag-icon">{props.icon}</div>
                </>
              ) : (
                <></>
              )}
              <div className="bu-tag-text" style={{ color: props.color }}>
                {props.children}
              </div>
              {props.closeable ? (
                <>
                  <IonIcon
                    icon={closeOutline}
                    onClick={onClick}
                    style={{ color: props.color }}
                  />
                </>
              ) : (
                <></>
              )}
            </div>
          </div>
        </>
      ) : (
        <></>
      )}
    </>
  );
};
export default Tag;
