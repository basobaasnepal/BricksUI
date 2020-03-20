import React from "react";
import { SelectInput } from "../../Interfaces";
import { closeOutline } from "ionicons/icons";
import { IonIcon } from "@ionic/react";

const MultiInput = (props: SelectInput) => {
  const multiValue = props.value;
  if (props.search) {
    return (
      <div
        className={`input-${
          props.size ? props.size : "default"
        } input-wrapper multi`}
      >
        <div
          className={`${
            props.selectClassName ? props.selectClassName : ""
          } input-outer`}
        >
          <span className="icon-wrapper multi-icon-wrapper">
            {multiValue.map((object: any, i: any) => (
              <span className="multiple-input-items" key={i}>
                <span>{object}</span>
                {props.closeHandler ? (
                  <>
                    <span onClick={() => props.closeHandler(object)}>
                      <IonIcon icon={closeOutline} />
                    </span>
                  </>
                ) : (
                  <></>
                )}
              </span>
            ))}
          </span>
          {props.displayPlaceholder ? (
            <>
              <input
                type="text"
                className="bu-input"
                placeholder={props.placeholder}
                onChange={props.onChange}
              />
            </>
          ) : (
            <></>
          )}
        </div>
      </div>
    );
  }
  return (
    <div
      className={`input-${
        props.size ? props.size : "default"
      } input-wrapper multi`}
    >
      <div
        className={`${
          props.selectClassName ? props.selectClassName : ""
        } input-outer`}
      >
        <span className="icon-wrapper multi-icon-wrapper">
          {multiValue.map((object: any, i: any) => (
            <span className="multiple-input-items" key={i}>
              <span>{object}</span>
              {props.closeHandler ? (
                <>
                  <span onClick={() => props.closeHandler(object)}>
                    <IonIcon icon={closeOutline} />
                  </span>
                </>
              ) : (
                <></>
              )}
            </span>
          ))}
        </span>
        {props.displayPlaceholder ? (
          <>
            <input
              type="text"
              className="bu-input"
              placeholder={props.placeholder}
              onChange={props.onChange}
            />
          </>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};
export default MultiInput;
