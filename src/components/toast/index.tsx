import React, { useState } from "react";
import { IonIcon } from "@ionic/react";
import { closeOutline } from "ionicons/icons";
import "./index.scss";
import { ToastProps } from "../../Interfaces";

const Toast = (props: ToastProps) => {
  const { title, content, icon, btn, position } = props;
  const [displayToast, setDisplayToast] = useState(true as boolean);
  const closeHandler = () => {
    setDisplayToast(!displayToast);
  };
  return (
    <div
      className={`bu-toast-wrapper bu-toast-${position ? position : "default"}`}
    >
      <div className="bu-toast">
        <div className="bu-toast-top-text">
          {icon ? (
            <>
              <div className="bu-toast-left-icon-wrapper">{icon}</div>
            </>
          ) : (
            <></>
          )}
          <div className="bu-toast-right-wrapper">
            <div className="bu-toast-header">
              <div className="bu-toast-title">{title}</div>
              <div className="bu-toast-close-icon">
                <IonIcon icon={closeOutline} onClick={closeHandler} />
              </div>
            </div>
            <div className="bu-toast-body">
              <div className="bu-toast-content">{content}</div>
            </div>
          </div>
        </div>
        {btn ? (
          <>
            <div className="bu-toast-bottom-button">{btn}</div>
          </>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};
export default Toast;
